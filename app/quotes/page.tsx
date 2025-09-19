import { QuotesApiResponse } from "../../lib/features/quotes/quotesApiSlice";
import { Quotes } from "../components/quotes/Quotes";

async function fetchQuotes(limit: number = 10): Promise<QuotesApiResponse> {
    console.log(`Fetching quotes with limit=${limit}`);
    const response = await fetch(`https://dummyjson.com/quotes?limit=${limit}`);
    // Log the raw response details
    console.log('Raw response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        ok: response.ok,
    });
    if (!response.ok) {
        console.error(`Fetch failed: ${response.status} ${response.statusText}`);
        throw new Error(`Failed to fetch quotes: ${response.statusText}`);
    }
    const rawData = await response.json();
    console.log('Raw JSON data:', rawData);
    return rawData as QuotesApiResponse;
}

export default async function QuotesPage({ searchParams }: { searchParams: { limit?: string } }) {
    const limit = Number(searchParams.limit) || 10;
    let data: QuotesApiResponse | null = null;
    let error: string | null = null;

    try {
        data = await fetchQuotes(limit);
    } catch (err: any) {
        error = err.message || 'Failed to load quotes';
        console.error('Error in QuotesPage:', err);
    }

    return <Quotes data={data} error={error} limit={limit} />;
}
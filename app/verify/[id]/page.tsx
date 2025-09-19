"use client";

import { useParams } from 'next/navigation';
import { decrement, increment } from '@lib/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';

export default function VerifyIdPage() {
    const { id } = useParams(); // Get dynamic 'id' from URL
    const { value: count, status } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h1>Verify Page for Task ID: {id || 'Loading...'}</h1>
            <p>Status: {status}</p>
            <p>Counter: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}
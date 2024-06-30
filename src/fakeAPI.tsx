import { createAsyncThunk } from '@reduxjs/toolkit';
import Book from './interface/BookInterface';

const BASE_URL = 'http://localhost:5000/v1/books';


export const fetchBooks = createAsyncThunk<Book[]>('books/fetchBooks', async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error('Failed to get books');
    }
    return (await res.json()) as Book[];
});

export const addBook = createAsyncThunk<Book, Omit<Book, '_id'>>('books/addBook', async (newBook) => {
    console.log(newBook);
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(newBook),
        });
        if (!response.ok) {
            throw new Error('Failed to add book');
        }
        return (await response.json()) as Book;
});


export const deleteBook = createAsyncThunk<string, string>('books/deleteBook', async (bookId) => {
    const response = await fetch(`${BASE_URL}/${bookId}`, { method: 'DELETE' });
    if (!response.ok) {
        throw new Error('Failed to delete book');
    }
    return bookId;
});
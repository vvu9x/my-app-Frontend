import { createSlice,  PayloadAction } from "@reduxjs/toolkit";
import { fetchBooks, addBook, deleteBook } from '../fakeAPI';
import Book from "../interface/BookInterface";

interface BookState {
    books: Book[];
    loading: boolean;
    error: string | null;
}


const initialState: BookState = {
    books: [],
    loading: false,
    error: null,
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBooks.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
            state.books = action.payload;
            state.loading = false;
        })
        .addCase(fetchBooks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch books';
        })
        .addCase(addBook.fulfilled, (state, action: PayloadAction<Book>) => {
            state.books.push(action.payload);
        })
        .addCase(deleteBook.fulfilled, (state, action: PayloadAction<string>) => {
            state.books = state.books.filter((book) => book._id !== action.payload);
        });
    },
});



export default bookSlice.reducer;

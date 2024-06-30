import React, { useEffect } from "react";
import { useAppDispatch,useAppSelector } from "../redux/hooks";
import { deleteBook, fetchBooks } from "../fakeAPI";
import { RootState } from "../redux/store";
import Book from "../interface/BookInterface";

const BookList:React.FC = () => {
    
    const books:Book[] = useAppSelector((state: RootState) => state.book.books);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    if (books.length === 0) return <div> now-loading! </div>;
    
    return (
        <div>
            <h2>Books</h2>
            <ul>
                {books.map((book) => (
                <li key={book._id}>
                    {book.title} by {book.author}
                    <button onClick={() => dispatch(deleteBook(book._id ))}>
                        Delete
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}
export default BookList;

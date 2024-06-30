import React, { useState,FC,FormEvent } from "react";
import { ErrorInfo } from "react";
import { useAppDispatch } from '../redux/hooks';
import { addBook } from '../fakeAPI';


const AddBook: FC = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useAppDispatch();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (title && author) {
            dispatch(addBook({ title, author })).unwrap()
            .then(() => {
                setTitle('');
                setAuthor('');
            })
            .catch((error:ErrorInfo) => {
                console.error('Failed to add book: ', error);
            });
        }
    };
    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                    required
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddBook;

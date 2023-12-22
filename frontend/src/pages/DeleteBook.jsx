import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const DeleteBook = () => {
    const [loading, setLoading] = useState('');
    const {id} = useParams();

    const navagate = useNavigate();

    const handleDeleteBook = () => {
        setLoading(true);
        axios.delete(`http://localhost:555/books/${id}`)
        .then(() => {
            setLoading(false);
            navagate('/');
        })
        .catch((error) => {
            setLoading(false);
            alert(error.message);
            
        })
    }
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : null}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w=[600px] p-8 mx-auto">
        <h3>Are you sure you want to delete this book?</h3>
        <button onClick={handleDeleteBook} className="p-4 bg-red-600 hover text-white">Yes, Delete it</button>
      </div>
    </div>
  );
}

export default DeleteBook
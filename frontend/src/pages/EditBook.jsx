import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const EditBook = () => {
    const [book, setBook] = useState({});
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState('');
    const {id} = useParams();
console.log(book.title);
    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:555/books/${id}`)
        .then((response) => {
          setBook(response?.data);
          setTitle(response?.data?.title);
          setAuthor(response?.data?.author);
          setPublishYear(response?.data?.publishYear);
          setLoading(false);
        })

        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);

    const navagate = useNavigate();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear
        };
        console.log("data", data)
        setLoading(true);
        axios.put(`http://localhost:555/books/${id}`, data)
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
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Edit Book</h1>
        {loading ? <Spinner/>: ''}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Title</label>
                <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='border-2 border-gray-500 py-2 w-full'/>
            </div>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Author</label>
                <input
                type='text'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className='border-2 border-gray-500 py-2 w-full'/>
            </div>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Publish Yeah</label>
                <input
                type='number'
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className='border-2 border-gray-500 py-2 w-full'/>
            </div>
            <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
                Save
            </button>
        </div>
    </div>
  )
}

export default EditBook
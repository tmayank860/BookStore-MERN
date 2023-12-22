import React, { useState } from 'react'
import {PiBookOpenTextLight} from "react-icons/pi";
import {AiOutlineEdit } from "react-icons/ai";
import {BiShow, BiUserCircle} from "react-icons/bi";
import {BsInfoCircle} from "react-icons/bs";
import {MdOutlineDelete} from "react-icons/md";
import { Link } from 'react-router-dom';
import BookModal from './BookMOdal';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({books}) => {

   
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books?.map((book) => (
     <BookSingleCard book={book} id={book?._id}/>
      ))}
    </div>
  );
}

export default BooksCard
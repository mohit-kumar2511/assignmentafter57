import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const Input = ({ data, markTask, deleteTask }) => {
  const handleChange = () => {
    markTask(data.title);
  };

  const handleRemove = () => {
    deleteTask(data.title);
  }

  return (
    <div className='flex mt-3 ml-2 items-center gap-4'>
      <input
        onChange={handleChange}
        className='scale-150 cursor-pointer'
        id={`input-${data.title}`}
        type='checkbox'
        checked={data.checked}
      />
      <label className='text-gray-900 font-semibold' htmlFor={`input-${data.title}`}>
        {data.title}
      </label>
      <button onClick={handleRemove} className='text-red-500 text-xl hover:cursor-pointer'>
        <MdDeleteForever />
      </button>
    </div>
  );
};

export default Input;

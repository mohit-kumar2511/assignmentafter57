import { MdDeleteForever } from "react-icons/md";

interface TodoItem {
  title: string;
  checked: boolean;
}

interface CheckedInputProps {
  data: TodoItem;
  markTask: (title: string) => void;
  deleteTask: (title: string) => void;
}

function CheckedInput({ data, markTask, deleteTask }: CheckedInputProps) {
  function handleChange() {
    markTask(data.title);
  }

  function handleRemove() {
    deleteTask(data.title);
  }

  return (
    <div className='flex mt-3 ml-2 items-center gap-4'>
      <input
        onChange={handleChange}
        className='scale-150 accent-yellow-400 cursor-pointer'
        id={`input-${data.title}`}
        type='checkbox'
        checked={true}
      />
      <label className='text-gray-500 font-semibold' htmlFor={`input-${data.title}`}>
        {data.title}
      </label>
      <button
        onClick={handleRemove}
        className='text-red-500 text-xl hover:cursor-pointer'
      >
        <MdDeleteForever />
      </button>
    </div>
  );
}

export default CheckedInput;

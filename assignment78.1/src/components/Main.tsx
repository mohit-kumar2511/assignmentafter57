import Input from './Input';
import CheckedInput from './CheckedInput';
import { useState } from 'react';

interface TodoItem {
  title: string;
  checked: boolean;
}

interface MainProps {
  data: TodoItem[];
  updateData: (newData: TodoItem[]) => void;
}

function Main({ data, updateData }: MainProps) {
  const [localData, setLocalData] = useState<TodoItem[]>(data || []);
  const [add, setAdd] = useState(true);
  const [task, setTask] = useState('');

  const pendingData = localData.filter((item) => item.checked === false);
  const completedData = localData.filter((item) => item.checked === true);

  function markTask(currTitle: string) {
    const updated = localData.map((item) =>
      item.title === currTitle ? { ...item, checked: !item.checked } : item
    );
    setLocalData(updated);
    updateData(updated);
  }

  function addData() {
    if (task.trim() === '') return;
    const newTask: TodoItem = {
      title: task.trim(),
      checked: false,
    };
    const updated = [...localData, newTask];
    setLocalData(updated);
    updateData(updated);
    setTask('');
    setAdd(true);
  }

  function deleteTask(title: string) {
    const updated = localData.filter((item) => item.title !== title);
    setLocalData(updated);
    updateData(updated);
  }

  return (
    <div className='my-8 mx-6'>
      <h1 className='text-3xl font-bold'>Things to get done</h1>
      <div className='mt-8'>
        <h1 className='text-xl font-bold mb-6'>Things to do</h1>
        {pendingData.length === 0 ? (
          <h1>No todos here!</h1>
        ) : (
          pendingData.map((item, index) => (
            <Input
              key={index}
              data={item}
              markTask={markTask}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>

      {add ? (
        <button
          onClick={() => setAdd(false)}
          className='mt-3 bg-yellow-500 pb-1 hover:cursor-pointer border border-yellow-500 rounded-2xl text-white flex items-center gap-x-2 px-3 hover:bg-yellow-600'
        >
          <span className='text-3xl'>+</span>
          <span className='text-base mt-1 font-medium'>Add a todo</span>
        </button>
      ) : (
        <div className='flex flex-col mt-4 rounded gap-2 shadow py-4 px-6'>
          <h1 className='text-xl font-bold'>Create a todo</h1>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className='w-80 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 px-2 py-1 border-gray-300 border'
            type='text'
            placeholder='Write an article about XState'
          />
          <div className='flex gap-2 mt-4'>
            <button
              onClick={addData}
              className='text-white border hover:cursor-pointer border-yellow-500 bg-yellow-500 rounded px-4 py-1'
            >
              Save
            </button>
            <button
              onClick={() => setAdd(true)}
              className='border hover:cursor-pointer text-sm px-3 py-1 rounded'
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className='mt-4'>
        <h1 className='text-xl font-bold mb-6'>Things done</h1>
        {completedData.length === 0 ? (
          <h1>No todos here!</h1>
        ) : (
          completedData.map((item, index) => (
            <CheckedInput
              key={index}
              data={item}
              markTask={markTask}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Main;

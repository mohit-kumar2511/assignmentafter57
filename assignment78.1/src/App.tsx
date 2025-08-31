import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';


interface TodoItem {
  title: string;
  checked: boolean;
}

function App() {
  const savedData = localStorage.getItem('data') || '[]';
  const savedData2: TodoItem[] = JSON.parse(savedData);

  const [data, setData] = useState<TodoItem[]>(savedData2);

  function updateData(newData: TodoItem[]): void {
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  }

  return (
    <div>
      <Navbar />
      <Main data={data} updateData={updateData} />
    </div>
  );
}

export default App;

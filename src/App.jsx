import { Tab, Tabs } from '@mui/material';
import './App.css'
import Todolist from './Todolist'
import Home from './components/Home.jsx';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';


export default function App() {
  const [currentTabValue, setCurrentTabValue] = useState('one');

  const handleTabChange = (e, tabValue) => {
    setCurrentTabValue(tabValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <h1>The TODO list </h1>
      <Tabs value={currentTabValue} onChange={handleTabChange}>
        <Tab value='one' label='Home' />
        <Tab value='two' label='Todo' />    
      </Tabs>
      {currentTabValue === 'one' && <Home />}
      {currentTabValue === 'two' && <Todolist />}
      </div>
    </LocalizationProvider>
  );
}

//export default App

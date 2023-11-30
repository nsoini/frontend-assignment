import './App.css'
import Todolist from './Todolist'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Todolist />
    </LocalizationProvider>
  );
}

//export default App

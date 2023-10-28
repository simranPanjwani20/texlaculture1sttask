import logo from './logo.svg';
import './App.css';
import Expense from './screen/hrtech/dashboard/Expense';
import  ExpenseDashboardHrSpaceScreen from './screen/hrtech/dashboard/parent screen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={< ExpenseDashboardHrSpaceScreen/>} />
      <Route path="/something" element={< Expense/>} />
     
    </Routes>
  </Router>
  );
}

export default App;

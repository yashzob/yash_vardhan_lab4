import React from 'react';
import {ExpenseTracker} from './components/expense-tracker';
import { ExpenseItems } from './components/expense-items';
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div >
     <ExpenseTracker></ExpenseTracker>
     
    </div>
  );
}

export default App;

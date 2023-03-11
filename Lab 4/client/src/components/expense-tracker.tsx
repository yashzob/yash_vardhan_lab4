
import {useEffect, useState} from "react"
import {getAllExpenseItems} from "../services/expense"
import {Container} from "react-bootstrap"
import { ExpenseItems } from "./expense-items"
import IExpenseItem from "../models/expense"
import { ExpenseByPayees } from "./expense-by-payees"
import { ExpenseByPendingAmount } from "./expense-by-pending-amount"
import { ExpenseCreator } from "./expense-creator"


const ExpenseTracker = () => {

  const [expenseItems, setExpenseItems] 
    = useState<IExpenseItem[]>([])

  useEffect( () => {

    const getAllExpenseItemsInvoker = async () => {
      try{
        const response = await getAllExpenseItems();
        console.log(response);
        setExpenseItems(response);
      }catch(error){
        console.log(error);
      }  
    }

    
    getAllExpenseItemsInvoker();

  }, [])

  const refreshParentUponNewExpenseAddition = (newlyCreatedExpenseItem : IExpenseItem) => {

    setExpenseItems(
      [
        newlyCreatedExpenseItem,
        ...expenseItems
      ]
    )
    
  }

  return (
    <Container>
      <h2>Expense Items</h2>
      {/* <ExpenseCreator expenseItems={expenseItems}></ExpenseCreator> */}
      <ExpenseCreator expenseItems={expenseItems} refreshParent={refreshParentUponNewExpenseAddition}></ExpenseCreator>
      <br></br>
      <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
      <ExpenseByPayees expenseItems={expenseItems}></ExpenseByPayees>
      <ExpenseByPendingAmount expenseItems={expenseItems}></ExpenseByPendingAmount>
    </Container>
  )
}

export {ExpenseTracker}
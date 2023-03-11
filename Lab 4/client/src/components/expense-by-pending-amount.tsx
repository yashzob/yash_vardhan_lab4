import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense"
import {getUniquePayeeNames, getGrandTotal, getTotalExpenseByPayee,noOfPayee} from "../services/expense-utils";

type ExpenseByPendingAmountModel = {
  expenseItems : IExpenseItem[];
}

const ExpenseByPendingAmount = ({expenseItems} : ExpenseByPendingAmountModel) => {

  const uniquePayeeNames = getUniquePayeeNames(expenseItems);

  const getPendingAmount = (payeeName : string) => {

   

    const totalExpenses = getGrandTotal(expenseItems);
    const totalExpenseByPayee = getTotalExpenseByPayee(payeeName, expenseItems);
    
    const amountToBePaidByPayee = -1*(totalExpenses / (getUniquePayeeNames(expenseItems).length)-totalExpenseByPayee);

    return amountToBePaidByPayee
  } 

 

  return (

    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Payee to Payee</th>
        <th>Pending Amount</th>
      </tr>
    </thead>

    <tbody>

      {
        uniquePayeeNames.map( (payeeName, index) => {

          return (
            <tr>
            <td>{index + 1}</td>
            <td>{payeeName}</td>
            <td>Rs {" "}
               {getPendingAmount(payeeName)}</td>
          </tr>    
          )
        })
        
      } 

    </tbody>
    
  </Table>

  );
}

export {ExpenseByPendingAmount}
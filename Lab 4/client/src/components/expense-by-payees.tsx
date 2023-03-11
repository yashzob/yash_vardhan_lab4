import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense"
import {getTotalExpenseByPayee} from "../services/expense-utils"

type ExpenseByPayeesModel = {
  expenseItems : IExpenseItem[];
}

const ExpenseByPayees = ({expenseItems} : ExpenseByPayeesModel) => {

  const getUniquePayeeNames = (expenseItems : IExpenseItem[]) => {

   

    const uniquePayeeNames : string[] = [];

    expenseItems.forEach( (expenseItem) => {

      let payeeName = expenseItem.payeeName;
      if (!uniquePayeeNames.includes(payeeName)){
        uniquePayeeNames.push(payeeName);
      }
    })

    return uniquePayeeNames;
  }

  const uniquePayeeNames = getUniquePayeeNames(expenseItems);

  

  const getGrandTotal = () => {

    let grandTotalAmount = 0;

    expenseItems.forEach((expenseItem) => {

      grandTotalAmount = grandTotalAmount + expenseItem.price;
    })

    return grandTotalAmount;    
  }

  return (

    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Payee Name</th>
        <th>Contributed Amount</th>
      </tr>
    </thead>

    <tbody>

      {
        uniquePayeeNames.map( (payeeName, index) => {

          return (
            <tr>
            <td>{index + 1}</td>
            <td>{payeeName}</td>
            <td>{getTotalExpenseByPayee(payeeName,expenseItems)}</td>
          </tr>    
          )
        })
      }

          <tr>
            <td></td>
            <td>GRAND TOTAL</td>
            <td>{getGrandTotal()}</td>
          </tr>    

    </tbody>
  </Table>

  );
}

export {ExpenseByPayees}
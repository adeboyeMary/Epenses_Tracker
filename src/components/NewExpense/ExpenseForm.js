import React, {useState} from "react";
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    //below is multiple useState
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //below is single useState.
    // const [input, setInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate : ''
    // });

    const titleChangehandler = (event) => {
        setEnteredTitle(event.target.value);  // This is multiple useState.
        // setInput({
        //     ...input,
        //     enteredTitle : event.target.value,
        // });
    }
    const amountChangehandler = (event) => {
        setEnteredAmount(event.target.value);  // This is multiple useState.
        // setInput({
        //     ...input,
        //     enteredAmount : event.target.value,
        // });
    }
    const dateChangehandler = (event) => {
        setEnteredDate(event.target.value);  // This is multiple useState.
        // setInput({
        //     ...input,
        //     enteredDate : event.target.value,
        // });
    }

    const submitHandler= (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' 
                    value={enteredTitle} 
                    onChange={titleChangehandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' 
                    value={enteredAmount}
                    onChange={amountChangehandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='Date' min='2022-01-01' max='2023-12-31' 
                    value={enteredDate}
                    onChange={dateChangehandler} />
                </div>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
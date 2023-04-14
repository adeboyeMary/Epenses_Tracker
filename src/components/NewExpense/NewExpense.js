import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpenseData(expenseData);
    };

    const addExpenseHandler = () => {
        setShowForm(true);
    }
    const cancelHandler = () => {
        setShowForm(false);
    }


    return(
        <div className="new-expense">
            {showForm ? (
                <ExpenseForm onSaveExpenseData={saveExpenseData} 
                onPassCancelHandler={cancelHandler} />
            ) : (
                <button type="submit" 
                onClick={addExpenseHandler}>Add Expense</button>
            )}
        </div>
    )
}

export default NewExpense;
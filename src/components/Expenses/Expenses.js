import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const addSelectedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filterByYear = props.item.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });
    
    return(
        <div>
            
            <Card className="expenses">
                <ExpensesFilter optionChoosed={filteredYear} 
                    onAddSelectedYear={addSelectedHandler} 
                />
                {filterByYear.map((expense)=> <ExpenseItem
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} />)}
            </Card>
        </div>
    )
}

export default Expenses;
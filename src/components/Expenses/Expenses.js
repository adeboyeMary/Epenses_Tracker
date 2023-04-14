import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


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
                <ExpensesChart expenses={filterByYear} />
                <ExpensesList item={filterByYear} />
            </Card>

            {/* Below is another way to output conditional statement. */}
                {/* {filterByYear.length === 0 && <p>No expense found.</p>}
                {filterByYear.length > 0 && 
                 filterByYear.map((expense)=> <ExpenseItem
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} />)} */}
        </div>
    )
}

export default Expenses;
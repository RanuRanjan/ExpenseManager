import React from 'react'
import "./Expense.css"
import ExpenseDate from './ExpenseDate'


export default function ExpenseItem({date,title,price}) {
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const Newdate= date.toLocaleDateString('en-US', DATE_OPTIONS)
    return (
        <div className='expense-item'>
            <div>{Newdate}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${price}</div>
            </div>
        </div>
    )
}

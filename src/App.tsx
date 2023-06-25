import './App.css'
import { useState } from 'react'
import Form from './components/Form'
import ExpenseFilter from './expense-tracker/components/ExpenseFilter'
import ExpenseList from './expense-tracker/components/ExpenseList'

const categories = [
	'All categories',
	'Groceries',
	'Utilities',
	'Entertainment',
] as const

interface Item {
	id: number
	description: string
	amount: number
	category: string
}

function App() {
	const [expenses, setExpenses] = useState([
		{ id: 1, description: 'Milk', amount: 5, category: 'Groceries' },
		{ id: 2, description: 'Eggs', amount: 10, category: 'Groceries' },
		{ id: 3, description: 'Electricity', amount: 100, category: 'Utilities' },
		{ id: 4, description: 'Movies', amount: 15, category: 'Entertainment' },
	])
	const newId = expenses.length ? expenses[expenses.length - 1].id + 1 : 1
	const onSubmit = (item: Item) => {
		setExpenses([...expenses, item])
	}
	const deleteItem = (id: number) =>
		setExpenses(expenses.filter(item => item.id !== id))

	const [selectedItem, setSelectedItem] = useState<string>(categories[0])
	const changeItem = (item: string) => {
		setSelectedItem(item)
	}

	const isAllCategories = selectedItem === 'All categories'

	return (
		<div className="p-4">
			<Form onSubmit={item => onSubmit({ ...item, id: newId })} />
			<div className="mt-5">
				<ExpenseFilter
					list={categories}
					selectedItem={selectedItem}
					changeItem={changeItem}
				/>
				<div className="mt-3">
					<ExpenseList
						deleteItem={deleteItem}
						expenses={
							isAllCategories
								? expenses
								: expenses.filter(item => item.category === selectedItem)
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default App

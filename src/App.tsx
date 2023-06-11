import './App.css'
import { useState } from 'react'
import Form from './components/Form'
import Filter from './expense-tracker/components/Filter'
import List from './expense-tracker/components/List'

const categories = [
	'All categories',
	'Groceries',
	'Utilities',
	'Entertainment',
] as const

interface Item {
	description: string
	amount: number
	category: string
}

function App() {
	const [items, setItems] = useState<Item[]>([
		{
			description: 'Milk',
			amount: 5,
			category: 'Groceries',
		},
		{
			description: 'Eggs',
			amount: 10,
			category: 'Groceries',
		},
		{
			description: 'Electricity',
			amount: 100,
			category: 'Utilities',
		},
		{
			description: 'Movies',
			amount: 15,
			category: 'Entertainment',
		},
	])
	const addItem = (item: Item) => setItems([...items, item])
	const deleteItem = (description: string) =>
		setItems(items.filter(item => item.description !== description))

	const [selectedItem, setSelectedItem] = useState<string>(categories[0])
	const changeItem = (item: string) => {
		setSelectedItem(item)
	}

	const isAllCategories = selectedItem === 'All categories'

	return (
		<div className="p-4">
			<Form addItem={addItem} />
			<div className="mt-5">
				<Filter
					list={categories}
					selectedItem={selectedItem}
					changeItem={changeItem}
				/>
				<div className="mt-3">
					<List
						deleteItem={deleteItem}
						items={
							isAllCategories
								? items
								: items.filter(item => item.category === selectedItem)
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default App

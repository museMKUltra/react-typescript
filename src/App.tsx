import './App.css'
import { useState } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import List from './components/List'

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
	const [items, setItems] = useState<Item[]>([])
	const addItem = (item: Item) => {
		setItems([...items, item])
	}

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

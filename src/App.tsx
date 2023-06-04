import './App.css'
import { useState } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import List from './components/List'

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

	return (
		<div className="p-4">
			<Form addItem={addItem} />
			<div className="mt-5">
				<Filter />
				<div className="mt-3">
					<List items={items} />
				</div>
			</div>
		</div>
	)
}

export default App

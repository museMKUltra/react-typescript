import './App.css'
import ProductList from './components/ProductList'
import { useState } from 'react'

function App() {
	const [category, setCategory] = useState('')

	return (
		<div className="p-4">
			<select
				className="form-select"
				onChange={event => setCategory(event.target.value)}
			>
				<option value=""></option>
				<option value="Clothing">Clothing</option>
				<option value="Household">Household</option>
			</select>
			<ProductList />
		</div>
	)
}

export default App

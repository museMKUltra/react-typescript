import { useState } from 'react'
import ProductList from '../ProductList'

function Category() {
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
			<ProductList category={category} />
		</div>
	)
}

export default Category

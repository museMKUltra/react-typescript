import { useState } from 'react'
import { FieldValues } from 'react-hook-form'

const categories = [
	'All categories',
	'Groceries',
	'Utilities',
	'Entertainment',
] as const

function Filter() {
	const [selectedCategory, setSelectedCategory] = useState(categories[0])

	function onChange(data: FieldValues) {
		setSelectedCategory(data.currentTarget.value)
	}

	return (
		<div>
			<select
				className="form-select"
				onChange={onChange}
				value={selectedCategory}
			>
				{categories.map(category => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</div>
	)
}

export default Filter

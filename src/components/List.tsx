import React from 'react'

interface Item {
	description: string
	amount: number
	category: string
}

interface Props {
	items: Item[]
}

function List({ items }: Props) {
	const total = items.reduce(
		(total: number, item: Item) => item.amount + total,
		0
	)
	const priceFormat = (price: number) => `$${price.toFixed(2)}`

	return (
		<table className="table table-bordered">
			<thead>
				<tr>
					<th scope="col">Description</th>
					<th scope="col">Amount</th>
					<th scope="col">Category</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				{items.map(item => (
					<tr key={item.description}>
						<td>{item.description}</td>
						<td>{priceFormat(item.amount)}</td>
						<td>{item.category}</td>
						<td>Delete</td>
					</tr>
				))}
				<tr>
					<th>Total</th>
					<td>{priceFormat(total)}</td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	)
}

export default List

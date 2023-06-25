import React from 'react'

interface Expense {
	id: number
	description: string
	amount: number
	category: string
}

interface Props {
	expenses: Expense[]
	deleteItem: (id: number) => void
}

function ExpenseList({ expenses, deleteItem }: Props) {
	if (expenses.length === 0) {
		return null
	}

	const total = expenses.reduce(
		(total: number, item: Expense) => item.amount + total,
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
				{expenses.map(item => (
					<tr key={item.description}>
						<td>{item.description}</td>
						<td>{priceFormat(item.amount)}</td>
						<td>{item.category}</td>
						<td>
							<button
								type="button"
								className="btn btn-danger"
								onClick={() => deleteItem(item.id)}
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<th>Total</th>
					<td>{priceFormat(total)}</td>
					<td></td>
					<td></td>
				</tr>
			</tfoot>
		</table>
	)
}

export default ExpenseList

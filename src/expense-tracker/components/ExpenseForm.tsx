import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const categories = ['Groceries', 'Utilities', 'Entertainment'] as const
const schema = z.object({
	description: z
		.string()
		.min(3, { message: 'Description should be at least 3 characters.' }),
	amount: z
		.number({ invalid_type_error: 'Amount is required.' })
		.min(0.01)
		.max(100_000),
	category: z.enum(categories, {
		errorMap: () => ({ message: 'Category is required.' }),
	}),
})

export type FormData = z.infer<typeof schema>
interface Props {
	onSubmit: (data: FormData) => void
}

function ExpenseForm({ onSubmit }: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) })

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<input
					{...register('description')}
					id="description"
					type="text"
					className="form-control"
				/>
				{errors.description && (
					<p className="text-danger">{errors.description.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input
					{...register('amount', { valueAsNumber: true })}
					id="amount"
					type="number"
					className="form-control"
				/>
				{errors.amount && (
					<p className="text-danger">{errors.amount.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label className="form-label">Category</label>
				<select className="form-select" {...register('category')}>
					<option value=""></option>
					{categories.map(category => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
				{errors.category && (
					<p className="text-danger">{errors.category.message}</p>
				)}
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	)
}

export default ExpenseForm

import { FieldValues } from 'react-hook-form'

interface Props {
	list: readonly string[]
	selectedItem: string
	changeItem: (item: string) => void
}

function Filter({ list, changeItem, selectedItem }: Props) {
	function onChange(data: FieldValues) {
		changeItem(data.currentTarget.value)
	}

	return (
		<div>
			<select className="form-select" onChange={onChange} value={selectedItem}>
				{list.map(item => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	)
}

export default Filter

import { ReactNode, useState } from 'react'
import styled from 'styled-components'

interface Props {
	maxCharts?: number
	children: string
}

function ExpandableText({ maxCharts = 100, children }: Props) {
	const [isExpanded, setIsExpanded] = useState(false)

	if (maxCharts > children.length) return <p>{children}</p>

	const text = isExpanded ? children : `${children.slice(0, maxCharts)}...`

	return (
		<p>
			{text}
			<button onClick={() => setIsExpanded(!isExpanded)}>
				{isExpanded ? 'Less' : 'More'}
			</button>
		</p>
	)
}

export default ExpandableText

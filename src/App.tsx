import { useEffect, useRef } from 'react'
import './App.css'
import ExpenseTracker from './expense-tracker/ExpenseTracker'

function App() {
	const ref = useRef<HTMLInputElement>(null)

	// afterRender
	useEffect(() => {
		// side effect
		if (ref.current) {
			ref.current.focus()
		}
	})

	useEffect(() => {
		document.title = 'My App'
	})

	return (
		<>
			<ExpenseTracker />
			<input ref={ref} type="text" className="form-control" />
		</>
	)
}

export default App

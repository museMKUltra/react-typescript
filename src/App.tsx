import Alert from './components/Alert'
import Button from './components/Button'
import { useState } from 'react'

function App() {
	const [isAlertVisible, setIsAlertVisible] = useState(false)

	return (
		<>
			{isAlertVisible && (
				<Alert onClose={() => setIsAlertVisible(false)}>
					Hello <span>World</span>
				</Alert>
			)}
			<Button onClick={() => setIsAlertVisible(true)}>button</Button>
		</>
	)
}

export default App

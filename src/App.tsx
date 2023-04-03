import ListGroup from './components/ListGroup'

function App() {
	const items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris']

	return (
		<div>
			<ListGroup items={items} heading="Cities" />
		</div>
	)
}

export default App

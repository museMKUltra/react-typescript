import ListGroup from './components/ListGroup'

function App() {
	return (
		<ListGroup
			items={['one', 'two', 'three']}
			heading={'Number'}
			onSelectItem={() => console.log('ok')}
		/>
	)
}

export default App

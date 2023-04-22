import ListGroup from './components/ListGroup'
import './App.css'

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

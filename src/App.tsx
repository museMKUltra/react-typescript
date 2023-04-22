import { BsAlarmFill } from 'react-icons/bs'
import ListGroup from './components/ListGroup'
import Button from './components/Button'
import './App.css'
import Like from './components/Like'

function App() {
	return (
		<>
			<Button onClick={() => console.log('ok')}>button</Button>
			<ListGroup
				items={['one', 'two', 'three']}
				heading={'Number'}
				onSelectItem={() => console.log('ok')}
			/>
			<div>
				<BsAlarmFill />
			</div>
			<div>
				<Like onClick={() => console.log('like')} />
			</div>
		</>
	)
}

export default App

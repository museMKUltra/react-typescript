import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => console.log(res))
	})

	return <div />
}

export default App

import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface User {
	id: number
	name: string
}

function App() {
	const [users, setUsers] = useState<User[]>([])

	useEffect(() => {
		axios
			.get<User[]>('https://jsonplaceholder.typicode.com/users')
			.then(res => setUsers(res.data))
	}, [])

	return <div />
}

export default App

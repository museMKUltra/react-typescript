import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface User {
	id: number
	name: string
}

function App() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		axios
			.get<User[]>('https://jsonplaceholder.typicode.com/users')
			.then(res => console.log(res.data[0].name))
	})

	return <div />
}

export default App

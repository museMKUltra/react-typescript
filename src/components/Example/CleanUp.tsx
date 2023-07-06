import { useEffect } from 'react'

const connect = () => console.log('Connecting')
const disconnect = () => console.log('Disconnecting')

function CleanUp() {
	useEffect(() => {
		connect()

		return () => disconnect()
	}, [])

	return <div />
}

export default CleanUp

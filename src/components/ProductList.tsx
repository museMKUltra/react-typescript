import React, { useEffect, useState } from 'react'

function ProductList() {
	const [products, setProducts] = useState<string[]>([])

	useEffect(() => {
		console.log('Fetching products')
		setProducts(['Clothing', 'Household'])
	}, [])

	return <div>{products}</div>
}

export default ProductList

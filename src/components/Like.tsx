import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import styled from 'styled-components'

const LikedHeart = styled(AiFillHeart)`
	color: indianred;
`

const UnLikedHeart = styled(AiOutlineHeart)`
	color: darkgray;
`

interface Props {
	onClick: () => void
}

const Like = ({ onClick }: Props) => {
	const [isLiked, setIsLiked] = useState(false)
	const Component = isLiked ? LikedHeart : UnLikedHeart
	const toggleLike = () => {
		setIsLiked(!isLiked)
		onClick()
	}

	return <Component size={24} onClick={toggleLike} />
}

export default Like

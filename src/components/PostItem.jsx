import React from 'react'
import MyButton from './UI/Button/MyButton'

const PostItem = (props) => {
	return (
		<div>
			<div className="post">
				<div className="post__content">
					<strong>{props.number}. {props.post.title}</strong>
					<div>
						{props.post.body}
					</div>
				</div>
				<div>
					<MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
				</div>
			</div>
		</div>
	)
}

export default PostItem

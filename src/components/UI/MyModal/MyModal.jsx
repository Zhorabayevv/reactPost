import React from 'react'
import classes from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {

	const rootClass = [classes.myModal]
	if (visible) {
		rootClass.push(classes.active);
	}


	return (
		<div 
		className={rootClass.join(' ')}
		onClick={()=>setVisible(false)}
		>
			<div 
			onClick={(e)=>e.stopPropagation()}
			className={classes.myModalContent}>
				{children}
			</div>
		</div>
	)
}

export default MyModal

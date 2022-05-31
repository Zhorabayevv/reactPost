import React, { useState } from 'react'

const InputText = () => {

	const [value, setValue] = useState('Salemberdik');
	return (
		<div>
			<h1>{value}</h1>
			<input
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)} />
		</div>
	)
}

export default InputText

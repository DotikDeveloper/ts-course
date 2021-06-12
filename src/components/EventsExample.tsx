import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
	
	const [value, setValue] = useState<string>('')
	const [isDrag, setIsDrag] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement>(null)
	
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value)
	}
	
	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('DRAG')
	}
	
	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
		console.log('DROP')
	}
	
	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
	}
	
	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(true)
	}
	
	return (
		<div>
			<input
				value={value}
				type="text"
				onChange={changeHandler}
				placeholder='управляемый'
			/>
			<input
				ref={inputRef}
				type="text"
				placeholder='неуправляемый'
			/>
			<button
				onClick={clickHandler}
			>btn</button>
			<div
				draggable
				onDrag={dragHandler}
				style={{width: '200px', height: '200px', background: 'red'}}
			>block 1</div>
			<div
				style={{width: '200px', height: '200px', background: isDrag ? 'blue' : 'red', marginTop: '15px'}}
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
			>block 2</div>
		</div>
	);
};

export default EventsExample;
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, handleDelete, toggleReminder }) => {
	return (
		<div
			className={`task ${task.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => toggleReminder(task.id)}
		>
			<p>Date: {task.day}</p>
			<h3>
				Current Balance: #{task.prev}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => handleDelete(task.id)}
				/>
			</h3>
			<h3>Total Balance: #{task.text}</h3>
		</div>
	)
}

export default Task

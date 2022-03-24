import React, { useState } from 'react'

const AddTask = ({ addTask }) => {
	const [task, setTask] = useState({
		prev: '',
		text: '',
		day: ''
	})

	const [reminder, setReminder] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setTask((prevTask) => {
			return {
				...prevTask,
				[name]: value
			}
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!task.text && !task.prev) {
			alert('Please add a task')
		}

		addTask({
			prev: task.prev,
			text: task.text ,
			day: task.day,
			reminder: reminder
		})

		setTask({
			prev: '',
			text: '',
			day: ''
		})

		setReminder(false)
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<div className="form-control">
				<label>Amount</label>
				<input
					name="prev"
					type="text"
					placeholder="Amount"
					value={task.prev}
					onChange={handleChange}
				/>
			</div>
			
			<div className="form-control">
				<label>Date</label>
				<input
					type="date"
					placeholder="Add Day & Time"
					name="day"
					value={task.day}
					onChange={handleChange}
				/>
			</div>
			<div className="form-control form-control-check">
				<label>Set Reminder</label>
				<input
					type="checkbox"
					name="reminder"
					onChange={(e) => setReminder(e.currentTarget.checked)}
					checked={reminder}
				/>
			</div>
			<input type="submit" value="Save Offering" className="btn btn-block" />
		</form>
	)
}

export default AddTask

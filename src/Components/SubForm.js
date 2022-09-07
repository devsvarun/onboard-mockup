import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { subformTexts } from './Texts'
import { workspaceUrl } from './Texts'

const SubForm = (props) => {
	const handleChange = (event) => {
		props.setUserData(prev => {
			return {
				...prev, [event.target.name]: event.target.value
			}
		})
	}
	const firstName = subformTexts[props.index].firstLabel;
	const secondName = subformTexts[props.index].secondLabel;
	const firstPh = subformTexts[props.index].firstPh;
	const secondPh = subformTexts[props.index].secondPh;

	return (
		<div className='subform'>
			<label>{firstName}</label>
			<TextField
				name={firstName}
				sx={{ width: "100%", marginBottom: "20px" }}
				placeholder={firstPh}
				onChange={handleChange}
				value={props.userData[firstName] ?? ""}
				variant="outlined" />
			<label>{secondName} {props.index === 1 ?
				<span className='optional'>(optional)</span> : <></>}
			</label>
			<div className='ws-input'>{props.index === 1 ?
				<div className='wsurl'>{workspaceUrl}</div> : <></>}
				<TextField
					name={secondName}
					sx={{ width: "100%", marginBottom: "5px" }}
					placeholder={secondPh}
					onChange={handleChange}
					value={props.userData[secondName] ?? ""}
					variant="outlined" /></div>
		</div>
	)
}

export default SubForm
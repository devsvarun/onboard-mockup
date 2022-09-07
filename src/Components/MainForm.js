import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button"
import StepperBar from './StepperBar';
import { texts } from './Texts';
import SubForm from './SubForm';
import logo from "../Images/logo.PNG"
import OptionCard from './OptionCard';
import Checkmark from './Checkmark';

const MainForm = (props) => {
	const [next, setNext] = useState(false);
	const [index, setIndex] = useState(0);
	const [userName, setUserName] = useState("");
	const [userData, setUserData] = useState({});
	const handleNext = () => {
		if (index < 3) {
			setNext(true);
			setIndex(prev => prev + 1);
		}
		else {
			window.location.reload(false);
		}
	}
	useEffect(() => {
		setUserName(userData["Display Name"])
	}, [index])
	return (
		<div className='mainform'>
			<div className='header'>
				<img alt='logo' src={logo}></img>
				<h1 className='heading'>Eden</h1>
			</div>
			<StepperBar next={next} setNext={setNext} />
			<div className='form-body'>
				{index === 3 ? <Checkmark /> : <></>}
				<h1>{texts[index].heading}{index === 3 ? userName ?? "Eren" + "!" : ""}</h1>
				<p>{texts[index].info}</p>
				{index < 2 ? <SubForm index={index} userData={userData} setUserData={setUserData} /> : index < 3 ? <OptionCard setUserData={setUserData} /> : <></>}
				<Button style={{ textTransform: 'none', width: "425px", maxWidth: "90%", minHeight: "56px", backgroundColor: "#664DE5", marginTop: "20px" }} onClick={handleNext} variant="contained">{texts[index].buttonText}</Button>
			</div>

		</div>
	)
}

export default MainForm
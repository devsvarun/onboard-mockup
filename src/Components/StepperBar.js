import React, { useEffect } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import CustomIcon from './CustomIcon';

const StepperBar = (props) => {
  const steps = [1, 2, 3, 4];

  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep < steps.length) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  useEffect(() => {
    if (props.next) {
      handleNext();
      props.setNext(false)
    }
  }, [props.next])
  return (
    <div className='stepper'><Stepper activeStep={activeStep} connector={<CustomConnector />}>
      {steps.map((label, index) => {
        const stepProps = {};
        const labelProps = {};
        if (isStepSkipped(index)) {
          stepProps.completed = false;
        }
        return (
          <Step sx={{ margin: 0, padding: 0 }} key={label} {...stepProps}>
            <StepLabel sx={{ width: "45px" }} StepIconComponent={CustomIcon} {...labelProps}></StepLabel>
          </Step>
        );
      })}
    </Stepper>
    </div>


  )
}

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderImage: 'linear-gradient(to right, #784af4 50%, #eaeaf0 50%) 1',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#664DE5',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));


export default StepperBar
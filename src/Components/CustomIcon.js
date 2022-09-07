import React from 'react'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { unstable_useEnhancedEffect } from '@mui/material';

const CustomIcon = (props) => {
    const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#fff',
        zIndex: 1,
        color: '#000',
        width: 45,
        height: 45,
        display: 'flex',
        border: "#eaeaf0 1px solid",
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.completed && {
            backgroundColor: '#664DE5',
            border: "unset",
            color: "#fff"
        }),
    }));
    CustomIcon.propTypes = {
        /**
         * Whether this step is active.
         * @default false
         */
        active: PropTypes.bool,
        className: PropTypes.string,
        /**
         * Mark the step as completed. Is passed to child components.
         * @default false
         */
        completed: PropTypes.bool,
        /**
         * The label displayed in the step icon.
         */
        icon: PropTypes.node,
    };

    const { active, completed, className, icon } = props;


    return (
        <CustomStepIconRoot ownerState={{ completed, active }} className={className}>
            {icon}
        </CustomStepIconRoot>
    )
}

export default CustomIcon
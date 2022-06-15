import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './Start.module.css'


export default function Start() {
// new line start
    const navigate = useNavigate();
    
    const buttonHandler = () => {
        navigate('/scores')
    }

    return (
    <>
        <body className={classes.body}>
            <div className={classes.content} title="How Unique?">
            How Unique?
            </div>
            <div>
                <button onClick={buttonHandler} className={classes.button}>See Your Results</button>
            </div>
        </body>
    </>
    );
}
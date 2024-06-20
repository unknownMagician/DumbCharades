import React, { useState } from 'react'
import classes from './LinkCopy.module.css'

const LinkCopy = (props) => {

    const [copyIcon, setCopyIcon] = useState(false)

    const link = `https://dumbcharades-1.onrender.com/${props.roomID}`

    const copyLink = (event) => {
        navigator.clipboard.writeText(link);
        setCopyIcon(true)
        const myTimeout = setTimeout(() => {
            setCopyIcon(false)
            clearTimeout(myTimeout)
        }, 800);
    }

    return (
        <div className={`${classes.invite} ${props.className}`}>
            <p className={classes.link}>{link}</p>
            <button className={`${classes['link-button']} material-icons ${copyIcon && classes.copied}`} onClick={copyLink}>{copyIcon ? 'done' : 'content_copy'}</button>
        </div>
    )
}

export default LinkCopy
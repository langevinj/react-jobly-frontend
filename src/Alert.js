import React from 'react'

function Alert({ type, messages }){
    return (
        <>
        {messages.map(message => <div className={`alert alert-${type}`} key={message}>{message}</div>)}
        </>
    )
}

export default Alert;
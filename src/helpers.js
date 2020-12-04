import React from 'react'

function renderJobButton(applications, jobId, handleClick){
    if (applications.includes(jobId)) {
        return <button type="button" data-toggle="button" className="Apply" disabled={true} aria-disabled="true">Applied</button>
    } else {
        return <button type="button" data-toggle="button" className="Apply" onClick={handleClick}>Apply</button>
    }
}


export { renderJobButton }
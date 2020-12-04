import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Logout({logOut}){
    const history = useHistory()

    useEffect(() => {
        function logUserOut(){
            logOut()
            history.push("/")
        }  
        logUserOut() 
    }, []);

    return (
        <div>

        </div>
    )
}

export default Logout;
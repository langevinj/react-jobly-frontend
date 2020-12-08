import { useState, useEffect } from 'react'

function useLocalStorage(key, startingValue = null) {
    const initialValue = localStorage.getItem(key) || startingValue;

    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        if(!value) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, value)
        }
    }, [key, value]);

    return [value, setValue]
}

export default useLocalStorage;
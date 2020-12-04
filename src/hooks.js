import {useState, useEffect} from 'react'

function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
        initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue]
}

function useToken(){
    const [token, setToken] = useLocalStorage("token");

    const addToken = (value) => {
        setToken(value);
    }

    const clearToken = () => setToken(null);
    
    return [token, addToken, clearToken]
}

function useLocalUser(){
    const [user, setUser] = useLocalStorage("user");

    const addUser = (value="") => {
        setUser(value);
    }

    const clearUser = () => setUser(null);

    return [user, addUser, clearUser]
}

export { useToken, useLocalUser, useLocalStorage }
import { useState, useEffect } from 'react';
import {useUser} from './components/Users/UserContext';

function useFetch(url){
    const [data, setData] = useState()
    const me = useUser();


    useEffect(() => {
        fetch(url, {
            headers: {'Authorization' : 'Bearer ' + me.token}
        })
        .then(res => res.json())
        .then(t => setData(t))
    }, [url, me.token])
    
    return data
}


export default useFetch;
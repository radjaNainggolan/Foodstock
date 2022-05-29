import { useState, useEffect } from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then(res =>{ 
            if(!res.ok){
                throw Error('Could not fetch data from that resource');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
            setError(null);
        })
        .catch(err => {
            if(err.name !== 'AbortError')
            {
                setError(err.message);
                setLoading(false);
            }
        });
        
        return () => abortCont.abort();
            
    },[url]);

    return {data, loading, error}
}

export default useFetch;
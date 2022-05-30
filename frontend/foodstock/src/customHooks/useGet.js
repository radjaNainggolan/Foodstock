import axios from 'axios';
import {useState, useEffect} from 'react';

const useGet = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        axios.get(url)
        .then(res => {

            if(res.status !== 200){
                throw Error("Could not fetch data from that resource");
            }
            //console.log(data);
            setData(res.data);
            setLoading(false);
            setError(null);
        })
        .catch(err => {
            if(err.name !== 'AbortError'){
                setError(err.message);
                setLoading(false);
            }
        });
        return () => abortCont.abort();
    },[url]);
    return {data, loading, error}
}
 
export default useGet;
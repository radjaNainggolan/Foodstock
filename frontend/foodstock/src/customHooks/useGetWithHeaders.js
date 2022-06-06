import axios from 'axios';
import {useState, useEffect} from 'react';
import { useAlert } from "react-alert";
import { useNavigate } from 'react-router-dom';

const useGetWithHeaders = (url,headers) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const alert = useAlert();
    const navigate = useNavigate();
    useEffect(() => {
        const abortCont = new AbortController();

        axios.get(url,{headers:headers})
        .then(res => {

            if(res.status !== 200){
                throw new Error('could not fetch data.');
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
                navigate('/');
                alert.error(err.response.data.message);
            }
        });
        return () => abortCont.abort();
    },[url,headers,alert,navigate]);
    return {data, loading, error}
}
 
export default useGetWithHeaders;
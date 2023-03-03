import { useEffect, useState } from "react";

let useData = () =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('http://prof.world/api/test_json_files/?token=6a06cc0050374e32be51125978904bd8')
        .then(res => res.json())
        .then( data => setData(data.data.files))
        .catch(setError)
    }, [])

    return {
        data,
        error
    }
}

export default useData;
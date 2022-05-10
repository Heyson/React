import{ useState, useEffect } from 'react'

const useFetch = (url) => {
    // blogs array using React state and hook
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [Error, setError] = useState(null)

     // fetches data from JSON object to populate state in "blogs"
     useEffect(() => {
        //setTimeout performs function after 1000ms to simulate long request time to show Loading... message
        setTimeout(() => {
            fetch(url)
            //response object, returns a promise
                .then(res => {
                    console.log(res);
                     if(!res.ok){
                        throw Error('Could not fetch data for that resource')
                     }
                    return res.json();
                })
                // gets the data
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                //catches network error and fires a function
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })

        }, 1000);
    },     [url]);

    return { data, isPending, Error}
}

export default useFetch;
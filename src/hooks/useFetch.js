
import { useState, useEffect} from 'react';

export default function useFetch(url){
  const [isLoading, setIsLoading] = useState(false);
  const [resp, setResp] = useState(null);
  const [error, setError] = useState({});
  const [params, setParams] = useState({});

  const setFetch = (params = {}) => {
    console.log(params)
    setParams(params);
    setIsLoading(true);
    console.log(params);
  }

  useEffect(() => {
      if(!isLoading) return;

    fetch(url, params)
      .then(response => response.text())
      .then(result => {
          setResp(JSON.parse(result));
          console.log(result);
          setIsLoading(false);
        })
      .catch(err => {
        console.log('err', err);
        setError(err);
        setIsLoading(false);
      })
   
  }, [isLoading]);

 
  return [{resp, isLoading, error}, setFetch];
}


import { useState, useEffect} from 'react';

export default (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [resp, setResp] = useState(null);
  const [error, setError] = useState({});
  const [params, setParams] = useState({});

  const setFetch = (params = {}) => {
    setParams(params);
    setIsLoading(true);
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

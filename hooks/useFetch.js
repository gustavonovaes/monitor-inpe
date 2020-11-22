import React from 'react';

export default function useFetch(url, init) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const prevInit = React.useRef();
  const prevUrl = React.useRef();
  React.useEffect(() => {
    if (prevUrl.current === url && prevInit.current === init) {
      return;
    }

    prevUrl.current = url;
    prevInit.current = init;

    fetch(url, init)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        setError(res);
      })
      .then(data => setData(data))
      .catch(err => {
        console.error(err);
        setError(err)
      })
      .finally(() => setLoading(false));
  }, [init, url]);

  return { data, loading, error }
}


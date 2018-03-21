 const GiphyService = () => {
   const baseUrl = 'https://api.giphy.com/v1/gifs/',
         apiKey = 'pk93A6aOx58LyHjUr4CWWLiaehh7VIpS';

  
  const getTrendingGifs = (count = 25, rating = "PG") => {
    let trendUrl = `${baseUrl}trending?api_key=${apiKey}&limit=${count}&fmt=json`;

    return fetch(trendUrl).then(response => {
      if (!response.ok) throw new Error(response.statusText);

      return response.json()
    })
    .then(result => result.data)
    .catch((err) => {
        return Promise.reject(err);
    });
  }

  const searchGifs = (term ="", count = 25, rating = "PG", offset = 0) => {
    let searchUrl = `${baseUrl}search?api_key=${apiKey}&q=${term}&offset=${offset}&limit=${count}&fmt=json`;

    console.log("searching for:", term);

    return fetch(searchUrl).then(response => {
      if (!response.ok) throw new Error(response.statusText);

      return response.json()
    })
    .then(result => result.data)
    .catch((err) => {
        return Promise.reject(err);
    });
  }

  return {
    getTrendingGifs,
    searchGifs
  };
};


 export default GiphyService();



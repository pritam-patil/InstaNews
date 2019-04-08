
const API_key = "04dee134369840019fc52810f0c00b8f";
const url =
   `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_key}`;

// const url = `https://newsapi.org/v2/everything?q=india&apiKey=${API_key}`;

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}


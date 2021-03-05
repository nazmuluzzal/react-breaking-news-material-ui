import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

import "./App.css";
import News from "./components/News/News";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=a9c2c1fde411408380cc3c5811cd7134";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div>
      <h1>Material UI</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      {/* <News></News> */}
      <h2>Top News: {articles.length}</h2>
      {articles.map((article) => (
        <News article={article}></News>
      ))}
    </div>
  );
}

export default App;

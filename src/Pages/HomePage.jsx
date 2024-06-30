import axios from "axios";
import React, { useEffect, useState } from "react";
import ArticleCard from "../Components/ArticleCard";
import Filters from "../Components/Filters";

const gnewsBaseURL = process.env.REACT_APP_GNEWS_BASE_URL;
const gnewsApiKey = process.env.REACT_APP_GNEWS_API_KEY;

function HomePage() {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchgNewsData();
  }, []);

  function fetchgNewsData() {
    setLoading(true);

    const url = `${gnewsBaseURL}/search?q=${
      query ? query : "None"
    }&lang=${language}&apikey=${gnewsApiKey}`;
    axios
      .get(url)
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch(() => {
        console.log("error");
        setLoading(false);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetchgNewsData();
  }

  return (
    <div>
      {" "}
      <Filters
        query={query}
        setQuery={setQuery}
        language={language}
        setLanguage={setLanguage}
        handleSubmit={handleSubmit}
      />
      {loading ? (
        <div className="text-center">
          <div className="text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : news?.length > 0 ? (
        news?.map((article, index) => {
          return <ArticleCard key={index} article={article} />;
        })
      ) : (
        <div className="text-center h5">No News found</div>
      )}
    </div>
  );
}

export default HomePage;

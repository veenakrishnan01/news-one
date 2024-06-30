import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <img
              src={article.image}
              className="card-img-top"
              alt={article.title}
            />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  Published on:{" "}
                  {new Date(article.publishedAt).toLocaleDateString()}
                </small>
              </p>
              <p className="card-text">
                {article.content}{" "}
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </p>
              <a
                href={article.source.url}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.source.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;

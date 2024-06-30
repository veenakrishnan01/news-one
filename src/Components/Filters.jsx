import React from "react";

function Filters({ query, setQuery, language, setLanguage, handleSubmit }) {
  return (
    <div className="col-12 col-md-6 mx-auto my-3">
      <form onSubmit={handleSubmit} className="text-center">
        <div className="input-group">
          <div className="flex-grow-1">
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for news"
            />
          </div>
          <select
            className="form-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ml">Malayalam</option>
            <option value="ta">Tamil</option>
            <option value="hi">Hindi</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filters;

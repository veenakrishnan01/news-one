import React from "react";
import News from "../Components/News";
import Weather from "../Components/Weather";

function HomePage() {
  return (
    <div>
      <Weather />
      <News />
    </div>
  );
}

export default HomePage;

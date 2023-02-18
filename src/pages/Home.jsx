import React from 'react';
import Products from "../components/Products";
import Banner from "../components/Banner";

function Home(props) {
  return (
      <>
        <Banner/>
        <Products/>
      </>
  );
}

export default Home;
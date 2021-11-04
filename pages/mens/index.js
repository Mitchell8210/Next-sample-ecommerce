import React from "react";
import ArticleList from "../../components/ArticleList";
import Meta from "../../components/Meta";

const mens = ({ products }) => {
  return (
    <div>
      <Meta title="mens" />
      <ArticleList articles={products} category="mens" />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/men's clothing`
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default mens;

import React from "react";
import ArticleList from "../../components/ArticleList";
import Meta from "../../components/Meta";

const womens = ({ products }) => {
  return (
    <div>
      <Meta title="womens" />
      <ArticleList articles={products} category="womens" />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/women's clothing`
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default womens;

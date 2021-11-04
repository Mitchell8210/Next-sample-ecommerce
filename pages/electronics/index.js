import React from "react";
import ArticleList from "../../components/ArticleList";
import Meta from "../../components/Meta";

const electronics = ({ products }) => {
  return (
    <div>
      <Meta title="Electronics" />
      <ArticleList articles={products} category="electronics" />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/electronics`
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default electronics;

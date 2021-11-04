import React from "react";
import ArticleList from "../../components/ArticleList";
import Meta from "../../components/Meta";

const jewelry = ({ products }) => {
  return (
    <div>
      <Meta title="jewelry" />
      <ArticleList articles={products} category="jewelery" />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/jewelery`
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default jewelry;

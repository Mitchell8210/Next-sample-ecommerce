import React from "react";
import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles, category }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} category={category} />
      ))}
    </div>
  );
};

export default ArticleList;

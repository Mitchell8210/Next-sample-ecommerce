import React from "react";
import Link from "next/link";
import articleStyles from "../styles/Article.module.css";
import Image from "next/image";
const ArticleItem = ({ article, category }) => {
  const ref = category ? `${category}/[id]` : "product/[id]";
  return (
    <Link href={ref} as={`/${category ? category : "product"}/${article.id}`}>
      <a className={articleStyles.card}>
        <div className={articleStyles.image}>
          <Image src={article.image} width={200} height={200} alt="product" />
        </div>
        <div className={articleStyles.cardBottom}>
          <h4>{article.title} </h4>
          <p>{article.category}</p>
        </div>
      </a>
    </Link>
  );
};

export default ArticleItem;

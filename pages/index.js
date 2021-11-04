import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

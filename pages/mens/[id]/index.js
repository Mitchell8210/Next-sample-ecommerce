import { useRouter } from "next/router";
import Link from "next/link";
import ItemDetails from "../../../components/ItemDetails";

const mens = ({ mens }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <ItemDetails item={mens} />
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const mens = await res.json();

  return {
    props: {
      mens,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/men's clothing`
  );
  const mens = await res.json();
  const ids = mens.map((mensItem) => mensItem.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export default mens;

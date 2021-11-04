import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ItemDetails from "../../../components/ItemDetails";

const womens = ({ womens }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <ItemDetails item={womens} />
      <br />

      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const womens = await res.json();

  return {
    props: {
      womens,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/women's clothing`
  );
  const womens = await res.json();
  const ids = womens.map((womensItem) => womensItem.id);
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
export default womens;

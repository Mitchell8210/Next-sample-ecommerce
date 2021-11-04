import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ItemDetails from "../../../components/ItemDetails";

const jewelery = ({ jewelery }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <ItemDetails item={jewelery} />
      <br />

      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const jewelery = await res.json();

  return {
    props: {
      jewelery,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/jewelery`
  );
  const jewelery = await res.json();
  const ids = jewelery.map((jewelery) => jewelery.id);
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
export default jewelery;

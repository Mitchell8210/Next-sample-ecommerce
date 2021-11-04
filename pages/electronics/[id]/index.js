import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ItemDetails from "../../../components/ItemDetails";

const electronics = ({ electronics }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <ItemDetails item={electronics} />
      <br />

      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const electronics = await res.json();

  return {
    props: {
      electronics,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/electronics`
  );
  const electronics = await res.json();
  const ids = electronics.map((electronics) => electronics.id);
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
export default electronics;

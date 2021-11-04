import React from "react";
import ItemStyles from "../styles/ItemDetails.module.css";
import Image from "next/image";

const ItemDetails = ({ item }) => {
  return (
    <div className={ItemStyles.item}>
      <div className={ItemStyles.image}>
        <Image src={item.image} width={500} height={500} />
      </div>
      <div className={ItemStyles.content}>
        <div className={ItemStyles.title}>{item.title}</div>
        <div className={ItemStyles.category}>{item.category}</div>
        <div className={ItemStyles.description}>{item.description}</div>
        <div className={ItemStyles.price}>
          <span>${item.price}</span> USD
        </div>
        <div className={ItemStyles.rating}>
          Rating: <span>{item.rating.rate}</span> (
          <span>{item.rating.count}</span>)
        </div>
        <button className={ItemStyles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemDetails;

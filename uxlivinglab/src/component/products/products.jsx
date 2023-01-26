import React from "react";
import Box from "./box/Box";
import styles from "./styles.module.css";
import { RxCross2 } from "react-icons/rx";

const Products = () => {
  return (
    <div className={styles.cover}>
      <button className={styles.productbtn}>
        <i style={{fontSize:20}} className={styles.txt}>Products</i>
      </button>
      {products.map((item) => (
        <div key={item.id} class={styles.container}>
          <Box product={item.first} />
          <Box product={item.second} />
        </div>
      ))}
      <div className={styles.cross} style={{marginTop:30, marginLeft:10}}>
        <RxCross2
          size={24}
          color="white"
          className="close"
          style={{
            backgroundColor: "red",
            borderRadius: 20,
          }}
        />
      </div>
    </div>
  );
};

export default Products;

export const products = [
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Workflow-AI-2.png",
      id: crypto.randomUUID(),
      title: "Workflow AI",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Wifi-QR-Code-1.png",
      id: crypto.randomUUID(),
      title: "Will QR Code",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2023/01/customer-support-centre.png",
      id: crypto.randomUUID(),
      title: "Customer Support",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image: "https://uxlivinglab.com/wp-content/uploads/2022/12/UX-Live-1.png",
      id: crypto.randomUUID(),
      title: "UX Live",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2023/01/customer-support-centre.png",
      id: crypto.randomUUID(),
      title: "Customer Support",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image: "https://uxlivinglab.com/wp-content/uploads/2022/12/UX-Live-1.png",
      id: crypto.randomUUID(),
      title: "UX Live",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2023/01/Permutation-calculator.png",
      id: crypto.randomUUID(),
      title: "Permutation Calculator",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2023/01/Sales-agent-app.png",
      id: crypto.randomUUID(),
      title: "Sales Agent",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
];
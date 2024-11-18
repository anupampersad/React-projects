import React, { useEffect, useState, useRef, useCallback } from "react";
import "./style.css";

const InfinteScroll = () => {
  const [productsFetched, setProductsFetched] = useState(0);
  const [products, setProducts] = useState([]);

  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchProducts(productsFetched + 10);
          setProductsFetched(productsFetched + 10);
        }
      });

      if(node){
        observer.current.observe(node)
      }
    },
    [products.length]
  );

  const fetchProducts = async (productsFetched) => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${productsFetched}`
    );
    const data = await res.json();

    if (data && data.products) {
      setProducts([...products, ...data.products]);
    }
  };

  useEffect(() => {
    fetchProducts(0);
  }, []);

  // useEffect(() => {
  //   if (products?.length > 0) {
  //     const observer = new IntersectionObserver((entries) => {
  //       if(entries[0].isIntersecting){
  //         fetchProducts(productsFetched+10)
  //         setProductsFetched(productsFetched+10)
  //         observer.unobserve(entries[0].target)
  //       }
  //     });
  //     const productsArray = document.querySelectorAll(".products__single");
  //     observer.observe(productsArray[productsArray.length - 1]);
  //   }
  // }, [products.length]);

  return (
    <div className="products">
      {products.map((prod, idx) => {
        if (idx + 1 === products.length) {
          return (
            <span
              className="products__single"
              key={prod.id}
              ref={lastElementRef}
            >
              <img src={prod.thumbnail} alt={prod.title} /> {/* alt is imp */}
              <span>{prod.title}</span>
            </span>
          );
        } else {
          return (
            <span className="products__single" key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} /> {/* alt is imp */}
              <span>{prod.title}</span>
            </span>
          );
        }
      })}
    </div>
  );
};

export default InfinteScroll;

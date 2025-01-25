import React, { useEffect, useState } from "react";
import { getCategoryApi } from "../api";

const CategoryCard = (props) => {
  const [category, setCategory] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategoryApi();
        setCategory(response);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  if (loading) {
    return <p>Loading categories...</p>;
  }
  return (
    <>
      <h3 className="section-heading">{props.name}</h3>
    </>
  );
};

export default CategoryCard;

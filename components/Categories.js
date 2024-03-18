import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import sanityClient, { urlFor } from "../sanity";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type=="category"]`)
      .then((res) => setCategories(res))
      .catch((err) => console.error(err));
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => (
        <CategoriesCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}

      {/* <Text>Categories</Text> */}
    </ScrollView>
  );
}

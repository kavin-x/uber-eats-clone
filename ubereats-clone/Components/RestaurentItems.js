import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

const RestaurentItems = ({restaurantData}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 20 }}>
      {localRestaurants.map((restaurant, index) => (
        <View
          key={index}
          style={{ backgroundColor: "white", marginTop: 10, padding: 15 }}
        >
          <RestaurentImage image={restaurant.image_url} />
          <RestaurentInfo restaurant_name={restaurant.name} />
        </View>
      ))}
    </TouchableOpacity>
  );
};

export default RestaurentItems;

const RestaurentImage = ({ image }) => (
  <>
    <Image
      style={{ width: "100%", height: 180 }}
      source={{
        uri: image,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", top: 5, right: 5 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);
const RestaurentInfo = ({ restaurant_name }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{restaurant_name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 ??? min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>4</Text>
    </View>
  </View>
);
const styles = StyleSheet.create({});

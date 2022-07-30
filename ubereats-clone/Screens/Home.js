import {
  SafeAreaView,
  ScrollViewComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import HeaderTabs from "../Components/HeaderTabs";
import SearchBar from "../Components/SearchBar";
import Catogories from "../Components/Catogories";
import RestaurentItems from "../Components/RestaurentItems";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", marginTop: 30, padding: 8 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollViewComponent>
        <Catogories />
        <RestaurentItems />
      </ScrollViewComponent>
    </SafeAreaView>
  );
};

export default Home;

\
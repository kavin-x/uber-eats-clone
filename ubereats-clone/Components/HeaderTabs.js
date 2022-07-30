import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const HeaderTabs = () => {
  const [activeTab, setactiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButtton
        text="Delivery"
        btcolor="white"
        bgcolor="black"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      />
      <HeaderButtton
        text="Pickup"
        btcolor="black"
        bgcolor="white"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      />
    </View>
  );
};

export default HeaderTabs;
const HeaderButtton = ({ text, activeTab, setactiveTab }) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTab === text ? "black" : "white",
      paddingVertical: 10,
      paddingHorizontal: 26,
      borderRadius: 30,
    }}
    onPress={() => setactiveTab(text)}
  >
    <Text
      style={{
        color: activeTab === text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({});

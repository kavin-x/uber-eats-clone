import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";

export default function App() {
  return (<Home/>
    // <SafeAreaView  style={{ backgroundColor: "#eee", flex:1 }}>
    //   <View style={{ backgroundColor: "white",}}>
    //     <Home />
    //     <SearchBar/>
    //   </View>
    //   <Catogories/>
    // </SafeAreaView>
  );
}

import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import AndroidSafeArea from "../StyleSheet/AndroidSafeArea";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 6000);
  }, []);
  return (
    <SafeAreaView
      style={AndroidSafeArea.AndroidSafeArea}
      className="bg-[#00ccbb] flex-1 justify-center items-center"
    >
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation={"slideInUp"}
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text className="text-lg my-5 text-white font-bold text-center">
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
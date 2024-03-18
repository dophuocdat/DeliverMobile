import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    // backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

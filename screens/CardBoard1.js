import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CardBoard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardboard1}>
      <View style={[styles.rectangle, styles.rectanglePosition]} />
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        resizeMode="cover"
        source={require("../assets/rectangle.png")}
      />
      <View style={styles.rectangle1} />
      <Text style={styles.empoweringArtisans}>Penyedia hotel terbaik</Text>
      <Pressable style={styles.buttoncallToAction} accessible="true">
        <View style={[styles.frame, styles.frameLayout]} />
        <Text style={[styles.next, styles.nextTypo]}>Lanjut</Text>
      </Pressable>
      <ImageBackground
        style={styles.orangePurpleRadiantFreshGr}
        resizeMode="cover"
        source={require("../assets/orangepurpleradiantfreshgrocerystorefacebookpost11.png")}
      />
      <Pressable
        style={[styles.frame1, styles.frameLayout]}
        onPress={() => navigation.navigate("CreateAnAccount")}
      />
      <Text style={[styles.lanjut, styles.nextTypo]}>lanjut</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    borderRadius: Border.br_2xl,
    position: "absolute",
    backgroundColor: Color.teal_100,
  },
  nextTypo: {
    color: Color.inputBackgroundDefault,
    textAlign: "center",
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  rectangle: {
    top: 812,
    height: 812,
    backgroundColor: Color.teal_100,
  },
  rectangleIcon: {
    top: 358,
    height: 454,
  },
  rectangle1: {
    top: 191,
    left: 31,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.inputBackgroundDefault,
    width: 307,
    height: 334,
    position: "absolute",
  },
  empoweringArtisans: {
    marginTop: 86,
    width: "75.47%",
    top: "50%",
    left: "10.28%",
    color: Color.teal_100,
    textAlign: "center",
    fontFamily: FontFamily.montserrat,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: 0,
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  frame: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  next: {
    width: "82.64%",
    top: "31.25%",
    left: "7.07%",
    fontSize: FontSize.large18pxBold_size,
    lineHeight: 18,
    fontWeight: "600",
  },
  buttoncallToAction: {
    top: 743,
    left: 34,
    width: 306,
    height: 48,
    position: "absolute",
  },
  orangePurpleRadiantFreshGr: {
    top: 82,
    left: 21,
    width: 319,
    height: 296,
    position: "absolute",
  },
  frame1: {
    height: "7.5%",
    width: "85%",
    top: "85.47%",
    right: "8.06%",
    bottom: "7.03%",
    left: "6.94%",
  },
  lanjut: {
    top: 549,
    left: 152,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: 0,
    fontSize: FontSize.size_2xl,
    color: Color.inputBackgroundDefault,
  },
  cardboard1: {
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.teal_100,
  },
});

export default CardBoard1;

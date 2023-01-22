import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const CreateAnAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createAnAccount}>
      <Image
        style={styles.image11Icon}
        resizeMode="cover"
        source={require("../assets/image-11.png")}
      />
      <Text style={styles.login}>Login</Text>
      <View style={styles.orConnectWithWrapper}>
        <Text
          style={[
            styles.orConnectWith,
            styles.login2Typo,
            styles.frameChildPosition,
          ]}
        >
          or connect with
        </Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Pressable
          style={[
            styles.frameChild,
            styles.frameChildLayout,
            styles.frameChildPosition,
          ]}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={[styles.login1, styles.loginTypo]}>Login</Text>
      </Pressable>
      <Text style={[styles.bySigningInContainer, styles.frameIconLayout]}>
        <Text
          style={styles.bySigningIn}
        >{`By signing in you are agreeing our `}</Text>
        <Text style={styles.termAndPrivacy}>Term and privacy polic</Text>
        <Text style={styles.y}>y</Text>
      </Text>
      <Text style={[styles.login2, styles.login2Typo]}>Login</Text>
      <Text style={[styles.emailAddress, styles.passwordTypo1]}>
        Email Address
      </Text>
      <Text style={[styles.password, styles.passwordTypo1]}>Password</Text>
      <Text style={[styles.register, styles.passwordTypo1]}>Register</Text>
      <Image
        style={styles.mailIcon}
        resizeMode="cover"
        source={require("../assets/mail.png")}
      />
      <Image
        style={styles.lockIcon}
        resizeMode="cover"
        source={require("../assets/lock.png")}
      />
      <Image
        style={styles.createAnAccountChild}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={[styles.createAnAccountItem, styles.createPosition]} />
      <View style={[styles.createAnAccountInner, styles.createPosition]} />
      <Text style={[styles.forgetPassword, styles.passwordTypo]}>
        Forget password
      </Text>
      <View style={styles.rememberPasswordParent}>
        <Text style={[styles.rememberPassword, styles.passwordTypo]}>
          Remember password
        </Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/rectangle-7.png")}
        />
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-2.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Image
        style={styles.createAnAccountChild1}
        resizeMode="cover"
        source={require("../assets/group-16.png")}
      />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract.png")}
      />
      <Text style={[styles.loginWitTouch, styles.loginTypo]}>
        Login wit touch ID
      </Text>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame-450.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  login2Typo: {
    textAlign: "left",
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  frameChildPosition: {
    left: 0,
    top: 0,
  },
  frameChildLayout: {
    height: 45,
    width: 318,
    position: "absolute",
  },
  loginTypo: {
    color: Color.inputBackgroundDefault,
    textAlign: "left",
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  frameIconLayout: {
    height: 72,
    position: "absolute",
  },
  passwordTypo1: {
    color: Color.gray_500,
    textAlign: "left",
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  createPosition: {
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 1,
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  image11Icon: {
    top: 656,
    left: 23,
    borderRadius: 229,
    width: 361,
    height: 312,
    position: "absolute",
  },
  login: {
    top: 38,
    left: 42,
    fontSize: 40,
    color: Color.globalBlack,
    width: 284,
    height: 50,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  orConnectWith: {
    color: "#747070",
    width: 183,
  },
  orConnectWithWrapper: {
    top: 566,
    left: 124,
    height: 35,
    width: 183,
    position: "absolute",
  },
  frameChild: {
    borderRadius: 5,
    backgroundColor: Color.teal_300,
    shadowRadius: 4,
    elevation: 4,
    height: 45,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
  },
  login1: {
    top: 5,
    left: 133,
    width: 94,
  },
  rectangleParent: {
    top: 523,
    left: 24,
    height: 45,
    backgroundColor: Color.inputBackgroundDefault,
  },
  bySigningIn: {
    color: Color.gray_700,
  },
  termAndPrivacy: {
    color: Color.teal_300,
  },
  y: {
    color: Color.gray_800,
  },
  bySigningInContainer: {
    top: 98,
    left: 70,
    width: 233,
    fontSize: FontSize.size_4xl,
    height: 72,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
  },
  login2: {
    left: 115,
    top: 199,
    color: Color.gray_800,
  },
  emailAddress: {
    top: 281,
    left: 59,
  },
  password: {
    top: 371,
    left: 66,
  },
  register: {
    left: 187,
    top: 199,
  },
  mailIcon: {
    top: 285,
    height: 24,
    width: 24,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  lockIcon: {
    top: 377,
    left: 26,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  createAnAccountChild: {
    top: 322,
    width: 317,
    height: 1,
    left: 26,
    position: "absolute",
  },
  createAnAccountItem: {
    top: 243,
    left: 136,
    borderColor: "#000",
    width: 44,
  },
  createAnAccountInner: {
    top: 418,
    borderColor: "#a6a6a6",
    width: 318,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 24,
  },
  forgetPassword: {
    top: 449,
    left: 231,
    width: 143,
    color: Color.teal_300,
  },
  rememberPassword: {
    left: 30,
    width: 176,
    color: Color.gray_700,
    top: 0,
  },
  groupChild: {
    left: -2,
    borderRadius: 2,
    width: 25,
    height: 25,
    top: 0,
    position: "absolute",
  },
  rememberPasswordParent: {
    top: 450,
    left: 45,
    width: 206,
    height: 29,
    position: "absolute",
  },
  groupIcon: {
    top: 386,
    left: 305,
    width: 33,
    height: 18,
    position: "absolute",
  },
  rectangleIcon: {
    top: 1,
    left: 537,
    height: 895,
    width: 414,
    position: "absolute",
  },
  createAnAccountChild1: {
    top: 577,
    left: 13,
    width: 374,
    height: 548,
    position: "absolute",
  },
  subtractIcon: {
    height: 218,
    width: 414,
  },
  loginWitTouch: {
    top: 868,
    left: 150,
    width: 125,
  },
  frameIcon: {
    top: 781,
    left: 170,
    borderRadius: Border.br_sm,
    width: 69,
  },
  createAnAccount: {
    shadowRadius: 23,
    elevation: 23,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.inputBackgroundDefault,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default CreateAnAccount;

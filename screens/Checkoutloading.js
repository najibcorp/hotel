import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../GlobalStyles";

const Checkoutloading = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkoutloading}>
      <Pressable
        style={[styles.loadingScreen, styles.headerPosition]}
        onPress={() => navigation.navigate("SuccessfulPayment")}
      >
        <View style={styles.loading}>
          <Image
            style={styles.loadingIcon}
            resizeMode="cover"
            source={require("../assets/loading.png")}
          />
          <Text style={[styles.textLoading01, styles.mt16]}>LOADING PESAN</Text>
        </View>
      </Pressable>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={styles.barBg}>
          <View style={[styles.android, styles.androidLayout]}>
            <View style={styles.statusBarContents}>
              <Image
                style={styles.boundsIcon}
                resizeMode="cover"
                source={require("../assets/bounds4.png")}
              />
              <Image
                style={[
                  styles.wifiIcon,
                  styles.iconPosition,
                  styles.iconPosition1,
                ]}
                resizeMode="cover"
                source={require("../assets/wifi.png")}
              />
              <Image
                style={[
                  styles.receptionIcon,
                  styles.iconPosition,
                  styles.iconPosition1,
                ]}
                resizeMode="cover"
                source={require("../assets/reception.png")}
              />
              <Image
                style={[styles.batteryIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/battery.png")}
              />
              <View style={[styles.time, styles.timeLayout]}>
                <Text
                  style={[styles.text, styles.textFlexBox, styles.timeLayout]}
                >
                  12:30
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.navigationBar, styles.barBg]}
          onPress={() => navigation.navigate("Checkoutscreen")}
        >
          <Image
            style={[styles.chevronLeftIcon, styles.androidLayout]}
            resizeMode="cover"
            source={require("../assets/chevronleft.png")}
          />
          <View style={[styles.titleWrapper, styles.ml8]}>
            <Text style={[styles.titleScreen01, styles.textFlexBox]}>
              TRANSAKSI
            </Text>
          </View>
          <View style={styles.ml8}>
            <View style={styles.navigationBox1}>
              <Image
                style={styles.iconLeft}
                resizeMode="cover"
                source={require("../assets/icon-left.png")}
              />
              <Image
                style={[styles.dividerIcon, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/divider.png")}
              />
              <Image
                style={[styles.iconLeft, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/icon-right.png")}
              />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: Margin.m_xl,
  },
  ml8: {
    marginLeft: Margin.m_xs,
  },
  headerPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  androidLayout: {
    height: 24,
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "25%",
    maxHeight: "100%",
    position: "absolute",
  },
  iconPosition1: {
    top: "25%",
    height: "50%",
    bottom: "25%",
  },
  timeLayout: {
    width: 33,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.inputBackgroundDefault,
  },
  barBg: {
    backgroundColor: Color.paginationFullBackgroundCurrent,
    alignSelf: "stretch",
  },
  loadingIcon: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  textLoading01: {
    fontSize: FontSize.base14pxMedium_size,
    lineHeight: 21,
    color: Color.inputTextFilled,
    textAlign: "center",
    fontFamily: FontFamily.xSmall10pxRegular,
    alignSelf: "stretch",
  },
  loading: {
    marginTop: -38.5,
    marginLeft: -164,
    top: "50%",
    left: "50%",
    width: 328,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  loadingScreen: {
    top: 80,
    bottom: 0,
  },
  boundsIcon: {
    right: -242,
    maxHeight: "100%",
    width: 118,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  wifiIcon: {
    right: 94,
    width: 16,
  },
  receptionIcon: {
    right: 72,
    width: 12,
  },
  batteryIcon: {
    height: "54.17%",
    right: 50,
    width: 8,
    top: "20.83%",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    top: "0%",
    height: "100%",
    textAlign: "left",
    color: Color.inputBackgroundDefault,
    width: 33,
    right: 0,
  },
  time: {
    height: "62.5%",
    right: 8,
    bottom: "16.67%",
    opacity: 0.9,
    top: "20.83%",
  },
  statusBarContents: {
    width: 118,
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: 0,
    position: "absolute",
  },
  android: {
    alignSelf: "stretch",
  },
  chevronLeftIcon: {
    width: 24,
  },
  titleScreen01: {
    fontSize: FontSize.large18pxBold_size,
    lineHeight: 27,
    fontWeight: "700",
    display: "flex",
    fontFamily: FontFamily.xSmall10pxRegular,
    alignItems: "center",
    flex: 1,
  },
  titleWrapper: {
    flexDirection: "row",
    flex: 1,
  },
  iconLeft: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  dividerIcon: {
    width: 1,
    height: 16,
  },
  navigationBox1: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.navigationBarNavboxBackgroundOnDark,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_4xs,
    flexDirection: "row",
  },
  navigationBar: {
    height: 56,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    top: 0,
  },
  checkoutloading: {
    backgroundColor: Color.inputBackgroundDefault,
    width: "100%",
    height: 640,
    overflow: "hidden",
    flex: 1,
  },
});

export default Checkoutloading;

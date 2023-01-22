import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Padding,
  Border,
} from "../GlobalStyles";

const SuccessfulPayment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.successfulPayment}>
      <View style={styles.header}>
        <View style={styles.header}>
          <View style={[styles.android, styles.androidLayout]}>
            <View style={styles.statusBarContents}>
              <Image
                style={styles.boundsIcon}
                resizeMode="cover"
                source={require("../assets/bounds1.png")}
              />
              <Image
                style={[styles.wifiIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/wifi2.png")}
              />
              <Image
                style={[styles.receptionIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/reception2.png")}
              />
              <Image
                style={styles.batteryIcon}
                resizeMode="cover"
                source={require("../assets/battery2.png")}
              />
              <View style={styles.time}>
                <Text style={styles.text}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.navigationBar, styles.wrapperFlexBox]}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleLabel}>Thông tin thanh toán</Text>
          </View>
          <View style={styles.ml8}>
            <View style={styles.navigationBox1}>
              <Image
                style={styles.iconLeft}
                resizeMode="cover"
                source={require("../assets/icon-left2.png")}
              />
              <Image
                style={[styles.dividerIcon, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/divider.png")}
              />
              <Image
                style={[styles.iconLeft, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/icon-right2.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.paymentStatusPage}>
        <View style={styles.paymentStatusContent}>
          <View style={[styles.sectionsstatus, styles.wrapperFlexBox]}>
            <ImageBackground
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image.png")}
            >
              <View style={styles.row}>
                <View style={[styles.scaleUnitHorizontal, styles.scaleBorder]}>
                  <View style={styles.top}>
                    <Image
                      style={[styles.aspectRatioIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/-aspect-ratio12.png")}
                    />
                  </View>
                  <View style={styles.top}>
                    <Image
                      style={[styles.aspectRatioIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/-aspect-ratio12.png")}
                    />
                  </View>
                </View>
                <View style={[styles.scaleUnitHorizontal1, styles.scaleBorder]}>
                  <View style={styles.top}>
                    <Image
                      style={[styles.aspectRatioIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/-aspect-ratio12.png")}
                    />
                  </View>
                  <View style={styles.top}>
                    <Image
                      style={[styles.aspectRatioIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/-aspect-ratio12.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.row}>
                <View style={[styles.scaleUnitHorizontal, styles.scaleBorder]}>
                  <View style={styles.top}>
                    <Image
                      style={[styles.aspectRatioIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/-aspect-ratio12.png")}
                    />
                  </View>
                  <View style={styles.top}>
                    <Image
                      style={[styles.aspectRatioIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/-aspect-ratio12.png")}
                    />
                  </View>
                </View>
                <View style={[styles.scaleUnitHorizontal1, styles.scaleBorder]}>
                  <View style={styles.top}>
                    <Image
                      style={[styles.aspectRatioIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/-aspect-ratio12.png")}
                    />
                  </View>
                  <View style={styles.top}>
                    <Image
                      style={[styles.aspectRatioIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/-aspect-ratio12.png")}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
            <View style={[styles.header, styles.mt16]}>
              <Text style={[styles.titlePaymentStatus01, styles.ctaTypo]}>
                TRANSAKSI BERHASIL
              </Text>
              <Text style={[styles.message, styles.mt4, styles.messageTypo]}>
                Tham khảo hàng trăm điểm đến khác trên ngay bây giờ!
              </Text>
            </View>
          </View>
          <View style={styles.header}>
            <View style={styles.header}>
              <View
                style={[styles.listmasterBundle, styles.buttonGroupSpaceBlock]}
              >
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <View style={styles.titleWrapper}>
                    <View style={styles.wrapper1}>
                      <View style={[styles.listlabel, styles.wrapperFlexBox]}>
                        <Text
                          style={[
                            styles.labelPaymentStatus01,
                            styles.messageTypo,
                          ]}
                        >
                          BANK
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.listsuffix,
                      styles.ml8,
                      styles.wrapperFlexBox,
                    ]}
                  >
                    <Text style={[styles.dataValue, styles.messageTypo]}>
                      ABC123
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.dividerIcon1, styles.mt12, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/divider1.png")}
                />
              </View>
            </View>
            <View style={styles.list1}>
              <View style={styles.listmasterBundle1}>
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <View style={styles.titleWrapper}>
                    <View style={styles.wrapper1}>
                      <View style={[styles.listlabel, styles.wrapperFlexBox]}>
                        <Text
                          style={[
                            styles.labelPaymentStatus01,
                            styles.messageTypo,
                          ]}
                        >
                          Label
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.listsuffix,
                      styles.ml8,
                      styles.wrapperFlexBox,
                    ]}
                  >
                    <Text style={[styles.dataValue, styles.messageTypo]}>
                      Data
                    </Text>
                  </View>
                </View>
                <Image
                  style={[
                    styles.aspectRatioIcon,
                    styles.mt8,
                    styles.iconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/divider1.png")}
                />
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.listmasterBundle1}>
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <View style={styles.titleWrapper}>
                    <View style={styles.wrapper1}>
                      <View style={[styles.listlabel, styles.wrapperFlexBox]}>
                        <Text
                          style={[
                            styles.labelPaymentStatus01,
                            styles.messageTypo,
                          ]}
                        >
                          ATAS NAMA
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.listsuffix,
                      styles.ml8,
                      styles.wrapperFlexBox,
                    ]}
                  >
                    <Text style={[styles.dataValue, styles.messageTypo]}>
                      Momo
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.dividerIcon1, styles.mt8, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/divider1.png")}
                />
              </View>
            </View>
            <View style={styles.header}>
              <View
                style={[styles.listmasterBundle, styles.buttonGroupSpaceBlock]}
              >
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <View style={styles.titleWrapper}>
                    <View style={styles.wrapper1}>
                      <View style={[styles.listlabel, styles.wrapperFlexBox]}>
                        <Text
                          style={[
                            styles.labelPaymentStatus01,
                            styles.messageTypo,
                          ]}
                        >
                          DI BAYAR
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.listsuffix,
                      styles.ml8,
                      styles.wrapperFlexBox,
                    ]}
                  >
                    <Text style={[styles.dataValue, styles.messageTypo]}>
                      RP450000
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.dividerIcon1, styles.mt12, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/divider1.png")}
                />
              </View>
            </View>
            <View style={[styles.buttonGroup, styles.buttonGroupSpaceBlock]}>
              <View style={styles.buttonbrand}>
                <View style={[styles.button, styles.buttonFlexBox]}>
                  <Image
                    style={[styles.iconWrapper, styles.androidLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-wrapper1.png")}
                  />
                  <Text
                    style={[styles.ctaBacktoHome01, styles.ml8, styles.ctaTypo]}
                  >
                    KEMBALI
                  </Text>
                </View>
              </View>
              <Pressable
                style={[styles.buttonbrand, styles.ml8]}
                onPress={() => navigation.navigate("Detailtransaksi")}
              >
                <View style={[styles.button1, styles.buttonFlexBox]}>
                  <Image
                    style={[styles.iconWrapper, styles.androidLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-wrapper11.png")}
                  />
                  <Text
                    style={[
                      styles.ctaViewDetails01,
                      styles.ml8,
                      styles.ctaTypo,
                    ]}
                  >
                    TRANSAKSI
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: Margin.m_xs,
  },
  mt4: {
    marginTop: Margin.m_4xs,
  },
  mt16: {
    marginTop: Margin.m_xl,
  },
  mt12: {
    marginTop: Margin.m_md,
  },
  mt8: {
    marginTop: Margin.m_xs,
  },
  androidLayout: {
    height: 24,
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "25%",
    top: "25%",
    height: "50%",
    maxHeight: "100%",
    position: "absolute",
  },
  wrapperFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  scaleBorder: {
    width: 90,
    borderWidth: 0.5,
    borderRadius: 0.001,
    borderColor: "#fff",
    borderStyle: "dashed",
    top: 0,
    opacity: 0.7,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
  },
  ctaTypo: {
    lineHeight: 24,
    fontSize: FontSize.medium16pxRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  messageTypo: {
    lineHeight: 21,
    fontSize: FontSize.base14pxMedium_size,
    fontFamily: FontFamily.xSmall10pxRegular,
    color: Color.inputTextFilled,
  },
  buttonGroupSpaceBlock: {
    paddingTop: Padding.p_md,
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_md,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
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
    bottom: "25%",
    maxHeight: "100%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    color: Color.inputTextFilled,
    width: 33,
    right: 0,
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  time: {
    height: "62.5%",
    right: 8,
    bottom: "16.67%",
    opacity: 0.9,
    width: 33,
    top: "20.83%",
    position: "absolute",
  },
  statusBarContents: {
    width: 118,
    bottom: "0%",
    right: 0,
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  android: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  header: {
    alignSelf: "stretch",
  },
  titleLabel: {
    fontSize: FontSize.large18pxBold_size,
    lineHeight: 27,
    display: "none",
    fontFamily: FontFamily.xSmall10pxRegular,
    fontWeight: "700",
    alignItems: "center",
    textAlign: "left",
    color: Color.inputTextFilled,
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
    backgroundColor: Color.navigationBarNavboxBackgroundOnLight,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_4xs,
    flexDirection: "row",
  },
  navigationBar: {
    height: 56,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_2xl,
    flexDirection: "row",
  },
  aspectRatioIcon: {
    height: 0,
  },
  top: {
    opacity: 0.7,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  scaleUnitHorizontal: {
    left: 0,
    opacity: 0.7,
  },
  scaleUnitHorizontal1: {
    left: 90,
    opacity: 0.7,
  },
  row: {
    height: 90,
    opacity: 0,
    alignSelf: "stretch",
  },
  imageIcon: {
    borderRadius: Border.br_2xs,
    width: 180,
  },
  titlePaymentStatus01: {
    color: Color.aliasPositive,
    textAlign: "center",
    fontWeight: "700",
    alignSelf: "stretch",
  },
  message: {
    textAlign: "center",
    display: "none",
    alignSelf: "stretch",
  },
  sectionsstatus: {
    padding: Padding.p_2xl,
  },
  labelPaymentStatus01: {
    textAlign: "left",
  },
  listlabel: {
    width: 38,
    flexDirection: "row",
  },
  wrapper1: {
    height: 21,
    flexDirection: "row",
    flex: 1,
  },
  dataValue: {
    textAlign: "right",
    fontWeight: "700",
  },
  listsuffix: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  wrapper: {
    flexDirection: "row",
  },
  dividerIcon1: {
    height: 1,
  },
  listmasterBundle: {
    backgroundColor: Color.inputBackgroundDefault,
  },
  listmasterBundle1: {
    paddingTop: Padding.p_2xs,
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
    backgroundColor: Color.inputBackgroundDefault,
  },
  list1: {
    display: "none",
    alignSelf: "stretch",
  },
  iconWrapper: {
    width: 24,
    display: "none",
    overflow: "hidden",
  },
  ctaBacktoHome01: {
    color: Color.paginationFullBackgroundCurrent,
    textAlign: "center",
  },
  button: {
    borderStyle: "solid",
    borderColor: "#1a94ff",
    borderWidth: 1,
  },
  buttonbrand: {
    height: 40,
    flex: 1,
  },
  ctaViewDetails01: {
    color: Color.inputBackgroundDefault,
    textAlign: "center",
  },
  button1: {
    backgroundColor: Color.paginationFullBackgroundCurrent,
  },
  buttonGroup: {
    paddingBottom: Padding.p_2xs,
    flexDirection: "row",
  },
  paymentStatusContent: {
    alignSelf: "stretch",
    backgroundColor: Color.inputBackgroundDefault,
  },
  paymentStatusPage: {
    overflow: "hidden",
    alignSelf: "stretch",
    backgroundColor: Color.inputBackgroundDefault,
  },
  successfulPayment: {
    height: 640,
    width: "100%",
    flex: 1,
    backgroundColor: Color.inputBackgroundDefault,
  },
});

export default SuccessfulPayment;

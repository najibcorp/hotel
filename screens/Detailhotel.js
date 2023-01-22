import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

const Detailhotel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detailhotel}>
      <View style={[styles.carouselSection, styles.buttonFlexBox]}>
        <ImageBackground
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image1.png")}
        >
          <View style={styles.row}>
            <View style={[styles.scaleUnitHorizontal, styles.scaleBorder1]}>
              <View style={styles.top}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio20.png")}
                />
              </View>
              <View style={styles.top}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio20.png")}
                />
              </View>
            </View>
            <View style={[styles.scaleUnitHorizontal1, styles.scaleBorder1]}>
              <View style={styles.top}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio20.png")}
                />
              </View>
              <View style={styles.top}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio20.png")}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <LinearGradient
          style={[styles.topGradient, styles.gradientBg]}
          locations={[0.25, 1]}
          colors={["#000", "rgba(0, 0, 0, 0)"]}
        />
        <LinearGradient
          style={[styles.bottomGradient, styles.gradientBg]}
          locations={[0.25, 1]}
          colors={["#000", "rgba(0, 0, 0, 0)"]}
        />
        <View
          style={[
            styles.pagination,
            styles.paginationPosition,
            styles.listlabelFlexBox,
          ]}
        >
          <View>
            <View style={styles.slickBg} />
          </View>
          <View style={styles.ml4}>
            <View style={styles.slick1} />
          </View>
          <View style={styles.ml4}>
            <View style={styles.slick1} />
          </View>
          <View style={styles.ml4}>
            <View style={styles.slick1} />
          </View>
          <View style={styles.ml4}>
            <View style={styles.slick1} />
          </View>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.overviewSection}>
          <View style={styles.sectionSpaceBlock}>
            <View style={[styles.sectionHeader, styles.listlabelFlexBox]}>
              <Text
                style={[
                  styles.titleHotelDetails01,
                  styles.labelClr,
                  styles.labelTypo,
                  styles.ctaEditSearch01Layout,
                ]}
              >
                HOTEL RAHAYU
              </Text>
            </View>
            <View style={[styles.contenthotelDetailsoverview, styles.mt12]}>
              <View style={[styles.typeAndStar, styles.typeAndStarSpaceBlock]}>
                <Text style={[styles.labelType01, styles.labelClr]}>
                  BINTANG
                </Text>
                <View style={[styles.ratingdisplay, styles.ml4]}>
                  <Image
                    style={[styles.ratingunitIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/ratingunit.png")}
                  />
                  <Image
                    style={[styles.ratingunitIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/ratingunit.png")}
                  />
                  <Image
                    style={[styles.ratingunitIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/ratingunit.png")}
                  />
                  <Image
                    style={[styles.ratingunitIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/ratingunit.png")}
                  />
                  <Image
                    style={[styles.ratingunitIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/ratingunit.png")}
                  />
                </View>
              </View>
              <View style={[styles.overviewSection, styles.mt12]}>
                <View style={styles.contenthotelDetailsoverview}>
                  <View style={[styles.sectionHeader, styles.listlabelFlexBox]}>
                    <View style={styles.ratingdisplay}>
                      <Image
                        style={[styles.iconWrapper, styles.iconWrapperLayout]}
                        resizeMode="cover"
                        source={require("../assets/icon-wrapper21.png")}
                      />
                    </View>
                    <View style={[styles.listcontent, styles.ml8]}>
                      <View style={styles.listcontent}>
                        <View
                          style={[styles.listlabel, styles.listlabelFlexBox]}
                        >
                          <Text
                            style={[
                              styles.contentAddress01,
                              styles.labelLayout,
                              styles.labelClr,
                            ]}
                          >{`SOLO - JAWA TENGAH `}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Image
                    style={[styles.dividerIcon, styles.mt8, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/divider1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.overviewSection, styles.mt8]}>
          <View style={[styles.section1, styles.sectionSpaceBlock]}>
            <View style={[styles.sectionHeader, styles.listlabelFlexBox]}>
              <Text
                style={[
                  styles.titleHotelDetails01,
                  styles.labelClr,
                  styles.labelTypo,
                  styles.ctaEditSearch01Layout,
                ]}
              >
                HOTEL TERBAIK
              </Text>
              <View style={[styles.buttonbrand, styles.ml16]}>
                <View style={[styles.button, styles.buttonFlexBox]}>
                  <Text
                    style={[
                      styles.ctaViewAll01,
                      styles.textClr,
                      styles.labelLayout,
                    ]}
                  >
                    LAINNYA
                  </Text>
                  <Image
                    style={[styles.iconWrapper1, styles.ml8]}
                    resizeMode="cover"
                    source={require("../assets/icon-wrapper22.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.overviewSection, styles.mt12]}>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.textClr, styles.labelTypo]}>
                  8,6
                </Text>
                <View style={[styles.listParent, styles.ml8]}>
                  <View style={styles.list}>
                    <View style={styles.overviewSection}>
                      <View
                        style={[styles.sectionHeader, styles.listlabelFlexBox]}
                      >
                        <View
                          style={[styles.listlabel, styles.listlabelFlexBox]}
                        >
                          <View>
                            <ImageBackground
                              style={styles.imageIcon1}
                              resizeMode="cover"
                              source={require("../assets/image2.png")}
                            >
                              <View style={styles.row1}>
                                <View
                                  style={[
                                    styles.scaleUnitHorizontal2,
                                    styles.scaleBorder2,
                                  ]}
                                >
                                  <View style={styles.top}>
                                    <Image
                                      style={styles.iconLayout}
                                      resizeMode="cover"
                                      source={require("../assets/-aspect-ratio24.png")}
                                    />
                                  </View>
                                  <View style={styles.top}>
                                    <Image
                                      style={styles.iconLayout}
                                      resizeMode="cover"
                                      source={require("../assets/-aspect-ratio24.png")}
                                    />
                                  </View>
                                </View>
                                <View
                                  style={[
                                    styles.scaleUnitHorizontal3,
                                    styles.scaleBorder2,
                                  ]}
                                >
                                  <View style={styles.top}>
                                    <Image
                                      style={styles.iconLayout}
                                      resizeMode="cover"
                                      source={require("../assets/-aspect-ratio24.png")}
                                    />
                                  </View>
                                  <View style={styles.top}>
                                    <Image
                                      style={styles.iconLayout}
                                      resizeMode="cover"
                                      source={require("../assets/-aspect-ratio24.png")}
                                    />
                                  </View>
                                </View>
                              </View>
                              <View style={styles.row1}>
                                <View
                                  style={[
                                    styles.scaleUnitHorizontal2,
                                    styles.scaleBorder2,
                                  ]}
                                >
                                  <View style={styles.top}>
                                    <Image
                                      style={styles.iconLayout}
                                      resizeMode="cover"
                                      source={require("../assets/-aspect-ratio24.png")}
                                    />
                                  </View>
                                  <View style={styles.top}>
                                    <Image
                                      style={styles.iconLayout}
                                      resizeMode="cover"
                                      source={require("../assets/-aspect-ratio24.png")}
                                    />
                                  </View>
                                </View>
                                <View
                                  style={[
                                    styles.scaleUnitHorizontal3,
                                    styles.scaleBorder2,
                                  ]}
                                >
                                  <View style={styles.top}>
                                    <Image
                                      style={styles.iconLayout}
                                      resizeMode="cover"
                                      source={require("../assets/-aspect-ratio24.png")}
                                    />
                                  </View>
                                  <View style={styles.top}>
                                    <Image
                                      style={styles.iconLayout}
                                      resizeMode="cover"
                                      source={require("../assets/-aspect-ratio24.png")}
                                    />
                                  </View>
                                </View>
                              </View>
                            </ImageBackground>
                          </View>
                          <View style={[styles.wrapper3, styles.ml8]}>
                            <View
                              style={[
                                styles.listlabel1,
                                styles.listlabelFlexBox,
                              ]}
                            >
                              <Text
                                style={[
                                  styles.labelPoint01,
                                  styles.textClr,
                                  styles.labelLayout,
                                  styles.labelTypo,
                                ]}
                              >
                                DISUKAI
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.dividerIcon,
                          styles.mt8,
                          styles.iconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider83.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.listadditionalInformation}>
                    <Text style={styles.descriptionTypo}>
                      3000000 ORANG MENYUKAIMU
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.ratingdisplay, styles.mt16]}>
                <View style={styles.chipBorder}>
                  <View style={[styles.chipcontent, styles.listlabelFlexBox]}>
                    <Text
                      style={[
                        styles.labelKeyword01,
                        styles.labelLayout,
                        styles.labelClr,
                      ]}
                    >
                      TEMPAT NYAMAN (16)
                    </Text>
                  </View>
                </View>
                <View style={[styles.chipBorder, styles.ml8]}>
                  <View style={[styles.chipcontent, styles.listlabelFlexBox]}>
                    <Text
                      style={[
                        styles.labelKeyword01,
                        styles.labelLayout,
                        styles.labelClr,
                      ]}
                    >
                      BAGUS (7)
                    </Text>
                  </View>
                </View>
                <View style={[styles.chipBorder, styles.ml8]}>
                  <View style={[styles.chipcontent, styles.listlabelFlexBox]}>
                    <Text
                      style={[
                        styles.labelKeyword01,
                        styles.labelLayout,
                        styles.labelClr,
                      ]}
                    >
                      {" "}
                      BAIK(55)
                    </Text>
                  </View>
                </View>
                <View style={[styles.chip3, styles.ml8, styles.chipBorder]}>
                  <View style={[styles.chipcontent, styles.listlabelFlexBox]}>
                    <Text
                      style={[
                        styles.labelKeyword01,
                        styles.labelLayout,
                        styles.labelClr,
                      ]}
                    >
                      Dịch vụ xuất sắc (55)
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.overviewSection, styles.mt16]}>
                <View style={[styles.moduleheader1, styles.listlabelFlexBox]}>
                  <Text
                    style={[
                      styles.titleTopReviews01,
                      styles.labelLayout,
                      styles.labelClr,
                      styles.labelTypo,
                    ]}
                  >
                    Đánh giá hàng đầu
                  </Text>
                </View>
                <View style={[styles.reviewListing, styles.mt8]}>
                  <View style={styles.list1}>
                    <View
                      style={[
                        styles.listmasterBundle2,
                        styles.listmasterSpaceBlock,
                      ]}
                    >
                      <View
                        style={[styles.sectionHeader, styles.listlabelFlexBox]}
                      >
                        <View style={styles.listcontent}>
                          <View style={styles.listParent}>
                            <View
                              style={[
                                styles.sectionHeader,
                                styles.listlabelFlexBox,
                              ]}
                            >
                              <Text
                                style={[
                                  styles.contentAddress01,
                                  styles.labelLayout,
                                  styles.labelClr,
                                ]}
                              />
                            </View>
                            <View style={[styles.ratingdisplay, styles.mt4]}>
                              <Text
                                style={[
                                  styles.description,
                                  styles.descriptionTypo,
                                ]}
                              >
                                Nguyen V.A.
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[styles.iconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider84.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.list1, styles.ml8]}>
                    <View
                      style={[
                        styles.listmasterBundle2,
                        styles.listmasterSpaceBlock,
                      ]}
                    >
                      <View
                        style={[styles.sectionHeader, styles.listlabelFlexBox]}
                      >
                        <View style={styles.listcontent}>
                          <View style={styles.listParent}>
                            <View
                              style={[
                                styles.sectionHeader,
                                styles.listlabelFlexBox,
                              ]}
                            >
                              <Text
                                style={[
                                  styles.contentAddress01,
                                  styles.labelLayout,
                                  styles.labelClr,
                                ]}
                              >{`Khách sạn mới và đẹp, gần biển đi lại thuận tiện nhân viên nhiệt tình và thân thiện. Xung `}</Text>
                            </View>
                            <View style={[styles.ratingdisplay, styles.mt4]}>
                              <Text
                                style={[
                                  styles.description,
                                  styles.descriptionTypo,
                                ]}
                              >
                                Tran V.B.
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[styles.iconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider84.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sumSectionatHotel}>
        <Image
          style={[styles.dividerIcon4, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/divider86.png")}
        />
        <View style={styles.overviewSection}>
          <View style={[styles.listmasterBundle4, styles.listmasterSpaceBlock]}>
            <View style={styles.ratingdisplay}>
              <View style={styles.ratingdisplay}>
                <Image
                  style={[styles.iconWrapper, styles.iconWrapperLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-wrapper19.png")}
                />
              </View>
              <View style={[styles.listcontent, styles.ml8]}>
                <View style={styles.wrapper3}>
                  <View style={[styles.listlabel1, styles.listlabelFlexBox]}>
                    <Text
                      style={[
                        styles.labelSum02,
                        styles.labelLayout,
                        styles.labelClr,
                        styles.labelTypo,
                      ]}
                    >{`SETELAH TEKAN `}</Text>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconLayout, styles.mt8]}
              resizeMode="cover"
              source={require("../assets/divider80.png")}
            />
          </View>
        </View>
        <View style={[styles.buttonBar, styles.buttonSpaceBlock]}>
          <Pressable
            style={styles.row3Layout}
            onPress={() => navigation.navigate("Detailkamar")}
          >
            <View
              style={[
                styles.button1,
                styles.buttonSpaceBlock,
                styles.slickBg,
                styles.buttonFlexBox,
              ]}
            >
              <Image
                style={[styles.iconWrapper3, styles.iconWrapperLayout]}
                resizeMode="cover"
                source={require("../assets/icon-wrapper11.png")}
              />
              <Text
                style={[
                  styles.ctaEditSearch01,
                  styles.ml8,
                  styles.titleLabelClr,
                  styles.ctaEditSearch01Layout,
                ]}
              >
                BOOKING
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.iosHomeIndicator}>
          <View style={[styles.homeIndicator, styles.paginationPosition]} />
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.imageIcon}>
          <View style={[styles.android, styles.iconWrapperLayout]}>
            <View style={[styles.statusBarContents, styles.boundsIconPosition]}>
              <Image
                style={[styles.boundsIcon, styles.boundsIconPosition]}
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
                <Text style={[styles.text1, styles.timeLayout]}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.navigationBar}>
          <Pressable
            style={[
              styles.navTitle,
              styles.navTitlePosition,
              styles.listlabelFlexBox,
            ]}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={styles.buttonneutralReverse}>
              <View
                style={[styles.button2, styles.button2Bg, styles.buttonFlexBox]}
              >
                <Image
                  style={[styles.iconWrapper, styles.iconWrapperLayout]}
                  resizeMode="cover"
                  source={require("../assets/chevronleft.png")}
                />
              </View>
            </View>
            <Text
              style={[
                styles.titleLabel,
                styles.ml8,
                styles.titleLabelClr,
                styles.labelTypo,
              ]}
            >
              App name
            </Text>
          </Pressable>
          <View style={styles.action}>
            <View>
              <View
                style={[
                  styles.navigationBox1,
                  styles.button2Bg,
                  styles.typeAndStarSpaceBlock,
                ]}
              >
                <Image
                  style={styles.iconLeft}
                  resizeMode="cover"
                  source={require("../assets/icon-left5.png")}
                />
                <Image
                  style={[styles.dividerIcon6, styles.ml8]}
                  resizeMode="cover"
                  source={require("../assets/divider.png")}
                />
                <Image
                  style={[styles.iconLeft, styles.ml8]}
                  resizeMode="cover"
                  source={require("../assets/icon-right5.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          style={[styles.logoIcon, styles.navTitlePosition]}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        >
          <View style={[styles.row3, styles.row3Layout]}>
            <View style={[styles.scaleUnitHorizontal6, styles.scaleBorder]}>
              <View style={styles.top}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
              <View style={styles.top}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
            </View>
            <View style={[styles.scaleUnitHorizontal7, styles.scaleBorder]}>
              <View style={styles.top}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
              <View style={styles.top}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
            </View>
            <View style={[styles.scaleUnitHorizontal8, styles.scaleBorder]}>
              <View style={styles.top}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
              <View style={styles.top}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: Margin.m_4xs,
  },
  ml8: {
    marginLeft: Margin.m_xs,
  },
  mt8: {
    marginTop: Margin.m_xs,
  },
  mt12: {
    marginTop: Margin.m_md,
  },
  ml16: {
    marginLeft: Margin.m_xl,
  },
  mt4: {
    marginTop: Margin.m_4xs,
  },
  mt16: {
    marginTop: Margin.m_xl,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  scaleBorder1: {
    width: 180,
    opacity: 0.7,
    borderWidth: 0.5,
    borderRadius: 0.001,
    borderColor: "#fff",
    borderStyle: "dashed",
    top: 0,
    position: "absolute",
  },
  gradientBg: {
    backgroundColor: Color.gradientVerticalBrand0Brand100,
    height: 80,
    position: "absolute",
  },
  paginationPosition: {
    left: "50%",
    position: "absolute",
  },
  listlabelFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  labelClr: {
    color: Color.inputTextFilled,
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  labelTypo: {
    fontWeight: "700",
    textAlign: "left",
  },
  ctaEditSearch01Layout: {
    lineHeight: 24,
    fontSize: FontSize.medium16pxRegular_size,
  },
  typeAndStarSpaceBlock: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_2xs,
  },
  iconLayout1: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  iconWrapperLayout: {
    height: 24,
    overflow: "hidden",
  },
  labelLayout: {
    lineHeight: 21,
    fontSize: FontSize.base14pxMedium_size,
  },
  iconLayout: {
    height: 0,
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  sectionSpaceBlock: {
    paddingVertical: Padding.p_md,
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
    backgroundColor: Color.inputBackgroundDefault,
  },
  textClr: {
    color: Color.paginationFullBackgroundCurrent,
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  scaleBorder2: {
    borderWidth: 0.5,
    borderRadius: 0.001,
    borderColor: "#fff",
    borderStyle: "dashed",
    width: 12,
    opacity: 0.7,
    top: 0,
    position: "absolute",
  },
  chipBorder: {
    height: 29,
    borderWidth: 1,
    borderColor: "#dddde3",
    borderStyle: "solid",
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_2xs,
    borderRadius: Border.br_lg,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.inputBackgroundDefault,
  },
  listmasterSpaceBlock: {
    paddingTop: Padding.p_2xs,
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
  },
  descriptionTypo: {
    color: Color.inputTextPlaceholder,
    lineHeight: 18,
    fontSize: FontSize.small12pxRegular_size,
    textAlign: "left",
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    alignSelf: "stretch",
  },
  slickBg: {
    backgroundColor: Color.paginationFullBackgroundCurrent,
    borderRadius: Border.br_5xs,
  },
  titleLabelClr: {
    color: Color.inputBackgroundDefault,
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  boundsIconPosition: {
    width: 118,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
  navTitlePosition: {
    left: 16,
    position: "absolute",
  },
  button2Bg: {
    backgroundColor: Color.navigationBarNavboxBackgroundOnDark,
    flexDirection: "row",
  },
  row3Layout: {
    height: 40,
    alignSelf: "stretch",
  },
  scaleBorder: {
    width: 40,
    opacity: 0.7,
    borderWidth: 0.5,
    borderRadius: 0.001,
    borderColor: "#fff",
    borderStyle: "dashed",
    top: 0,
    position: "absolute",
  },
  top: {
    opacity: 0.7,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  scaleUnitHorizontal: {
    opacity: 0.7,
    left: 0,
  },
  scaleUnitHorizontal1: {
    left: 180,
    opacity: 0.7,
  },
  row: {
    width: 360,
    height: 180,
    opacity: 0,
  },
  imageIcon: {
    zIndex: 0,
    alignSelf: "stretch",
  },
  topGradient: {
    right: -360,
    left: 360,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    opacity: 0.1,
    zIndex: 1,
    top: 0,
  },
  bottomGradient: {
    bottom: -80,
    opacity: 0.4,
    zIndex: 2,
    left: 0,
    right: 0,
  },
  slick1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.inputBackgroundDefault,
  },
  pagination: {
    marginLeft: -52,
    bottom: 28,
    zIndex: 3,
    flexDirection: "row",
  },
  carouselSection: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  titleHotelDetails01: {
    textAlign: "left",
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  labelType01: {
    fontSize: FontSize.xSmall10pxRegular_size,
    lineHeight: 15,
    textAlign: "left",
  },
  ratingunitIcon: {
    maxHeight: "100%",
    flex: 1,
  },
  ratingdisplay: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  typeAndStar: {
    backgroundColor: Color.globalBlue10,
    borderRadius: Border.br_lg,
    flexDirection: "row",
  },
  iconWrapper: {
    width: 24,
  },
  contentAddress01: {
    textAlign: "left",
    flex: 1,
  },
  listlabel: {
    flexDirection: "row",
    flex: 1,
  },
  listcontent: {
    flexDirection: "row",
    flex: 1,
  },
  dividerIcon: {
    display: "none",
  },
  contenthotelDetailsoverview: {
    alignSelf: "stretch",
    backgroundColor: Color.inputBackgroundDefault,
  },
  overviewSection: {
    alignSelf: "stretch",
  },
  ctaViewAll01: {
    textAlign: "center",
  },
  iconWrapper1: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  button: {
    height: 32,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  buttonbrand: {
    height: 32,
  },
  text: {
    fontSize: FontSize.xLarge32pxBold_size,
    lineHeight: 48,
    textAlign: "left",
  },
  scaleUnitHorizontal2: {
    width: 12,
    opacity: 0.7,
    left: 0,
  },
  scaleUnitHorizontal3: {
    left: 12,
    width: 12,
    opacity: 0.7,
  },
  row1: {
    height: 12,
    opacity: 0,
    alignSelf: "stretch",
  },
  imageIcon1: {
    width: 24,
  },
  labelPoint01: {
    textAlign: "left",
  },
  listlabel1: {
    width: 38,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  wrapper3: {
    height: 21,
    flexDirection: "row",
    flex: 1,
  },
  list: {
    width: 164,
  },
  listadditionalInformation: {
    width: 164,
    flexDirection: "row",
  },
  listParent: {
    flex: 1,
  },
  rating: {
    alignItems: "flex-end",
    borderRadius: Border.br_2xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  labelKeyword01: {
    textAlign: "center",
  },
  chipcontent: {
    flexDirection: "row",
  },
  chip3: {
    display: "none",
  },
  titleTopReviews01: {
    textAlign: "left",
    flex: 1,
  },
  moduleheader1: {
    width: 328,
    display: "none",
    flexDirection: "row",
  },
  description: {
    flex: 1,
  },
  listmasterBundle2: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.dividerThickBackgroundDefault,
  },
  list1: {
    width: 240,
    display: "none",
  },
  reviewListing: {
    flexDirection: "row",
  },
  section1: {
    overflow: "hidden",
  },
  contentWrapper: {
    top: 164,
    borderTopLeftRadius: Border.br_lg,
    borderTopRightRadius: Border.br_lg,
    paddingBottom: Padding.p_2xs,
    backgroundColor: Color.dividerThickBackgroundDefault,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dividerIcon4: {
    height: 1,
  },
  labelSum02: {
    textAlign: "left",
  },
  listmasterBundle4: {
    backgroundColor: Color.inputBackgroundDefault,
  },
  iconWrapper3: {
    display: "none",
    width: 24,
  },
  ctaEditSearch01: {
    textAlign: "center",
  },
  button1: {
    paddingHorizontal: Padding.p_md,
    flexDirection: "row",
  },
  buttonBar: {
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
    backgroundColor: Color.inputBackgroundDefault,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.globalBlack,
    width: 134,
    height: 5,
  },
  iosHomeIndicator: {
    height: 34,
    display: "none",
    alignSelf: "stretch",
    backgroundColor: Color.inputBackgroundDefault,
  },
  sumSectionatHotel: {
    right: -9,
    bottom: 0,
    left: 9,
    position: "absolute",
  },
  boundsIcon: {
    right: -242,
    maxHeight: "100%",
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
  text1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    top: "0%",
    height: "100%",
    width: 33,
    color: Color.inputBackgroundDefault,
    textAlign: "left",
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
    right: 0,
  },
  android: {
    alignSelf: "stretch",
  },
  button2: {
    padding: Padding.p_4xs,
    borderRadius: Border.br_lg,
  },
  buttonneutralReverse: {
    height: 32,
    flexDirection: "row",
  },
  titleLabel: {
    fontSize: FontSize.large18pxBold_size,
    lineHeight: 27,
    display: "none",
    textAlign: "left",
  },
  navTitle: {
    height: 56,
    flexDirection: "row",
    top: 0,
  },
  iconLeft: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  dividerIcon6: {
    width: 1,
    height: 16,
  },
  navigationBox1: {
    borderRadius: Border.br_xs,
  },
  action: {
    top: 16,
    right: 16,
    flexDirection: "row",
    position: "absolute",
  },
  navigationBar: {
    height: 56,
    zIndex: 1,
    alignSelf: "stretch",
  },
  scaleUnitHorizontal6: {
    left: 0,
  },
  scaleUnitHorizontal7: {
    left: 40,
  },
  scaleUnitHorizontal8: {
    left: 80,
  },
  row3: {
    opacity: 0,
  },
  logoIcon: {
    top: 32,
    width: 120,
    display: "none",
    zIndex: 2,
    overflow: "hidden",
  },
  header: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  detailhotel: {
    height: 640,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.inputBackgroundDefault,
  },
});

export default Detailhotel;

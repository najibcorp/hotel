import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Border,
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const Detailkamar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detailkamar}>
      <ImageBackground
        style={[styles.herobannerIcon, styles.herobannerIconPosition]}
        resizeMode="cover"
        source={require("../assets/herobanner.png")}
      >
        <View style={[styles.row, styles.rowFlexBox]}>
          <View
            style={[
              styles.scaleUnitHorizontal,
              styles.scaleLayout,
              styles.scaleBorder1,
            ]}
          >
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.scaleUnitHorizontal1,
              styles.scaleLayout,
              styles.scaleBorder1,
            ]}
          >
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.scaleUnitHorizontal2,
              styles.scaleLayout,
              styles.scaleBorder1,
            ]}
          >
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={[styles.herobannerIcon, styles.herobannerIconPosition]}>
        <View style={styles.statusBar}>
          <View style={styles.android}>
            <View style={styles.statusBarContents}>
              <Image
                style={styles.boundsIcon}
                resizeMode="cover"
                source={require("../assets/bounds.png")}
              />
              <Image
                style={[styles.wifiIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/wifi.png")}
              />
              <Image
                style={[styles.receptionIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/reception.png")}
              />
              <Image
                style={[styles.batteryIcon, styles.batteryIconLayout]}
                resizeMode="cover"
                source={require("../assets/battery.png")}
              />
              <View style={styles.time}>
                <Text style={styles.text}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.navigationBar, styles.sectionSpaceBlock]}>
          <View style={styles.titleWrapper}>
            <Text style={styles.udb}>HOTELUDB</Text>
          </View>
          <View style={[styles.listsuffixFlexBox, styles.ml8]}>
            <View style={styles.iconWrapper}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Image
                  style={styles.iconWrapperLayout}
                  resizeMode="cover"
                  source={require("../assets/icon-wrapper.png")}
                />
              </View>
            </View>
            <View style={styles.badgeFixedScale}>
              <View style={[styles.badgeWrapper, styles.batteryIconLayout]}>
                <View style={[styles.badge, styles.badgeBorder]}>
                  <Text style={styles.text1}>10</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.ml8}>
            <View style={[styles.navigationBox1, styles.button1Layout]}>
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
        </View>
        <ImageBackground
          style={[styles.logoIcon, styles.scaleLayout]}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        >
          <View style={[styles.row1, styles.rowFlexBox]}>
            <View style={[styles.scaleUnitHorizontal3, styles.scaleBorder]}>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
            </View>
            <View style={[styles.scaleUnitHorizontal4, styles.scaleBorder]}>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
            </View>
            <View style={[styles.scaleUnitHorizontal5, styles.scaleBorder]}>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.contentWrapper, styles.herobannerIconPosition]}>
        <View style={styles.hotelOptionsSection}>
          <View style={[styles.section, styles.sectionSpaceBlock]}>
            <View style={[styles.card, styles.cardSpaceBlock]}>
              <View style={styles.sectionContent}>
                <View style={styles.hotelOptionsSection}>
                  <View style={styles.hotelOptionsSection}>
                    <View style={styles.listmasterBundle}>
                      <View style={styles.wrapper}>
                        <View style={styles.listprefix}>
                          <Image
                            style={styles.iconWrapperLayout}
                            resizeMode="cover"
                            source={require("../assets/icon-wrapper21.png")}
                          />
                        </View>
                        <View style={[styles.titleWrapper, styles.ml8]}>
                          <View style={styles.wrapper1}>
                            <View style={styles.wrapper}>
                              <Text
                                style={[
                                  styles.labelDestination01,
                                  styles.valueTypo,
                                ]}
                              >
                                HOTEL RAHAYU
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.placeholderDestination01,
                                  styles.valueTypo,
                                ]}
                              >
                                SOLO - JATENG
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <View style={styles.buttonneutral}>
                            <View
                              style={[
                                styles.button1,
                                styles.button1Layout,
                                styles.buttonFlexBox,
                              ]}
                            >
                              <Image
                                style={styles.iconLeft}
                                resizeMode="cover"
                                source={require("../assets/icon-wrapper27.png")}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider17.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.hotelOptionsSection, styles.mt8]}>
                    <View style={styles.listprefix}>
                      <View style={styles.wrapper1}>
                        <View
                          style={[
                            styles.listmasterBundle1,
                            styles.listmasterSpaceBlock,
                          ]}
                        >
                          <View style={styles.wrapper}>
                            <View style={styles.listprefix}>
                              <Image
                                style={styles.iconWrapperLayout}
                                resizeMode="cover"
                                source={require("../assets/icon-wrapper28.png")}
                              />
                            </View>
                            <View style={[styles.titleWrapper, styles.ml8]}>
                              <View style={styles.wrapper1}>
                                <View style={styles.wrapper}>
                                  <Text
                                    style={[
                                      styles.labelCheckInDate01,
                                      styles.valueTypo,
                                    ]}
                                  >
                                    JANUARI
                                  </Text>
                                </View>
                                <View style={[styles.listprefix, styles.mt4]}>
                                  <Text
                                    style={[
                                      styles.valueCheckInDate01,
                                      styles.valueTypo,
                                    ]}
                                  >
                                    SABTU, 02/02/2022
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
                          <Image
                            style={[
                              styles.dividerIcon2,
                              styles.mt8,
                              styles.iconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/divider91.png")}
                          />
                        </View>
                      </View>
                      <View style={[styles.hotelOptionsSection, styles.ml16]}>
                        <View style={styles.listmasterSpaceBlock}>
                          <View style={styles.wrapper4}>
                            <View style={styles.listcontent2}>
                              <View>
                                <View style={styles.wrapper4}>
                                  <Text
                                    style={[
                                      styles.labelDestination01,
                                      styles.valueTypo,
                                    ]}
                                  />
                                </View>
                                <View style={[styles.listcontent2, styles.mt4]}>
                                  <Text
                                    style={[
                                      styles.valueDuration01,
                                      styles.valueTypo,
                                    ]}
                                  >
                                    1 DIPESAN
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
                          <Image
                            style={[
                              styles.dividerIcon2,
                              styles.mt8,
                              styles.iconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/divider92.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={[styles.checkOut, styles.mt8]}>
                      <View style={styles.listcontent2}>
                        <Text
                          style={[styles.labelCheckOutDate01, styles.checkTypo]}
                        >
                          HINGGA TANGGAL
                        </Text>
                      </View>
                      <View style={[styles.listcontent2, styles.ml4]}>
                        <Text
                          style={[styles.valueCheckOutDate01, styles.checkTypo]}
                        >
                          JUMAT, 03/02/2022
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIconLayout, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider17.png")}
                    />
                  </View>
                  <View style={[styles.hotelOptionsSection, styles.mt8]}>
                    <View
                      style={[
                        styles.listmasterBundle1,
                        styles.listmasterSpaceBlock,
                      ]}
                    >
                      <View style={styles.wrapper}>
                        <View style={styles.listprefix}>
                          <Image
                            style={styles.iconWrapperLayout}
                            resizeMode="cover"
                            source={require("../assets/icon-wrapper29.png")}
                          />
                        </View>
                        <View style={[styles.titleWrapper, styles.ml8]}>
                          <View style={styles.wrapper1}>
                            <View style={styles.wrapper}>
                              <Text
                                style={[
                                  styles.labelDestination01,
                                  styles.valueTypo,
                                ]}
                              >
                                Số phòng và khách
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.valueDuration01,
                                  styles.valueTypo,
                                ]}
                              >
                                1 phòng, 1 người lớn
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider17.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.hotelOptionsSection, styles.mt8]}>
                    <View
                      style={[
                        styles.listmasterBundle1,
                        styles.listmasterSpaceBlock,
                      ]}
                    >
                      <View style={styles.wrapper}>
                        <View style={styles.listprefix}>
                          <Image
                            style={styles.iconWrapperLayout}
                            resizeMode="cover"
                            source={require("../assets/icon-wrapper30.png")}
                          />
                        </View>
                        <View style={[styles.titleWrapper, styles.ml8]}>
                          <View style={styles.wrapper1}>
                            <View style={styles.wrapper}>
                              <Text
                                style={[
                                  styles.labelDestination01,
                                  styles.valueTypo,
                                ]}
                              >
                                Bộ lọc
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.placeholderDestination01,
                                  styles.valueTypo,
                                ]}
                              >
                                Chọn bộ lọc
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.aspectRatioIcon,
                          styles.mt8,
                          styles.iconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider19.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.hotelOptionsSection, styles.mt16]}>
                  <View style={styles.button2}>
                    <Image
                      style={[styles.iconWrapper7, styles.iconWrapperLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-wrapper1.png")}
                    />
                    <Text
                      style={[
                        styles.ctaSearch01,
                        styles.ml8,
                        styles.ctaSearch01Typo,
                      ]}
                    >
                      Tìm kiếm
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.roomGuestBottomSheet, styles.bottomPosition]}>
        <View style={[styles.roomGuestBottomSheet, styles.bottomPosition]}>
          <View style={[styles.overlay1, styles.platePosition]} />
        </View>
        <View
          style={[
            styles.bottomSheet,
            styles.bottomSheetPosition,
            styles.bottomPosition,
          ]}
        >
          <Pressable
            style={[
              styles.sheetheader,
              styles.buttonBarBorder,
              styles.bottomSheetPosition,
            ]}
            onPress={() => navigation.navigate("Detailhotel")}
          >
            <Text
              style={[
                styles.titleRoomGuest,
                styles.closeIconPosition,
                styles.ctaSearch01Typo,
              ]}
            >
              MENGISI PESANAN
            </Text>
            <Image
              style={[
                styles.closeIcon,
                styles.closeIconPosition,
                styles.iconWrapperLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/close-icon.png")}
            />
          </Pressable>
          <View
            style={[styles.sheetadditionalContent, styles.buttonBarSpaceBlock]}
          >
            <Text style={[styles.labelCheckInDate01, styles.valueTypo]} />
          </View>
          <View style={styles.listprefix}>
            <View style={[styles.mainContentroomGuest, styles.cardSpaceBlock]}>
              <View style={styles.subContentroomGuestfield}>
                <View style={styles.wrapper1}>
                  <View style={styles.hotelOptionsSection}>
                    <View style={styles.listmasterBundle}>
                      <View style={styles.wrapper}>
                        <View style={styles.listprefix}>
                          <Image
                            style={styles.iconWrapperLayout}
                            resizeMode="cover"
                            source={require("../assets/icon-wrapper32.png")}
                          />
                        </View>
                        <View style={[styles.titleWrapper, styles.ml8]}>
                          <View style={styles.wrapper11}>
                            <View style={styles.listlabel5}>
                              <Text
                                style={[
                                  styles.valueDuration01,
                                  styles.valueTypo,
                                ]}
                              >
                                KAMAR
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.dividerIcon2,
                          styles.mt8,
                          styles.iconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider96.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.inputSteppers}>
                  <View
                    style={[styles.buttonbrand1, styles.buttonbrandPosition]}
                  >
                    <View style={[styles.button3, styles.buttonBorder]}>
                      <Image
                        style={styles.iconWrapperLayout}
                        resizeMode="cover"
                        source={require("../assets/icon-wrapper33.png")}
                      />
                    </View>
                  </View>
                  <View
                    style={[styles.buttonbrand2, styles.buttonbrandPosition]}
                  >
                    <View style={[styles.button4, styles.buttonBorder]}>
                      <Image
                        style={styles.iconWrapperLayout}
                        resizeMode="cover"
                        source={require("../assets/icon-wrapper34.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.input, styles.buttonbrandPosition]}>
                    <View
                      style={[
                        styles.plate,
                        styles.platePosition,
                        styles.badgeBorder,
                      ]}
                    />
                    <Text style={[styles.labelValue, styles.labelPosition]}>
                      1
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[
                  styles.dividerIcon8,
                  styles.mt8,
                  styles.dividerIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/divider97.png")}
              />
              <View style={[styles.subContentroomGuestfield, styles.mt8]}>
                <View style={styles.wrapper1}>
                  <View style={styles.hotelOptionsSection}>
                    <View style={styles.listmasterBundle}>
                      <View style={styles.wrapper}>
                        <View style={styles.listprefix}>
                          <Image
                            style={styles.iconWrapperLayout}
                            resizeMode="cover"
                            source={require("../assets/icon-wrapper35.png")}
                          />
                        </View>
                        <View style={[styles.titleWrapper, styles.ml8]}>
                          <View style={styles.wrapper1}>
                            <View style={styles.wrapper}>
                              <Text
                                style={[
                                  styles.valueDuration01,
                                  styles.valueTypo,
                                ]}
                              >
                                WANITA
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.descriptionAdult01,
                                  styles.checkTypo,
                                ]}
                              >
                                Từ 18 tuổi
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.dividerIcon2,
                          styles.mt8,
                          styles.iconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider96.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.inputSteppers}>
                  <View
                    style={[styles.buttonbrand1, styles.buttonbrandPosition]}
                  >
                    <View style={[styles.button3, styles.buttonBorder]}>
                      <Image
                        style={styles.iconWrapperLayout}
                        resizeMode="cover"
                        source={require("../assets/icon-wrapper36.png")}
                      />
                    </View>
                  </View>
                  <View
                    style={[styles.buttonbrand2, styles.buttonbrandPosition]}
                  >
                    <View style={[styles.button4, styles.buttonBorder]}>
                      <Image
                        style={styles.iconWrapperLayout}
                        resizeMode="cover"
                        source={require("../assets/icon-wrapper37.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.input, styles.buttonbrandPosition]}>
                    <View
                      style={[
                        styles.plate,
                        styles.platePosition,
                        styles.badgeBorder,
                      ]}
                    />
                    <Text style={[styles.labelValue, styles.labelPosition]}>
                      1
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[
                  styles.dividerIcon8,
                  styles.mt8,
                  styles.dividerIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/divider97.png")}
              />
              <View style={[styles.subContentroomGuestfield, styles.mt8]}>
                <View style={styles.wrapper1}>
                  <View style={styles.hotelOptionsSection}>
                    <View style={styles.listmasterBundle}>
                      <View style={styles.wrapper}>
                        <View style={styles.listprefix}>
                          <Image
                            style={styles.iconWrapperLayout}
                            resizeMode="cover"
                            source={require("../assets/icon-wrapper38.png")}
                          />
                        </View>
                        <View style={[styles.titleWrapper, styles.ml8]}>
                          <View style={styles.wrapper1}>
                            <View style={styles.wrapper}>
                              <Text
                                style={[
                                  styles.valueDuration01,
                                  styles.valueTypo,
                                ]}
                              >
                                LAKI
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.descriptionAdult01,
                                  styles.checkTypo,
                                ]}
                              >
                                Từ 0 đến 17 tuổi
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.dividerIcon2,
                          styles.mt8,
                          styles.iconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider96.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.inputSteppers}>
                  <View
                    style={[styles.buttonbrand1, styles.buttonbrandPosition]}
                  >
                    <View style={[styles.button3, styles.buttonBorder]}>
                      <Image
                        style={styles.iconWrapperLayout}
                        resizeMode="cover"
                        source={require("../assets/icon-wrapper36.png")}
                      />
                    </View>
                  </View>
                  <View
                    style={[styles.buttonbrand2, styles.buttonbrandPosition]}
                  >
                    <View style={[styles.button4, styles.buttonBorder]}>
                      <Image
                        style={styles.iconWrapperLayout}
                        resizeMode="cover"
                        source={require("../assets/icon-wrapper37.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.input, styles.buttonbrandPosition]}>
                    <View
                      style={[
                        styles.plate,
                        styles.platePosition,
                        styles.badgeBorder,
                      ]}
                    />
                    <Text style={[styles.labelValue2, styles.labelPosition]}>
                      0
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.hotelOptionsSection}>
            <View
              style={[
                styles.buttonBar,
                styles.buttonBarBorder,
                styles.buttonBarSpaceBlock,
              ]}
            >
              <Pressable
                style={styles.buttonbrand7}
                onPress={() => navigation.navigate("Checkoutscreen")}
              >
                <View style={styles.button2}>
                  <Image
                    style={[styles.iconWrapper7, styles.iconWrapperLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-wrapper1.png")}
                  />
                  <Text
                    style={[
                      styles.ctaSearch01,
                      styles.ml8,
                      styles.ctaSearch01Typo,
                    ]}
                  >
                    PESAN
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
  mt8: {
    marginTop: Margin.m_xs,
  },
  ml16: {
    marginLeft: Margin.m_xl,
  },
  ml4: {
    marginLeft: Margin.m_4xs,
  },
  mt16: {
    marginTop: Margin.m_xl,
  },
  herobannerIconPosition: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  rowFlexBox: {
    opacity: 0,
    alignSelf: "stretch",
  },
  scaleLayout: {
    width: 120,
    position: "absolute",
  },
  scaleBorder1: {
    borderWidth: 0.5,
    borderRadius: 0.001,
    borderStyle: "dashed",
    opacity: 0.7,
    width: 120,
    borderColor: "#fff",
    top: 0,
  },
  iconLayout: {
    maxWidth: "100%",
    height: 0,
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
  },
  iconPosition: {
    bottom: "25%",
    top: "25%",
    height: "50%",
    maxHeight: "100%",
    position: "absolute",
  },
  batteryIconLayout: {
    width: 8,
    position: "absolute",
  },
  sectionSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    padding: Padding.p_4xs,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  button1Layout: {
    borderRadius: Border.br_xs,
    flexDirection: "row",
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
  cardSpaceBlock: {
    padding: Padding.p_2xl,
    backgroundColor: Color.inputBackgroundDefault,
  },
  valueTypo: {
    lineHeight: 21,
    fontSize: FontSize.base14pxMedium_size,
    fontFamily: FontFamily.xSmall10pxRegular,
    textAlign: "left",
  },
  listsuffixFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  listmasterSpaceBlock: {
    paddingTop: Padding.p_2xs,
    backgroundColor: Color.inputBackgroundDefault,
  },
  checkTypo: {
    lineHeight: 18,
    fontSize: FontSize.small12pxRegular_size,
    fontFamily: FontFamily.xSmall10pxRegular,
    textAlign: "left",
  },
  iconWrapperLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  ctaSearch01Typo: {
    lineHeight: 24,
    fontSize: FontSize.medium16pxRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  bottomPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  platePosition: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  bottomSheetPosition: {
    borderTopRightRadius: Border.br_2xs,
    borderTopLeftRadius: Border.br_2xs,
  },
  buttonBarBorder: {
    borderColor: "#ebebf0",
    backgroundColor: Color.inputBackgroundDefault,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  closeIconPosition: {
    top: 8,
    position: "absolute",
  },
  buttonBarSpaceBlock: {
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
  },
  buttonbrandPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  buttonBorder: {
    padding: Padding.p_2xs,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  labelPosition: {
    width: 44,
    left: 8,
    top: 8,
    lineHeight: 24,
    fontSize: FontSize.medium16pxRegular_size,
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.xSmall10pxRegular,
    alignItems: "center",
    position: "absolute",
  },
  dividerIconLayout: {
    height: 1,
    maxWidth: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
  },
  aspectRatioIcon: {
    height: 0,
  },
  top: {
    overflow: "hidden",
    opacity: 0.7,
    alignSelf: "stretch",
  },
  scaleUnitHorizontal: {
    opacity: 0.7,
    left: 0,
  },
  scaleUnitHorizontal1: {
    left: 120,
    opacity: 0.7,
  },
  scaleUnitHorizontal2: {
    left: 240,
    opacity: 0.7,
  },
  row: {
    height: 120,
  },
  herobannerIcon: {
    left: 0,
    right: 0,
    top: 0,
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
    top: "20.83%",
    width: 8,
    bottom: "25%",
    maxHeight: "100%",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    color: Color.inputBackgroundDefault,
    width: 33,
    top: "0%",
    height: "100%",
    right: 0,
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
    top: "0%",
    height: "100%",
    right: 0,
    position: "absolute",
  },
  android: {
    height: 24,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  statusBar: {
    zIndex: 0,
    alignSelf: "stretch",
  },
  udb: {
    fontSize: FontSize.large18pxBold_size,
    lineHeight: 27,
    display: "flex",
    fontFamily: FontFamily.xSmall10pxRegular,
    fontWeight: "700",
    alignItems: "center",
    textAlign: "left",
    color: Color.inputBackgroundDefault,
    flex: 1,
  },
  titleWrapper: {
    flexDirection: "row",
    flex: 1,
  },
  button: {
    borderRadius: Border.br_lg,
    justifyContent: "center",
    backgroundColor: Color.navigationBarNavboxBackgroundOnDark,
    flexDirection: "row",
  },
  iconWrapper: {
    height: 32,
    flexDirection: "row",
  },
  text1: {
    fontSize: FontSize.xSmall10pxRegular_size,
    lineHeight: 15,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: FontFamily.xSmall10pxRegular,
    fontWeight: "700",
    color: Color.inputBackgroundDefault,
  },
  badge: {
    backgroundColor: Color.aliasNegative,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_6xs,
    borderRadius: Border.br_2xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
  },
  badgeWrapper: {
    marginTop: -4,
    top: "50%",
    height: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  badgeFixedScale: {
    width: 0,
    display: "none",
    height: 0,
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
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_4xs,
    backgroundColor: Color.navigationBarNavboxBackgroundOnDark,
  },
  navigationBar: {
    height: 56,
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  scaleUnitHorizontal3: {
    left: 0,
  },
  scaleUnitHorizontal4: {
    left: 40,
  },
  scaleUnitHorizontal5: {
    left: 80,
  },
  row1: {
    height: 40,
  },
  logoIcon: {
    top: 32,
    left: 16,
    zIndex: 2,
    display: "none",
    overflow: "hidden",
  },
  listprefix: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  labelDestination01: {
    color: Color.inputTextFilled,
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  placeholderDestination01: {
    color: Color.inputTextPlaceholder,
    fontWeight: "700",
  },
  wrapper1: {
    flex: 1,
  },
  button1: {
    backgroundColor: Color.paginationFullBackgroundDefault,
    justifyContent: "center",
  },
  buttonneutral: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    height: 24,
  },
  listsuffix: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  listmasterBundle: {
    backgroundColor: Color.inputBackgroundDefault,
    alignSelf: "stretch",
  },
  hotelOptionsSection: {
    alignSelf: "stretch",
  },
  labelCheckInDate01: {
    color: Color.inputTextFilled,
    flex: 1,
  },
  valueCheckInDate01: {
    color: Color.inputTextFilled,
    fontWeight: "700",
    flex: 1,
  },
  dividerIcon2: {
    display: "none",
    height: 0,
  },
  listmasterBundle1: {
    alignSelf: "stretch",
  },
  wrapper4: {
    alignItems: "center",
    flexDirection: "row",
  },
  valueDuration01: {
    color: Color.inputTextFilled,
    fontWeight: "700",
  },
  listcontent2: {
    flexDirection: "row",
  },
  labelCheckOutDate01: {
    color: Color.inputTextPlaceholder,
  },
  valueCheckOutDate01: {
    fontWeight: "500",
    color: Color.inputTextFilled,
  },
  checkOut: {
    paddingLeft: Padding.p_6xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconWrapper7: {
    display: "none",
  },
  ctaSearch01: {
    color: Color.inputBackgroundDefault,
    lineHeight: 24,
    fontSize: FontSize.medium16pxRegular_size,
  },
  button2: {
    backgroundColor: Color.paginationFullBackgroundCurrent,
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_2xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  sectionContent: {
    backgroundColor: Color.inputBackgroundDefault,
    alignItems: "center",
    alignSelf: "stretch",
  },
  card: {
    borderRadius: Border.br_2xs,
    alignSelf: "stretch",
  },
  section: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  contentWrapper: {
    top: 104,
    alignItems: "center",
    left: 0,
    right: 0,
  },
  overlay1: {
    backgroundColor: Color.overlayBackgroundSolid,
  },
  roomGuestBottomSheet: {
    top: 0,
  },
  titleRoomGuest: {
    marginLeft: -75,
    left: "50%",
    color: Color.inputTextFilled,
    fontWeight: "700",
  },
  closeIcon: {
    right: 16,
  },
  sheetheader: {
    borderBottomWidth: 1,
    height: 40,
  },
  sheetadditionalContent: {
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  listlabel5: {
    width: 38,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  wrapper11: {
    height: 21,
    flexDirection: "row",
    flex: 1,
  },
  button3: {
    borderColor: "rgba(0, 0, 0, 0.05)",
  },
  buttonbrand1: {
    flexDirection: "row",
    left: 0,
  },
  button4: {
    borderColor: "#1a94ff",
  },
  buttonbrand2: {
    flexDirection: "row",
    right: 0,
  },
  plate: {
    borderColor: "#dddde3",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.inputBackgroundDefault,
  },
  labelValue: {
    color: Color.inputTextFilled,
  },
  input: {
    right: 44,
    left: 44,
  },
  inputSteppers: {
    width: 148,
    height: 40,
  },
  subContentroomGuestfield: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.inputBackgroundDefault,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  dividerIcon8: {
    opacity: 0.5,
  },
  descriptionAdult01: {
    color: Color.inputTextPlaceholder,
    flex: 1,
  },
  labelValue2: {
    color: Color.inputTextPlaceholder,
  },
  mainContentroomGuest: {
    flex: 1,
  },
  buttonbrand7: {
    height: 40,
    alignSelf: "stretch",
  },
  buttonBar: {
    borderTopWidth: 1,
    paddingVertical: Padding.p_2xs,
  },
  bottomSheet: {
    backgroundColor: Color.inputBackgroundDefault,
  },
  detailkamar: {
    backgroundColor: Color.dividerThickBackgroundDefault,
    height: 640,
    width: "100%",
    flex: 1,
  },
});

export default Detailkamar;

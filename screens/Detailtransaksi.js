import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  Padding,
  Border,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const Detailtransaksi = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detailtransaksi}>
      <View style={styles.header}>
        <View style={styles.statusBar}>
          <View style={[styles.android, styles.androidLayout]}>
            <View style={styles.statusBarContents}>
              <Image
                style={styles.boundsIcon}
                resizeMode="cover"
                source={require("../assets/bounds1.png")}
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
                <Text style={[styles.text, styles.textClr, styles.timeLayout]}>
                  12:30
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.navigationBar}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.chevronLeftIcon, styles.androidLayout]}
            resizeMode="cover"
            source={require("../assets/chevronleft.png")}
          />
          <View style={[styles.titleWrapper, styles.ml8]}>
            <Text style={[styles.titleScreen02, styles.textClr]}>
              TRANSAKSI
            </Text>
          </View>
          <View style={styles.ml8}>
            <View style={[styles.navigationBox1, styles.statusSpaceBlock1]}>
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
      <View style={[styles.wrapperContainer, styles.statusSpaceBlock]}>
        <View style={styles.bookingListSection}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.title, styles.titleClr]}>01/2022</Text>
            </View>
            <View style={[styles.header, styles.mt12]}>
              <View
                style={[
                  styles.subContentbookingListbooki,
                  styles.subSpaceBlock1,
                ]}
              >
                <View
                  style={[styles.statusSpaceBlock, styles.statusSpaceBlock1]}
                >
                  <View
                    style={[
                      styles.subContentbookingListbooki1,
                      styles.subSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.bookingStatus01, styles.bookingTypo]}>
                      KAMAR BIASA
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.listprefix}>
                        <Image
                          style={[styles.chevronLeftIcon, styles.androidLayout]}
                          resizeMode="cover"
                          source={require("../assets/icon-wrapper2.png")}
                        />
                      </View>
                      <View style={[styles.titleWrapper, styles.ml8]}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel}>
                            <Text
                              style={[
                                styles.titleHotel01,
                                styles.bookingTypo,
                                styles.titleClr,
                              ]}
                            >
                              HOTEL FAVE
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIcon1, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider17.png")}
                    />
                  </View>
                </View>
                <Image
                  style={styles.dividerIcon1}
                  resizeMode="cover"
                  source={require("../assets/divider17.png")}
                />
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel1}>
                            <Text
                              style={[
                                styles.contentBookingId01,
                                styles.titleClr,
                              ]}
                            >
                              ID TRANSAKSI: 453653657
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.listsuffix, styles.ml8]}>
                        <Text style={[styles.dataValue, styles.bookingTypo]}>
                          RP 450OOO
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[
                        styles.dividerIcon3FlexBox,
                        styles.mt8,
                        styles.dividerIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/divider19.png")}
                    />
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.subContentbookingListbooki2,
                  styles.mt12,
                  styles.dividerIcon3FlexBox,
                  styles.subSpaceBlock1,
                ]}
              >
                <View style={styles.statusSpaceBlock1}>
                  <View
                    style={[
                      styles.subContentbookingListbooki3,
                      styles.subSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.bookingStatus02, styles.bookingTypo]}>
                      Đặt thành công
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.listprefix}>
                        <Image
                          style={[styles.chevronLeftIcon, styles.androidLayout]}
                          resizeMode="cover"
                          source={require("../assets/icon-wrapper2.png")}
                        />
                      </View>
                      <View style={[styles.titleWrapper, styles.ml8]}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel}>
                            <Text
                              style={[
                                styles.titleHotel01,
                                styles.bookingTypo,
                                styles.titleClr,
                              ]}
                            >
                              Khách sạn Pullman Vũng Tàu
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      style={[
                        styles.dividerIcon4,
                        styles.mt8,
                        styles.dividerIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/divider17.png")}
                    />
                  </View>
                </View>
                <Image
                  style={[styles.dividerIcon4, styles.dividerIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/divider17.png")}
                />
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel1}>
                            <Text
                              style={[
                                styles.contentBookingId01,
                                styles.titleClr,
                              ]}
                            >
                              Mã đặt chỗ: 453653657
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.listsuffix, styles.ml8]}>
                        <Text style={[styles.dataValue, styles.bookingTypo]}>
                          8.000.000 ₫
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIconLayout, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider19.png")}
                    />
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.subContentbookingListbooki2,
                  styles.mt12,
                  styles.dividerIcon3FlexBox,
                  styles.subSpaceBlock1,
                ]}
              >
                <View style={styles.statusSpaceBlock1}>
                  <View
                    style={[
                      styles.subContentbookingListbooki5,
                      styles.subSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.bookingStatus03, styles.bookingTypo]}>
                      Đặt thất bại
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.listprefix}>
                        <Image
                          style={[styles.chevronLeftIcon, styles.androidLayout]}
                          resizeMode="cover"
                          source={require("../assets/icon-wrapper2.png")}
                        />
                      </View>
                      <View style={[styles.titleWrapper, styles.ml8]}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel}>
                            <Text
                              style={[
                                styles.titleHotel01,
                                styles.bookingTypo,
                                styles.titleClr,
                              ]}
                            >
                              Khách sạn Pullman Vũng Tàu
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      style={[
                        styles.dividerIcon4,
                        styles.mt8,
                        styles.dividerIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/divider17.png")}
                    />
                  </View>
                </View>
                <Image
                  style={[styles.dividerIcon4, styles.dividerIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/divider17.png")}
                />
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel1}>
                            <Text
                              style={[
                                styles.contentBookingId01,
                                styles.titleClr,
                              ]}
                            >
                              Mã đặt chỗ: 453653657
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.listsuffix, styles.ml8]}>
                        <Text style={[styles.dataValue, styles.bookingTypo]}>
                          8.000.000 ₫
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIconLayout, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider19.png")}
                    />
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.subContentbookingListbooki2,
                  styles.mt12,
                  styles.dividerIcon3FlexBox,
                  styles.subSpaceBlock1,
                ]}
              >
                <View style={styles.statusSpaceBlock1}>
                  <View
                    style={[
                      styles.subContentbookingListbooki7,
                      styles.subSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.bookingStatus04, styles.bookingTypo]}>
                      Hủy
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.listprefix}>
                        <Image
                          style={[styles.chevronLeftIcon, styles.androidLayout]}
                          resizeMode="cover"
                          source={require("../assets/icon-wrapper2.png")}
                        />
                      </View>
                      <View style={[styles.titleWrapper, styles.ml8]}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel}>
                            <Text
                              style={[
                                styles.titleHotel01,
                                styles.bookingTypo,
                                styles.titleClr,
                              ]}
                            >
                              Khách sạn Pullman Vũng Tàu
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      style={[
                        styles.dividerIcon4,
                        styles.mt8,
                        styles.dividerIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/divider17.png")}
                    />
                  </View>
                </View>
                <Image
                  style={[styles.dividerIcon4, styles.dividerIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/divider17.png")}
                />
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel1}>
                            <Text
                              style={[
                                styles.contentBookingId01,
                                styles.titleClr,
                              ]}
                            >
                              Mã đặt chỗ: 453653657
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.listsuffix, styles.ml8]}>
                        <Text style={[styles.dataValue, styles.bookingTypo]}>
                          8.000.000 ₫
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIconLayout, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider19.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bookingListSection}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.title, styles.titleClr]}>01/2022</Text>
            </View>
            <View style={[styles.header, styles.mt12]}>
              <View
                style={[
                  styles.subContentbookingListbooki2,
                  styles.dividerIcon3FlexBox,
                  styles.subSpaceBlock1,
                ]}
              >
                <View style={styles.statusSpaceBlock1}>
                  <View
                    style={[
                      styles.subContentbookingListbooki1,
                      styles.subSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.bookingStatus01, styles.bookingTypo]}>
                      Đang xử lý
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.listprefix}>
                        <Image
                          style={[styles.chevronLeftIcon, styles.androidLayout]}
                          resizeMode="cover"
                          source={require("../assets/icon-wrapper2.png")}
                        />
                      </View>
                      <View style={[styles.titleWrapper, styles.ml8]}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel}>
                            <Text
                              style={[
                                styles.titleHotel01,
                                styles.bookingTypo,
                                styles.titleClr,
                              ]}
                            >
                              Khách sạn Pullman Vũng Tàu
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      style={[
                        styles.dividerIcon4,
                        styles.mt8,
                        styles.dividerIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/divider17.png")}
                    />
                  </View>
                </View>
                <Image
                  style={[styles.dividerIcon4, styles.dividerIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/divider17.png")}
                />
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel1}>
                            <Text
                              style={[
                                styles.contentBookingId01,
                                styles.titleClr,
                              ]}
                            >
                              Mã đặt chỗ: 453653657
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.listsuffix, styles.ml8]}>
                        <Text style={[styles.dataValue, styles.bookingTypo]}>
                          8.000.000 ₫
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIconLayout, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider19.png")}
                    />
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.subContentbookingListbooki,
                  styles.mt12,
                  styles.subSpaceBlock1,
                ]}
              >
                <View style={styles.statusSpaceBlock1}>
                  <View
                    style={[
                      styles.subContentbookingListbooki3,
                      styles.subSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.bookingStatus02, styles.bookingTypo]}>
                      KAMAR EKLUSIF
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.listprefix}>
                        <Image
                          style={[styles.chevronLeftIcon, styles.androidLayout]}
                          resizeMode="cover"
                          source={require("../assets/icon-wrapper2.png")}
                        />
                      </View>
                      <View style={[styles.titleWrapper, styles.ml8]}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel}>
                            <Text
                              style={[
                                styles.titleHotel01,
                                styles.bookingTypo,
                                styles.titleClr,
                              ]}
                            >
                              HOTEL WAHYU
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIcon1, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider17.png")}
                    />
                  </View>
                </View>
                <Image
                  style={styles.dividerIcon1}
                  resizeMode="cover"
                  source={require("../assets/divider17.png")}
                />
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel1}>
                            <Text
                              style={[
                                styles.contentBookingId01,
                                styles.titleClr,
                              ]}
                            >
                              ID TRANSAKSI: 453653657
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.listsuffix, styles.ml8]}>
                        <Text style={[styles.dataValue, styles.bookingTypo]}>
                          RP 600000
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIconLayout, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider19.png")}
                    />
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.subContentbookingListbooki,
                  styles.mt12,
                  styles.subSpaceBlock1,
                ]}
              >
                <View style={styles.statusSpaceBlock1}>
                  <View
                    style={[
                      styles.subContentbookingListbooki5,
                      styles.subSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.bookingStatus03, styles.bookingTypo]}>
                      BIASA
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.listprefix}>
                        <Image
                          style={[styles.chevronLeftIcon, styles.androidLayout]}
                          resizeMode="cover"
                          source={require("../assets/icon-wrapper2.png")}
                        />
                      </View>
                      <View style={[styles.titleWrapper, styles.ml8]}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel}>
                            <Text
                              style={[
                                styles.titleHotel01,
                                styles.bookingTypo,
                                styles.titleClr,
                              ]}
                            >
                              HOTEL MELATI
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIcon1, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider17.png")}
                    />
                  </View>
                </View>
                <Image
                  style={styles.dividerIcon1}
                  resizeMode="cover"
                  source={require("../assets/divider17.png")}
                />
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel1}>
                            <Text
                              style={[
                                styles.contentBookingId01,
                                styles.titleClr,
                              ]}
                            >
                              ID TRANSAKSI: 453653657
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.listsuffix, styles.ml8]}>
                        <Text style={[styles.dataValue, styles.bookingTypo]}>
                          RP 200000
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIconLayout, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider19.png")}
                    />
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.subContentbookingListbooki,
                  styles.mt12,
                  styles.subSpaceBlock1,
                ]}
              >
                <View style={styles.statusSpaceBlock1}>
                  <View
                    style={[
                      styles.subContentbookingListbooki7,
                      styles.subSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.bookingStatus04, styles.bookingTypo]}>
                      Hủy
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.listprefix}>
                        <Image
                          style={[styles.chevronLeftIcon, styles.androidLayout]}
                          resizeMode="cover"
                          source={require("../assets/icon-wrapper2.png")}
                        />
                      </View>
                      <View style={[styles.titleWrapper, styles.ml8]}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel}>
                            <Text
                              style={[
                                styles.titleHotel01,
                                styles.bookingTypo,
                                styles.titleClr,
                              ]}
                            >
                              Khách sạn Pullman Vũng Tàu
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIcon1, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider17.png")}
                    />
                  </View>
                </View>
                <Image
                  style={styles.dividerIcon1}
                  resizeMode="cover"
                  source={require("../assets/divider17.png")}
                />
                <View style={styles.header}>
                  <View style={styles.listmasterBundle}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.wrapper1}>
                          <View style={styles.listlabel1}>
                            <Text
                              style={[
                                styles.contentBookingId01,
                                styles.titleClr,
                              ]}
                            >
                              Mã đặt chỗ: 453653657
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.listsuffix, styles.ml8]}>
                        <Text style={[styles.dataValue, styles.bookingTypo]}>
                          8.000.000 ₫
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIconLayout, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider19.png")}
                    />
                  </View>
                </View>
              </View>
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
  mt8: {
    marginTop: Margin.m_xs,
  },
  mt12: {
    marginTop: Margin.m_md,
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
  textClr: {
    color: Color.inputBackgroundDefault,
    textAlign: "left",
  },
  statusSpaceBlock1: {
    paddingVertical: Padding.p_4xs,
    flexDirection: "row",
  },
  statusSpaceBlock: {
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
  titleClr: {
    color: Color.inputTextFilled,
    textAlign: "left",
  },
  subSpaceBlock1: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.inputBackgroundDefault,
    paddingVertical: Padding.p_md,
    alignItems: "center",
    paddingHorizontal: Padding.p_2xl,
  },
  subSpaceBlock: {
    paddingHorizontal: Padding.p_md,
    borderRadius: Border.br_lg,
    paddingVertical: Padding.p_4xs,
    flexDirection: "row",
  },
  bookingTypo: {
    lineHeight: 21,
    fontSize: FontSize.base14pxMedium_size,
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  dividerIconLayout: {
    height: 0,
    maxWidth: "100%",
    width: "100%",
  },
  dividerIcon3FlexBox: {
    display: "none",
    overflow: "hidden",
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
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    right: 0,
    top: "0%",
    height: "100%",
    color: Color.inputBackgroundDefault,
    width: 33,
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
    position: "absolute",
    right: 0,
    top: "0%",
    height: "100%",
  },
  android: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  statusBar: {
    backgroundColor: Color.paginationFullBackgroundCurrent,
    alignSelf: "stretch",
  },
  chevronLeftIcon: {
    width: 24,
    overflow: "hidden",
  },
  titleScreen02: {
    fontSize: FontSize.large18pxBold_size,
    lineHeight: 27,
    display: "flex",
    fontFamily: FontFamily.xSmall10pxRegular,
    fontWeight: "700",
    alignItems: "center",
    textAlign: "left",
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
  },
  navigationBar: {
    height: 56,
    paddingVertical: 0,
    alignItems: "center",
    paddingHorizontal: Padding.p_2xl,
    flexDirection: "row",
    backgroundColor: Color.paginationFullBackgroundCurrent,
    alignSelf: "stretch",
  },
  header: {
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.medium16pxRegular_size,
    lineHeight: 24,
    fontFamily: FontFamily.xSmall10pxRegular,
    fontWeight: "700",
    flex: 1,
  },
  sectionHeader: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  bookingStatus01: {
    color: Color.globalYellow80,
    textAlign: "left",
  },
  subContentbookingListbooki1: {
    backgroundColor: Color.globalYellow20,
  },
  listprefix: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  titleHotel01: {
    fontWeight: "700",
    flex: 1,
  },
  listlabel: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  wrapper1: {
    height: 21,
    flexDirection: "row",
    flex: 1,
  },
  dividerIcon1: {
    height: 1,
    maxWidth: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
  },
  listmasterBundle: {
    paddingTop: Padding.p_2xs,
    backgroundColor: Color.inputBackgroundDefault,
    alignSelf: "stretch",
  },
  contentBookingId01: {
    fontSize: FontSize.small12pxRegular_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  listlabel1: {
    width: 38,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  dataValue: {
    color: Color.paginationFullBackgroundCurrent,
    textAlign: "right",
    fontWeight: "700",
  },
  listsuffix: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  subContentbookingListbooki: {
    backgroundColor: Color.inputBackgroundDefault,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  bookingStatus02: {
    color: Color.globalGreen80,
    textAlign: "left",
  },
  subContentbookingListbooki3: {
    backgroundColor: Color.globalGreen20,
  },
  dividerIcon4: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  subContentbookingListbooki2: {
    backgroundColor: Color.inputBackgroundDefault,
  },
  bookingStatus03: {
    color: Color.aliasNegative,
    textAlign: "left",
  },
  subContentbookingListbooki5: {
    backgroundColor: Color.globalRed10,
  },
  bookingStatus04: {
    color: Color.inputTextPlaceholder,
    textAlign: "left",
  },
  subContentbookingListbooki7: {
    backgroundColor: Color.globalGray20,
  },
  section: {
    paddingVertical: Padding.p_md,
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
  },
  bookingListSection: {
    width: 360,
  },
  wrapperContainer: {
    paddingVertical: Padding.p_2xl,
  },
  detailtransaksi: {
    backgroundColor: Color.dividerThickBackgroundDefault,
    width: "100%",
    flex: 1,
  },
});

export default Detailtransaksi;

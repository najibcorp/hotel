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

const Homescreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homescreen}>
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
              styles.scaleBorder2,
            ]}
          >
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.scaleUnitHorizontal1,
              styles.scaleLayout,
              styles.scaleBorder2,
            ]}
          >
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.scaleUnitHorizontal2,
              styles.scaleLayout,
              styles.scaleBorder2,
            ]}
          >
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
            <View style={styles.top}>
              <Image
                style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
                resizeMode="cover"
                source={require("../assets/-aspect-ratio.png")}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.contentWrapper}>
        <View style={styles.hotelOptionsSection}>
          <View style={[styles.section, styles.sectionSpaceBlock1]}>
            <View style={styles.card}>
              <View style={styles.sectionContent}>
                <View style={styles.hotelOptionsSection}>
                  <View style={styles.hotelOptionsSection}>
                    <View style={styles.listmasterBundle}>
                      <View style={styles.wrapper}>
                        <View style={styles.listprefix}>
                          <Image
                            style={[
                              styles.iconWrapper,
                              styles.iconWrapperLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/icon-wrapper21.png")}
                          />
                        </View>
                        <View style={[styles.listcontent, styles.ml8]}>
                          <View style={styles.wrapper1}>
                            <View style={styles.wrapper}>
                              <Text
                                style={[
                                  styles.labelDestination01,
                                  styles.valueClr,
                                  styles.valueContentTypo,
                                ]}
                              >
                                solo
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.placeholderDestination01,
                                  styles.checkClr,
                                  styles.valueContentTypo,
                                ]}
                              >
                                KAMPUNG CEMANI
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
                          <View
                            style={[styles.buttonneutral, styles.badgeFlexBox]}
                          >
                            <View style={[styles.button, styles.buttonFlexBox]}>
                              <Image
                                style={styles.iconWrapper1}
                                resizeMode="cover"
                                source={require("../assets/icon-wrapper27.png")}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.dividerIcon,
                          styles.mt8,
                          styles.dividerIconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider17.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.checkInCheckOutDuratio, styles.mt8]}>
                    <View style={styles.listprefix}>
                      <View style={styles.checkIn}>
                        <View style={styles.listmasterBundle1}>
                          <View style={styles.wrapper}>
                            <View style={styles.listprefix}>
                              <Image
                                style={[
                                  styles.iconWrapper,
                                  styles.iconWrapperLayout,
                                ]}
                                resizeMode="cover"
                                source={require("../assets/icon-wrapper28.png")}
                              />
                            </View>
                            <View style={[styles.listcontent, styles.ml8]}>
                              <View style={styles.wrapper1}>
                                <View style={styles.wrapper}>
                                  <Text
                                    style={[
                                      styles.labelCheckInDate01,
                                      styles.valueClr,
                                      styles.valueContentTypo,
                                    ]}
                                  >
                                    Ngày nhận phòng
                                  </Text>
                                </View>
                                <View style={[styles.listprefix, styles.mt4]}>
                                  <Text
                                    style={[
                                      styles.valueCheckInDate01,
                                      styles.valueClr,
                                      styles.valueContentTypo,
                                    ]}
                                  >
                                    Thứ Tư, 02/02/2022
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
                          <Image
                            style={[
                              styles.dividerIcon1,
                              styles.mt8,
                              styles.dividerIconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/divider102.png")}
                          />
                        </View>
                      </View>
                      <View style={[styles.hotelOptionsSection, styles.ml16]}>
                        <View style={styles.listmasterBundle2}>
                          <View style={styles.wrapper4}>
                            <View style={styles.listcontent2}>
                              <View>
                                <View style={styles.wrapper4}>
                                  <Text
                                    style={[
                                      styles.labelDestination01,
                                      styles.valueClr,
                                      styles.valueContentTypo,
                                    ]}
                                  >
                                    Số đêm nghỉ
                                  </Text>
                                </View>
                                <View style={[styles.listcontent2, styles.mt4]}>
                                  <Text
                                    style={[
                                      styles.valueDuration01,
                                      styles.valueClr,
                                      styles.valueContentTypo,
                                    ]}
                                  >
                                    1 đêm
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
                          <Image
                            style={[
                              styles.dividerIcon1,
                              styles.mt8,
                              styles.dividerIconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/divider103.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={[styles.checkOut, styles.mt8]}>
                      <View style={styles.listcontent2}>
                        <Text style={[styles.checkTypo, styles.checkClr]}>
                          Ngày trả phòng:
                        </Text>
                      </View>
                      <View style={[styles.listcontent2, styles.ml4]}>
                        <Text
                          style={[
                            styles.valueCheckOutDate01,
                            styles.checkTypo,
                            styles.valueClr,
                          ]}
                        >
                          Thứ Năm, 03/02/2022
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[
                        styles.aspectRatioIcon,
                        styles.mt8,
                        styles.dividerIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/divider17.png")}
                    />
                  </View>
                  <View style={[styles.hotelOptionsSection, styles.mt8]}>
                    <View style={styles.listmasterBundle1}>
                      <View style={styles.wrapper}>
                        <View style={styles.listprefix}>
                          <Image
                            style={[
                              styles.iconWrapper,
                              styles.iconWrapperLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/icon-wrapper29.png")}
                          />
                        </View>
                        <View style={[styles.listcontent, styles.ml8]}>
                          <View style={styles.wrapper1}>
                            <View style={styles.wrapper}>
                              <Text
                                style={[
                                  styles.labelDestination01,
                                  styles.valueClr,
                                  styles.valueContentTypo,
                                ]}
                              >
                                kamar
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.valueDuration01,
                                  styles.valueClr,
                                  styles.valueContentTypo,
                                ]}
                              >
                                2 kamar
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.dividerIcon,
                          styles.mt8,
                          styles.dividerIconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider17.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.hotelOptionsSection, styles.mt8]}>
                    <View style={styles.listmasterBundle1}>
                      <View style={styles.wrapper}>
                        <View style={styles.listprefix}>
                          <Image
                            style={[
                              styles.iconWrapper,
                              styles.iconWrapperLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/icon-wrapper30.png")}
                          />
                        </View>
                        <View style={[styles.listcontent, styles.ml8]}>
                          <View style={styles.wrapper1}>
                            <View style={styles.wrapper}>
                              <Text
                                style={[
                                  styles.labelDestination01,
                                  styles.valueClr,
                                  styles.valueContentTypo,
                                ]}
                              >
                                suhu
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.placeholderDestination01,
                                  styles.checkClr,
                                  styles.valueContentTypo,
                                ]}
                              >
                                Sangat Dingin
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.aspectRatioIcon,
                          styles.mt8,
                          styles.dividerIconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider19.png")}
                      />
                    </View>
                  </View>
                </View>
                <Pressable
                  style={[styles.hotelOptionsSection, styles.mt16]}
                  onPress={() => navigation.navigate("Detailhotel")}
                >
                  <View
                    style={[
                      styles.button1,
                      styles.slickBg,
                      styles.badgeFlexBox,
                    ]}
                  >
                    <Image
                      style={[styles.iconWrapper5, styles.iconWrapperLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon-wrapper1.png")}
                    />
                    <Text
                      style={[
                        styles.ctaSearch01,
                        styles.ml8,
                        styles.contentClr,
                        styles.searchLayout,
                      ]}
                    >
                      Pesan
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.hotelOptionsSection}>
          <View style={[styles.section1, styles.sectionSpaceBlock]}>
            <View style={styles.wrapper}>
              <Text
                style={[
                  styles.titleRecentSearch01,
                  styles.searchLayout,
                  styles.valueClr,
                ]}
              >
                informasi
              </Text>
              <View style={[styles.buttonbrand1, styles.ml16]}>
                <View style={[styles.button2, styles.badgeFlexBox]}>
                  <Image
                    style={styles.iconWrapper6}
                    resizeMode="cover"
                    source={require("../assets/icon-wrapper48.png")}
                  />
                  <Text
                    style={[
                      styles.ctaClearRecentSearch01,
                      styles.ml8,
                      styles.titleHotel01Typo,
                    ]}
                  >
                    Lainnya
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.listcontent2, styles.mt12]}>
              <View style={[styles.recentSearchItem, styles.recentItemLayout]}>
                <View style={styles.listmasterBundle5}>
                  <View style={styles.wrapper}>
                    <View style={styles.listprefix}>
                      <Image
                        style={[styles.iconWrapper, styles.iconWrapperLayout]}
                        resizeMode="cover"
                        source={require("../assets/icon-wrapper49.png")}
                      />
                    </View>
                    <View style={[styles.listcontent, styles.ml8]}>
                      <View style={styles.wrapper11}>
                        <View style={styles.wrapper}>
                          <Text
                            style={[
                              styles.titleHotel01,
                              styles.titleHotel01Typo,
                            ]}
                          >
                            hotel terbaru
                          </Text>
                        </View>
                        <View style={[styles.listprefix, styles.mt4]}>
                          <Text
                            style={[
                              styles.descriptionCheckInCheckO,
                              styles.checkTypo,
                              styles.checkClr,
                            ]}
                          >
                            02/02/2022 - 04/02/2022
                          </Text>
                        </View>
                        <View style={[styles.listprefix, styles.mt4]}>
                          <Text
                            style={[
                              styles.descriptionCheckInCheckO,
                              styles.checkTypo,
                              styles.checkClr,
                            ]}
                          >
                            2 phòng, 2 người lớn, 1 trẻ em
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Image
                    style={[
                      styles.aspectRatioIcon,
                      styles.mt8,
                      styles.dividerIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/divider107.png")}
                  />
                </View>
              </View>
              <View style={[styles.recentItemLayout, styles.ml8]}>
                <View style={styles.listmasterBundle5}>
                  <View style={styles.wrapper}>
                    <View style={styles.listprefix}>
                      <Image
                        style={[styles.iconWrapper, styles.iconWrapperLayout]}
                        resizeMode="cover"
                        source={require("../assets/icon-wrapper50.png")}
                      />
                    </View>
                    <View style={[styles.listcontent6, styles.ml8]}>
                      <View style={styles.wrapper11}>
                        <View style={styles.wrapper}>
                          <Text
                            style={[
                              styles.titleHotel01,
                              styles.titleHotel01Typo,
                            ]}
                          >
                            Vũng Tàu
                          </Text>
                        </View>
                        <View style={[styles.listprefix, styles.mt4]}>
                          <Text
                            style={[
                              styles.descriptionCheckInCheckO,
                              styles.checkTypo,
                              styles.checkClr,
                            ]}
                          >
                            02/02/2022 - 04/02/2022
                          </Text>
                        </View>
                        <View style={[styles.listprefix, styles.mt4]}>
                          <Text
                            style={[
                              styles.descriptionCheckInCheckO,
                              styles.checkTypo,
                              styles.checkClr,
                            ]}
                          >
                            2 phòng, 2 người lớn, 1 trẻ em
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Image
                    style={[
                      styles.aspectRatioIcon,
                      styles.mt8,
                      styles.dividerIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/divider108.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.hotelOptionsSection}>
          <View style={[styles.section2, styles.sectionSpaceBlock]}>
            <View style={[styles.sectionHeader, styles.sectionSpaceBlock1]}>
              <Text
                style={[
                  styles.titleRecentSearch01,
                  styles.searchLayout,
                  styles.valueClr,
                ]}
              >
                Promo
              </Text>
            </View>
            <View style={[styles.carousel, styles.mt12]}>
              <View
                style={[
                  styles.carouselunit,
                  styles.badgeFlexBox,
                  styles.sectionSpaceBlock1,
                ]}
              >
                <View style={styles.previousImageWrapper}>
                  <ImageBackground
                    style={styles.imageIcon}
                    resizeMode="cover"
                    source={require("../assets/image3.png")}
                  >
                    <View style={styles.column}>
                      <View
                        style={[
                          styles.scaleUnitVertical,
                          styles.herobannerIconPosition,
                        ]}
                      >
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/--aspectratio.png")}
                          />
                        </View>
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/--aspectratio.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.column}>
                      <View
                        style={[
                          styles.scaleUnitVertical,
                          styles.herobannerIconPosition,
                        ]}
                      >
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/--aspectratio.png")}
                          />
                        </View>
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/--aspectratio.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.column}>
                      <View
                        style={[
                          styles.scaleUnitVertical,
                          styles.herobannerIconPosition,
                        ]}
                      >
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/--aspectratio.png")}
                          />
                        </View>
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/--aspectratio.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={[styles.wrapper1, styles.ml8]}>
                  <ImageBackground
                    style={styles.imageIcon1}
                    resizeMode="cover"
                    source={require("../assets/image4.png")}
                  >
                    <View style={[styles.row1, styles.rowFlexBox]}>
                      <View
                        style={[
                          styles.scaleUnitHorizontal3,
                          styles.scaleBorder2,
                        ]}
                      >
                        <View style={styles.top}>
                          <Image
                            style={[
                              styles.aspectRatioIcon,
                              styles.dividerIconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                        <View style={styles.top}>
                          <Image
                            style={[
                              styles.aspectRatioIcon,
                              styles.dividerIconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                      </View>
                      <View
                        style={[
                          styles.scaleUnitHorizontal4,
                          styles.scaleBorder2,
                        ]}
                      >
                        <View style={styles.top}>
                          <Image
                            style={[
                              styles.aspectRatioIcon,
                              styles.dividerIconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                        <View style={styles.top}>
                          <Image
                            style={[
                              styles.aspectRatioIcon,
                              styles.dividerIconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                      </View>
                      <View
                        style={[
                          styles.scaleUnitHorizontal5,
                          styles.scaleBorder2,
                        ]}
                      >
                        <View style={styles.top}>
                          <Image
                            style={[
                              styles.aspectRatioIcon,
                              styles.dividerIconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                        <View style={styles.top}>
                          <Image
                            style={[
                              styles.aspectRatioIcon,
                              styles.dividerIconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={[styles.nextImageWrapper, styles.ml8]}>
                  <ImageBackground
                    style={styles.imageIcon}
                    resizeMode="cover"
                    source={require("../assets/image5.png")}
                  >
                    <View style={styles.column}>
                      <View
                        style={[
                          styles.scaleUnitVertical,
                          styles.herobannerIconPosition,
                        ]}
                      >
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.column}>
                      <View
                        style={[
                          styles.scaleUnitVertical,
                          styles.herobannerIconPosition,
                        ]}
                      >
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.column}>
                      <View
                        style={[
                          styles.scaleUnitVertical,
                          styles.herobannerIconPosition,
                        ]}
                      >
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                        <View style={styles.left}>
                          <Image
                            style={styles.aspectRatioIcon6}
                            resizeMode="cover"
                            source={require("../assets/-aspect-ratio56.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
              <View style={[styles.wrapper4, styles.mt16]}>
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
          </View>
        </View>
        <View style={styles.divider}>
          <View style={styles.thick} />
        </View>
        <View style={styles.hotelOptionsSection}>
          <View style={[styles.section3, styles.sectionSpaceBlock]}>
            <View style={styles.wrapper}>
              <Text
                style={[
                  styles.titleRecentSearch01,
                  styles.searchLayout,
                  styles.valueClr,
                ]}
              >
                Beberapa Hotel
              </Text>
            </View>
            <View style={[styles.listprefix, styles.mt12]}>
              <Pressable
                style={styles.subContentplaceSuggestions}
                onPress={() => navigation.navigate("Detailhotel")}
              >
                <ImageBackground
                  style={styles.hotelOptionsSection}
                  resizeMode="cover"
                  source={require("../assets/image6.png")}
                >
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio62.png")}
                        />
                      </View>
                    </View>
                  </View>
                </ImageBackground>
                <View style={styles.place}>
                  <LinearGradient
                    style={styles.gradient}
                    locations={[0, 1]}
                    colors={["rgba(26, 148, 255, 0)", "#1a94ff"]}
                  />
                  <View style={styles.list}>
                    <View style={styles.listmasterBundle7}>
                      <View style={styles.wrapper}>
                        <View style={styles.listcontent}>
                          <View style={styles.wrapper1}>
                            <View style={styles.wrapper}>
                              <Text
                                style={[
                                  styles.contentDestinationName01,
                                  styles.contentClr,
                                  styles.valueContentTypo,
                                ]}
                              >
                                HOTEL RAHAYU
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.descriptionSumOfHotel01,
                                  styles.contentClr,
                                  styles.checkTypo,
                                ]}
                              >
                                RP250000
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.aspectRatioIcon,
                          styles.mt8,
                          styles.dividerIconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider109.png")}
                      />
                    </View>
                  </View>
                </View>
              </Pressable>
              <View style={[styles.subContentplaceSuggestions, styles.ml8]}>
                <ImageBackground
                  style={styles.hotelOptionsSection}
                  resizeMode="cover"
                  source={require("../assets/image7.png")}
                >
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio86.png")}
                        />
                      </View>
                    </View>
                  </View>
                </ImageBackground>
                <View style={styles.place}>
                  <LinearGradient
                    style={styles.gradient}
                    locations={[0, 1]}
                    colors={["rgba(26, 148, 255, 0)", "#1a94ff"]}
                  />
                  <View style={styles.list}>
                    <View style={styles.listmasterBundle7}>
                      <View style={styles.wrapper}>
                        <View style={styles.listcontent}>
                          <View style={styles.wrapper1}>
                            <View style={styles.wrapper}>
                              <Text
                                style={[
                                  styles.contentDestinationName01,
                                  styles.contentClr,
                                  styles.valueContentTypo,
                                ]}
                              >
                                HOTEL WAHYU
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.descriptionSumOfHotel01,
                                  styles.contentClr,
                                  styles.checkTypo,
                                ]}
                              >
                                RP 200000
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.aspectRatioIcon,
                          styles.mt8,
                          styles.dividerIconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider110.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.subContentplaceSuggestions, styles.ml8]}>
                <ImageBackground
                  style={styles.hotelOptionsSection}
                  resizeMode="cover"
                  source={require("../assets/image8.png")}
                >
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <View
                      style={[styles.scaleUnitHorizontal6, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal7, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={[styles.scaleUnitHorizontal8, styles.scaleBorder1]}
                    >
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                      <View style={styles.top}>
                        <Image
                          style={[
                            styles.aspectRatioIcon,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/-aspect-ratio110.png")}
                        />
                      </View>
                    </View>
                  </View>
                </ImageBackground>
                <View style={styles.place}>
                  <LinearGradient
                    style={styles.gradient}
                    locations={[0, 1]}
                    colors={["rgba(26, 148, 255, 0)", "#1a94ff"]}
                  />
                  <View style={styles.list}>
                    <View style={styles.listmasterBundle7}>
                      <View style={styles.wrapper}>
                        <View style={styles.listcontent}>
                          <View style={styles.wrapper1}>
                            <View style={styles.wrapper}>
                              <Text
                                style={[
                                  styles.contentDestinationName012,
                                  styles.contentClr,
                                  styles.valueContentTypo,
                                ]}
                              >
                                HOTE;
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.descriptionSumOfHotel01,
                                  styles.contentClr,
                                  styles.checkTypo,
                                ]}
                              >
                                RP 1000000
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.aspectRatioIcon,
                          styles.mt8,
                          styles.dividerIconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider111.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.herobannerIcon, styles.herobannerIconPosition]}>
        <View style={styles.statusBar}>
          <View style={styles.android}>
            <View style={[styles.statusBarContents, styles.boundsIconPosition]}>
              <Image
                style={[styles.boundsIcon, styles.boundsIconPosition]}
                resizeMode="cover"
                source={require("../assets/bounds7.png")}
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
                style={[
                  styles.batteryIcon,
                  styles.batteryIconLayout,
                  styles.iconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/battery.png")}
              />
              <View style={[styles.time, styles.timeLayout]}>
                <Text style={[styles.text, styles.timeLayout]}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.navigationBar, styles.sectionSpaceBlock1]}>
          <View style={styles.listcontent}>
            <Text style={[styles.titleLabel, styles.contentClr]}>
              UDB HOTEL
            </Text>
          </View>
          <View style={[styles.listsuffixFlexBox, styles.ml8]}>
            <View style={styles.iconWrapper9}>
              <View
                style={[styles.button3, styles.button3Bg, styles.buttonFlexBox]}
              >
                <Image
                  style={[styles.iconWrapper, styles.iconWrapperLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-wrapper.png")}
                />
              </View>
            </View>
            <View style={styles.badgeFixedScale}>
              <View
                style={[
                  styles.badgeWrapper,
                  styles.batteryIconLayout,
                  styles.badgeFlexBox,
                ]}
              >
                <View style={[styles.badge, styles.badgeFlexBox]}>
                  <Text style={[styles.text1, styles.contentClr]}>10</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.ml8}>
            <View style={[styles.navigationBox1, styles.button3Bg]}>
              <Image
                style={styles.iconWrapper1}
                resizeMode="cover"
                source={require("../assets/icon-left.png")}
              />
              <Image
                style={[styles.dividerIcon11, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/divider.png")}
              />
              <Image
                style={[styles.iconWrapper1, styles.ml8]}
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
          <View style={[styles.row14, styles.rowFlexBox]}>
            <View style={[styles.scaleUnitHorizontal42, styles.scaleBorder]}>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
            </View>
            <View style={[styles.scaleUnitHorizontal43, styles.scaleBorder]}>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
            </View>
            <View style={[styles.scaleUnitHorizontal44, styles.scaleBorder]}>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-aspect-ratio6.png")}
                />
              </View>
              <View style={styles.top}>
                <Image
                  style={[styles.aspectRatioIcon, styles.dividerIconLayout]}
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
  mt4: {
    marginTop: Margin.m_4xs,
  },
  ml8: {
    marginLeft: Margin.m_xs,
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
  mt12: {
    marginTop: Margin.m_md,
  },
  herobannerIconPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  rowFlexBox: {
    opacity: 0,
    alignSelf: "stretch",
  },
  scaleLayout: {
    width: 120,
    position: "absolute",
  },
  scaleBorder2: {
    borderWidth: 0.5,
    borderRadius: 0.001,
    borderStyle: "dashed",
    opacity: 0.7,
    borderColor: "#fff",
    top: 0,
  },
  dividerIconLayout: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  sectionSpaceBlock1: {
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  iconWrapperLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  valueClr: {
    color: Color.inputTextFilled,
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  valueContentTypo: {
    lineHeight: 21,
    fontSize: FontSize.base14pxMedium_size,
    textAlign: "left",
  },
  checkClr: {
    color: Color.inputTextPlaceholder,
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  listsuffixFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  badgeFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonFlexBox: {
    padding: Padding.p_4xs,
    justifyContent: "center",
    alignItems: "center",
  },
  checkTypo: {
    lineHeight: 18,
    fontSize: FontSize.small12pxRegular_size,
    textAlign: "left",
  },
  slickBg: {
    backgroundColor: Color.paginationFullBackgroundCurrent,
    borderRadius: Border.br_5xs,
  },
  contentClr: {
    color: Color.inputBackgroundDefault,
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  searchLayout: {
    lineHeight: 24,
    fontSize: FontSize.medium16pxRegular_size,
  },
  sectionSpaceBlock: {
    paddingVertical: Padding.p_md,
    alignSelf: "stretch",
  },
  titleHotel01Typo: {
    color: Color.paginationFullBackgroundCurrent,
    fontFamily: FontFamily.xSmall10pxRegular,
    lineHeight: 21,
    fontSize: FontSize.base14pxMedium_size,
  },
  recentItemLayout: {
    width: 260,
    borderRadius: Border.br_2xs,
    alignSelf: "stretch",
  },
  scaleBorder1: {
    width: 43,
    opacity: 0.7,
    borderWidth: 0.5,
    borderRadius: 0.001,
    borderColor: "#fff",
    borderStyle: "dashed",
    top: 0,
    position: "absolute",
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
  },
  iconPosition1: {
    top: "25%",
    height: "50%",
    bottom: "25%",
    position: "absolute",
  },
  batteryIconLayout: {
    width: 8,
    position: "absolute",
  },
  timeLayout: {
    width: 33,
    position: "absolute",
  },
  button3Bg: {
    backgroundColor: Color.navigationBarNavboxBackgroundOnDark,
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
  aspectRatioIcon: {
    height: 0,
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
  },
  iconWrapper: {
    height: 24,
  },
  listprefix: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  labelDestination01: {
    textAlign: "left",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  placeholderDestination01: {
    fontWeight: "700",
    textAlign: "left",
  },
  wrapper1: {
    flex: 1,
  },
  listcontent: {
    flexDirection: "row",
    flex: 1,
  },
  iconWrapper1: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  button: {
    backgroundColor: Color.paginationFullBackgroundDefault,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  buttonneutral: {
    alignItems: "flex-end",
    height: 24,
  },
  listsuffix: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  dividerIcon: {
    height: 1,
  },
  listmasterBundle: {
    backgroundColor: Color.inputBackgroundDefault,
    alignSelf: "stretch",
  },
  hotelOptionsSection: {
    alignSelf: "stretch",
  },
  labelCheckInDate01: {
    textAlign: "left",
    flex: 1,
  },
  valueCheckInDate01: {
    fontWeight: "700",
    textAlign: "left",
    flex: 1,
  },
  dividerIcon1: {
    display: "none",
    height: 0,
  },
  listmasterBundle1: {
    paddingTop: Padding.p_2xs,
    backgroundColor: Color.inputBackgroundDefault,
    alignSelf: "stretch",
  },
  checkIn: {
    display: "none",
    flex: 1,
  },
  wrapper4: {
    flexDirection: "row",
    alignItems: "center",
  },
  valueDuration01: {
    fontWeight: "700",
    textAlign: "left",
  },
  listcontent2: {
    flexDirection: "row",
  },
  listmasterBundle2: {
    paddingTop: Padding.p_2xs,
    backgroundColor: Color.inputBackgroundDefault,
  },
  valueCheckOutDate01: {
    fontWeight: "500",
  },
  checkOut: {
    paddingLeft: Padding.p_6xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  checkInCheckOutDuratio: {
    display: "none",
    alignSelf: "stretch",
  },
  iconWrapper5: {
    display: "none",
    height: 24,
  },
  ctaSearch01: {
    textAlign: "center",
  },
  button1: {
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
  sectionContent: {
    backgroundColor: Color.inputBackgroundDefault,
    alignItems: "center",
    alignSelf: "stretch",
  },
  card: {
    padding: Padding.p_2xl,
    backgroundColor: Color.inputBackgroundDefault,
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
    paddingHorizontal: Padding.p_2xl,
  },
  titleRecentSearch01: {
    fontWeight: "700",
    textAlign: "left",
    flex: 1,
  },
  iconWrapper6: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  ctaClearRecentSearch01: {
    textAlign: "center",
  },
  button2: {
    height: 32,
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  buttonbrand1: {
    height: 32,
  },
  titleHotel01: {
    fontWeight: "700",
    textAlign: "left",
    flex: 1,
  },
  descriptionCheckInCheckO: {
    flex: 1,
  },
  wrapper11: {
    alignSelf: "stretch",
    flex: 1,
  },
  listmasterBundle5: {
    paddingTop: Padding.p_2xs,
    backgroundColor: Color.inputBackgroundDefault,
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
  },
  recentSearchItem: {
    overflow: "hidden",
  },
  listcontent6: {
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  section1: {
    paddingHorizontal: Padding.p_2xl,
    overflow: "hidden",
  },
  sectionHeader: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
  },
  aspectRatioIcon6: {
    maxHeight: "100%",
    width: 109,
    alignSelf: "stretch",
  },
  left: {
    flexDirection: "row",
    opacity: 0.7,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  scaleUnitVertical: {
    height: 109,
    flexDirection: "row",
    opacity: 0.7,
    left: 0,
  },
  column: {
    width: 109,
    alignSelf: "stretch",
  },
  imageIcon: {
    flexDirection: "row",
    borderRadius: Border.br_2xs,
    flex: 1,
  },
  previousImageWrapper: {
    width: 0,
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  scaleUnitHorizontal3: {
    width: 109,
    opacity: 0.7,
    left: 0,
    position: "absolute",
  },
  scaleUnitHorizontal4: {
    left: 109,
    width: 109,
    opacity: 0.7,
    position: "absolute",
  },
  scaleUnitHorizontal5: {
    left: 219,
    width: 109,
    opacity: 0.7,
    position: "absolute",
  },
  row1: {
    height: 109,
  },
  imageIcon1: {
    borderRadius: Border.br_2xs,
    alignSelf: "stretch",
  },
  nextImageWrapper: {
    width: 0,
    alignSelf: "stretch",
  },
  carouselunit: {
    paddingHorizontal: Padding.p_2xs,
    overflow: "hidden",
  },
  slick1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.paginationFullBackgroundDefault,
  },
  carousel: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  section2: {
    paddingHorizontal: 0,
    backgroundColor: Color.inputBackgroundDefault,
  },
  thick: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.dividerThickBackgroundDefault,
  },
  divider: {
    height: 8,
    alignSelf: "stretch",
  },
  scaleUnitHorizontal6: {
    left: 0,
  },
  scaleUnitHorizontal7: {
    left: 43,
  },
  scaleUnitHorizontal8: {
    left: 85,
  },
  row2: {
    height: 43,
  },
  gradient: {
    top: -85,
    height: 85,
    backgroundColor: Color.gradientVerticalBrand0Brand100,
    left: 0,
    right: 0,
    position: "absolute",
  },
  contentDestinationName01: {
    fontWeight: "700",
    textAlign: "left",
  },
  descriptionSumOfHotel01: {
    flex: 1,
  },
  listmasterBundle7: {
    paddingLeft: Padding.p_2xs,
    paddingRight: Padding.p_2xl,
    paddingTop: Padding.p_2xs,
    alignSelf: "stretch",
  },
  list: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  place: {
    height: 0,
    alignSelf: "stretch",
  },
  subContentplaceSuggestions: {
    width: 128,
    borderRadius: Border.br_2xs,
    overflow: "hidden",
  },
  contentDestinationName012: {
    fontWeight: "700",
    textAlign: "left",
    flex: 1,
  },
  section3: {
    backgroundColor: Color.inputBackgroundDefault,
    paddingHorizontal: Padding.p_2xl,
    overflow: "hidden",
  },
  contentWrapper: {
    top: 104,
    alignItems: "center",
    left: 0,
    right: 0,
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
    top: "20.83%",
  },
  text: {
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
    height: 24,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  statusBar: {
    zIndex: 0,
    alignSelf: "stretch",
  },
  titleLabel: {
    fontSize: FontSize.large18pxBold_size,
    lineHeight: 27,
    display: "flex",
    fontWeight: "700",
    textAlign: "left",
    alignItems: "center",
    flex: 1,
  },
  button3: {
    borderRadius: Border.br_lg,
  },
  iconWrapper9: {
    height: 32,
    flexDirection: "row",
  },
  text1: {
    fontSize: FontSize.xSmall10pxRegular_size,
    lineHeight: 15,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "700",
  },
  badge: {
    backgroundColor: Color.aliasNegative,
    borderStyle: "solid",
    borderWidth: 1,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_6xs,
    borderRadius: Border.br_2xs,
    alignItems: "center",
    borderColor: "#fff",
    justifyContent: "center",
  },
  badgeWrapper: {
    marginTop: -4,
    top: "50%",
    height: 8,
    alignItems: "center",
  },
  badgeFixedScale: {
    width: 0,
    display: "none",
    height: 0,
  },
  dividerIcon11: {
    width: 1,
    height: 16,
  },
  navigationBox1: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_2xs,
    borderRadius: Border.br_xs,
  },
  navigationBar: {
    height: 56,
    zIndex: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
  },
  scaleUnitHorizontal42: {
    left: 0,
  },
  scaleUnitHorizontal43: {
    left: 40,
  },
  scaleUnitHorizontal44: {
    left: 80,
  },
  row14: {
    height: 40,
  },
  logoIcon: {
    top: 32,
    left: 16,
    zIndex: 2,
    display: "none",
    overflow: "hidden",
  },
  homescreen: {
    height: 1057,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.dividerThickBackgroundDefault,
    flex: 1,
  },
});

export default Homescreen;

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
  Color,
  Padding,
  FontSize,
  FontFamily,
  Border,
} from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.splashscreen, styles.splashscreenLayout]}
      onPress={() => navigation.navigate("CardBoard1")}
    >
      <ImageBackground
        style={[styles.herobannerIcon, styles.herobannerIconPosition]}
        resizeMode="cover"
        source={require("../assets/herobanner.png")}
      >
        <View style={styles.row}>
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
            <View style={[styles.statusBarContents, styles.boundsIconPosition]}>
              <Image
                style={[styles.boundsIcon, styles.boundsIconPosition]}
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
        <View style={styles.navigationBar}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleLabel}>Logo</Text>
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
              <View
                style={[
                  styles.badgeWrapper,
                  styles.buttonFlexBox,
                  styles.batteryIconLayout,
                ]}
              >
                <View style={styles.badge}>
                  <Text style={styles.text1}>10</Text>
                </View>
              </View>
            </View>
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
        </View>
        <ImageBackground
          style={[styles.logoIcon, styles.scaleLayout]}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        >
          <View style={[styles.row1, styles.row1Layout]}>
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
      <View
        style={[
          styles.durationBottomSheet,
          styles.herobannerIconPosition,
          styles.splashscreenLayout,
        ]}
      >
        <View style={styles.overlay}>
          <View style={[styles.overlay1, styles.platePosition]} />
        </View>
        <View style={styles.bottomSheet}>
          <View style={[styles.sheetheader, styles.buttonBarBorder]}>
            <Text style={styles.titleSelcetDuration01}>Chọn số đêm nghỉ</Text>
            <Image
              style={styles.closeIcon}
              resizeMode="cover"
              source={require("../assets/close-icon.png")}
            />
          </View>
          <View
            style={[styles.sheetadditionalContent, styles.buttonSpaceBlock]}
          >
            <Text style={[styles.contentSelectDuration01, styles.valueTypo]}>
              Tối đa 30 đêm
            </Text>
          </View>
          <View style={styles.sheetcontent}>
            <View style={styles.list}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={styles.plate1Layout}>
                        <View style={[styles.plate, styles.platePosition]}>
                          <Image
                            style={[styles.circleIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/circle.png")}
                          />
                        </View>
                        <Image
                          style={[styles.ellipseIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/ellipse.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text
                          style={[
                            styles.valueSelectDuration01,
                            styles.valueTypo,
                          ]}
                        >
                          1 đêm
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
                    <Text style={styles.dataValue1Typo}>
                      Trả phòng: 03/02/2022
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
            <View style={styles.list}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text
                          style={[
                            styles.valueSelectDuration01,
                            styles.valueTypo,
                          ]}
                        >
                          2 đêm
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
                    <Text style={styles.dataValue1Typo}>
                      Trả phòng: 04/02/2022
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
            <View style={styles.list}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text
                          style={[
                            styles.valueSelectDuration01,
                            styles.valueTypo,
                          ]}
                        >
                          3 đêm
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
                    <Text style={styles.dataValue1Typo}>
                      Trả phòng: 05/02/2022
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
            <View style={styles.list}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text
                          style={[
                            styles.valueSelectDuration01,
                            styles.valueTypo,
                          ]}
                        >
                          4 đêm
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
                    <Text style={styles.dataValue1Typo}>
                      Trả phòng: 06/02/2022
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
            <View style={styles.list}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text
                          style={[
                            styles.valueSelectDuration01,
                            styles.valueTypo,
                          ]}
                        >
                          5 đêm
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
                    <Text style={styles.dataValue1Typo}>
                      Trả phòng: 07/02/2022
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
            <View style={styles.list}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text
                          style={[
                            styles.valueSelectDuration01,
                            styles.valueTypo,
                          ]}
                        >
                          6 đêm
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
                    <Text style={styles.dataValue1Typo}>
                      Trả phòng: 08/02/2022
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
            <View style={styles.list}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text
                          style={[
                            styles.valueSelectDuration01,
                            styles.valueTypo,
                          ]}
                        >
                          7 đêm
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
                    <Text style={styles.dataValue1Typo}>
                      Trả phòng: 09/02/2022
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
            <View style={styles.list}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text
                          style={[
                            styles.valueSelectDuration01,
                            styles.valueTypo,
                          ]}
                        >
                          8 đêm
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
                    <Text style={styles.dataValue1Typo}>
                      Trả phòng: 10/02/2022
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
            <View style={styles.list}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text
                          style={[
                            styles.valueSelectDuration01,
                            styles.valueTypo,
                          ]}
                        >
                          9 đêm
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
                    <Text style={styles.dataValue1Typo}>
                      Trả phòng: 11/02/2022
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
            <View style={styles.list}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text
                          style={[
                            styles.valueSelectDuration01,
                            styles.valueTypo,
                          ]}
                        >
                          10 đêm
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
                    <Text style={styles.dataValue1Typo}>
                      Trả phòng: 12/02/2022
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
            <View style={styles.list}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text
                          style={[
                            styles.valueSelectDuration01,
                            styles.valueTypo,
                          ]}
                        >
                          11 đêm
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
                    <Text style={styles.dataValue1Typo}>
                      Trả phòng: 13/02/2022
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
            <View style={styles.list11}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle11.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text style={styles.valueTypo}>Label</Text>
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
                    <Text style={[styles.dataValue1, styles.dataValue1Typo]}>
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
                  source={require("../assets/divider12.png")}
                />
              </View>
            </View>
            <View style={styles.list11}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle11.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text style={styles.valueTypo}>Label</Text>
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
                    <Text style={[styles.dataValue1, styles.dataValue1Typo]}>
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
                  source={require("../assets/divider12.png")}
                />
              </View>
            </View>
            <View style={styles.list11}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle11.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text style={styles.valueTypo}>Label</Text>
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
                    <Text style={[styles.dataValue1, styles.dataValue1Typo]}>
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
                  source={require("../assets/divider12.png")}
                />
              </View>
            </View>
            <View style={styles.list11}>
              <View style={styles.listmasterBundle}>
                <View style={styles.wrapper}>
                  <View style={styles.listprefix}>
                    <View style={styles.radioButton}>
                      <View style={[styles.plate1, styles.plate1Layout]}>
                        <Image
                          style={[styles.circleIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/circle11.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.titleWrapper, styles.ml8]}>
                    <View style={styles.wrapper2}>
                      <View style={styles.listlabel}>
                        <Text style={styles.valueTypo}>Label</Text>
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
                    <Text style={[styles.dataValue1, styles.dataValue1Typo]}>
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
                  source={require("../assets/divider12.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.list}>
            <View
              style={[
                styles.buttonBar,
                styles.buttonSpaceBlock,
                styles.buttonBarBorder,
              ]}
            >
              <View style={styles.row1Layout}>
                <View
                  style={[
                    styles.button1,
                    styles.buttonSpaceBlock,
                    styles.buttonFlexBox,
                  ]}
                >
                  <Image
                    style={[styles.iconWrapper2, styles.iconWrapperLayout]}
                    resizeMode="cover"
                    source={require("../assets/icon-wrapper1.png")}
                  />
                  <Text
                    style={[styles.ctaDone01, styles.ml8, styles.ctaDone01Typo]}
                  >
                    Hoàn tất
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.udbhotelApp, styles.ctaDone01Typo]}>
        <Text style={styles.udbhotel}>UDBHOTEL</Text>
        <Text style={styles.udbhotel}>APP</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: Margin.m_xs,
  },
  mt8: {
    marginTop: Margin.m_xs,
  },
  splashscreenLayout: {
    height: 640,
    overflow: "hidden",
  },
  herobannerIconPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  scaleLayout: {
    width: 120,
    position: "absolute",
  },
  scaleBorder1: {
    borderWidth: 0.5,
    borderRadius: 0.001,
    borderColor: "#fff",
    borderStyle: "dashed",
    opacity: 0.7,
    width: 120,
    top: 0,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
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
    top: "25%",
    height: "50%",
    maxHeight: "100%",
    position: "absolute",
  },
  batteryIconLayout: {
    width: 8,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  row1Layout: {
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
  platePosition: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  buttonBarBorder: {
    borderColor: "#ebebf0",
    backgroundColor: Color.inputBackgroundDefault,
    borderStyle: "solid",
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    alignSelf: "stretch",
  },
  valueTypo: {
    lineHeight: 21,
    fontSize: FontSize.base14pxMedium_size,
    color: Color.inputTextFilled,
    fontFamily: FontFamily.xSmall10pxRegular,
    textAlign: "left",
  },
  listsuffixFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  plate1Layout: {
    height: 20,
    width: 20,
  },
  dataValue1Typo: {
    textAlign: "right",
    lineHeight: 21,
    fontSize: FontSize.base14pxMedium_size,
    color: Color.inputTextFilled,
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  iconWrapperLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  ctaDone01Typo: {
    lineHeight: 24,
    fontSize: FontSize.medium16pxRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  aspectRatioIcon: {
    height: 0,
    alignSelf: "stretch",
    width: "100%",
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
    opacity: 0,
    alignSelf: "stretch",
  },
  herobannerIcon: {
    left: 0,
    right: 0,
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
    padding: Padding.p_4xs,
    backgroundColor: Color.navigationBarNavboxBackgroundOnDark,
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
    borderRadius: Border.br_2xs,
    backgroundColor: Color.aliasNegative,
    borderWidth: 1,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_6xs,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#fff",
  },
  badgeWrapper: {
    marginTop: -4,
    top: "50%",
    height: 8,
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
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_4xs,
    backgroundColor: Color.navigationBarNavboxBackgroundOnDark,
    flexDirection: "row",
  },
  navigationBar: {
    height: 56,
    paddingVertical: 0,
    zIndex: 1,
    alignItems: "center",
    paddingHorizontal: Padding.p_2xl,
    flexDirection: "row",
    alignSelf: "stretch",
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
    opacity: 0,
  },
  logoIcon: {
    top: 32,
    left: 16,
    zIndex: 2,
    display: "none",
    overflow: "hidden",
  },
  overlay1: {
    backgroundColor: Color.teal_100,
  },
  overlay: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  titleSelcetDuration01: {
    marginLeft: -70,
    left: "50%",
    color: Color.inputTextFilled,
    lineHeight: 24,
    fontSize: FontSize.medium16pxRegular_size,
    top: 8,
    textAlign: "center",
    fontFamily: FontFamily.xSmall10pxRegular,
    fontWeight: "700",
    position: "absolute",
  },
  closeIcon: {
    right: 16,
    top: 8,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  sheetheader: {
    borderBottomWidth: 1,
    borderTopRightRadius: Border.br_2xs,
    borderTopLeftRadius: Border.br_2xs,
    borderColor: "#ebebf0",
    height: 40,
    alignSelf: "stretch",
  },
  contentSelectDuration01: {
    flex: 1,
  },
  sheetadditionalContent: {
    paddingHorizontal: Padding.p_2xl,
    flexDirection: "row",
  },
  circleIcon: {
    maxHeight: "100%",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  plate: {
    flexDirection: "row",
  },
  ellipseIcon: {
    height: "60%",
    width: "60%",
    top: "20%",
    right: "20%",
    bottom: "20%",
    left: "20%",
    maxHeight: "100%",
    position: "absolute",
  },
  radioButton: {
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  listprefix: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  valueSelectDuration01: {
    fontWeight: "700",
  },
  listlabel: {
    alignItems: "center",
    flexDirection: "row",
  },
  wrapper2: {
    height: 21,
    flexDirection: "row",
    flex: 1,
  },
  listsuffix: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  listmasterBundle: {
    paddingTop: Padding.p_2xs,
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
  },
  list: {
    alignSelf: "stretch",
  },
  plate1: {
    flexDirection: "row",
  },
  dataValue1: {
    fontWeight: "700",
  },
  list11: {
    display: "none",
    alignSelf: "stretch",
  },
  sheetcontent: {
    alignSelf: "stretch",
    flex: 1,
  },
  iconWrapper2: {
    display: "none",
  },
  ctaDone01: {
    color: Color.inputBackgroundDefault,
    lineHeight: 24,
    fontSize: FontSize.medium16pxRegular_size,
  },
  button1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.paginationFullBackgroundCurrent,
    paddingHorizontal: Padding.p_md,
  },
  buttonBar: {
    borderTopWidth: 1,
    paddingHorizontal: Padding.p_2xl,
  },
  bottomSheet: {
    height: 544,
    backgroundColor: Color.inputBackgroundDefault,
    borderTopRightRadius: Border.br_2xs,
    borderTopLeftRadius: Border.br_2xs,
    bottom: 0,
    display: "none",
    left: 0,
    right: 0,
    position: "absolute",
  },
  durationBottomSheet: {
    width: 360,
    left: 0,
    overflow: "hidden",
  },
  udbhotel: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  udbhotelApp: {
    top: 264,
    left: 136,
    color: Color.globalBlack,
    width: 88,
    fontWeight: "700",
    position: "absolute",
  },
  splashscreen: {
    backgroundColor: "#469fd1",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Splashscreen;

import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Color,
  FontSize,
  FontFamily,
  Border,
} from "../GlobalStyles";

const Checkoutscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkoutscreen}>
      <Pressable
        style={styles.header}
        onPress={() => navigation.navigate("Detailkamar")}
      >
        <View style={styles.statusBar}>
          <View style={styles.android}>
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
                <Text style={[styles.text, styles.timeLayout]}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.navigationBar, styles.navigationBarSpaceBlock]}
          onPress={() => navigation.navigate("Detailkamar")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/chevronleft.png")}
          />
          <View style={[styles.titleWrapper, styles.ml8]}>
            <Text style={styles.titleScreen01}>DETAIL TRANSAKSI</Text>
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
      </Pressable>
      <View style={[styles.quickCheckoutPage, styles.pageBg]}>
        <View
          style={[
            styles.pageContentquickCheckoutdi,
            styles.buttonSpaceBlock,
            styles.durationGuestBedSpaceBlock,
            styles.pageBg,
          ]}
        >
          <View style={styles.header}>
            <View style={styles.orderSummary}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.title, styles.titleLayout]}>
                  HOTEL RAHAYU
                </Text>
              </View>
              <View style={[styles.header, styles.mt12]}>
                <View style={styles.mainContentcheckout}>
                  <View style={styles.header}>
                    <View
                      style={[
                        styles.listmasterBundle,
                        styles.listmasterSpaceBlock,
                      ]}
                    >
                      <View style={styles.sectionHeader}>
                        <View style={styles.listprefix}>
                          <Image
                            style={styles.iconLayout}
                            resizeMode="cover"
                            source={require("../assets/icon-wrapper12.png")}
                          />
                        </View>
                        <View style={[styles.titleWrapper, styles.ml8]}>
                          <View style={styles.titleWrapper}>
                            <View style={styles.listlabel}>
                              <Text
                                style={[
                                  styles.titleHotel01,
                                  styles.valueLayout,
                                ]}
                              >
                                KAMAR EKLUSIF
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider19.png")}
                      />
                    </View>
                  </View>
                  <Image
                    style={styles.dividerIcon2}
                    resizeMode="cover"
                    source={require("../assets/divider1.png")}
                  />
                  <View style={styles.header}>
                    <View
                      style={[
                        styles.listmasterBundle1,
                        styles.listmasterSpaceBlock,
                      ]}
                    >
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper3}>
                            <View style={styles.sectionHeader}>
                              <Text
                                style={[
                                  styles.titleRoomItem01,
                                  styles.valueLayout,
                                ]}
                              >
                                2 KAMAR 1 KAMAR MANDI
                              </Text>
                            </View>
                            <View style={[styles.listprefix, styles.mt4]}>
                              <Text
                                style={[
                                  styles.description,
                                  styles.descriptionClr,
                                ]}
                              >
                                240m2
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
                          <Text
                            style={[
                              styles.dataValue,
                              styles.dataTypo1,
                              styles.valueLayout,
                            ]}
                          >
                            x 1
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
                  <Image
                    style={styles.dividerIcon2}
                    resizeMode="cover"
                    source={require("../assets/divider1.png")}
                  />
                  <View
                    style={[
                      styles.buttonSpaceBlock,
                      styles.durationGuestBedSpaceBlock,
                    ]}
                  >
                    <View style={styles.header}>
                      <View
                        style={[
                          styles.listmasterBundle2,
                          styles.navigationBarSpaceBlock,
                        ]}
                      >
                        <View style={styles.sectionHeader}>
                          <View style={styles.listprefix}>
                            <Image
                              style={styles.iconLayout}
                              resizeMode="cover"
                              source={require("../assets/icon-wrapper13.png")}
                            />
                          </View>
                          <View style={[styles.titleWrapper, styles.ml8]}>
                            <View style={styles.wrapper3}>
                              <View style={styles.sectionHeader}>
                                <Text
                                  style={[
                                    styles.labelDuration01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  MAKANAN
                                </Text>
                              </View>
                              <View style={[styles.listprefix, styles.mt4]}>
                                <Text
                                  style={[
                                    styles.valueDuration01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  2 KALI
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                        <Image
                          style={[
                            styles.dividerIcon5,
                            styles.mt8,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/divider19.png")}
                        />
                      </View>
                    </View>
                    <View style={[styles.header, styles.mt8]}>
                      <View
                        style={[
                          styles.listmasterBundle2,
                          styles.navigationBarSpaceBlock,
                        ]}
                      >
                        <View style={styles.sectionHeader}>
                          <View style={styles.listprefix}>
                            <Image
                              style={styles.iconLayout}
                              resizeMode="cover"
                              source={require("../assets/icon-wrapper14.png")}
                            />
                          </View>
                          <View style={[styles.titleWrapper, styles.ml8]}>
                            <View style={styles.wrapper3}>
                              <View style={styles.listlabel3}>
                                <Text
                                  style={[
                                    styles.labelDuration01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  ORANG
                                </Text>
                              </View>
                              <View style={[styles.listprefix, styles.mt4]}>
                                <Text
                                  style={[
                                    styles.valueDuration01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  2 DEWASA, 1 ANAK
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                        <Image
                          style={[
                            styles.dividerIcon5,
                            styles.mt8,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/divider19.png")}
                        />
                      </View>
                    </View>
                    <View style={[styles.header, styles.mt8]}>
                      <View
                        style={[
                          styles.listmasterBundle2,
                          styles.navigationBarSpaceBlock,
                        ]}
                      >
                        <View style={styles.sectionHeader}>
                          <View style={styles.listprefix}>
                            <Image
                              style={styles.iconLayout}
                              resizeMode="cover"
                              source={require("../assets/icon-wrapper15.png")}
                            />
                          </View>
                          <View style={[styles.titleWrapper, styles.ml8]}>
                            <View style={styles.wrapper3}>
                              <View style={styles.listlabel3}>
                                <Text
                                  style={[
                                    styles.labelDuration01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  BESAR
                                </Text>
                              </View>
                              <View style={[styles.listprefix, styles.mt4]}>
                                <Text
                                  style={[
                                    styles.titleRoomItem01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  2 giường đơn, 1 giường cỡ queen
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                        <Image
                          style={[
                            styles.dividerIcon5,
                            styles.mt8,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/divider19.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.dividerIcon2}
                    resizeMode="cover"
                    source={require("../assets/divider1.png")}
                  />
                  <View style={styles.durationGuestBedSpaceBlock}>
                    <View style={styles.header}>
                      <View
                        style={[
                          styles.listmasterBundle2,
                          styles.navigationBarSpaceBlock,
                        ]}
                      >
                        <View style={styles.listprefix}>
                          <View style={styles.listprefix}>
                            <Image
                              style={styles.iconLayout}
                              resizeMode="cover"
                              source={require("../assets/contentclock.png")}
                            />
                          </View>
                          <View style={[styles.titleWrapper, styles.ml8]}>
                            <View style={styles.wrapper3}>
                              <View style={styles.sectionHeader}>
                                <Text
                                  style={[
                                    styles.labelCheckInTime01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  Nhận phòng
                                </Text>
                              </View>
                              <View style={[styles.listprefix, styles.mt4]}>
                                <Text
                                  style={[
                                    styles.valueDuration01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  Thứ Tư, 02/02/2022 (15:00 - 03:00)
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                        <Image
                          style={[
                            styles.dividerIcon5,
                            styles.mt8,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/divider19.png")}
                        />
                      </View>
                    </View>
                    <View style={[styles.header, styles.mt8]}>
                      <View
                        style={[
                          styles.listmasterBundle2,
                          styles.navigationBarSpaceBlock,
                        ]}
                      >
                        <View style={styles.listprefix}>
                          <View style={styles.listprefix}>
                            <Image
                              style={styles.iconLayout}
                              resizeMode="cover"
                              source={require("../assets/contentclock.png")}
                            />
                          </View>
                          <View style={[styles.titleWrapper, styles.ml8]}>
                            <View style={styles.wrapper3}>
                              <View style={styles.sectionHeader}>
                                <Text
                                  style={[
                                    styles.labelCheckInTime01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  Trả phòng
                                </Text>
                              </View>
                              <View style={[styles.listprefix, styles.mt4]}>
                                <Text
                                  style={[
                                    styles.valueDuration01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  Thứ Sáu, 04/02/2022 (trước 11:00)
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                        <Image
                          style={[
                            styles.dividerIcon5,
                            styles.mt8,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/divider19.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.dividerIcon2}
                    resizeMode="cover"
                    source={require("../assets/divider1.png")}
                  />
                  <View style={styles.header}>
                    <View style={styles.header}>
                      <View
                        style={[
                          styles.listmasterBundle1,
                          styles.listmasterSpaceBlock,
                        ]}
                      >
                        <View style={styles.sectionHeader}>
                          <View style={styles.listprefix}>
                            <Image
                              style={styles.iconLayout}
                              resizeMode="cover"
                              source={require("../assets/icon-wrapper16.png")}
                            />
                          </View>
                          <View style={[styles.titleWrapper, styles.ml8]}>
                            <View style={styles.wrapper15}>
                              <View style={styles.listlabel3}>
                                <Text
                                  style={[
                                    styles.labelDuration01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  Miễn phí hủy phòng
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                        <Image
                          style={[
                            styles.dividerIcon5,
                            styles.mt8,
                            styles.dividerIconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/divider17.png")}
                        />
                      </View>
                    </View>
                    <View style={styles.header}>
                      <View
                        style={[
                          styles.listmasterBundle1,
                          styles.listmasterSpaceBlock,
                        ]}
                      >
                        <View style={styles.sectionHeader}>
                          <View style={styles.listprefix}>
                            <Image
                              style={styles.iconLayout}
                              resizeMode="cover"
                              source={require("../assets/icon-wrapper16.png")}
                            />
                          </View>
                          <View style={[styles.titleWrapper, styles.ml8]}>
                            <View style={styles.wrapper15}>
                              <View style={styles.listlabel3}>
                                <Text
                                  style={[
                                    styles.labelDuration01,
                                    styles.valueLayout,
                                  ]}
                                >
                                  Áp dụng chính sách đổi lịch
                                </Text>
                              </View>
                            </View>
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
          <View style={[styles.header, styles.mt8]}>
            <View style={styles.orderSummary}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.title, styles.titleLayout]}>
                  Chính sách khách sạn và phòng
                </Text>
              </View>
              <View style={[styles.header, styles.mt12]}>
                <View style={styles.listmasterBundle9}>
                  <View style={styles.sectionHeader}>
                    <View style={styles.titleWrapper}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.listlabel}>
                          <Text
                            style={[styles.labelDuration01, styles.valueLayout]}
                          >
                            <Text style={styles.pDngChnh}>
                              Áp dụng chính sách hủy phòng
                            </Text>
                            <Text style={styles.minPhHy}>
                              Miễn phí hủy trước 26-thg 5-2022 14:00. Nếu hủy
                              hoặc sửa đổi sau 26-thg 5-2022 14:01, phí hủy đặt
                              phòng sẽ được tính.
                            </Text>
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Image
                    style={[
                      styles.dividerIcon5,
                      styles.mt8,
                      styles.dividerIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/divider12.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.header, styles.mt8]}>
            <View style={styles.orderSummary}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.title, styles.titleLayout]}>
                  Phương thức thanh toán
                </Text>
                <Image
                  style={[styles.iconLayout, styles.ml16]}
                  resizeMode="cover"
                  source={require("../assets/navigationarrowright.png")}
                />
              </View>
              <View style={[styles.paymentMethodContent, styles.mt12]}>
                <View style={styles.header}>
                  <View style={styles.header}>
                    <View style={styles.listmasterBundle9}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.listlabel}>
                          <View style={styles.listthumbnail}>
                            <Image
                              style={styles.appIcon}
                              resizeMode="cover"
                              source={require("../assets/app.png")}
                            />
                          </View>
                          <View style={[styles.wrapper15, styles.ml8]}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.valueDuration01,
                                  styles.valueLayout,
                                ]}
                              >
                                VIB ••6969
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.dividerIcon5,
                          styles.mt8,
                          styles.dividerIconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.header, styles.mt8]}>
            <View style={styles.orderSummary}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.title, styles.titleLayout]}>
                  Thông tin khách
                </Text>
              </View>
              <View style={[styles.header, styles.mt12]}>
                <View style={styles.listmasterBundle9}>
                  <View style={styles.sectionHeader}>
                    <View style={styles.listprefix}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/navigationarrowright.png")}
                      />
                    </View>
                    <View style={[styles.titleWrapper, styles.ml8]}>
                      <View style={styles.wrapper3}>
                        <View style={styles.sectionHeader}>
                          <Text
                            style={[
                              styles.labelCheckInTime01,
                              styles.valueLayout,
                            ]}
                          >
                            Tên khách
                          </Text>
                        </View>
                        <View style={[styles.listprefix, styles.mt4]}>
                          <Text
                            style={[styles.valueDuration01, styles.valueLayout]}
                          >
                            NGUYEN VAN ANH
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Image
                    style={[
                      styles.dividerIcon5,
                      styles.mt8,
                      styles.dividerIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/divider12.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.header, styles.mt8]}>
            <View style={styles.orderSummary}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.title, styles.titleLayout]}>
                  Thông tin liên hệ
                </Text>
              </View>
              <View style={[styles.paymentMethodContent, styles.mt12]}>
                <View style={styles.header}>
                  <View style={styles.listmasterBundle9}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.wrapper15}>
                          <View style={styles.listlabel10}>
                            <Text
                              style={[
                                styles.labelCheckInTime01,
                                styles.valueLayout,
                              ]}
                            >
                              Họ tên
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={[
                          styles.listsuffix1,
                          styles.ml8,
                          styles.listsuffixFlexBox,
                        ]}
                      >
                        <Text
                          style={[
                            styles.dataValue,
                            styles.dataTypo1,
                            styles.valueLayout,
                          ]}
                        >
                          User name
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIconLayout, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider12.png")}
                    />
                  </View>
                </View>
                <View style={styles.header}>
                  <View
                    style={[
                      styles.listmasterBundle13,
                      styles.listmasterSpaceBlock,
                    ]}
                  >
                    <View style={styles.sectionHeader}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.wrapper15}>
                          <View style={styles.listlabel10}>
                            <Text
                              style={[
                                styles.labelCheckInTime01,
                                styles.valueLayout,
                              ]}
                            >
                              Số điện thoại
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={[
                          styles.listsuffix1,
                          styles.ml8,
                          styles.listsuffixFlexBox,
                        ]}
                      >
                        <Text
                          style={[
                            styles.dataValue,
                            styles.dataTypo1,
                            styles.valueLayout,
                          ]}
                        >
                          090 123 4567
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[styles.dividerIconLayout, styles.mt8]}
                      resizeMode="cover"
                      source={require("../assets/divider12.png")}
                    />
                  </View>
                </View>
                <View style={styles.header}>
                  <View
                    style={[
                      styles.listmasterBundle13,
                      styles.listmasterSpaceBlock,
                    ]}
                  >
                    <View style={styles.sectionHeader}>
                      <View style={styles.titleWrapper}>
                        <View style={styles.wrapper15}>
                          <View style={styles.listlabel10}>
                            <Text
                              style={[
                                styles.labelCheckInTime01,
                                styles.valueLayout,
                              ]}
                            >
                              Email
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={[
                          styles.listsuffix1,
                          styles.ml8,
                          styles.listsuffixFlexBox,
                        ]}
                      >
                        <Text
                          style={[
                            styles.dataValue,
                            styles.dataTypo1,
                            styles.valueLayout,
                          ]}
                        >
                          abc@tini.vn
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={[
                        styles.dividerIcon5,
                        styles.mt8,
                        styles.dividerIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/divider12.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.header, styles.mt8]}>
            <View style={styles.orderSummary}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.title, styles.titleLayout]}>
                  Chi tiết giá
                </Text>
              </View>
              <View style={[styles.paymentMethodContent, styles.mt12]}>
                <View style={styles.header}>
                  <View style={styles.subtotal}>
                    <View style={styles.header}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper15}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.labelCheckInTime01,
                                  styles.valueLayout,
                                ]}
                              >
                                Tạm tính
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix1,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue4, styles.dataTypo]}>
                            00.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.header}>
                    <View style={styles.header}>
                      <View style={styles.listprefix}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.titleWrapper}>
                            <View style={styles.listlabel}>
                              <Text
                                style={[
                                  styles.labelDuration01,
                                  styles.valueLayout,
                                ]}
                              >{`1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố `}</Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix5,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue4, styles.dataTypo]}>
                            3.600.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.header}>
                    <View style={styles.listmasterSpaceBlock}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.titleWrapper}>
                            <View style={styles.listlabel}>
                              <Text
                                style={[
                                  styles.labelDuration01,
                                  styles.valueLayout,
                                ]}
                              >{`1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố `}</Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix5,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue4, styles.dataTypo]}>
                            3.600.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.header}>
                    <View style={styles.listmasterSpaceBlock}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper15}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.labelCheckInTime01,
                                  styles.valueLayout,
                                ]}
                              >
                                Thuế và phí
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix1,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue4, styles.dataTypo]}>
                            800.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.subtotal}>
                    <View style={styles.listmasterSpaceBlock}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper15}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.labelCheckInTime01,
                                  styles.valueLayout,
                                ]}
                              >
                                Phí
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix1,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue4, styles.dataTypo]}>
                            00.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.subtotal}>
                    <View style={styles.listmasterSpaceBlock}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper15}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.labelCheckInTime01,
                                  styles.valueLayout,
                                ]}
                              >
                                Phí
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix1,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue4, styles.dataTypo]}>
                            00.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.subtotal}>
                    <View style={styles.listmasterSpaceBlock}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper15}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.labelCheckInTime01,
                                  styles.valueLayout,
                                ]}
                              >
                                Phí
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix1,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue4, styles.dataTypo]}>
                            00.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.subtotal}>
                    <View style={styles.listmasterSpaceBlock}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper15}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.labelCheckInTime01,
                                  styles.valueLayout,
                                ]}
                              >
                                Phí
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix1,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue4, styles.dataTypo]}>
                            00.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.subtotal}>
                    <View style={styles.listmasterSpaceBlock}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper15}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.labelCheckInTime01,
                                  styles.valueLayout,
                                ]}
                              >
                                Giảm giá
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix1,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue12, styles.dataTypo]}>
                            -00.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.subtotal}>
                    <View style={styles.listmasterSpaceBlock}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper15}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.labelCheckInTime01,
                                  styles.valueLayout,
                                ]}
                              >
                                Giảm giá
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix1,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue12, styles.dataTypo]}>
                            -00.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.subtotal}>
                    <View style={styles.listmasterSpaceBlock}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper15}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.labelCheckInTime01,
                                  styles.valueLayout,
                                ]}
                              >
                                Giảm giá
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix1,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue12, styles.dataTypo]}>
                            -00.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.subtotal}>
                    <View style={styles.listmasterSpaceBlock}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper15}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.labelCheckInTime01,
                                  styles.valueLayout,
                                ]}
                              >
                                Giảm giá
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix1,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text style={[styles.dataValue12, styles.dataTypo]}>
                            -00.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.dividerIconLayout, styles.mt8]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.header}>
                    <View style={styles.listmasterSpaceBlock}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.titleWrapper}>
                          <View style={styles.wrapper15}>
                            <View style={styles.listlabel10}>
                              <Text
                                style={[
                                  styles.valueDuration01,
                                  styles.valueLayout,
                                ]}
                              >
                                Tổng cộng
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.listsuffix1,
                            styles.ml8,
                            styles.listsuffixFlexBox,
                          ]}
                        >
                          <Text
                            style={[
                              styles.dataValue16,
                              styles.dataTypo1,
                              styles.titleLayout,
                            ]}
                          >
                            800.000 ₫
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.dividerIcon5,
                          styles.mt8,
                          styles.dividerIconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/divider12.png")}
                      />
                    </View>
                  </View>
                  <Text
                    style={[
                      styles.note,
                      styles.dataTypo1,
                      styles.descriptionClr,
                    ]}
                  >
                    Ghi chú
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.listmasterBundle9}>
          <Image
            style={styles.dividerIcon2}
            resizeMode="cover"
            source={require("../assets/divider79.png")}
          />
          <View style={styles.header}>
            <View
              style={[styles.listmasterBundle1, styles.listmasterSpaceBlock]}
            >
              <View style={styles.listprefix}>
                <View style={styles.titleWrapper}>
                  <View style={styles.wrapper15}>
                    <View style={styles.listlabel10}>
                      <Text
                        style={[styles.valueDuration01, styles.valueLayout]}
                      >
                        Tổng giá tiền
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.listsuffix17,
                    styles.ml8,
                    styles.listsuffixFlexBox,
                  ]}
                >
                  <Text
                    style={[
                      styles.descriptionValue,
                      styles.dataTypo1,
                      styles.valueLayout,
                    ]}
                  >
                    8.000.000 ₫
                  </Text>
                  <Image
                    style={[styles.iconLayout, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/icon-wrapper19.png")}
                  />
                </View>
              </View>
              <Image
                style={[
                  styles.dividerIcon5,
                  styles.mt8,
                  styles.dividerIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/divider80.png")}
              />
            </View>
          </View>
          <View style={styles.listadditionalInformation7}>
            <Text
              style={[
                styles.descriptionSum01,
                styles.dataTypo1,
                styles.descriptionClr,
              ]}
            >
              Đã bao gồm thuế
            </Text>
          </View>
          <View style={[styles.buttonBar, styles.buttonSpaceBlock]}>
            <Pressable
              style={styles.buttonbrand}
              onPress={() => navigation.navigate("Checkoutloading")}
            >
              <View style={[styles.button, styles.buttonSpaceBlock]}>
                <Image
                  style={[styles.iconWrapper8, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon-wrapper1.png")}
                />
                <Text style={[styles.ctaPay01, styles.ml8, styles.titleLayout]}>
                  BAYAR
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.iosHomeIndicator}>
            <View style={styles.homeIndicator} />
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
  mt4: {
    marginTop: Margin.m_4xs,
  },
  mt12: {
    marginTop: Margin.m_md,
  },
  ml16: {
    marginLeft: Margin.m_xl,
  },
  ml4: {
    marginLeft: Margin.m_4xs,
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
  navigationBarSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
  },
  pageBg: {
    backgroundColor: Color.dividerThickBackgroundDefault,
    flex: 1,
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    alignSelf: "stretch",
  },
  durationGuestBedSpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xs,
  },
  titleLayout: {
    lineHeight: 24,
    fontSize: FontSize.medium16pxRegular_size,
  },
  listmasterSpaceBlock: {
    paddingTop: Padding.p_2xs,
    alignSelf: "stretch",
  },
  valueLayout: {
    lineHeight: 21,
    fontSize: FontSize.base14pxMedium_size,
  },
  descriptionClr: {
    color: Color.inputTextPlaceholder,
    lineHeight: 18,
    fontSize: FontSize.small12pxRegular_size,
  },
  listsuffixFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  dataTypo1: {
    textAlign: "right",
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  dividerIconLayout: {
    height: 0,
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  dataTypo: {
    fontWeight: "500",
    textAlign: "right",
    lineHeight: 21,
    fontSize: FontSize.base14pxMedium_size,
    fontFamily: FontFamily.xSmall10pxRegular,
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
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
    color: Color.inputBackgroundDefault,
    right: 0,
    top: "0%",
    height: "100%",
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
    right: 0,
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  android: {
    height: 24,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  statusBar: {
    backgroundColor: Color.paginationFullBackgroundCurrent,
    alignSelf: "stretch",
  },
  titleScreen01: {
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
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.paginationFullBackgroundCurrent,
  },
  header: {
    alignSelf: "stretch",
  },
  title: {
    color: Color.inputTextFilled,
    fontFamily: FontFamily.xSmall10pxRegular,
    fontWeight: "700",
    textAlign: "left",
    flex: 1,
  },
  sectionHeader: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  listprefix: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  titleHotel01: {
    fontFamily: FontFamily.xSmall10pxRegular,
    textAlign: "left",
    color: Color.inputBackgroundDefault,
    flex: 1,
  },
  listlabel: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  listmasterBundle: {
    paddingHorizontal: Padding.p_2xl,
    backgroundColor: Color.paginationFullBackgroundCurrent,
  },
  dividerIcon2: {
    height: 1,
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  titleRoomItem01: {
    color: Color.inputTextFilled,
    fontFamily: FontFamily.xSmall10pxRegular,
    fontWeight: "700",
    textAlign: "left",
    flex: 1,
  },
  description: {
    fontFamily: FontFamily.xSmall10pxRegular,
    textAlign: "left",
    flex: 1,
  },
  wrapper3: {
    flex: 1,
  },
  dataValue: {
    color: Color.inputTextFilled,
    fontWeight: "700",
  },
  listsuffix: {
    alignSelf: "stretch",
  },
  listmasterBundle1: {
    backgroundColor: Color.inputBackgroundDefault,
    paddingHorizontal: Padding.p_2xl,
  },
  labelDuration01: {
    color: Color.inputTextFilled,
    fontFamily: FontFamily.xSmall10pxRegular,
    textAlign: "left",
    flex: 1,
  },
  valueDuration01: {
    color: Color.inputTextFilled,
    fontFamily: FontFamily.xSmall10pxRegular,
    fontWeight: "700",
    textAlign: "left",
  },
  dividerIcon5: {
    display: "none",
  },
  listmasterBundle2: {
    backgroundColor: Color.inputBackgroundDefault,
  },
  listlabel3: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  labelCheckInTime01: {
    color: Color.inputTextFilled,
    fontFamily: FontFamily.xSmall10pxRegular,
    textAlign: "left",
  },
  wrapper15: {
    height: 21,
    flexDirection: "row",
    flex: 1,
  },
  mainContentcheckout: {
    borderRadius: Border.br_2xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#ebebf0",
    borderWidth: 1,
    paddingBottom: Padding.p_2xs,
    alignItems: "flex-end",
    backgroundColor: Color.inputBackgroundDefault,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  orderSummary: {
    paddingVertical: Padding.p_md,
    backgroundColor: Color.inputBackgroundDefault,
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
  },
  pDngChnh: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  minPhHy: {
    margin: 0,
  },
  listmasterBundle9: {
    backgroundColor: Color.inputBackgroundDefault,
    alignSelf: "stretch",
  },
  appIcon: {
    width: 40,
    height: 40,
  },
  listthumbnail: {
    flexDirection: "row",
  },
  listlabel10: {
    width: 38,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  paymentMethodContent: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  listsuffix1: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  listmasterBundle13: {
    backgroundColor: Color.inputBackgroundDefault,
  },
  dataValue4: {
    color: Color.inputTextFilled,
  },
  subtotal: {
    display: "none",
    alignSelf: "stretch",
  },
  listsuffix5: {
    alignSelf: "stretch",
    flex: 1,
  },
  dataValue12: {
    color: Color.aliasPositive,
  },
  dataValue16: {
    color: Color.inputTextFilled,
    fontWeight: "700",
  },
  note: {
    display: "none",
    alignSelf: "stretch",
  },
  pageContentquickCheckoutdi: {
    flex: 1,
  },
  descriptionValue: {
    color: Color.paginationFullBackgroundCurrent,
    fontWeight: "700",
  },
  listsuffix17: {
    paddingLeft: Padding.p_2xs,
    alignItems: "center",
    flex: 1,
  },
  descriptionSum01: {
    flex: 1,
  },
  listadditionalInformation7: {
    paddingTop: Padding.p_4xs,
    paddingRight: Padding.p_2xl,
    paddingBottom: Padding.p_4xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconWrapper8: {
    display: "none",
  },
  ctaPay01: {
    textAlign: "center",
    fontFamily: FontFamily.xSmall10pxRegular,
    color: Color.inputBackgroundDefault,
  },
  button: {
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_md,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.paginationFullBackgroundCurrent,
  },
  buttonbrand: {
    height: 40,
    alignSelf: "stretch",
  },
  buttonBar: {
    backgroundColor: Color.inputBackgroundDefault,
    paddingHorizontal: Padding.p_2xl,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.globalBlack,
    width: 134,
    height: 5,
    position: "absolute",
  },
  iosHomeIndicator: {
    height: 34,
    display: "none",
    backgroundColor: Color.inputBackgroundDefault,
    alignSelf: "stretch",
  },
  quickCheckoutPage: {
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  checkoutscreen: {
    height: 640,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.dividerThickBackgroundDefault,
  },
});

export default Checkoutscreen;

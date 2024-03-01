import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Homepage = () => {
  return (
    <View style={[styles.homepage, styles.cardLayout]}>
      <View style={styles.statusBar}>
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        <View style={styles.statusIcons}>
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.batterySpaceBlock]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <View style={[styles.battery, styles.batterySpaceBlock]}>
            <View style={styles.border} />
            <Image
              style={styles.capIcon}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={styles.capacity} />
          </View>
        </View>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
      </View>
      <View style={[styles.card, styles.cardLayout]}>
        <Image
          style={styles.cardChild}
          contentFit="cover"
          source={require("../assets/ellipse-23.png")}
        />
        <View style={styles.name}>
          <View style={styles.name1}>
            <View style={styles.avatar}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image.png")}
              />
            </View>
            <View style={styles.name2}>
              <Text style={[styles.welcomeBack, styles.stockTypo]}>
                Welcome back!
              </Text>
              <Text style={styles.timeTypo}>Jennie Hooks</Text>
            </View>
          </View>
          <View style={styles.icon}>
            <Image
              style={styles.octicongift24}
              contentFit="cover"
              source={require("../assets/octicongift24.png")}
            />
            <Image
              style={styles.notificationIcon}
              contentFit="cover"
              source={require("../assets/notification.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.homeSpaceBlock]}>
        <View style={styles.indicator} />
      </View>
      <View style={[styles.total, styles.stepSpaceBlock]}>
        <View style={styles.totalBalanceParent}>
          <Text style={[styles.totalBalance, styles.textLayout]}>
            Total Balance
          </Text>
          <Text style={[styles.text, styles.textTypo]}>$254,352</Text>
        </View>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <View style={[styles.buttonStructure, styles.transactionSpaceBlock]}>
            <View style={styles.wrapper}>
              <Image
                style={styles.iconWrapperLayout}
                contentFit="cover"
                source={require("../assets/iconlightplus.png")}
              />
              <Text style={[styles.label, styles.stotTypo]}>Label</Text>
            </View>
            <Image
              style={[styles.iconWrapper, styles.iconWrapperLayout]}
              contentFit="cover"
              source={require("../assets/icon-wrapper.png")}
            />
          </View>
        </View>
        <View style={styles.button1}>
          <View style={[styles.buttonStructure, styles.transactionSpaceBlock]}>
            <View style={styles.wrapper}>
              <Image
                style={styles.iconWrapperLayout}
                contentFit="cover"
                source={require("../assets/iconlightplus.png")}
              />
              <Text style={[styles.label, styles.stotTypo]}>Label</Text>
            </View>
            <Image
              style={[styles.iconWrapper, styles.iconWrapperLayout]}
              contentFit="cover"
              source={require("../assets/icon-wrapper.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.reward, styles.rewardPosition]}>
        <Text style={styles.watchlistTypo}>Reward</Text>
        <View style={[styles.step, styles.stepFlexBox]}>
          <View style={styles.content}>
            <View style={styles.step1}>
              <View style={styles.logo}>
                <Image
                  style={styles.iconboldticketStar}
                  contentFit="cover"
                  source={require("../assets/iconboldticket-star.png")}
                />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.step11, styles.stotTypo]}>Step 1</Text>
                <Text
                  style={[styles.enterIntroduceCouper, styles.text3Typo]}
                >{`Enter introduce couper `}</Text>
              </View>
            </View>
            <View style={styles.step2}>
              <View style={styles.logo}>
                <Image
                  style={styles.octicongift24}
                  contentFit="cover"
                  source={require("../assets/iconboldfund.png")}
                />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.step11, styles.stotTypo]}>Step 2</Text>
                <Text style={[styles.enterIntroduceCouper, styles.text3Typo]}>
                  Deposit in fund
                </Text>
              </View>
            </View>
            <Image
              style={[styles.contentChild, styles.rewardPosition]}
              contentFit="cover"
              source={require("../assets/vector-221.png")}
            />
          </View>
          <Image
            style={styles.illustrationcoinIcon}
            contentFit="cover"
            source={require("../assets/illustrationcoin.png")}
          />
        </View>
      </View>
      <View style={styles.transactions}>
        <View style={styles.transactionsParent}>
          <Text style={[styles.transactions1, styles.watchlistTypo]}>
            Transactions
          </Text>
          <View style={[styles.transaction, styles.stepFlexBox]}>
            <View style={styles.content1}>
              <View style={[styles.logo2, styles.logoLayout]}>
                <Image
                  style={styles.component13Icon}
                  contentFit="cover"
                  source={require("../assets/component-13.png")}
                />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.stot, styles.stotTypo]}>Apple</Text>
                <View style={styles.content3}>
                  <Text style={styles.text3Typo}>3 Shares</Text>
                  <Image
                    style={[styles.contentItem, styles.contentLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-20.png")}
                  />
                  <Text style={[styles.text3, styles.text3Typo]}>$228.90</Text>
                </View>
                <View style={styles.content3}>
                  <Text
                    style={[styles.text4, styles.textTypo1]}
                  >{`&1,341.43`}</Text>
                  <Image
                    style={[styles.contentInner, styles.contentLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-20.png")}
                  />
                  <View style={styles.bxtrendingUpParent}>
                    <Image
                      style={styles.bxtrendingUpIcon}
                      contentFit="cover"
                      source={require("../assets/bxtrendingup.png")}
                    />
                    <Text style={[styles.text5, styles.textTypo1]}>0.66%</Text>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={styles.transactionChild}
              contentFit="cover"
              source={require("../assets/vector-8.png")}
            />
          </View>
          <View style={[styles.transaction, styles.stepFlexBox]}>
            <View style={styles.content1}>
              <View style={[styles.logo3, styles.logoLayout]}>
                <Image
                  style={styles.component13Icon}
                  contentFit="cover"
                  source={require("../assets/component-131.png")}
                />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.stot, styles.stotTypo]}>Google</Text>
                <View style={styles.content3}>
                  <Text style={styles.text3Typo}>4 Shares</Text>
                  <Image
                    style={[styles.contentItem, styles.contentLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-20.png")}
                  />
                  <Text style={[styles.text3, styles.text3Typo]}>$228.90</Text>
                </View>
                <View style={styles.content3}>
                  <Text
                    style={[styles.text4, styles.textTypo1]}
                  >{`&1,341.43`}</Text>
                  <Image
                    style={[styles.contentInner, styles.contentLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-20.png")}
                  />
                  <View style={styles.bxtrendingUpParent}>
                    <Image
                      style={styles.bxtrendingUpIcon}
                      contentFit="cover"
                      source={require("../assets/bxtrendingup.png")}
                    />
                    <Text style={[styles.text5, styles.textTypo1]}>4.90%</Text>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={styles.transactionChild}
              contentFit="cover"
              source={require("../assets/vector-81.png")}
            />
          </View>
          <View style={[styles.transaction, styles.stepFlexBox]}>
            <View style={styles.content1}>
              <View style={[styles.logo2, styles.logoLayout]}>
                <Image
                  style={styles.component13Icon}
                  contentFit="cover"
                  source={require("../assets/component-132.png")}
                />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.stot, styles.stotTypo]}>Facebook</Text>
                <View style={styles.content3}>
                  <Text style={styles.text3Typo}>5 Shares</Text>
                  <Image
                    style={[styles.contentItem, styles.contentLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-20.png")}
                  />
                  <Text style={[styles.text3, styles.text3Typo]}>$228.90</Text>
                </View>
                <View style={styles.content3}>
                  <Text
                    style={[styles.text4, styles.textTypo1]}
                  >{`&1,341.43`}</Text>
                  <Image
                    style={[styles.contentInner, styles.contentLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-20.png")}
                  />
                  <View style={styles.bxtrendingUpParent}>
                    <Image
                      style={styles.bxtrendingUpIcon}
                      contentFit="cover"
                      source={require("../assets/bxtrendingup.png")}
                    />
                    <Text style={[styles.text5, styles.textTypo1]}>0.66%</Text>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={styles.transactionChild}
              contentFit="cover"
              source={require("../assets/vector-8.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.shortcut}>
        <LinearGradient
          style={styles.shortcutSpaceBlock}
          locations={[0, 0.91]}
          colors={["#ff9557", "#fdd0b6"]}
        >
          <Image
            style={styles.illustrationsaveMoneyIcon}
            contentFit="cover"
            source={require("../assets/illustrationsave-money.png")}
          />
          <Text style={[styles.stock, styles.stockTypo]}>Stock</Text>
        </LinearGradient>
        <LinearGradient
          style={[styles.shortcut2, styles.shortcutSpaceBlock]}
          locations={[0, 0.29, 1]}
          colors={["#bdbcff", "#d2d1ff", "#e2e1ff"]}
        >
          <Image
            style={styles.illustrationsaveMoneyIcon}
            contentFit="cover"
            source={require("../assets/illustrationsecurity.png")}
          />
          <Text style={[styles.stock, styles.stockTypo]}>Stock</Text>
        </LinearGradient>
        <LinearGradient
          style={[styles.shortcut2, styles.shortcutSpaceBlock]}
          locations={[0, 0.91]}
          colors={["#fec6a5", "#ffe7d9"]}
        >
          <Image
            style={styles.illustrationsaveMoneyIcon}
            contentFit="cover"
            source={require("../assets/illustrationsave-money1.png")}
          />
          <Text style={[styles.stock, styles.stockTypo]}>Stock</Text>
        </LinearGradient>
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <View style={styles.wrapper2}>
          <View style={styles.transactionsParent}>
            <View style={styles.separator344} />
          </View>
          <View style={styles.tabs}>
            <View style={[styles.tabBarItem, styles.tabBarItemFlexBox]}>
              <Image
                style={styles.iconboldticketStar}
                contentFit="cover"
                source={require("../assets/iconlighthome.png")}
              />
              <Image
                style={styles.activeDotIcon}
                contentFit="cover"
                source={require("../assets/active-dot.png")}
              />
            </View>
            <View style={[styles.tabBarItem, styles.tabBarItemFlexBox]}>
              <Image
                style={styles.iconboldticketStar}
                contentFit="cover"
                source={require("../assets/iconlightoutlinetransaction.png")}
              />
            </View>
            <View style={styles.buttonFlexBox}>
              <View
                style={[styles.buttonStructure, styles.transactionSpaceBlock]}
              >
                <View style={styles.wrapper}>
                  <Image
                    style={styles.iconWrapperLayout}
                    contentFit="cover"
                    source={require("../assets/iconlightplus1.png")}
                  />
                  <Text style={[styles.label, styles.stotTypo]}>Label</Text>
                </View>
                <Image
                  style={[styles.iconWrapper, styles.iconWrapperLayout]}
                  contentFit="cover"
                  source={require("../assets/icon-wrapper1.png")}
                />
              </View>
            </View>
            <View style={[styles.tabBarItem, styles.tabBarItemFlexBox]}>
              <Image
                style={styles.iconboldticketStar}
                contentFit="cover"
                source={require("../assets/iconlightoutlinewithdraw.png")}
              />
            </View>
            <View style={[styles.tabBarItem, styles.tabBarItemFlexBox]}>
              <Image
                style={styles.iconboldticketStar}
                contentFit="cover"
                source={require("../assets/iconlightoutlinecard.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.homeIndicator1, styles.homeSpaceBlock]}>
          <View style={styles.indicator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    borderRadius: Border.br_5xl,
    overflow: "hidden",
  },
  timeTypo: {
    textAlign: "center",
    color: Color.aliasTokenColorNeutralLightmodeTextTitle,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.labelL1Semibold_size,
    fontFamily: FontFamily.titleT3Medium,
    fontWeight: "500",
  },
  batterySpaceBlock: {
    marginLeft: 5,
    height: 11,
  },
  stockTypo: {
    lineHeight: 16,
    fontSize: FontSize.captionC1Regular_size,
    textAlign: "center",
    fontFamily: FontFamily.titleT3Medium,
    fontWeight: "500",
  },
  homeSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_2xl,
    alignItems: "center",
    backgroundColor: Color.aliasTokenColorNeutralDarkmodeBackground,
  },
  stepSpaceBlock: {
    padding: Padding.p_base,
    width: 343,
  },
  textLayout: {
    width: 311,
    textAlign: "left",
    letterSpacing: 0,
  },
  textTypo: {
    fontWeight: "600",
    color: Color.aliasTokenColorNeutralLightmodeBackground,
  },
  buttonFlexBox: {
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  transactionSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
  },
  stotTypo: {
    lineHeight: 25,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.labelL1Semibold_size,
  },
  iconWrapperLayout: {
    height: 18,
    width: 18,
  },
  rewardPosition: {
    left: 16,
    position: "absolute",
  },
  stepFlexBox: {
    marginTop: 12,
    borderRadius: Border.br_base,
    backgroundColor: Color.aliasTokenColorNeutralLightmodeTextTitle,
    alignItems: "center",
    flexDirection: "row",
  },
  text3Typo: {
    color: Color.aliasTokenColorNeutralDarkmodeTextSecondary,
    textAlign: "left",
    fontFamily: FontFamily.bodyB2Regular,
    lineHeight: 16,
    fontSize: FontSize.captionC1Regular_size,
  },
  watchlistTypo: {
    fontSize: FontSize.titleT3Medium_size,
    lineHeight: 25,
    color: Color.aliasTokenColorNeutralLightmodeBackground,
    textAlign: "left",
    fontFamily: FontFamily.titleT3Medium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  logoLayout: {
    borderRadius: Border.br_10xl,
    padding: Padding.p_9xs,
    flexDirection: "row",
  },
  contentLayout: {
    width: 4,
    height: 4,
  },
  textTypo1: {
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.captionC1Regular_size,
    fontFamily: FontFamily.titleT3Medium,
    fontWeight: "500",
  },
  shortcutSpaceBlock: {
    backgroundColor: Color.globalTokenGradientGradient2,
    paddingTop: Padding.p_base,
    height: 112,
    width: 104,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    paddingBottom: Padding.p_5xs,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabBarPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  tabBarItemFlexBox: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    width: 54,
    zIndex: 0,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  wifiIcon: {
    width: 15,
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.aliasTokenColorNeutralLightmodeTextTitle,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    top: "50%",
    height: 11,
    position: "absolute",
  },
  capIcon: {
    marginTop: -1.95,
    width: 1,
    opacity: 0.4,
    height: 4,
    top: "50%",
    right: 0,
    position: "absolute",
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    height: 7,
    width: 18,
    backgroundColor: Color.aliasTokenColorNeutralLightmodeTextTitle,
    top: "50%",
    position: "absolute",
  },
  battery: {
    width: 24,
  },
  statusIcons: {
    marginLeft: 219,
    zIndex: 1,
    flexDirection: "row",
  },
  notchIcon: {
    marginLeft: -81.5,
    left: "50%",
    width: 164,
    zIndex: 2,
    display: "none",
    height: 32,
    top: 0,
    position: "absolute",
  },
  statusBar: {
    height: 38,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  cardChild: {
    top: 21,
    left: 112,
    width: 278,
    height: 276,
    opacity: 0.6,
    position: "absolute",
  },
  imageIcon: {
    borderRadius: Border.br_53xl,
    width: 40,
    height: 40,
  },
  avatar: {
    borderRadius: Border.br_sm,
    alignItems: "center",
    flexDirection: "row",
  },
  welcomeBack: {
    color: Color.aliasTokenColorNeutralLightmodeTextPrimary,
  },
  name2: {
    marginLeft: 8,
    justifyContent: "center",
  },
  name1: {
    alignItems: "center",
    flexDirection: "row",
  },
  octicongift24: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  notificationIcon: {
    marginLeft: 12,
    height: 24,
    width: 24,
  },
  icon: {
    flexDirection: "row",
  },
  name: {
    top: 67,
    width: 344,
    justifyContent: "space-between",
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  card: {
    top: 4,
    left: 4,
    backgroundColor: Color.colorPlum,
    width: 367,
    height: 211,
    position: "absolute",
    overflow: "hidden",
  },
  indicator: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.aliasTokenColorNeutralLightmodeBackground,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    top: 778,
    width: 375,
    left: 0,
    position: "absolute",
  },
  totalBalance: {
    fontSize: FontSize.bodyB2Regular_size,
    color: Color.aliasTokenColorPrimaryLightActive,
    fontFamily: FontFamily.bodyB2Regular,
    width: 311,
    lineHeight: 22,
  },
  text: {
    fontSize: FontSize.t30T30S30Semibold42_size,
    lineHeight: 42,
    fontFamily: FontFamily.t30T30S30Semibold42,
    marginTop: 4,
    color: Color.aliasTokenColorNeutralLightmodeBackground,
    width: 311,
    textAlign: "left",
    letterSpacing: 0,
  },
  totalBalanceParent: {
    zIndex: 0,
    flex: 1,
  },
  label: {
    color: Color.aliasTokenColorPrimaryLight,
    marginLeft: 8,
    display: "none",
    fontFamily: FontFamily.titleT3Medium,
    fontWeight: "500",
    lineHeight: 25,
  },
  wrapper: {
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconWrapper: {
    marginLeft: 10,
    display: "none",
    overflow: "hidden",
  },
  buttonStructure: {
    backgroundColor: Color.colorBlueviolet,
    width: 50,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    overflow: "hidden",
  },
  button: {
    top: 33,
    left: 277,
    zIndex: 1,
    position: "absolute",
  },
  button1: {
    borderRadius: 79,
    width: 48,
    marginLeft: 16,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  total: {
    top: 129,
    backgroundColor: "rgba(19, 21, 23, 0.8)",
    height: 113,
    borderRadius: Border.br_base,
    padding: Padding.p_base,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconboldticketStar: {
    height: 24,
    width: 24,
  },
  logo: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.aliasTokenColorPrimaryLightActive,
    padding: Padding.p_9xs,
    flexDirection: "row",
  },
  step11: {
    fontFamily: FontFamily.labelL1Semibold,
    alignSelf: "stretch",
    color: Color.aliasTokenColorNeutralLightmodeBackground,
    fontWeight: "600",
  },
  enterIntroduceCouper: {
    alignSelf: "stretch",
  },
  text1: {
    marginLeft: 12,
    flex: 1,
  },
  step1: {
    alignSelf: "stretch",
    zIndex: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  step2: {
    marginTop: 16,
    alignSelf: "stretch",
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  contentChild: {
    top: 38,
    maxWidth: "100%",
    height: 24,
    zIndex: 2,
    overflow: "hidden",
  },
  content: {
    flex: 1,
  },
  illustrationcoinIcon: {
    height: 100,
    width: 100,
    marginLeft: 12,
  },
  step: {
    padding: Padding.p_base,
    width: 343,
  },
  reward: {
    top: 383,
  },
  transactions1: {
    alignSelf: "stretch",
  },
  component13Icon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  logo2: {
    backgroundColor: Color.aliasTokenColorSecondaryLightActive,
  },
  stot: {
    alignSelf: "stretch",
    color: Color.aliasTokenColorNeutralLightmodeBackground,
    fontFamily: FontFamily.titleT3Medium,
    fontWeight: "500",
    lineHeight: 25,
  },
  contentItem: {
    marginLeft: 4,
  },
  text3: {
    marginLeft: 4,
  },
  content3: {
    marginTop: 2,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  text4: {
    color: Color.aliasTokenColorNeutralLightmodeBackground,
  },
  contentInner: {
    marginLeft: 8,
  },
  bxtrendingUpIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text5: {
    color: Color.aliasTokenColorPositiveNormal,
    marginLeft: 4,
  },
  bxtrendingUpParent: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  content1: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  transactionChild: {
    height: 44,
    marginLeft: -1080,
    width: 100,
  },
  transaction: {
    height: 90,
    alignSelf: "stretch",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
  },
  logo3: {
    backgroundColor: Color.aliasTokenColorPrimaryLight,
  },
  transactionsParent: {
    alignSelf: "stretch",
  },
  transactions: {
    top: 573,
    width: 343,
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  illustrationsaveMoneyIcon: {
    width: 64,
    height: 64,
  },
  stock: {
    color: Color.aliasTokenColorNeutralDarkmodeBackground,
  },
  shortcut2: {
    marginLeft: 14,
  },
  shortcut: {
    top: 255,
    left: 18,
    flexDirection: "row",
    position: "absolute",
  },
  separator344: {
    backgroundColor: Color.aliasTokenColorNeutralDarkmodeOutline,
    height: 1,
    alignSelf: "stretch",
  },
  activeDotIcon: {
    width: 6,
    height: 6,
    marginTop: 8,
  },
  tabBarItem: {
    flex: 1,
  },
  tabs: {
    alignItems: "flex-end",
    paddingTop: Padding.p_5xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  wrapper2: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  homeIndicator1: {
    alignSelf: "stretch",
  },
  tabBar: {
    top: 721,
    alignItems: "center",
    backgroundColor: Color.aliasTokenColorNeutralDarkmodeBackground,
  },
  homepage: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.aliasTokenColorNeutralDarkmodeBackground,
  },
});

export default Homepage;

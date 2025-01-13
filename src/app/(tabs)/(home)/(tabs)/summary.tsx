import { FontAwesome } from "@expo/vector-icons";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { cn } from "@/libs/utils";
import { AccountSummaryCard, RedirectBanner } from "@/components/cards";
import { CaughtUpIndicator } from "@/components/indicators";
import { Spaces } from "@/constants";

const SummaryScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      // className="px-5 pt-5"
      contentContainerClassName="gap-y-5 px-5 pt-5"
      // contentContainerStyle={{ flex: 1 }}
    >
      {/* Accounts Card*/}
      <AccountSummaryCard />

      {/* Credit Score Checker Banner */}
      <RedirectBanner
        title="Check your credit scrore"
        description="Congratulations - you've been registerd for Your Credit Score for a year"
        icon={require("../../../../../assets/images/icon.png")}
        action="Check your Score"
      />

      {/* Spaces */}
      <Text className="text-lg font-semibold">Your spaces</Text>

      <View className="rounded-xl bg-white">
        {Spaces.map((space, index) => (
          <Link
            key={space.title}
            href={space.link}
            className={cn(
              "overflow-hidden p-4",
              index !== Spaces.length - 1 && "border-b border-b-gray-300",
            )}
          >
            <View className="flex-row items-center gap-x-3">
              <Image
                source={require("../../../../../assets/images/icon.png")}
                style={styles.spaceImage}
              />
              <View className="flex-1 flex-col gap-y-2">
                <Text className="font-semibold">{space.title}</Text>
                <Text className="text-gray-600">{space.description}</Text>
              </View>
              <FontAwesome name="angle-right" size={24} color="black" />
            </View>
          </Link>
        ))}
      </View>

      {/* Caught up Indicator */}
      <CaughtUpIndicator />
    </ScrollView>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  spaceImage: {
    width: 44,
    height: 44,
    borderRadius: 100,
  },
});

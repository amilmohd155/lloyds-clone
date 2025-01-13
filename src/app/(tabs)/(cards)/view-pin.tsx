import { Pressable, Text, View } from "react-native";
import React, { useEffect } from "react";
import LCBankCard from "@/components/cards/BankCard";
import { LCPagerViewWithPagination } from "@/components/pagerview";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { sampleBankCards } from "@/constants";
import { EvilIcons } from "@expo/vector-icons";

const bankCards = sampleBankCards;

const ViewPINScreen = () => {
  const { timeout: timeoutAsString } = useLocalSearchParams<{
    timeout: string;
  }>();
  const timeout = timeoutAsString === "true";

  const [selectedPage, setSelectedPage] = React.useState(0);

  return (
    <View className="relative p-4 flex-1">
      <LCPagerViewWithPagination
        numberOfPages={bankCards.length}
        onPageSelected={setSelectedPage}
        className="w-full aspect-card items-center justify-center"
      >
        {bankCards.map((card, index) => (
          <LCBankCard key={index} {...card} />
        ))}
      </LCPagerViewWithPagination>

      <View className="flex-1" />
      <Link
        asChild
        href={{
          pathname: "/(modals)/reveal-pin/[card]",
          params: { card: selectedPage },
        }}
      >
        <Pressable
          disabled={timeout}
          className="disabled:bg-gray-500 active:bg-gray-800 bg-black items-center self-stretch py-4 rounded-xl"
        >
          <Text className="text-white text-xl font-semibold tracking-wider">
            View PIN
          </Text>
        </Pressable>
      </Link>

      {/* Timeout message */}
      <TimeoutError />
    </View>
  );
};

export default ViewPINScreen;

const TimeoutError = () => {
  const { timeout: timeoutAsString } = useLocalSearchParams<{
    timeout: string;
  }>();
  const timeout = timeoutAsString === "true";
  const [showError, setShowError] = React.useState(timeout);
  const router = useRouter();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    setShowError(timeout); // update show error state when timeout param changes
    if (timeout) {
      // check if timeout is true
      timeoutId = setTimeout(() => {
        router.setParams({ timeout: String(false) }); // change timeout param to false after 10 seconds
      }, 10000); // shows the error for 10 seconds
    }
    return () => clearTimeout(timeoutId);
  }, [timeout]);

  if (!showError) return null;

  return (
    <View className="absolute top-0 left-0 right-0 bg-red-700 p-5 flex-row justify-between items-center">
      <Text className="text-white text-lg">
        We've timed you out to keep your PIN secure.
      </Text>
      <EvilIcons
        name="close"
        size={24}
        color="white"
        onPress={() => setShowError(false)}
      />
    </View>
  );
};

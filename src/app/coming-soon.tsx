import { Button } from "@/components/ui";
import MaskedView from "@react-native-masked-view/masked-view";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function CommingSoonPage() {
  return (
    <View className="flex-1 items-center justify-center gap-y-5 bg-white">
      <Image
        source={require("@assets/images/logo.png")}
        style={{ width: 100, height: 100, aspectRatio: 1, marginBottom: 10 }}
      />
      <CommingSoonText />
      <Text className="text-center italic">
        This is a demo app, there are some features yet to be implemented
      </Text>
      <Link href="/(root)/(tabs)/(home)/(tabs)" asChild>
        <Button
          label="Go Home"
          size="lg"
          className="mx-10 flex-row-reverse items-center justify-between self-stretch bg-green-600 active:bg-green-600"
        >
          <Text className="text-lg font-semibold text-white">{"/ >"}</Text>
        </Button>
      </Link>
    </View>
  );
}

const CommingSoonText = () => {
  return (
    <MaskedView
      style={{
        width: "100%",
        height: 150,
      }}
      maskElement={
        <View className="flex-1 items-center justify-center bg-transparent">
          <Text className="text-center text-7xl font-black uppercase">
            Comming Soon
          </Text>
        </View>
      }
    >
      <LinearGradient
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={["#16a34a", "#20252bff", "#16a34a"]}
        style={{ flex: 1, height: "100%" }}
      />
    </MaskedView>
  );
};

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import { cn } from "@/libs/utils";

const HorizontalCard = ({
  title,
  caption,
  badge = false,
  href,
}: {
  title: string;
  caption: string;
  badge?: boolean;
  href: Href;
}) => {
  return (
    <Link href={href} asChild>
      <Pressable
        className={cn(
          "flex-row gap-x-3 overflow-hidden rounded-xl bg-white p-4 active:bg-gray-200",
          !badge && "items-center",
        )}
      >
        <Image
          source={require("@assets/images/icon.png")}
          style={styles.imageStyle}
        />
        <View className="flex-1 gap-y-1">
          <Text>{title}</Text>
          <Text className="text-sm text-gray-600">{caption}</Text>
        </View>
        {badge ? (
          <View>
            <Text className="h-fit rounded-full bg-green-200 px-4 py-1 text-xs uppercase">
              53 New
            </Text>
          </View>
        ) : (
          <Feather name="chevron-right" size={24} color="black" />
        )}
      </Pressable>
    </Link>
  );
};

export default HorizontalCard;

const styles = StyleSheet.create({
  imageStyle: {
    width: 56,
    height: 56,
    borderRadius: 10,
  },
});

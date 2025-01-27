import { Header } from "@/components/headers";
import { Octicons } from "@expo/vector-icons";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Page = () => {
  const { accountId } = useLocalSearchParams<{ accountId: string }>();

  const router = useRouter();

  return (
    <View className="flex-1 bg-white py-5">
      <Stack.Screen
        options={{
          title: "Classic", //get from api using account id
          header: (props) => (
            <Header showClose useSafeArea={false} {...props} />
          ),
        }}
      />

      <View className="mx-3 gap-y-5 rounded-md border border-blue-600 bg-purple-100/50 p-4">
        <View className="gap-y-2">
          <View className="flex-row items-center justify-between">
            <Text className="text-sm">Sort Code</Text>
            <Text className="font-bold">00-00-00</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-sm">Account Number</Text>
            <Text className="font-bold">00000000</Text>
          </View>
        </View>
        <View className="my-1 h-px bg-gray-400" />
        <Link
          href={{
            pathname: "/details/send/[accountId]",
            params: { accountId },
          }}
          asChild
        >
          <Pressable
            onPress={() => router.dismiss()}
            className="flex-row items-center gap-x-3"
          >
            <Octicons name="share" size={24} color="#000000" />
            <Text className="font-semibold">Send Bank Details</Text>
          </Pressable>
        </Link>
      </View>

      <View className="mt-10">
        <Text className="mb-5 px-3 font-semibold">
          I'd like to know more about
        </Text>
        <Pressable className="flex-row items-center justify-between gap-x-2 border-b border-b-gray-200 px-3 py-4 active:bg-black/10">
          <Text>Overdraft</Text>
          <Octicons name="chevron-right" size={24} color="#000000" />
        </Pressable>
        <Pressable className="flex-row items-center justify-between gap-x-2 border-b border-b-gray-200 px-3 py-4 active:bg-black/10">
          <Text>Foreign currency fees</Text>
          <Octicons name="chevron-right" size={24} color="#000000" />
        </Pressable>
        <Pressable className="flex-row items-center justify-between gap-x-2 border-b border-b-gray-200 px-3 py-4 active:bg-black/10">
          <Text>Sending or recieving money outside the UK</Text>
          <Octicons name="chevron-right" size={24} color="#000000" />
        </Pressable>
        <Pressable className="flex-row items-center justify-between gap-x-2 border-b border-b-gray-200 px-3 py-4 active:bg-black/10">
          <Text>Help with money worries</Text>
          <Octicons name="chevron-right" size={24} color="#000000" />
        </Pressable>
        <Pressable className="mx-3 mt-5 items-center gap-x-2 rounded-md bg-black py-3 active:bg-black/80">
          <Text className="text-lg font-semibold capitalize text-white">
            More Help
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Page;

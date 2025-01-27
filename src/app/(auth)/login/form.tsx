import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextInput } from "@/components/ui";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { type LoginForm, loginFormSchema } from "@/schema";
import { useAuth } from "@/store";

const Page = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
    defaultValues: {
      userId: "docren155",
      password: "password",
    },
  });

  const { login } = useAuth();

  const onSubmit: SubmitHandler<LoginForm> = login;

  return (
    <View className="flex-1 justify-between gap-y-3 bg-white pt-5">
      <View className="px-3">
        <View className="flex-row items-center gap-x-3 rounded-lg bg-green-200 p-3">
          <Ionicons name="lock-closed-outline" size={20} color="black" />
          <Text className="text-sm">Plese enter your logon details</Text>
        </View>
        <View className="mt-5 gap-y-3">
          <TextInput
            control={control}
            name="userId"
            placeholder="User ID"
            textContentType="username"
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            rules={{ required: true }}
          />
          <TextInput
            name="password"
            control={control}
            placeholder="Password"
            textContentType="password"
            returnKeyType="done"
            secureTextEntry
            rules={{ required: true }}
          />
          <Button
            label="Continue"
            disabled={!isValid}
            size="lg"
            onPress={handleSubmit(onSubmit)}
          />
          <Link asChild href="/(auth)/forgot-password">
            <Button
              variant="link"
              className="self-center"
              textStyle={{ textDecorationLine: "none" }}
              label="I've forgotten my logon details"
              size="lg"
            />
          </Link>
        </View>
      </View>

      <View className="gap-y-3 bg-gray-200 px-3 pb-20 pt-5">
        <Text className="text-2xl font-semibold">
          Not used Internet Banking with us before?
        </Text>
        <Text className="leading-tight">
          if you bank with us, you can manage your accounts online. First,
          you'll need to create your logon details
        </Text>
        <Button label="Create logon details" />
      </View>
    </View>
  );
};

export default Page;

import { Redirect } from "expo-router";

export default function RedirectPage() {
  return <Redirect href={"/(root)/(tabs)/(home)/(tabs)"} />;
}

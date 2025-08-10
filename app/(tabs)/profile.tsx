import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="bg-primary flex-1 px-10 ">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.person} className="size-10" tintColor="#fff" />
        <Text className="text-white text-2xl font-bold">Profile</Text>
      </View>
    </View>
  );
}

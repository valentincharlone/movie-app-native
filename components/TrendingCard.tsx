import { images } from "@/constants/images";
import MaskedView from "@react-native-masked-view/masked-view";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function TrendingCard({
  movie: { movie_id, poster_url, title },
  index,
}: TrendingCardProps) {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative ">
        <Image
          source={{ uri: poster_url }}
          className="w-full h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-0 -left-3.5 px-2 py-1 rounded-full ">
          <MaskedView
            maskElement={
              <Text className="font-bold text-white text-6xl pl-2">{index + 1}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>
        <Text
          className="text-sm font-bold mt-2 text-light-200"
          numberOfLines={2}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}

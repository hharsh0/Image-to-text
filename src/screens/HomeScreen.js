import { View, Text, Pressable, TextInput } from "react-native";
import React,{useContext,useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import TextContext from "../../store/text-context";


const HomeScreen = () => {

  const navigation = useNavigation();
  
  const textCtx = useContext(TextContext)

  return (
    <View className="flex-1 p-2 bg-gray-100">
      {textCtx.text && (
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <AntDesign name="sound" size={24} color="black" />
            <Text className="ml-1">English</Text>
          </View>
          <Pressable onPress={() => textCtx.setText("")}>
            <Entypo name="cross" size={24} color="black" />
          </Pressable>
        </View>
      )}

      <View className="mt-2 bg-gray-300 rounded-md p-1">
        <TextInput
          style={{ textAlignVertical: "top" }}
          multiline={true}
          value={textCtx.text}
          onChange={(text) => textCtx.setText(text)}
          placeholder={"Take Notes ..."}
          className=" h-32 w-full rounded-md"
        />
        <Pressable className="flex-row justify-end">
          <Ionicons name="copy-outline" size={24} color="black" />
        </Pressable>
      </View>

      <View className="mt-2 ">
        <Pressable
          className="items-center bg-blue-500 rounded p-1"
          onPress={() => navigation.navigate("ImagePick")}
        >
          <Ionicons name="camera" size={24} color="white" />
          <Text className="text-white">Camera</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

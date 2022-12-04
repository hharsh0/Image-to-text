import { View, Text,TextInput, SafeAreaView,KeyboardAvoidingView,Platform,Pressable } from 'react-native'
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import TextContext from "../../store/text-context";


const MainScreen = () => {

  const navigation = useNavigation();
  const textCtx = useContext(TextContext);


  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <View className="flex-1 p-3 bg-gray-200">
          <View className="flex-row justify-between">
            <Pressable
              onPress={() => navigation.navigate("ImagePick")}
              className="bg-red-200 p-2 rounded-lg items-center"
            >
              <Ionicons name="camera" size={24} color="#ef4444" />
              <Text className="text-xs font-medium text-red-500">Camera</Text>
            </Pressable>
            <Pressable className="bg-purple-200 p-2 rounded-lg items-center">
              <Ionicons name="ios-pencil" size={24} color="#a855f7" />
              <Text className="text-xs font-medium text-purple-500">
                Handwriting
              </Text>
            </Pressable>
            <Pressable className="bg-blue-200 p-2 rounded-lg items-center">
              <Ionicons name="chatbox" size={24} color="#3b82f6" />
              <Text className="text-xs font-medium text-blue-500">
                Conversation
              </Text>
            </Pressable>
            <Pressable className="bg-yellow-200 p-2 rounded-lg items-center">
              <Ionicons name="mic" size={24} color="#ca8a04" />
              <Text className="text-xs font-medium text-yellow-600">Voice</Text>
            </Pressable>
          </View>
          <View className="flex-1 mt-2 mb-2">
            <TextInput
              className="bg-white rounded-2xl p-4 flex-1 text-lg"
              multiline={true}
              style={{ textAlignVertical: "top" }}
              placeholder={"Take Notes ..."}
              value={textCtx.text}
              onChangeText={textCtx.setText}
            />
          </View>
          <View className="flex-row bg-white rounded-2xl p-2 items-center justify-center">
            <Text className="text-lg font-medium text-purple-600 mr-6">
              English
            </Text>
            <Ionicons name="mic" size={44} color="black" />
            <Text className="text-lg font-medium text-purple-600 ml-6">
              Spanish
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default MainScreen
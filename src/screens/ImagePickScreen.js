import { View, Text, Pressable, Image, Alert } from 'react-native'
import React,{useState,useContext,useEffect} from 'react'
import * as ImagePicker from "expo-image-picker";
import TextContext from '../../store/text-context';
import { useNavigation } from "@react-navigation/native";
import TextRecognition from "@react-native-ml-kit/text-recognition";


const ImagePickScreen = () => {
    const [image, setImage] = useState(null);
    const textCtx = useContext(TextContext)
    const navigation = useNavigation();


    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        textCtx.setText(result.assets[0].uri);
      }
    };

    const takeImage = async () => {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8,
        })
        console.log(result)

        setImage(result.assets[0].uri);
        textCtx.setText(result.assets[0].uri);
    }

  const extract = async () => {

    let result;
      if (image) {
         result = await TextRecognition.recognize(image);
      }

      if (!image) {
        Alert.alert("No image chosen", "Please choose an image!", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }

      console.log("Recognized text:", result.text);
      textCtx.setText(result.text)
      // textCtx.setText(result.text)
      navigation.navigate("Main");
    };

  return (
    <View className="flex-1">
      <Pressable
        onPress={pickImage}
        className="bg-blue-500 p-2 self-center w-fit rounded"
      >
        <Text className="text-white">Choose Image</Text>
      </Pressable>
      <Pressable
        onPress={takeImage}
        className="bg-blue-500 p-2 self-center w-fit rounded"
      >
        <Text className="text-white">Click Image</Text>
      </Pressable>
      <Pressable
        onPress={extract}
        className="bg-blue-500 p-2 self-center w-fit rounded"
      >
        <Text className="text-white">extract</Text>
      </Pressable>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}

export default ImagePickScreen
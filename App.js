import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TextRecognition from "@react-native-ml-kit/text-recognition";
import Navigation from './src/navigation/Navigation'
import { TextContextProvider } from './store/text-context';


export default function App() {

   const [textInput, setTextInput] = useState("");

  const fun = async () => {
    const result = await TextRecognition.recognize("https://media.gcflearnfree.org/content/596f931e8444e81d1ca6cdfd_07_19_2017/businessletter_image2d.jpg");

    console.log('Recognized text:', result.text);
    setTextInput(result.text);
  }
  
  return (
    <>
      <TextContextProvider>
        <Navigation textInput={textInput} setTextInput={setTextInput} />
      </TextContextProvider>
    </>
  );
}

import React, { useState } from 'react'

const TextContext = React.createContext({
    text: '',
    setText: (text)=>{},
})

export const TextContextProvider = ({ children }) => {
    
    const [textInput, setTextInput] = useState('')

    const setText = (text) => {
        setTextInput(text)
    }

    const contextValue = {
        text: textInput,
        setText: setText,
    }
    
    return (
      <TextContext.Provider value={contextValue}>
        {children}
      </TextContext.Provider>
    );
}

export default TextContext
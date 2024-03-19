import React, { useCallback, useEffect, useState } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import {ButtonHome} from "./buton";
import { UseStateHookScreen } from "../hooks/useState";
import Example from "../class/exampleStateClass";
import { UseEffectHookScreen } from "../hooks/useEffect";
import UseEffectHookScreenClass from "../class/exampleEffectClass";
import NoUseContext from "../hooks/userScreen";
import UseContextScreen from "../hooks/useContext";
import { UseRefHookScreen } from "../hooks/useRef";
import UseReducerScreen from "../hooks/useReducer";
import UseCallbackScreen from "../hooks/useCallback";
import UseMemoScreen from "../hooks/useMemo";
export default function HomeScreen(props : any) {
  const [count, setCount] = useState(0)

  const onPress = useCallback(() => {
    setCount(count + 1)
  }, [])

  const onReset =()=>{
    setCount(0)
  }

  useEffect(() => {
    // do something

    return ()=>{
      
    }
  }, []);
  
  return (
    <>
    {/* <Example /> */}
    {/* <UseStateHookScreen /> */}
    {/* <UseEffectHookScreen /> */}
    {/* <UseEffectHookScreenClass/> */}
    {/* <NoUseContext /> */}
    {/* <UseContextScreen /> */}
    {/* <UseRefHookScreen /> */}
    {/* <UseReducerScreen/> */}
    {/* <UseCallbackScreen /> */}
    <UseMemoScreen />
    </>
  );
}
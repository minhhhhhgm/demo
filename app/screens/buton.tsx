import React, { useCallback, useState, memo, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const ButtonHome = ({ onReset }: { onReset: () => void }) => {    
    useEffect(()=>{
        console.log("render - child component");
    },[onReset])
    return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text>OKOKKOKOOKO</Text>
            <TouchableOpacity onPress={onReset}>
                <Text>Reset count</Text>
            </TouchableOpacity>
        </View>
    );
};

import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export function UseRefHookScreen() {
    const [value, setValue] = useState(0);
    const refInput = useRef<TextInput>(null)
    const countRef = useRef<number>(0)
    const handleIncre = () => {
        // countRef.current = countRef.current + 1
        // console.log(countRef.current);
        setValue(prev => prev + 1)

    }
    useEffect(() => {
        countRef.current = value
    }, [value])

    return (
        <View style={styles.body}>
            <Text>Giá trị trước đó : {countRef.current}</Text>

            <Text>Giá trị hiện tại  : {value}</Text>
            {/* <TextInput
                value={value}
                onChangeText={setValue}
                ref={refInput}
                style={{
                    backgroundColor: 'pink',
                    width: '90%',
                    marginBottom : 10
                }}
            /> */}
            {/* <TouchableOpacity
                onPress={() => { refInput.current?.focus()}}
                style={{ padding: 10, backgroundColor: 'gray' }}>
                <Text>Focus the input</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { refInput.current?.blur()}}
                style={{ padding: 10 ,marginTop : 10, backgroundColor: 'gray' }}>
                <Text>Unfocus the input</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                onPress={handleIncre}
                style={{ padding: 10, marginTop: 10, backgroundColor: 'gray' }}>
                <Text>Increment</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    dayButton: {
        padding: 20,
        backgroundColor: 'pink'
    }
})
import React, { useCallback, useReducer, useState,memo } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
function UseCallbackScreen() {
    const [value, setValue] = useState(0)
    const handleClick = useCallback(() => {
        setValue(prev =>  prev +1)
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{value}</Text>
            <ChildComponent handleClick={handleClick} />
        </View>
    );
}
const ChildComponent = memo((props: any) => {
    const { handleClick } = props
    console.log('render - child');
    return (
        <TouchableOpacity
            onPress={()=>handleClick()}
            style={{
                backgroundColor: 'yellow',
                padding: 5
            }}>
            <Text>
                Change value
            </Text>
        </TouchableOpacity>
    )
})

export default UseCallbackScreen;

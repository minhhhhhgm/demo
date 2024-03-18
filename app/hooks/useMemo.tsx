import React, { useState, useMemo } from 'react';
import { View, Text, Button } from 'react-native';

function sum(a : number , b: number) {
    console.log('Calculating sum...');
    return a + b;
}

function SumComponent() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const result = useMemo(() => sum(countA, countB), [countA, countB]);

    return (
        <View>
            <Text>Count A: {countA}</Text>
            <Text>Count B: {countB}</Text>
            <Text>Sum: {result}</Text>
            <Button title="Increment A" onPress={() => setCountA(countA + 1)} />
            <Button title="Increment B" onPress={() => setCountB(countB + 1)} />
        </View>
    );
}

export default SumComponent;

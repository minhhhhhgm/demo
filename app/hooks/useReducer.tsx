import React, { useReducer, useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

type State = {
  count: number;
  name: string;
};

type Action =
  { type: 'increment', payload: any }
  | { type: 'decrement', payload?: any }
  | { type: 'changename', payload?: any }
  | { type: 'clearname', payload?: any }

const initialState: State = { count: 0, name: '' };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'changename':
      return { ...state, name: action.payload };
      case 'clearname':
      return { ...state, name: '' };
    default:
      throw new Error();
  }
}

function UseReducerScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState('')
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {state.count}</Text>
      <Text>name: {state.name}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'increment', payload: 'a' })} />
      <Button title="Decrement" onPress={() => dispatch({ type: 'decrement', payload: '' })} />
      <TextInput
        value={value}
        onChangeText={setValue}
        style={{
          width: '80%',
          backgroundColor: 'pink',
          marginTop: 10
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          padding: 5
        }}
        onPress={() => dispatch({ type: 'changename', payload: value })}
      >
        <Text>
          Change Name
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          padding: 5,
          marginTop : 10
        }}
        onPress={() => dispatch({ type: 'clearname', payload: value })}
      >
        <Text>
          Clear Name
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default UseReducerScreen;

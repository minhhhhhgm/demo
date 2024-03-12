import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    StyleProp,
    ViewStyle
} from 'react-native';

interface IButton extends TouchableOpacityProps {
    onPress: () => void,
    disable: boolean,
    childrent: React.ReactNode,
    style: StyleProp<ViewStyle>
}

const ButtonComponent = (props: IButton) => {
    const { onPress, disable, childrent, style } = props

    return (
        <TouchableOpacity
            disabled={disable}
            onPress={onPress}
            style={style}
        >
            {childrent}
        </TouchableOpacity>
    )
};

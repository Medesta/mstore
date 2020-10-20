import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/contants';

const Loader = () => {
    return (
        <Modal transparent={true} animationType="none">
            <View style={{
                height: SCREEN_HEIGHT,
                width: SCREEN_WIDTH,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0, 0.8)',
            }}>
            <ActivityIndicator
                size="large"
                color='#fff'
            />
            </View>
        </Modal >
    );
}

export default Loader;
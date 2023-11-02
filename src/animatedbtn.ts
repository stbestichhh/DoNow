import { Animated, StyleSheet } from 'react-native';

export const fanimated = new Animated.Value(1);
export const sanimated = new Animated.Value(1);

export const fadeIn = (anim: any) => {
	Animated.timing(anim, {
		toValue: 0.7,
		duration: 100,
		useNativeDriver: true,
	}).start();
};
export const fadeOut = (anim: any) => {
	Animated.timing(anim, {
		toValue: 1,
		duration: 300,
		useNativeDriver: true,
	}).start();
};

export const btnstyles = StyleSheet.create({
    button: {                
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 20,        
        paddingVertical: 15,
        paddingHorizontal: 63,             
    },    
})
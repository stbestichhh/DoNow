import {
	Text,
	SafeAreaView,
	View,
	KeyboardAvoidingView,
	TextInput,
	Pressable,
	Platform,
	Animated,
} from 'react-native';
import { LoginStyle } from '../styles';
import { fadeIn, fadeOut, btnstyles, fanimated, sanimated } from '../animatedbtn';

export const Login = () => {
	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<SafeAreaView style={LoginStyle.container}>
				<Text style={[LoginStyle.title, { color: '#CD5C5C' }]}>Do</Text>
				<Text style={LoginStyle.title}>Now</Text>
			</SafeAreaView>

			<View style={LoginStyle.form}>
				<TextInput style={LoginStyle.input} placeholder='Enter email' autoCapitalize='none' />
				<TextInput style={LoginStyle.input} placeholder='Enter password' autoCapitalize='none' />
			</View>

			<View style={LoginStyle.buttonsContainer}>
				<Pressable onPressIn={() => fadeIn(fanimated)} onPressOut={() => fadeOut(fanimated)}>
					<Animated.View
						style={[btnstyles.button, { backgroundColor: '#CD5C5C', opacity: fanimated }]}
					>
						<Text style={LoginStyle.btnText}>Sign</Text>
					</Animated.View>
				</Pressable>
				<Pressable onPressIn={() => fadeIn(sanimated)} onPressOut={() => fadeOut(sanimated)}>
					<Animated.View
						style={[btnstyles.button, { backgroundColor: '#32CD32', opacity: sanimated }]}
					>
						<Text style={LoginStyle.btnText}>Login</Text>
					</Animated.View>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};
export default Login;

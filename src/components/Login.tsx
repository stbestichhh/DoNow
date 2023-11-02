import {
	Text,
	SafeAreaView,
	View,
	KeyboardAvoidingView,
	TextInput,
	Pressable,
	Platform,
	Animated,
	ActivityIndicator,
} from 'react-native';
import { LoginStyle } from '../styles';
import { fadeIn, fadeOut, btnstyles, fanimated, sanimated } from '../animatedbtn';
import { useState } from 'react';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const auth = FIREBASE_AUTH;

	const signin = async () => {
		setLoading(true);

		try {
			const response = await createUserWithEmailAndPassword(auth, email, password);
			//modal 'registration in sucessful'
		} catch (error) {
			//modal 'sign up in failed'
		} finally {
			setLoading(false);
		}
	};

	const login = async () => {
		setLoading(true);

		try {
			const response = await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			//modal 'login failed'
		} finally {
			setLoading(false);
		}
	};

	return (
		<View>
			<SafeAreaView style={LoginStyle.container}>
				<Text style={[LoginStyle.title, { color: '#CD5C5C' }]}>Do</Text>
				<Text style={LoginStyle.title}>Now</Text>
			</SafeAreaView>

			<View style={LoginStyle.form}>
				<TextInput
					style={LoginStyle.input}
					placeholder='Enter email'
					autoCapitalize='none'
					onChangeText={(text) => setEmail(text)}
					value={email}
				/>
				<TextInput
					style={LoginStyle.input}
					placeholder='Enter password'
					autoCapitalize='none'
					onChangeText={(text) => setPassword(text)}
					value={password}
					secureTextEntry={true}
				/>
			</View>

			{loading ? (
				<ActivityIndicator size='small' color='#CD5C5C' />
			) : (
				<View style={LoginStyle.buttonsContainer}>
					<Pressable
						onPressIn={() => fadeIn(fanimated)}
						onPressOut={() => fadeOut(fanimated)}
						onPress={signin}
					>
						<Animated.View
							style={[btnstyles.button, { backgroundColor: '#CD5C5C', opacity: fanimated }]}
						>
							<Text style={LoginStyle.btnText}>Sign</Text>
						</Animated.View>
					</Pressable>
					<Pressable
						onPressIn={() => fadeIn(sanimated)}
						onPressOut={() => fadeOut(sanimated)}
						onPress={login}
					>
						<Animated.View
							style={[btnstyles.button, { backgroundColor: '#32CD32', opacity: sanimated }]}
						>
							<Text style={LoginStyle.btnText}>Login</Text>
						</Animated.View>
					</Pressable>
				</View>
			)}
		</View>
	);
};
export default Login;

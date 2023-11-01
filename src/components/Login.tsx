import { Text, SafeAreaView, View, KeyboardAvoidingView } from 'react-native';
import { LoginStyle } from '../styles';

export const Login = () => {
	return (
		<KeyboardAvoidingView>
			<SafeAreaView style={LoginStyle.container}>
				<Text style={[LoginStyle.title, { color: '#CD5C5C' }]}>Do</Text>
				<Text style={LoginStyle.title}>Now</Text>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
};
export default Login;

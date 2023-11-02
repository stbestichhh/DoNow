import { Text, SafeAreaView, View, KeyboardAvoidingView, TextInput } from 'react-native';
import { LoginStyle } from '../styles';

export const Login = () => {
	return (
		<KeyboardAvoidingView>
			<SafeAreaView style={LoginStyle.container}>
				<Text style={[LoginStyle.title, { color: '#CD5C5C' }]}>Do</Text>
				<Text style={LoginStyle.title}>Now</Text>
			</SafeAreaView>
			<View style={LoginStyle.form}>
				<TextInput style={LoginStyle.input} placeholder='Enter email' autoCapitalize='none' />
				<TextInput style={LoginStyle.input} placeholder='Enter password' autoCapitalize='none'/>
			</View>
		</KeyboardAvoidingView>
	);
};
export default Login;

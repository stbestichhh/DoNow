import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import List from './components/List';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { RootStackParamList } from './nav-types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigate = () => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		onAuthStateChanged(FIREBASE_AUTH, (user) => {
			setUser(user);
		});
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				{user ? (
					<Stack.Screen name='List' component={List} options={{headerShown: false}}/>
				) : (
					<Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default Navigate;

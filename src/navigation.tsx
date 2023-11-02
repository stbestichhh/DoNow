import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import List from './components/List';

const Stack = createNativeStackNavigator();

const Navigate = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
				<Stack.Screen name='List' component={List} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default Navigate;

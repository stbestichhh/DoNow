import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';

const Stack = createNativeStackNavigator();

const Navigate = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen name='Login' component={Login}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default Navigate;
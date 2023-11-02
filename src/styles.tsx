import { StyleSheet } from 'react-native';

export const LoginStyle = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 300,
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#32CD32',
	},
	form: {
		justifyContent: 'center',
		margin: 20,
		marginTop: 30,
	},
	input: {
		backgroundColor: 'white',
		borderRadius: 10,
		margin: 5,
		padding: 15,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	btnText: {
		color: 'white',
		fontWeight: 'bold',
	},
});

export const ListStyle = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignContent: 'center',
		padding: 15,
		marginVertical: 4,
        marginHorizontal: 10,
		borderRadius: 20,
		backgroundColor: 'white',
	},
	titleContainer: {
		flexDirection: 'row',
		margin: 20,
	},
	title: {
		fontSize: 30,
		fontWeight: '800',
		color: '#89C34E',
	},
	todoItem: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',        
	},
	todoText: {
		flex: 1,
		paddingHorizontal: 10,
		fontSize: 20,
        fontWeight: 'bold'        
	},
	formText: {
		paddingHorizontal: 10,
		margin: 10,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#89C34E',
	},
	formInput: {
		height: 40,
		borderWidth: 0.2,
		borderRadius: 10,
		padding: 10,
		margin: 10,
		color: '#CD5C5C',
		fontWeight: 'bold',
	},
	formButton: {
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: '44%',
		marginTop: '50%',
	},
});

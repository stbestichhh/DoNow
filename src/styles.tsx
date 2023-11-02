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
        margin: 20        
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 10,
        margin: 5,
        padding: 15
    }
});

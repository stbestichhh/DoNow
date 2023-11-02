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
        marginTop: 30         
    },
    input: {
        backgroundColor: 'white',     
        borderRadius: 10,
        margin: 5,
        padding: 15
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',                
    },    
    btnText: {
      color: 'white',
      fontWeight: 'bold'
    }
});

export const ListStyle = StyleSheet.create({
    container:{

    },
    titleContainer: {
        flexDirection: 'row',
        margin: 30,        
    },
    title: {        
        fontSize: 30,
        fontWeight: '800',        
        color: '#89C34E'        
    },    
})
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
        flexDirection: 'row',
        alignContent: 'center',
        padding: 20,
        marginVertical: 4,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    titleContainer: {
        flexDirection: 'row',
        margin: 20,        
    },
    title: {        
        fontSize: 30,
        fontWeight: '800',        
        color: '#89C34E'        
    },    
    todoItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoText: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 20
    }
})
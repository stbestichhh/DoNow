import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { ListStyle } from '../styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const List = () => {
	return (
		<SafeAreaView>
			<TouchableOpacity style={ListStyle.titleContainer}>
				<Text style={ListStyle.title}>My Todo's</Text>
				<Ionicons name='add' size={24} color='#89C34E' />
			</TouchableOpacity>
		</SafeAreaView>
	);
};
export default List;

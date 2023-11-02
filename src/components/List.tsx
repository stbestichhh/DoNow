import { Text, SafeAreaView, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ListStyle } from '../styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../firebaseConfig';

export interface Todo {
	title: string;
	done: boolean;
	id: string;
}

const List = () => {
	const sheetRef = useRef<BottomSheet>(null);
	const snapPoints = useMemo(() => ['1%', '50%', '90%'], []);

	//callbacks
	const handleSheetChange = useCallback((index: any) => {
		console.log('handleSheetChange', index);
	}, []);

	const handleSnapPress = useCallback((index: any) => {
		sheetRef.current?.snapToIndex(index);
	}, []);

	const handleSheetClose = useCallback(() => {
		sheetRef.current?.close();
	}, []);

	//todos
	const [todos, setTodos] = useState<Todo[]>([]);
	const [todo, setTodo] = useState('');

	const renderTodo = ({ item }: any) => {
		const ref = doc(FIREBASE_DB, `todos/${item.id}`);

		const toggleDone = async () => {
			updateDoc(ref, { done: !item.done });
		};

		const deleteItem = async () => {
			deleteDoc(ref);
		};

		return (
			<View style={ListStyle.container}>
				<TouchableOpacity onPress={toggleDone} style={ListStyle.todoItem}>
					{item.done && <Ionicons name='md-checkmark-circle' color='green' size={17} />}
          <Text style={ListStyle.todoText}>{item.title}</Text>
				</TouchableOpacity>

        <Ionicons name="close" size={24} color="red" />
			</View>
		);
	};

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaView>
				<TouchableOpacity
					style={ListStyle.titleContainer}
					onPress={() => {
						handleSnapPress(1);
					}}
				>
					<Text style={ListStyle.title}>My Todo's</Text>
					<Ionicons name='add' size={24} color='#89C34E' />
				</TouchableOpacity>
				<FlatList data={todos} renderItem={renderTodo} keyExtractor={(todo: Todo) => todo.id} />
			</SafeAreaView>
			<BottomSheet ref={sheetRef} snapPoints={snapPoints} onChange={handleSheetChange}>
				<BottomSheetView>
					<Text>BottomSheet</Text>
				</BottomSheetView>
			</BottomSheet>
		</GestureHandlerRootView>
	);
};
export default List;

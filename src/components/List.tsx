import { Text, SafeAreaView, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ListStyle } from '../styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons';
import BottomSheet, { BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../firebaseConfig';
import { Button } from '@excalidraw/excalidraw';

export interface Todo {
	title: string;
	done: boolean;
	id: string;
}

const List = () => {
	const sheetRef = useRef<BottomSheet>(null);
	const snapPoints = useMemo(() => ['1%', '25%', '50%', '90%'], []);

	//callbacks
	const handleSheetChange = useCallback((index: number) => {
		console.log('handleSheetChange', index);
	}, []);

	const handleSnapPress = useCallback((index: number) => {
		sheetRef.current?.snapToIndex(index);
	}, []);

	const handleSheetClose = useCallback(() => {
		sheetRef.current?.close();
	}, []);

	//todos
	const [todos, setTodos] = useState<Todo[]>([]);
	const [todo, setTodo] = useState('');

	useEffect(() => {
		const ref = collection(FIREBASE_DB, 'todos');

		const subscribe = onSnapshot(ref, {
			next: (snapshot) => {
				const todos: Todo[] = [];
				snapshot.docs.forEach((doc) => {
					todos.push({
						id: doc.id,
						...doc.data(),
					} as Todo);
				});
				setTodos(todos);
			},
		});
		return () => subscribe();
	}, []);

	const addTodoItem = async () => {
		const doc = addDoc(collection(FIREBASE_DB, 'todos'), {
			title: todo,
			done: false,
		});
		setTodo('');    
	};

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

				<Ionicons name='close' size={24} color='red' onPress={deleteItem}/>
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
			<BottomSheet
				ref={sheetRef}
				index={0}
				snapPoints={snapPoints}
				onChange={handleSheetChange}
				keyboardBehavior='extend'
			>
				<BottomSheetView>
					<Text style={ListStyle.formText}>Todo name</Text>
					<BottomSheetTextInput style={ListStyle.formInput} onChangeText={(text: string) => setTodo(text)} value={todo}/>
					<Ionicons name='add-circle' size={50} color='#CD5C5C' style={ListStyle.formButton} onPress={addTodoItem}/>
				</BottomSheetView>
			</BottomSheet>
		</GestureHandlerRootView>
	);
};
export default List;

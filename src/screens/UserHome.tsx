import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';


type Props = NativeStackScreenProps<RootStackParamList, 'UserHome'>;


export default function UserHome({ navigation }: Props) {
const { signOut } = useContext(AuthContext);


return (
<View style={styles.container}>
<View style={styles.header}>
<Image source={require('../images/download.jpg')} style={styles.avatar} />
<TouchableOpacity onPress={() => { signOut().then(() => navigation.replace('Login')); }} style={styles.logoutButton}>
<Text style={styles.logoutText}>{'<'}</Text>
</TouchableOpacity>
</View>


<View style={styles.center}>
<TouchableOpacity style={styles.actionButton} onPress={() => { /* navegar para cadastrar senha */ }}>
<Text style={styles.actionText}>Cadastrar</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.actionButton} onPress={() => { /* listar minhas senhas */ }}>
<Text style={styles.actionText}>Listar</Text>
</TouchableOpacity>
</View>
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#F2F4F7' },
header: { height: 100, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingHorizontal: 12 },
avatar: { width: 48, height: 48, borderRadius: 24 },
logoutButton: { marginLeft: 'auto', padding: 8 },
logoutText: { fontSize: 18 },
center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 },
actionButton: { width: 160, height: 48, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
actionText: { color: '#1A1A1A' },
});
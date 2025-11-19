import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminHome'>;

export default function AdminHome({ navigation }: Props) {
  const { signOut } = useContext(AuthContext);
  const [tab, setTab] = useState<'senha' | 'usuario'>('senha');

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Image source={require('../images/download.jpg')} style={styles.avatar} />
        <TouchableOpacity
          onPress={() => signOut().then(() => navigation.replace('Login'))}
          style={styles.logoutButton}
        >
          <Text style={styles.logoutText}>{'<'}</Text>
        </TouchableOpacity>
      </View>

      {/* CENTRO: BOTÕES */}
      <View style={styles.center}>
        {tab === 'senha' ? (
          <>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('CadastrarSenha')}
            >
              <Text style={styles.actionText}>Cadastrar Senha</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('ListarSenhas')}
            >
              <Text style={styles.actionText}>Listar Senhas</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('CadastrarUsuario')}
            >
              <Text style={styles.actionText}>Cadastrar Usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('ListarUsuarios')}
            >
              <Text style={styles.actionText}>Listar Usuários</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* FOOTER ABA */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.tab, tab === 'senha' && styles.tabActive]}
          onPress={() => setTab('senha')}
        >
          <Text>Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, tab === 'usuario' && styles.tabActive]}
          onPress={() => setTab('usuario')}
        >
          <Text>Usuário</Text>
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
  actionButton: { width: 180, height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  actionText: { color: '#1A1A1A' },
  footer: { height: 64, flexDirection: 'row', backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#E5E7EB' },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabActive: { backgroundColor: '#E6EEF9' },
});

import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

type Props = {
  navigation: any; // evita erro caso o native-stack não esteja configurado ainda
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { signIn } = useContext(AuthContext);

  const handleLogin = async () => {
    setError(null);

    if (!email || !senha) {
      setError('Digite email e senha');
      return;
    }

    try {
      setLoading(true);
      await signIn(email.trim(), senha);

      // Redirecionamento por cargo
      if (email.trim() === 'admin@carteira.com' && senha === 'admin123') {
        navigation.replace('AdminHome');
      } else {
        navigation.replace('UserHome');
      }

    } catch (e: any) {
      setError('Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../images/download.jpg')}
          style={styles.logo}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Sistema de Senhas</Text>

        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#9CA3AF"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          placeholderTextColor="#9CA3AF"
          style={styles.input}
        />

        {error && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity
          style={[
            styles.button,
            (!email || !senha || loading) && styles.buttonDisabled,
          ]}
          disabled={!email || !senha || loading}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Entrando...' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center',
  },

  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },

  input: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#1F2937',
    marginBottom: 10,
  },

  button: {
    width: '60%',
    height: 46,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonDisabled: {
    backgroundColor: '#93C5FD',
    opacity: 0.7,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  error: {
    color: '#DC2626',
    marginTop: 5,
    marginBottom: 5,
  },
});

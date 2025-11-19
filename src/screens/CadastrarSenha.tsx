import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

export default function CadastrarSenha({ navigation }: any) {
  const [servico, setServico] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!servico || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      await axios.post("http://SEU_BACKEND/senhas", {
        servico,
        senha,
      });

      navigation.goBack();
    } catch (e) {
      setError("Erro ao cadastrar a senha");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Senha</Text>

      <TextInput
        placeholder="Nome do serviço"
        style={styles.input}
        value={servico}
        onChangeText={setServico}
        placeholderTextColor="#9CA3AF"
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholderTextColor="#9CA3AF"
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>
          {loading ? "Salvando..." : "Salvar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F2F4F7", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "600", textAlign: "center", marginBottom: 20, color: "#1F2937" },
  input: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#3B82F6",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontWeight: "600", fontSize: 16 },
  error: { color: "#DC2626", textAlign: "center", marginBottom: 10 },
});

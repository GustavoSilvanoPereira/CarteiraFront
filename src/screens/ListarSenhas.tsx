import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";

export default function ListarSenhas() {
  const [senhas, setSenhas] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const response = await axios.get("http://SEU_BACKEND/senhas");
      setSenhas(response.data);
    } catch (e) {
      console.log("Erro ao carregar senhas:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senhas Cadastradas</Text>

      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={senhas}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.servico}>{item.servico}</Text>
              <Text style={styles.senha}>Senha: {item.senha}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F4F7", padding: 20 },
  title: { fontSize: 22, fontWeight: "600", textAlign: "center", marginBottom: 20 },
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 12,
  },
  servico: { fontSize: 16, fontWeight: "600" },
  senha: { fontSize: 14, color: "#374151", marginTop: 4 },
});

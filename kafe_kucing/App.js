import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react";

const DAFTAR_MENU = [
  { id: "1", nama: "Kopi Susu Catnip", harga: 20000 },
  { id: "2", nama: "Matcha Paw Latte", harga: 25000 },
  { id: "3", nama: "Croissant Ikan Tuna", harga: 18000 },
];

export default function App() {
  return (
    <ScrollView>
      <Text style={styles.title}>Kafe Kucing</Text>
      <Text>Aplikasi sedang disiapkan...</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, marginTop: 40 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import OrderSummary from "./OrderSummary";

const DAFTAR_MENU = [
  { id: "1", nama: "Kopi Susu Catnip", harga: 20000 },
  { id: "2", nama: "Matcha Paw Latte", harga: 25000 },
  { id: "3", nama: "Croissant Ikan Tuna", harga: 18000 },
];

const App = () => {
  const [totalPesanan, setTotalPesanan] = useState(0);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kafe Kucing</Text>
      <OrderSummary totalCount={totalPesanan} />
      <Text style={styles.subtitle}>Daftar Menu:</Text>
      {DAFTAR_MENU.map((item) => (
        <View key={item.id} style={styles.menuItem}>
          <Text>
            {item.nama} - Rp {item.harga}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 16, 
    marginTop: 40 
  },
  title: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  subtitle: {
    fontSize: 16, 
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5
  },
  menuItem: {
    padding: 10, 
    borderWidth: 1, 
    borderColor: "#ffffff77", 
    marginBottom: 8,
    borderRadius: 4
  },
});

export default App;
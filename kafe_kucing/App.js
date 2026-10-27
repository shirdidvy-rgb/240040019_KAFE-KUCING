import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import OrderSummary from "./OrderSummary";
import MenuItem from "./MenuItem"; 

const DAFTAR_MENU = [
  { id: "1", nama: "Kopi Susu Catnip", harga: 20000 },
  { id: "2", nama: "Matcha Paw Latte", harga: 25000 },
  { id: "3", nama: "Croissant Ikan Tuna", harga: 18000 },
];

const App = () => {
  const [totalPesanan, setTotalPesanan] = useState(0);
  const handleTambahPesananGlobal = () => {
    setTotalPesanan(totalPesanan + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kafe Kucing</Text>
      <OrderSummary totalCount={totalPesanan} />
      <Text style={styles.subtitle}>Daftar Menu:</Text>
      {DAFTAR_MENU.map((item) => (
        <MenuItem
          key={item.id}
          nama={item.nama}
          harga={item.harga}
          onTambahPesanan={handleTambahPesananGlobal}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 16, 
    marginTop: 40,
    backgroundColor: "rgb(255, 207, 163)",
    flexGrow: 1,
  },
  title: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 10,
    textAlign: "center", 

  },
  subtitle: {
    fontSize: 16, 
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5
  },
});

export default App;
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

const MenuItem = ({ nama, harga, onTambahPesanan }) => {
    const [qty, setQty] = useState(0);
    const handleTambah = () => {
        setQty(qty + 1);
        onTambahPesanan();
    };

    return (
        <View style={styles.menuCard}>
            <View style={styles.infoContainer}>
                <Text style={styles.menutTitle}>{nama}</Text>
                <Text style={styles.menuPrice}>Harga: Rp {harga}</Text>
                <Text style={styles.qtyText}>Jumlah Dipesan: {qty}</Text>
            </View>
            <Button title="Tambah" onPress={handleTambah}/>
        </View>
    );
};

const styles = StyleSheet.create({
  menuCard: {
    borderWidth: 1,
    borderColor: "#26180729",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  menutTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#261807ce",
  },
  menuPrice: {
    color: "#261807ce",
    marginVertical: 2,
  },
  qtyText: {
    fontSize: 12,
    color: "#000",
  },
});

export default MenuItem;
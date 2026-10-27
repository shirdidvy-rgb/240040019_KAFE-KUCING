import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const OrderSummary = ({ totalCount }) => {
    return(
        <View style={styles.box}>
            <Text style={styles.text}>Total Item Dipesan: {totalCount}</Text>
            {totalCount >= 5 && (
                <Text style={styles.textPromo}>Selamat! Anda Mendapatkan Diskon 10%</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#261807ce",
  },
  textPromo: {
    color: "#4e0909",
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default OrderSummary;
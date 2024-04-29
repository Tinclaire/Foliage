import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const mockData = [
  {
    name: 'Wallet',
    amount: 40000,
  },
  {
    name: 'Stock',
    amount: 20000,
  },
  {
    name: 'Crypto',
    amount: 30000,
  },
];

const AssetItem = ({name, amount}: {name: string; amount: number}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{name}</Text>
      <Text style={styles.cell}>{amount}</Text>
    </View>
  );
};

const OverviewList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>資產項目</Text>
        <Text style={styles.headerCell}>資產金額</Text>
      </View>
      {mockData.map((item, index) => (
        <AssetItem key={index} name={item.name} amount={item.amount} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerRow: {
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
    backgroundColor: '#C8E6C9',
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
    padding: 10,
  },
  cell: {
    flex: 1,
    color: '#1B5E20',
  },
});

export default OverviewList;

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
      <Text style={styles.title}>資 產 項 目</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Assets</Text>
        <Text style={styles.headerCell}>Amount</Text>
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
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#416D19',
    marginBottom: 10,
    marginLeft: 5,
  },
  headerRow: {
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
    backgroundColor: '#E3EFCF',
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#E3EFCF',
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

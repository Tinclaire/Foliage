import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const mockData = [
  {
    name: 'Liquidity',
    amount: 40000,
    color: '#BFEA7C',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Investment',
    amount: 30000,
    color: '#FFF67E',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Crypto',
    amount: 20000,
    color: '#9BCF53',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  useShadowColorFromDataset: false,
};

const OverviewChart = () => {
  return (
    <View>
      <Text style={styles.total}>總額</Text>
      <Text style={styles.total}>$480000</Text>
      <PieChart
        data={mockData}
        width={Dimensions.get('window').width}
        height={250}
        chartConfig={chartConfig}
        // hasLegend={false}
        accessor={'amount'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        center={[15, -15]}
        // absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    marginRight: 25,
    alignItems: 'flex-end',
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#416D19',
  },
});

export default OverviewChart;

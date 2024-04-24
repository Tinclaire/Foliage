import React from 'react';
import {View, Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

const mockData = [
  {
    name: 'Liquidity',
    population: 40000,
    color: '#BFEA7C',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Investment',
    population: 30000,
    color: '#FFF67E',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Crypto',
    population: 20000,
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
      <PieChart
        data={mockData}
        width={Dimensions.get('window').width}
        height={300}
        chartConfig={chartConfig}
        hasLegend={false}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        center={[80, 0]}
        absolute
      />
    </View>
  );
};

export default OverviewChart;

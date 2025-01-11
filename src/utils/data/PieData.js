import { data } from './BarChartData';

const pieData = [];

data.forEach(item => {
  
  pieData.push({
    id: item.country, 
    value: item.burger,
    color: item.burgerColor, 
  });
});

export default pieData;

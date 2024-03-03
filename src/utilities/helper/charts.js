import {
  amountConverter,
  bar_data_colors,
  changeStageName,
  colors,
  funnel_data_colors,
  pie_data_colors,
} from '../../utilities';

const barDataMapped = (data, nameKey, valueKey) => {
  let newData = [];

  let obj = {};
  for (let i = 0; i < data.length; i++) {
    obj = {
      value: data[i][valueKey],
      frontColor: bar_data_colors[i] || colors.bl5,
      marginBottom: 1,
      label: data[i][nameKey],
      // labelTextStyle: {color: colors.drakBlack},
    };
    newData.push(obj);
  }

  return newData;
};

const barDataLOBMapped = data => {
  let newData = [];

  let obj = {};
  for (let i = 0; i < data.length; i++) {
    obj = {
      value: data[i].revenue > 5000000000 ? 6000000000 : 1000000000,
      frontColor: '#002D62',
      label: data[i].product_family,
      spacing: 2,
      labelWidth: 50,
      // labelTextStyle: {
      //   color: 'gray',
      //   fontSize: 10,
      // },
    };
    newData.push(obj);

    obj = {
      value: data[i].revenue,
      frontColor: '#6CB4EE',
    };

    newData.push(obj);
  }

  return newData;
};

const pieDataMapped = (array, nameKey, valueKey) => {
  let newData = [];
  let sumOfValues = 0;
  if (array.length <= pie_data_colors.length) {
    sumOfValues = array.reduce(function (a, b) {
      return a + b[valueKey];
    }, 0);

    let obj = {};

    let percentage = 0;

    // desending sort
    array = array.sort((a, b) => b[valueKey] - a[valueKey]);

    for (let i = 0; i < array.length; i++) {
      obj = {
        value: array[i][valueKey] || 0,
        color: pie_data_colors[i] || colors.lightGrey,
        text: `${Math.round((array[i][valueKey] / sumOfValues) * 100)}%`,
        // text: array[i][valueKey],
        badgText: array[i][nameKey] || '',
      };

      newData.push(obj);
    }
  }

  return {data: newData, total: sumOfValues};
};

const funnelDataMapped = (data, nameKey, valueKey) => {
  let newData = [];

  let sumOfValues = 0;

  sumOfValues = data.reduce(function (a, b) {
    return a + b[valueKey];
  }, 0);

  let obj = {};

  // desending sort
  data = data.sort((a, b) => b[valueKey] - a[valueKey]);

  for (let i = 0; i < data.length; i++) {
    obj = {
      label: changeStageName(data[i][nameKey] || ''),
      value: data[i][valueKey] || 0,
      color: funnel_data_colors[i] || colors.lightGrey,
      amount: data[i][valueKey] ? amountConverter(data[i][valueKey]) : '',
    };

    newData.push(obj);
  }
  return {data: newData, total: sumOfValues};
};

const oppValueLobWiseBarChart = data => {
  let uniqueStages = [
    ...new Map(data.map(item => [item?.assessment_text, item])).values(),
  ];

  uniqueStages = uniqueStages.map((obj, ind) => ({
    ...obj,
    color: funnel_data_colors[ind] || colors.lightGrey,
  }));

  for (let i = 0; i < data.length; i++) {
    data[i]['stacks'] = [];
    for (let j = 0; j < data.length; j++) {
      if (data[i]?.vp_name === data[j]?.vp_name) {
        let matchedStage = uniqueStages.find(object => {
          return object?.assessment_text === data[j]?.assessment_text;
        });
        data[i].stacks?.push({
          value: data[j]?.deal_amount,
          color: matchedStage?.color || colors.lightGrey,
          marginBottom: 1,
        });
      }
    }
    data[i]['label'] = data[i]?.vp_name;
    data[i]['yAxisTextStyle'] = {color: colors.drakBlack};
  }

  data = [...new Map(data.map(item => [item?.label, item])).values()];

  return {data, label: uniqueStages};
};

export {
  barDataMapped,
  barDataLOBMapped,
  pieDataMapped,
  funnelDataMapped,
  oppValueLobWiseBarChart,
};

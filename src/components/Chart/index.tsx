import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs'; // Make sure to import dayjs or any date library you're using

const Index: React.FC = () => {
  const [state] = useState({
    series: [
      {
        name: 'candle',
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538884800000),
            y: [6604.98, 6606, 6604.07, 6606],
          },
        ],
      },
    ],
    options: 
      {
        chart: {
          height: 400,
          type: 'candlestick',
          background: "#000",
        },
        title: {
          text: 'CandleStick Chart',
          align: 'center',
        },
        annotations: {
          xaxis: [
            {
              x: 'Oct',
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                  fontSize: '12px',
                  color: '#fff',
                },
                orientation: 'horizontal',
                offsetY: 7,        
                text: 'Annotation Test',
              },
            },
          ],
        },
        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: 'category',
          labels: {
            formatter: (val: any) => {
              return dayjs(val).format('MMM DD HH:mm');
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      }
    ,
  });

  return (
    <div>
      <ReactApexChart
       //@ts-ignore
        options={state.options}
        series={state.series}
        type="candlestick"
        height={450}
      />
    </div>
  );
};

export default Index;

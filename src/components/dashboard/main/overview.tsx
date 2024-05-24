'use client';

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { useState } from 'react';
import { formatDate } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';
import Card from '@/components/dashboard/main/card';
import { monthlyOptions, yearlyOptions } from '@/config/ChartOption';

const defaultOptions = {
  chart: {
    width: 380,
    height: 205,
    parentHeightOffset: 0,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      borderRadius: 9,
      distributed: true,
      columnWidth: '40%',
      endingShape: 'rounded',
      startingShape: 'rounded',
    },
  },
  stroke: {
    width: 2,
  },
  legend: { show: false },
  grid: {
    strokeDashArray: 7,
    padding: {
      top: -1,
      right: 0,
      left: -12,
      bottom: 5,
    },
  },
  dataLabels: { enabled: false },
  states: {
    hover: {
      filter: { type: 'none' },
    },
    active: {
      filter: { type: 'none' },
    },
  },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    tickPlacement: 'on',
    labels: { show: false },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
  yaxis: {
    show: true,
    tickAmount: 4,
    labels: {
      offsetX: -17,
      formatter: (value: any) => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}`,
    },
  },
};

export default function Overview() {
  const [intervalType, setIntervalType] = useState('year');
  const [extend, isExtend] = useState(false);

  let chartOptions: any = defaultOptions;
  switch (intervalType) {
    case 'year':
      chartOptions = yearlyOptions;
      break;
    case 'month':
      chartOptions = monthlyOptions;
      break;
    case 'week':
      chartOptions = defaultOptions;
      break;
  }

  const extendOptions = {
    chart: {
      toolbar: { show: true },
    },
    dataLabels: { enabled: true },
    xaxis: {
      categories: chartOptions.xaxis.categories,
      labels: { show: true },
      axisTicks: { show: true },
      axisBorder: { show: true },
    },
  };

  const chartHeight = extend ? 440 : 205;
  const options = extend ? extendOptions : chartOptions;

  const handleIntervalChange = (newIntervalType: any) => {
    setIntervalType(newIntervalType);
  };

  let maxDate = new Date();
  let minDate = new Date(maxDate);
  let daysDiff = 7;

  if (intervalType == 'month') daysDiff = 31;
  if (intervalType == 'year') daysDiff = 365;

  minDate.setDate(maxDate.getDate() - daysDiff + 1);
  minDate = formatDate(minDate);
  maxDate = formatDate(maxDate);

  // let data = fetchProfitStatistic({ minDate: minDate, maxDate: maxDate });
  // if (data && data.profits) {
  //   console.log(data);
  //   if (intervalType == 'month') {
  //     const profitsWeeks = [];
  //     for (let i = 0; i < 30; i++) {
  //       let index = Math.floor(i / 7);
  //       if (index == 4) break;
  //       if (!profitsWeeks[index]) profitsWeeks[index] = 0;
  //       profitsWeeks[index] += data.profits[i];
  //     }

  //     data = profitsWeeks;
  //   } else if (intervalType == 'year') {
  //     const profitsMonth = [];
  //     for (let i = 0; i < 365; i++) {
  //       let index = Math.floor(i / 30);
  //       if (index == 12) break;
  //       if (!profitsMonth[index]) profitsMonth[index] = 0;
  //       profitsMonth[index] += data.profits[i];
  //     }

  //     data = profitsMonth;
  //   } else {
  //     data = data.profits;
  //   }
  // } else {
  //   data = [20, 43, 53, 54, 35, 54, 54, 20, 43, 53, 54, 35];
  // }

  let data = [20, 43, 53, 54, 35, 54, 54, 20, 43, 53, 54, 35];

  options.responsive = [
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 300,
        },

        xaxis: {
          labels: { show: true },
        },
      },
    },
  ];

  return (
    <motion.div>
      <Card title={'Lợi nhuận'} extend={extend} intervalType={intervalType} onChange={handleIntervalChange}>
        <Chart type="bar" options={options} series={[{ data: data }]} height={chartHeight} width="100%" />
        <Button
          onClick={() => {
            isExtend(!extend);
            console.log(extend);
          }}
          className="bg-warning"
        >
          {extend ? 'Đóng' : 'Chi tiết'}
        </Button>
      </Card>
    </motion.div>
  );
}

import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { formatDate } from '@/lib/utils';
import { motion } from 'framer-motion';
import Card from '@/components/dashboard/main/card';
import { useAppContext } from '@/app/app-provider';
import { TbTruckDelivery } from 'react-icons/tb';
import { LuPackageOpen } from 'react-icons/lu';
import { FiPackage } from 'react-icons/fi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import '@/css/dashboard/statistic.css';

const StatisticItem = ({ icon, title, value, color }: any) => (
  <Col xs={12} md={6} lg={3} className="mt-2">
    <Row>
      <Col xs={3} className={`itemContainer ${color}`}>
        {icon}
      </Col>
      <Col>
        <Row className="title">
          <p>{title}</p>
        </Row>
        <Row className="statisticNumber">
          <h5>{value}</h5>
        </Row>
      </Col>
    </Row>
  </Col>
);

export default function Statistic() {
  const [intervalType, setIntervalType] = useState('year');

  const { user } = useAppContext();
  const userRole = user?.role.name;
  const data = {
    transactionPointsQuantity: 10,
    goodsPointsQuantity: 20,
    goodsQuantity: 100,
    totalProfit: 1000000,
  };

  const handleIntervalChange = (newIntervalType: string) => {
    setIntervalType(newIntervalType);
    console.log(`Interval changed to: ${newIntervalType}`);
  };

  let maxDate = new Date();
  let minDate = new Date(maxDate);
  let daysDiff = 7;

  if (intervalType == 'month') daysDiff = 31;
  if (intervalType == 'year') daysDiff = 365;

  minDate.setDate(maxDate.getDate() - daysDiff + 1);
  minDate = formatDate(minDate);
  maxDate = formatDate(maxDate);

  // const data = fetchGeneralStatistic({ minDate: minDate, maxDate: maxDate });
  if (data) console.log(data);
  const commonStats = [
    <StatisticItem
      key="0"
      icon={<FaRegMoneyBillAlt />}
      title="Lợi nhuận"
      value={data?.totalProfit?.toLocaleString('en-US') || '0'}
      color="profit"
    />,
    <StatisticItem
      key="1"
      icon={<FiPackage />}
      title="Tổng hàng hóa"
      value={data?.goodsQuantity?.toLocaleString('en-US') || '0'}
      color="totalPackage"
    />,
  ];
  return (
    <motion.div>
      <Card title="Tổng quan" intervalType={intervalType} onChange={handleIntervalChange}>
        <div className="d-flex justify-content-between flex-wrap">
          {userRole === 'Admin' && (
            <>
              {commonStats}
              <StatisticItem
                key="2"
                icon={<TbTruckDelivery />}
                title="Số điểm giao dịch"
                value={data?.transactionPointsQuantity || 0}
                color="transPoint"
              />
              <StatisticItem
                key="3"
                icon={<LuPackageOpen />}
                title="Số điểm tập kết"
                value={data?.goodsPointsQuantity || 0}
                color="goodPoint"
              />
            </>
          )}

          {(userRole === 'TRANSACTION_POINT_HEAD' || userRole === 'GOODS_POINT_HEAD') && (
            <>
              {commonStats}
              <StatisticItem icon={<TbTruckDelivery />} title="Đang vận chuyển" value="90" color="transPoint" />
              <StatisticItem icon={<LuPackageOpen />} title="Đã vận chuyển" value="42" color="goodPoint" />
            </>
          )}

          {(userRole === 'GOODS_POINT_EMPLOYEE' || userRole === 'TRANSACTION_POINT_EMPLOYEE') && (
            <>
              <StatisticItem icon={<FiPackage />} title="Tổng hàng hóa" value="140" color="totalPackage" />
              <StatisticItem icon={<TbTruckDelivery />} title="Đang vận chuyển" value="80" color="transPoint" />
              <StatisticItem icon={<LuPackageOpen />} title="Đã vận chuyển" value="43" color="goodPoint" />
            </>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

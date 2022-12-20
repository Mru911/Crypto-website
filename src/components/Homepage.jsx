import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import  Cryptocurrencies  from './Cryptocurrencies';
import News from './News';
const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  const globalStats = data?.data?.stats;

  // if (isFetching) return 'Loading...';
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={12155} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(373)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(2300000000000)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(125700000000)}`} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={20} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(79800)} /></Col>
      </Row>
      <div className='home-heading-conatiner'>
      <Title level={2} className="home-title">Top 10 Cryptocurrencies In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-conatiner'>
      <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified/>
      </>
  )
}

export default Homepage
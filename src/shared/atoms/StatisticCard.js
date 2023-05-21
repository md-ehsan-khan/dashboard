import React from "react";
import { Typography } from "antd";

const styles = {
  cardStyle : {
  padding: '12px',
  backgroundColor: '#fffffe',
  marginBottom: '12px',
  textAlign: 'center'
  },
  titleStyle: {
    margin: '0'
  },
  valueStyle: {
      color: "#4764cd",
      fontSize: "32px",
      lineHeight: "48px",
    margin: '0'
  }
}

const {Text, Title} = Typography;

const StatisticCard = (props) => {
  const { title, value, description } = props;
  return (
    <div style={styles.cardStyle}>
      <Title style={styles.titleStyle} level={3}>{title}</Title>
      <Title style={styles.valueStyle} level={4}>{value}</Title>
      <Text>{description}</Text>  
    </div>
  );
};

export default StatisticCard;

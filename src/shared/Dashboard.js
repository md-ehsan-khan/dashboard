import React from "react";
import {
  requirementsData,
  requirementsColumn,
  candidateData,
  candidateColumns,
} from "./Constants/constants";
import { Table, Card, Row, Col}  from "antd";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import StatisticCard from "./atoms/StatisticCard";

const Dashboard = () => {
  const totalRequirements = requirementsData.length;
  const totalCandidateDiscoveries = candidateData.length;

  const ctcDistributionData = requirementsData.map((requirement) => ({
    name: requirement.role,
    maxCTC: requirement.maxCTC,
  }));

  const totalOpenPositions = requirementsData
    .filter((requirement) => requirement.status === "Open")
    .reduce((total, requirement) => total + requirement.noOfPositions, 0);


  const positionsAvailabilityData = [
    {
      name: "Filled",
      value: requirementsData
        .filter((req) => req.status !== "Open")
        .reduce((total, requirement) => total + requirement.noOfPositions, 0),
    },
    {
      name: "Available",
      value: totalOpenPositions
    },
  ];

  const discoveredByData = candidateData.reduce((result, discovery) => {
    const member = discovery.discoveredBy;
    if (!result[member]) {
      result[member] = 0;
    }
    result[member]++;
    return result;
  }, {});

  const discoveredByChartData = Object.entries(discoveredByData).map(
    ([member, count]) => ({
      discoveredBy: member,
      count,
    })
  );

  const candidateStatusData = candidateData.reduce((result, candidate) => {
    const status = candidate.status;
    if (!result[status]) {
      result[status] = 0;
    }
    result[status]++;
    return result;
  }, {});

  const candidateStatusChartData = Object.entries(candidateStatusData).map(
    ([status, count]) => ({
      status,
      count,
    })
  );

  const colors = [ "#ff9966", "#8884d8"];

  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} xl={8}>
          <StatisticCard 
          title={"Total Clients"} 
          value={totalRequirements} 
          description={'Indicates the total number of clients connected with us'}
          />
        </Col>
        <Col xs={24} xl={8}>
          <StatisticCard
            title={"Total Open Positions"}
            value={totalOpenPositions}
            description={'Indicates the total number of positions still open'}
          />
        </Col>
        <Col xs={24} xl={8}>
          <StatisticCard
            title={"Total Candidate Discoveries"}
            value={totalCandidateDiscoveries}
            description={'Indicates the total number of candidates discovered'}
          />
        </Col>
      </Row>
      <Card title="Requirements Report" style={{ marginTop: "4px" }}>
        <Table scroll={{ x: 900 }} dataSource={requirementsData} columns={requirementsColumn} />
      </Card>
      <Row style={{ marginTop: "16px" }}>
        <Col xs={24} xl={12}>
          <Card title="CTC Distribution">
          <ResponsiveContainer width="95%" height={300}>
            <BarChart width={400} height={300} data={ctcDistributionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="maxCTC" fill="#8884d8" />
            </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card title="Positions Availability">
          <ResponsiveContainer width="95%" height={300}>
            <PieChart width={400} height={300}>
              <Pie
                data={positionsAvailabilityData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {positionsAvailabilityData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      <Card title="Candidate Discoveries Report" style={{ marginTop: "16px" }}>
        <Table  scroll={{ x: 900 }} dataSource={candidateData} columns={candidateColumns} />
      </Card>
      <Row style={{ marginTop: "16px" }}>
        <Col xs={24} xl={12}>
          <Card title="Discovered By">
          <ResponsiveContainer width="95%" height={300}>
            <BarChart width={400} height={300} data={discoveredByChartData}>
              <XAxis dataKey="discoveredBy" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
           </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card title="Candidate Status Distribution">
          <ResponsiveContainer width="95%" height={300}>
            <BarChart width={400} height={300} data={candidateStatusChartData}>
              <XAxis dataKey="status" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

import { Tag } from "antd";
const requirementStatusMapper= {
  'Open': 'success',
  'Closed': 'error'
}
const candidateStatusMapper = {
  'Selected': 'processing',
  'Dropped' : 'error',
  'Joined' : 'success',
  'Ongoing': 'warning'
};
export const requirementsData = [
  {
    id: 1,
    clientName: "ABC Corp",
    role: "Software Eng",
    maxCTC: 12,
    minCTC: 8,
    noOfPositions: 3,
    status: "Open",
  },
  {
    id: 2,
    clientName: "XYZ Ltd",
    role: "Data Analyst",
    maxCTC: 10,
    minCTC: 6,
    noOfPositions: 2,
    status: "Closed",
  },
  {
    id: 3,
    clientName: "PQR Corp",
    role: "Business Dev",
    maxCTC: 15,
    minCTC: 12,
    noOfPositions: 1,
    status: "Open",
  },
];

export const requirementsColumn = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Client Name',
    dataIndex: 'clientName',
    key: 'clientName',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Max CTC',
    dataIndex: 'maxCTC',
    key: 'maxCTC',
  },
  {
    title: 'Min CTC',
    dataIndex: 'minCTC',
    key: 'minCTC',
  },
  {
    title: 'No Of Positions',
    dataIndex: 'noOfPositions',
    key: 'noOfPositions',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <Tag color={requirementStatusMapper[text]}>{text.toString()}</Tag>
    ),
  }
];


export const candidateData = [
  {
    id: 1,
    requirementId: 1,
    candidateName: "John Doe",
    status: "Selected",
    offeredCTC: 10,
    discoveredOn: "2023-05-10",
    discoveredBy: "Mary Smith",
  },
  {
    id: 2,
    requirementId: 2,
    candidateName: "Jane Smith",
    status: "Dropped",
    offeredCTC: null,
    discoveredOn: "2023-05-12",
    discoveredBy: "Mike Johnson",
  },
  {
    id: 3,
    requirementId: 1,
    candidateName: "Mark Johnson",
    status: "Joined",
    offeredCTC: 9,
    discoveredOn: "2023-05-15",
    discoveredBy: "Mary Smith",
  },
  {
    id: 4,
    requirementId: 3,
    candidateName: "Sarah Williams",
    status: "Ongoing",
    offeredCTC: null,
    discoveredOn: "2023-05-18",
    discoveredBy: "John Doe",
  },
  {
    id: 5,
    requirementId: 2,
    candidateName: "Emily Brown",
    status: "Ongoing",
    offeredCTC: null,
    discoveredOn: "2023-05-19",
    discoveredBy: "Mary Smith",
  },
  {
    id: 6,
    requirementId: 1,
    candidateName: "John Dine",
    status: "Selected",
    offeredCTC: 13,
    discoveredOn: "2023-04-19",
    discoveredBy: "Mary Smith",
  },
  {
    id: 7,
    requirementId: 1,
    candidateName: "John Don",
    status: "Selected",
    offeredCTC: 10,
    discoveredOn: "2023-07-10",
    discoveredBy: "Mary Smith",
  },
  {
    id: 8,
    requirementId: 1,
    candidateName: "John Diva",
    status: "Selected",
    offeredCTC: 8,
    discoveredOn: "2022-05-10",
    discoveredBy: "Mary Smith",
  },
];

export const candidateColumns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Requirement Id",
    dataIndex: "requirementId",
    key: "requirementId",
  },
  {
    title: "Candidate Name",
    dataIndex: "candidateName",
    key: "candidateName",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => (
      <Tag color={candidateStatusMapper[text]}>{text.toString()}</Tag>
    ),
  },
  {
    title: "Offered CTC",
    dataIndex: "offeredCTC",
    key: "offeredCTC",
  },
  {
    title: "Discovered On",
    dataIndex: "discoveredOn",
    key: "discoveredOn",
  },
  {
    title: "Discovered By",
    dataIndex: "discoveredBy",
    key: "discoveredBy",
  },
];

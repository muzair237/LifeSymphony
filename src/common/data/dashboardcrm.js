// Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

const crmWidgets = [
  {
    id: 1,
    label: "Absent",
    // badge: "ri-arrow-up-circle-line text-success",
    icon: "ri-space-ship-line",
    counter: "9",
    decimals: 0,
    suffix: "",
    prefix: "",
    text:"absences",
  },
  {
    id: 2,
    label: "Missing Punches",
    // badge: "ri-arrow-up-circle-line text-success",
    icon: "ri-exchange-dollar-line",
    counter: "0",
    decimals: 0,
    suffix: "",
    prefix: "",
    text:"missingPunches",
  },
  {
    id: 3,
    label: "Short Duration",
    // badge: "ri-arrow-down-circle-line text-danger",
    icon: "ri-pulse-line",
    counter: "0",
    decimals: 0,
    suffix: "",
    prefix: "",
    text:"shortLeaves",
  },
  {
    id: 4,
    label: "Late Arrival",
    // badge: "ri-arrow-up-circle-line text-success",
    icon: "ri-trophy-line",
    counter: "0",
    decimals: 0,
    separator: ",",
    suffix: "",
    prefix: "",
    text:"lateness",
  },
  {
    id: 5,
    label: "Early Left",
    // badge: "ri-arrow-down-circle-line text-danger",
    icon: "ri-service-line",
    counter: "0",
    decimals: 0,
    separator: ",",
    suffix: "",
    prefix: "",
    text:"earlyLeft",
  },
  {
    id: 6,
    label: "History",
    // badge: "ri-arrow-down-circle-line text-danger",
    icon: "ri-service-line",
    counter: "0",
    decimals: 0,
    separator: ",",
    suffix: "",
    prefix: "",
    text:"attendanceHistory"
    
  },
  {
    id: 7,
    label: "Leaves",
    // badge: "ri-arrow-down-circle-line text-danger",
    icon: "ri-service-line",
    counter: "0",
    decimals: 0,
    separator: ",",
    suffix: "",
    prefix: "",
    text:"leaves",
  },
  {
    id: 8,
    label: "Present",
    // badge: "ri-arrow-down-circle-line text-danger",
    icon: "ri-service-line",
    counter: "0",
    decimals: 0,
    separator: ",",
    suffix: "",
    prefix: "",
    text:"present",
  },
];

const dealsStatus = [
  {
    id: 1,
    company: "Webevis Tecnologies , Pvt.",
    branches_count: "Center-1",
    head: "Mr. Fasih",
    present: "40",
    absent: "10",
    late_arrival: "3",
    early_left: "6",
    Travel: "None",
    Holiday: "10",
    Day_off: "6",
  },
  {
    id: 2,
    company: "Webevis Tecnologies , Pvt.",
    branches_count: "Center-2",
    head: "Miss Misbah",
    present: "56",
    absent: "23",
    late_arrival: "13",
    early_left: "3",
    Travel: "None",
    Holiday: "12",
    Day_off: "2",
  },
  {
    id: 3,
    company: "Plastk",
    branches_count: "Plastk",
    head: "Mr. Fasih",
    present: "43",
    absent: "7",
    late_arrival: "8",
    early_left: "3",
    Travel: "None",
    Holiday: "12",
    Day_off: "5",
  },
  {
    id: 4,
    company: "Webevis Tecnologies , Pvt.",
    branches_count: "Center-1",
    head: "Mr. Fasih",
    present: "40",
    absent: "10",
    late_arrival: "3",
    early_left: "6",
    Travel: "None",
    Holiday: "10",
    Day_off: "6",
  },
  {
    id: 5,
    company: "Webevis Tecnologies , Pvt.",
    branches_count: "Center-2",
    head: "Miss Misbah",
    present: "87",
    absent: "9",
    late_arrival: "6",
    early_left: "3",
    Travel: "None",
    Holiday: "13",
    Day_off: "7",
  },
  {
    id: 6,
    company: "Plastk",
    branches_count: "Plastk",
    head: "Mr. Fasih",
    present: "56",
    absent: "78",
    late_arrival: "2",
    early_left: "12",
    Travel: "None",
    Holiday: "5",
    Day_off: "2",
  },
];
const leavesummary = [
  // {
  //   id: 1,
  //   leavetype: "sick-leave",
  //   quota: "3.02",
  //   availed: "0",
  //   available: "3.02",
  // },
  {
    id: 1,
    leavetype: "Annual & Casual",
    quota: "3.02",
    availed: "0",
    available: "3.02",
    
  },
  // {
  //   id: 1,
  //   leavetype: " Sick/Casual",
  //   quota: "3.02",
  //   availed: "0",
  //   available: "3.02",
  //   text:"casualQuota"
  // },
];
const accolades = [];
const anniverseries = [];

const tasks = [
  {
    id: 1,
    forId: "task_one",
    text: "Review and make sure nothing slips through cracks",
    date: "15 Sep, 2021",
  },
  {
    id: 2,
    forId: "task_two",
    text: "Send meeting invites for sales upcampaign",
    date: "20 Sep, 2021",
  },
  {
    id: 3,
    forId: "task_three",
    text: "Weekly closed sales won checking with sales team",
    date: "24 Sep, 2021",
  },
  {
    id: 4,
    forId: "task_four",
    text: "Add notes that can be viewed from the individual view",
    date: "27 Sep, 2021",
  },
  {
    id: 5,
    forId: "task_five",
    text: "Move stuff to another page",
    date: "27 Sep, 2021",
  },
  {
    id: 6,
    forId: "task_six",
    text: "Styling wireframe design and documentation for velzon admin",
    date: "27 Sep, 2021",
  },
];

const activities = [
  {
    id: 1,
    date: "25",
    weekDay: "Tue",
    time: "12:00am - 03:30pm",
    caption: "Meeting for campaign with sales team",
    subItem: [
      { id: 1, img: avatar1 },
      { id: 2, img: avatar2 },
      { id: 3, img: avatar3 },
    ],
    imgNumber: "5",
    bgcolor: "bg-info",
  },
  {
    id: 2,
    date: "20",
    weekDay: "Wed",
    time: "02:00pm - 03:45pm",
    caption: "Adding a new event with attachments",
    subItem: [
      { id: 1, img: avatar4 },
      { id: 2, img: avatar5 },
      { id: 3, img: avatar6 },
      { id: 4, img: avatar7 },
      { id: 1, img: avatar8 },
      { id: 2, img: avatar1 },
      { id: 3, img: avatar2 },
    ],
    imgNumber: "4",
    bgcolor: "bg-primary",
  },
  {
    id: 4,
    date: "12",
    time: "10:30am - 01:15pm",
    caption: "Weekly closed sales won checking with sales team",
    subItem: [
      { id: 1, img: avatar1 },
      { id: 2, img: avatar5 },
      { id: 3, img: avatar2 },
    ],
    imgNumber: "9",
    bgcolor: "bg-warning",
  },
];

const closingDeals = [
  {
    id: 1,
    dealName: "Acme Inc Install",
    img: avatar1,
    salesRep: "Donald Risher",
    amount: "96",
    closeDate: "Today",
  },
  {
    id: 2,
    dealName: "Save lots Stores",
    img: avatar2,
    salesRep: "Jansh Brown",
    amount: "55.7",
    closeDate: "30 Dec 2021",
  },
  {
    id: 3,
    dealName: "William PVT",
    img: avatar7,
    salesRep: "Ayaan Hudda",
    amount: "102",
    closeDate: "25 Nov 2021",
  },
  {
    id: 4,
    dealName: "Raitech Soft",
    img: avatar4,
    salesRep: "Julia William",
    amount: "89.5",
    closeDate: "20 Sep 2021",
  },
  {
    id: 5,
    dealName: "Absternet LLC",
    img: avatar4,
    salesRep: "Vitoria Rodrigues",
    amount: "89.5",
    closeDate: "20 Sep 2021",
  },
];

const todayBalanceData = [
  {
    name: "Revenue",
    data: [10, 45, 30, 35, 50, 55, 70, 120, 150, 160, 210, 240],
  },
  {
    name: "Expenses",
    data: [12, 17, 75, 82, 44, 35, 52, 75, 112, 108, 56, 289],
  },
];

const lastWeekBalanceData = [
  {
    name: "Revenue",
    data: [40, 55, 40, 35, 20, 35, 40, 70, 110, 140, 230, 210],
  },
  {
    name: "Expenses",
    data: [32, 37, 65, 22, 44, 85, 42, 75, 122, 118, 156, 199],
  },
];

const lastMonthBalanceData = [
  {
    name: "Revenue",
    data: [40, 35, 20, 65, 80, 65, 120, 90, 50, 80, 170, 150],
  },
  {
    name: "Expenses",
    data: [22, 37, 25, 62, 34, 75, 142, 145, 122, 108, 136, 199],
  },
];

const currentYearBalanceData = [
  {
    name: "Revenue",
    data: [20, 25, 30, 35, 40, 55, 70, 110, 150, 180, 210, 250],
  },
  {
    name: "Expenses",
    data: [12, 17, 45, 42, 24, 35, 42, 75, 102, 108, 156, 199],
  },
];

// Deal Type

const todayDealData = [
  {
    name: "Pending",
    data: [40, 25, 15, 20, 50, 10],
  },
  {
    name: "Loss",
    data: [40, 60, 80, 100, 40, 100],
  },
  {
    name: "Won",
    data: [22, 37, 39, 3, 23, 5],
  },
];

const weeklyDealData = [
  {
    name: "Pending",
    data: [40, 25, 30, 40, 100, 20],
  },
  {
    name: "Loss",
    data: [40, 60, 20, 40, 10, 50],
  },
  {
    name: "Won",
    data: [24, 56, 58, 43, 23, 30],
  },
];

const monthlyDealData = [
  {
    name: "Pending",
    data: [80, 50, 30, 40, 100, 20],
  },
  {
    name: "Loss",
    data: [20, 30, 40, 80, 20, 80],
  },
  {
    name: "Won",
    data: [44, 76, 78, 13, 43, 10],
  },
];

const yealyDealData = [
  {
    name: "Pending",
    data: [140, 70, 50, 60, 120, 120],
  },
  {
    name: "Loss",
    data: [70, 60, 50, 70, 60, 40],
  },
  {
    name: "Won",
    data: [14, 56, 48, 33, 63, 50],
  },
];

const octData = [
  {
    name: "Goal",
    data: [17],
  },
  {
    name: "Pending Forcast",
    data: [6],
  },
  {
    name: "Revenue",
    data: [37],
  },
];

const novData = [
  {
    name: "Goal",
    data: [37],
  },
  {
    name: "Pending Forcast",
    data: [12],
  },
  {
    name: "Revenue",
    data: [18],
  },
];

const decData = [
  {
    name: "Goal",
    data: [25],
  },
  {
    name: "Pending Forcast",
    data: [20],
  },
  {
    name: "Revenues",
    data: [27],
  },
];

const janData = [
  {
    name: "Goal",
    data: [7],
  },
  {
    name: "Pending Forcast",
    data: [5],
  },
  {
    name: "Revenue",
    data: [32],
  },
];

export {
  crmWidgets,
  dealsStatus,
  leavesummary,
  accolades,
  tasks,
  activities,
  closingDeals,
  todayBalanceData,
  lastWeekBalanceData,
  lastMonthBalanceData,
  currentYearBalanceData,
  todayDealData,
  weeklyDealData,
  monthlyDealData,
  yealyDealData,
  octData,
  novData,
  decData,
  janData,
};

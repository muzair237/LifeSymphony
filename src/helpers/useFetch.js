import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAttendenceRecord,
  LeaveSummaryData,
  BirthdayList,
  workAnniversary,
  getEmployees,
} from "../slices/dashboardCRM/action";

const useFetch = (value) => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const list = useSelector((state) => {
  //   switch (value) {
  //     case "attendence":
  //       return state.DashboardCRM.attendenceData;
  //     case "leaveSummary":
  //       return state.DashboardCRM.leaveSummary.data;
  //     case "workAnniversary":
  //       return state.DashboardCRM.workAnniversaryList.data;
  //     case "birthday":
  //       return state.DashboardCRM.birthdayList.data;
  //     case "allEmployees":
  //       return state.Employees.employees;

  //     default:
  //       //   console.log(state.DashboardCRM.error);
  //       return null;
  //   }
  // });

  // useEffect(() => {
  //   switch (value) {
  //     case "attendence":
  //     case "leaveSummary":
  //     case "workAnniversary":
  //     case "birthday":
  //     case "allEmployees":
  //       if (list) {
  //         setLoading(false);
  //         setData(list);
  //       }

  //       break;

  //     default:
  //       break;
  //   }
  // }, [list, value]);

  // useEffect(() => {
  //   setLoading(true);

  //   switch (value) {
  //     case "attendence":
  //       if (sessionStorage.getItem("authUser")) {
  //         const obj = JSON.parse(sessionStorage.getItem("authUser"));
  //         dispatch(getAttendenceRecord(obj.user._id));
  //       }
  //       break;

  //     case "leaveSummary":
  //       if (sessionStorage.getItem("authUser")) {
  //         const obj = JSON.parse(sessionStorage.getItem("authUser"));
  //         dispatch(LeaveSummaryData(obj.user._id));
  //       }
  //       break;

  //     case "workAnniversary":
  //       dispatch(workAnniversary());
  //       break;

  //     case "birthday":
  //       dispatch(BirthdayList());
  //       break;

  //     case "allEmployees":
  //       if (sessionStorage.getItem("authUser")) {
  //         const obj = JSON.parse(sessionStorage.getItem("authUser"));
  //         // setAuthorization(obj.token);
  //         dispatch(getEmployees(obj.token));
  //       }
  //       break;

  //     default:
  //       break;
  //   }
  // }, [dispatch, value]);

  return { data, loading, error };
};

export default useFetch;

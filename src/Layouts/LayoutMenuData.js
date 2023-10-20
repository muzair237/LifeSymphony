import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isTasks, setIsTasks] = useState(false);
  const [isReports, setIsReports] = useState(false);
  const [isAnalytics, setIsAnalytics] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isRole, setIsRole] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  // console.log("state", isDashboard);

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Role") {
      setIsRole(false);
    }
  }, [history]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Dashboards",
      icon: "ri-dashboard-2-line",
      stateVariables: isDashboard,
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
    {
      id: "Tasks",
      label: "Tasks",
      icon: "ri-flag-2-line",
      link: "/tasks",
      stateVariables: isTasks,
      click: function (e) {
        e.preventDefault();
        setIsTasks(!isTasks);
        setIscurrentState("Tasks");
        updateIconSidebar(e);
      },
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: "ri-numbers-line",
      link: "/analytics",
      stateVariables: isAnalytics,
      click: function (e) {
        e.preventDefault();
        setIsAnalytics(!isAnalytics);
        setIscurrentState("Analytics");
        updateIconSidebar(e);
      },
    },
    {
      id: "reports",
      label: "Reports",
      icon: "ri-pie-chart-line",
      link: "/reports",
      stateVariables: isReports,
      click: function (e) {
        e.preventDefault();
        setIsReports(!isReports);
        setIscurrentState("Reports");
        updateIconSidebar(e);
      },
    },
    {
      id: "profile",
      label: "Profile",
      icon: "ri-account-circle-line",
      link: "/profile",
      stateVariables: isProfile,
      click: function (e) {
        e.preventDefault();
        setIsProfile(!isProfile);
        setIscurrentState("Profile");
        updateIconSidebar(e);
      },
    },
  ]
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;

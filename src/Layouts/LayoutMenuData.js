import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isGoals, setIsGoals] = useState(false);
  const [isDietPlan, setIsDietPlan] = useState(false);
  const [isBodyCalculator, setIsBodyCalculator] = useState(false);
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
      id: "bodyCalculator",
      label: "Body Calculator",
      icon: "ri-calculator-fill",
      link: "/bodyCalculator",
      stateVariables: isBodyCalculator,
      click: function (e) {
        e.preventDefault();
        setIsReports(!isBodyCalculator);
        setIscurrentState("BodyCalculator");
        updateIconSidebar(e);
      },
    },
    {
      id: "profile",
      label: "Profile",
      icon: "ri-account-circle-fill",
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

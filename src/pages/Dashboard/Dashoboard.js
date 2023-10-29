import React, { useState } from "react";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import CountUp from "react-countup";
import { ProjectsOverviewCharts } from './DashboardProjectCharts';
import { useDispatch, useSelector } from "react-redux";
import { MonochromePie } from './PieCharts'



const Dashboard = () => {
  const dispatch = useDispatch();
  const bmi = sessionStorage.getItem("bmi");
  const bmr = sessionStorage.getItem("bmr");
  const calorie = sessionStorage.getItem("calorie");

  const [chartData, setchartData] = useState([]);

  const onChangeChartPeriod = pType => {
    dispatch(getProjectChartsData(pType));
  };

  return (
    <>
      <div className="page-content">
        <div className="BreadCrumb mt-3">
          <BreadCrumb style={{ width: "98%", marginLeft: "12px" }} />
        </div>
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader className="p-0 border-0 bg-soft-light">
                <Row className="g-0 text-center">
                  <Col xs={6} sm={3}>
                    <div className="p-3 border border-dashed border-start-0">
                      <h5 className="mb-1"><span className="counter-value" data-target={bmi}>
                        <CountUp
                          start={0}
                          end={bmi ? bmi : 0}
                          separator={","}
                          duration={4}
                        />
                      </span></h5>
                      <p className="text-muted mb-0">{bmi ? "Body Mass Index" : "Please Calculate Your BMI First"}</p>
                    </div>
                  </Col>

                  <Col xs={6} sm={3}>
                    <div className="p-3 border border-dashed border-start-0">
                      <h5 className="mb-1"><span className="counter-value">
                        <CountUp
                          start={0}
                          end={bmr ? bmr : 0}
                          separator={","}
                          duration={4}
                        />
                      </span></h5>
                      <p className="text-muted mb-0">{bmr ? "Basal Metabolic Rate (BMR)" : "Please Calculate Your BMR First"}</p>
                    </div>
                  </Col>
                  <Col xs={6} sm={3}>
                    <div className="p-3 border border-dashed border-start-0">
                      <h5 className="mb-1">
                        <span className="counter-value" data-target={calorie}>
                          <CountUp start={0} end={calorie ? calorie : 0} decimals={2} duration={4} />
                        </span>
                      </h5> {/* Close the h5 tag here */}
                      <p className="text-muted mb-0">{calorie ? "Total Daily Energy Expenditure (TDEE)" : "Please Calculate Your Total Daily Expenditure First"}</p>
                    </div>
                  </Col>

                </Row>
              </CardHeader>
              <CardBody className="p-0 pb-2">
                {/* <div>
                  <div dir="ltr" className="apex-charts">
                    <ProjectsOverviewCharts series={chartData} dataColors='["--vz-primary", "--vz-info", "--vz-warning"]' />
                  </div>
                </div> */}
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xl={6}>
            <Card>
              <CardHeader>
                <h4 className="card-title mb-0">Monochrome Pie Chart</h4>
              </CardHeader>

              <CardBody>
                <MonochromePie dataColors='["--vz-primary"]' />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
};
export default Dashboard;

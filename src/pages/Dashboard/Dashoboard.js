import React, { useState, useEffect } from "react";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import CountUp from "react-countup";
import { ProjectsOverviewCharts } from "./DashboardProjectCharts";
import { useDispatch, useSelector } from "react-redux";
import { MonochromePie } from "./PieCharts";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const bmi = sessionStorage.getItem("bmi");
  const bmr = sessionStorage.getItem("bmr");
  const calorie = sessionStorage.getItem("calorie");
  const [isLoaded, setIsLoaded] = useState(false);

  const [chartData, setchartData] = useState([]);

  const onChangeChartPeriod = (pType) => {
    dispatch(getProjectChartsData(pType));
  };

  const divStyle = {
    opacity: isLoaded ? 1 : 0, // Apply opacity based on the loaded state
    transform: `translateY(${isLoaded ? 0 : 20}px)`, // Apply translateY based on the loaded state
    transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out", // Add transitions for opacity and transform
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div style={divStyle} className="page-content">
        <div className="BreadCrumb mt-3">
          <BreadCrumb style={{ width: "98%", marginLeft: "12px" }} />
        </div>
        <header className="py-0 bg-light border-bottom mb-4">
          <div className="container">
            <div className="text-center my-0 pt-3">
              <h1 className="fw-bolder">Welcome to LifeSymphony!</h1>
              <p className="lead mb-0">
                Welcome to <strong>LifeSymphony</strong>, a thoughtful health
                application designed to make your wellness journey a breeze. Our
                app offers a range of user-friendly features, from fitness
                tracking to personalized nutrition advice, all aimed at helping
                you achieve your health goals. Embrace a balanced and mindful
                lifestyle with <strong>LifeSymphony</strong>, where your
                well-being takes center stage. It's your health, simplified and
                supported by a symphony of practical tools.
              </p>
              <hr />
            </div>
          </div>
        </header>
        <Row>
          <Col md={4}>
            <div
              className="card"
              style={{ width: "18rem;", height: "13.7rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">
                  Gain Insight into Your Body: Calculate BMI, BMR, and TDEE with
                  Ease
                </h5>
                <p className="card-text">
                  Unlock the secrets of your body's health with our
                  user-friendly calculator. Discover your BMI, BMR, and TDEE
                  effortlessly for a holistic understanding of your well-being.
                </p>
                <Link to="/bodyCalculator" className="btn btn-primary">
                  Go to Body Calculator
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card" style={{ width: "18rem;" }}>
              <div className="card-body">
                <h5 className="card-title">
                  Daily Inspiration for a Healthier You
                </h5>
                <p className="card-text">
                  Embrace each day as an opportunity to nurture your well-being.
                  Remember, small positive choices compound into a lifetime of
                  health and happiness. Seize the day with purpose and make
                  every step count on your journey to a healthier you.
                </p>
                <Link to="/dailyQuote" className="btn btn-primary">
                  Read Daily Quote
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card" style={{ width: "18rem;" }}>
              <div className="card-body">
                <h5 className="card-title">
                  Health Wisdom: Nourishing Your Body and Mind
                </h5>
                <p className="card-text">
                  Well-being is more than just numbers; it's a holistic journey.
                  In our health wisdom section, explore insights and tips to
                  nurture both your body and mind. From balanced nutrition to
                  mindful living, discover the keys to unlocking a healthier,
                  happier you.
                </p>
                <Link to="/healthWisdom" className="btn btn-primary">
                  Read Health Wisdom Snippets
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <h4>Your Body Statistics</h4>
        <Row className="mt-5">
          <Col xl={12}>
            <Card>
              <CardHeader className="p-0 border-0 bg-soft-light">
                <Row className="g-0 text-center">
                  <Col xs={6} sm={3}>
                    <div className="p-3 border border-dashed border-start-0">
                      <h5 className="mb-1">
                        <span className="counter-value" data-target={bmi}>
                          <CountUp
                            start={0}
                            end={bmi ? bmi : 0}
                            separator={","}
                            duration={4}
                          />
                        </span>
                      </h5>
                      <p className="text-muted mb-0">
                        {bmi
                          ? "Body Mass Index"
                          : "Please Calculate Your BMI First"}
                      </p>
                    </div>
                  </Col>

                  <Col xs={6} sm={3}>
                    <div className="p-3 border border-dashed border-start-0">
                      <h5 className="mb-1">
                        <span className="counter-value">
                          <CountUp
                            start={0}
                            end={bmr ? bmr : 0}
                            separator={","}
                            duration={4}
                          />
                        </span>
                      </h5>
                      <p className="text-muted mb-0">
                        {bmr
                          ? "Basal Metabolic Rate (BMR)"
                          : "Please Calculate Your BMR First"}
                      </p>
                    </div>
                  </Col>
                  <Col xs={6} sm={3}>
                    <div className="p-3 border border-dashed border-start-0">
                      <h5 className="mb-1">
                        <span className="counter-value" data-target={calorie}>
                          <CountUp
                            start={0}
                            end={calorie ? calorie : 0}
                            decimals={2}
                            duration={4}
                          />
                        </span>
                      </h5>{" "}
                      {/* Close the h5 tag here */}
                      <p className="text-muted mb-0">
                        {calorie
                          ? "Total Daily Energy Expenditure (TDEE)"
                          : "Please Calculate Your Total Daily Expenditure First"}
                      </p>
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

        {/* <Row className="mt-3">
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
        </Row> */}
      </div>
    </>
  );
};
export default Dashboard;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import countries from "../../common/countries";
//import images
import profileBg from "../../assets/images/profile-bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  updateProfile,
  editProfilePicture,
  resetPassword,
} from "../../slices/auth/thunk";

// import avatar1 from '../../../../assets/images/users/avatar-1.jpg';

const Profile = () => {
  const dispatch = useDispatch();
  const ages = Array.from({ length: 100 }, (_, index) => index + 1);
  const heights = [];
  for (let i = 100; i <= 250; i++) {
    heights.push(i);
  }
  const weights = [];
  const increment = 1;
  const maxWeight = 150;

  for (let i = 30; i <= maxWeight; i += increment) {
    weights.push(i);
  }
  document.title = "LifeSymphony | Profile    ";
  const user = useSelector((state) => state?.Login?.user);
  const userId = useSelector((state) => state?.Login?.user?._id);
  const [activeTab, setActiveTab] = useState("1");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const initialValues = {
    firstname: user?.firstname ? user?.firstname : "",
    lastname: user?.lastname ? user?.lastname : "",
    email: user?.email ? user?.email : "",
    DOBmonths: user?.DOBmonths ? user?.DOBmonths : "",
    DOBdays: user?.DOBdays ? user?.DOBdays : "",
    DOByears: user?.DOByears ? user?.DOByears : "",
    country: user?.country ? user?.country : "",
    city: user?.city ? user?.city : "",
    gender: user?.gender ? user?.gender : "",
    bloodGroup: user?.bloodGroup ? user?.bloodGroup : "",
    age: user?.age ? user?.age : "",
    height: user?.height ? user?.height : "",
    weight: user?.weight ? user?.weight : "",
  };
  const validationSchema = yup.object().shape({
    firstname: yup
      .string()
      .min(3, "First Name should be atleast 3 Characters")
      .required("First name is required"),
    lastname: yup
      .string()
      .min(3, "Last Name should be atleast 3 Characters")
      .required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    DOBmonths: yup.string().nullable(),
    DOBdays: yup.string().nullable(),
    DOByears: yup.string().nullable(),
    country: yup.string(),
    city: yup.string().nullable(),
    gender: yup.string(),
    bloodGroup: yup.string(),
    age: yup.string(),
    height: yup.string(),
    weight: yup.string(),
  });
  const onSubmit = (values) => {
    const profileInfo = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      DOBmonths: values.DOBmonths,
      DOBdays: values.DOBdays,
      DOByears: values.DOByears,
      country: values.country,
      city: values.city,
      gender: values.gender,
      bloodGroup: values.bloodGroup,
      age: values.age,
      height: values.height,
      weight: values.weight,
    };
    dispatch(updateProfile({ profileInfo, userId }));
  };

  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract the fields from the user object
  const {
    firstname,
    lastname,
    email,
    DOBmonths,
    DOBdays,
    DOByears,
    country,
    city,
    gender,
    bloodGroup,
    age,
    height,
    weight,
  } = user || {};

  // Count the number of fields that are not empty
  const filledFieldCount = [
    firstname,
    lastname,
    email,
    DOBmonths,
    DOBdays,
    DOByears,
    country,
    city,
    gender,
    bloodGroup,
    age,
    height,
    weight,
  ].filter((value) => value !== "").length;

  // Calculate the progress percentage
  const totalFieldCount = 13; // Total number of fields
  const progressPercentagee = Math.floor(
    (filledFieldCount / totalFieldCount) * 100
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const payload = new FormData();
    payload.append("userId", user?._id);
    payload.append("profilePicture", file);
    dispatch(editProfilePicture({ payload }));
  };
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordErrorSignal, setPasswordErrorSignal] = useState(false);

  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  const handleChangePassword = () => {
    if (confirmPassword !== newPassword) {
      setPasswordError("Password must match!");
      setPasswordErrorSignal(true);
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(newPassword)) {
      setPasswordError(
        "Password must contain at least 6 characters, one uppercase letter, and one special character (@, $, !, %, *, ?, or &)"
      );
      setPasswordErrorSignal(true);
      return;
    }
    const passwordInfo = {
      email: user?.email,
      newPassword: confirmPassword,
    };
    console.log(passwordInfo);
    dispatch(resetPassword({ passwordInfo }));
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="position-relative mx-n4 mt-n4">
            <div className="profile-wid-bg profile-setting-img">
              <img src={profileBg} className="profile-wid-img" alt="" />
              <div className="overlay-content">
                <div className="text-end p-3">
                  <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                    <Input
                      id="profile-foreground-img-file-input"
                      type="file"
                      className="profile-foreground-img-file-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Row>
            <Col xxl={3}>
              <Card className="mt-n5">
                <CardBody className="p-4">
                  <div className="text-center">
                    <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                      <img
                        src={user && user?.profilePicture}
                        className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                        alt="user-profile"
                      />
                      <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                        <Input
                          id="profile-img-file-input"
                          onChange={(event) => handleFileChange(event)}
                          type="file"
                          className="profile-img-file-input"
                        />
                        <Label
                          htmlFor="profile-img-file-input"
                          className="profile-photo-edit avatar-xs"
                        >
                          <span className="avatar-title rounded-circle bg-light text-body">
                            <i className="ri-camera-fill"></i>
                          </span>
                        </Label>
                      </div>
                    </div>
                    <h5 className="fs-16 mb-1">
                      {user ? user?.firstname + " " + user?.lastname : null}
                    </h5>
                    <p className="text-muted mb-0">
                      {user ? user?.email : null}
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <div className="d-flex align-items-center mb-5">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-0">Complete Your Profile</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        to="#"
                        className="badge bg-light text-primary fs-12"
                      >
                        <i className="ri-edit-box-line align-bottom me-1"></i>{" "}
                        Edit
                      </Link>
                    </div>
                  </div>
                  <div className="progress animated-progress custom-progress progress-label">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: `${progressPercentagee}%` }}
                      aria-valuenow={`${progressPercentagee}`}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="label">{progressPercentagee}%</div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              {/* <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0">Portfolio</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Link to="#" className="badge bg-light text-primary fs-12"><i
                                                className="ri-add-fill align-bottom me-1"></i> Add</Link>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                                                <i className="ri-github-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="email" className="form-control" id="gitUsername" placeholder="Username"
                                            defaultValue="@daveadame" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-primary">
                                                <i className="ri-global-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="text" className="form-control" id="websiteInput"
                                            placeholder="www.example.com" defaultValue="www.velzon.com" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-success">
                                                <i className="ri-dribbble-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="text" className="form-control" id="dribbleName" placeholder="Username"
                                            defaultValue="@dave_adame" />
                                    </div>
                                    <div className="d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-danger">
                                                <i className="ri-pinterest-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="text" className="form-control" id="pinterestName"
                                            placeholder="Username" defaultValue="Advance Dave" />
                                    </div>
                                </CardBody>
                            </Card> */}
            </Col>

            <Col xxl={9}>
              <Card className="mt-xxl-n5">
                <CardHeader>
                  <Nav
                    className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        to="#"
                        className={classnames({ active: activeTab === "1" })}
                        onClick={() => {
                          tabChange("1");
                        }}
                        type="button"
                      >
                        Personal Details
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        className={classnames({ active: activeTab === "2" })}
                        onClick={() => {
                          tabChange("2");
                        }}
                        type="button"
                      >
                        Change Password
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody className="p-4">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                      >
                        <Form>
                          <Row>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="firstnameInput"
                                  className="form-label"
                                >
                                  First Name *
                                </Label>
                                <Field
                                  type="text"
                                  className="form-control"
                                  id="firstnameInput"
                                  placeholder="Firstname"
                                  name="firstname"
                                  defaultValue={user ? user?.firstname : "Dave"}
                                />
                                <ErrorMessage name="firstname">
                                  {(error) => (
                                    <div className={"error"}>{error}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="lastnameInput"
                                  className="form-label"
                                >
                                  Last Name *
                                </Label>
                                <Field
                                  type="text"
                                  className="form-control"
                                  id="lastnameInput"
                                  placeholder="Lastname"
                                  name="lastname"
                                  defaultValue={user ? user?.lastname : "Dave"}
                                />
                                <ErrorMessage name="lastname">
                                  {(error) => (
                                    <div className={"error"}>{error}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="emailInput"
                                  className="form-label"
                                >
                                  Email Address *
                                </Label>
                                <Field
                                  type="email"
                                  className="form-control"
                                  disabled
                                  id="emailInput"
                                  placeholder="Email"
                                  name="email"
                                  defaultValue={
                                    user ? user?.email : "daveadame@gmail.com"
                                  }
                                />
                                <ErrorMessage name="email">
                                  {(error) => (
                                    <div className={"error"}>{error}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </Col>

                            <Col lg={2}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="monthsInput"
                                  className="form-label"
                                >
                                  DOB Month
                                </Label>
                                <Field
                                  as="select"
                                  name="DOBmonths"
                                  className="form-select"
                                  id="monthsInput"
                                >
                                  <option selected disabled value="">
                                    Month
                                  </option>
                                  <option value="">Prefer Not to Say</option>
                                  {allMonths.map((month, index) => (
                                    <option key={index} value={month}>
                                      {month}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </Col>
                            <Col lg={2}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="dayInput"
                                  className="form-label"
                                >
                                  DOB Day
                                </Label>
                                <Field
                                  as="select"
                                  name="DOBdays"
                                  className="form-select"
                                  id="dayInput"
                                >
                                  <option selected disabled value="">
                                    Day
                                  </option>
                                  <option value="">Prefer Not to Say</option>
                                  {Array.from({ length: 32 }, (_, index) => (
                                    <option key={index} value={index}>
                                      {index}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </Col>
                            <Col lg={2}>
                              <Label htmlFor="yearInput" className="form-label">
                                DOB Year
                              </Label>
                              <Field
                                as="select"
                                id="yearInput"
                                name="DOByears"
                                className="form-select"
                              >
                                <option disabled selected value="">
                                  Year
                                </option>
                                <option value="">Prefer Not to Say</option>
                                {Array.from({ length: 100 }, (_, index) => {
                                  const year = new Date().getFullYear() - index;
                                  return (
                                    <option key={year} value={year}>
                                      {year}
                                    </option>
                                  );
                                })}
                              </Field>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="countryInput"
                                  className="form-label"
                                >
                                  Country
                                </Label>
                                <Field
                                  as="select"
                                  name="country"
                                  className="form-select"
                                  id="countryInput"
                                >
                                  <option selected disabled value="">
                                    Select Country
                                  </option>
                                  <option value="">Prefer Not to Say</option>
                                  {countries.map((country, index) => (
                                    <option key={index} value={country}>
                                      {country}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="cityInput"
                                  className="form-label"
                                >
                                  City
                                </Label>
                                <Field
                                  type="text"
                                  className="form-control"
                                  name="city"
                                  id="cityInput"
                                  placeholder="Enter City"
                                />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="genderInput"
                                  className="form-label"
                                >
                                  Gender
                                </Label>
                                <Field
                                  as="select"
                                  name="gender"
                                  className="form-select"
                                  id="genderInput"
                                >
                                  <option value="" selected disabled>
                                    Select Gender
                                  </option>
                                  <option value="">Prefer Not to Say</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                </Field>
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="bloodGroupInput"
                                  className="form-label"
                                >
                                  Blood Group
                                </Label>
                                <Field
                                  as="select"
                                  name="bloodGroup"
                                  className="form-select"
                                  id="bloodGroupInput"
                                >
                                  <option value="" selected disabled>
                                    Blood Group
                                  </option>
                                  <option value="">Prefer Not to Say</option>
                                  <option value="A+">A+</option>
                                  <option value="A-">A-</option>
                                  <option value="B+">B+</option>
                                  <option value="B-">B-</option>
                                  <option value="O+">O+</option>
                                  <option value="O-">O-</option>
                                  <option value="AB+">AB+</option>
                                  <option value="AB-">AB-</option>
                                </Field>
                              </div>
                            </Col>

                            <Col lg={4}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="ageInput"
                                  className="form-label"
                                >
                                  Age
                                </Label>
                                <Field
                                  as="select"
                                  name="age"
                                  className="form-select"
                                  id="ageInput"
                                >
                                  <option selected disabled value="">
                                    Select Age
                                  </option>
                                  <option value="">Prefer Not to Say</option>
                                  {ages.map((age) => (
                                    <option key={age} value={age}>
                                      {age}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="heightInput"
                                  className="form-label"
                                >
                                  Height (in cm)
                                </Label>
                                <Field
                                  as="select"
                                  name="height"
                                  className="form-select"
                                  id="heightInput"
                                >
                                  <option selected disabled value="">
                                    Select Height (in cm)
                                  </option>
                                  <option value="">Prefer Not to Say</option>
                                  {heights.map((height, index) => (
                                    <option key={index} value={height}>
                                      {height} cm
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </Col>

                            <Col lg={4}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="weightInput"
                                  className="form-label"
                                >
                                  Weight (in kg)
                                </Label>
                                <Field
                                  as="select"
                                  name="weight"
                                  className="form-select"
                                  id="weightInput"
                                >
                                  <option selected disabled value="">
                                    Select Weight (in kg)
                                  </option>
                                  <option value="">Prefer Not to Say</option>
                                  {weights.map((weight, index) => (
                                    <option key={index} value={weight}>
                                      {weight} kg
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Update
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </Form>
                      </Formik>
                    </TabPane>

                    <TabPane tabId="2">
                      <Row className="g-2">
                        <Col lg={4}>
                          <Label
                            htmlFor="newpasswordInput"
                            className="form-label"
                          >
                            New Password*
                          </Label>
                          <div className="position-relative">
                            <Input
                              className="form-control"
                              id="newpasswordInput"
                              value={newPassword}
                              onChange={(e) => {
                                setNewPassword(e.target.value);
                                setPasswordErrorSignal(false);
                              }}
                              type={passwordShow ? "text" : "password"}
                              placeholder="Enter new password"
                            />
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                              type="button"
                              id="password-addon"
                              onClick={() => setPasswordShow(!passwordShow)}
                            >
                              <i className="ri-eye-fill align-middle"></i>
                            </button>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <Label
                            htmlFor="confirmpasswordInput"
                            className="form-label"
                          >
                            Confirm Password*
                          </Label>
                          <div className="position-relative">
                            <Input
                              className="form-control"
                              id="confirmpasswordInput"
                              type={confirmPasswordShow ? "text" : "password"}
                              value={confirmPassword}
                              onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setPasswordErrorSignal(false);
                              }}
                              placeholder="Confirm password"
                            />
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                              type="button"
                              id="password-addon"
                              onClick={() =>
                                setConfirmPasswordShow(!confirmPasswordShow)
                              }
                            >
                              <i className="ri-eye-fill align-middle"></i>
                            </button>
                          </div>
                          {passwordErrorSignal && <p>{passwordError}</p>}
                        </Col>
                        <Col lg={12}>
                          <div className="text-end">
                            <button
                              type="submit"
                              onClick={handleChangePassword}
                              className="btn btn-info"
                            >
                              Change Password
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId="3">
                      <form>
                        <div id="newlink">
                          <div id="1">
                            <Row>
                              <Col lg={12}>
                                <div className="mb-3">
                                  <Label
                                    htmlFor="jobTitle"
                                    className="form-label"
                                  >
                                    Job Title
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="jobTitle"
                                    placeholder="Job title"
                                    defaultValue="Lead Designer / Developer"
                                  />
                                </div>
                              </Col>

                              <Col lg={6}>
                                <div className="mb-3">
                                  <Label
                                    htmlFor="companyName"
                                    className="form-label"
                                  >
                                    Company Name
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="companyName"
                                    placeholder="Company name"
                                    defaultValue="Themesbrand"
                                  />
                                </div>
                              </Col>

                              <Col lg={6}>
                                <div className="mb-3">
                                  <label
                                    htmlFor="experienceYear"
                                    className="form-label"
                                  >
                                    Experience Years
                                  </label>
                                  <Row>
                                    <Col lg={5}>
                                      <select
                                        className="form-control"
                                        data-choices
                                        data-choices-search-false
                                        name="experienceYear"
                                        id="experienceYear"
                                      >
                                        <option defaultValue="">
                                          Select years
                                        </option>
                                        <option value="Choice 1">2001</option>
                                        <option value="Choice 2">2002</option>
                                        <option value="Choice 3">2003</option>
                                        <option value="Choice 4">2004</option>
                                        <option value="Choice 5">2005</option>
                                        <option value="Choice 6">2006</option>
                                        <option value="Choice 7">2007</option>
                                        <option value="Choice 8">2008</option>
                                        <option value="Choice 9">2009</option>
                                        <option value="Choice 10">2010</option>
                                        <option value="Choice 11">2011</option>
                                        <option value="Choice 12">2012</option>
                                        <option value="Choice 13">2013</option>
                                        <option value="Choice 14">2014</option>
                                        <option value="Choice 15">2015</option>
                                        <option value="Choice 16">2016</option>
                                        <option value="Choice 17">2017</option>
                                        <option value="Choice 18">2018</option>
                                        <option value="Choice 19">2019</option>
                                        <option value="Choice 20">2020</option>
                                        <option value="Choice 21">2021</option>
                                        <option value="Choice 22">2022</option>
                                      </select>
                                    </Col>

                                    <div className="col-auto align-self-center">
                                      to
                                    </div>

                                    <Col lg={5}>
                                      <select
                                        className="form-control"
                                        data-choices
                                        data-choices-search-false
                                        name="choices-single-default2"
                                      >
                                        <option defaultValue="">
                                          Select years
                                        </option>
                                        <option value="Choice 1">2001</option>
                                        <option value="Choice 2">2002</option>
                                        <option value="Choice 3">2003</option>
                                        <option value="Choice 4">2004</option>
                                        <option value="Choice 5">2005</option>
                                        <option value="Choice 6">2006</option>
                                        <option value="Choice 7">2007</option>
                                        <option value="Choice 8">2008</option>
                                        <option value="Choice 9">2009</option>
                                        <option value="Choice 10">2010</option>
                                        <option value="Choice 11">2011</option>
                                        <option value="Choice 12">2012</option>
                                        <option value="Choice 13">2013</option>
                                        <option value="Choice 14">2014</option>
                                        <option value="Choice 15">2015</option>
                                        <option value="Choice 16">2016</option>
                                        <option value="Choice 17">2017</option>
                                        <option value="Choice 18">2018</option>
                                        <option value="Choice 19">2019</option>
                                        <option value="Choice 20">2020</option>
                                        <option value="Choice 21">2021</option>
                                        <option value="Choice 22">2022</option>
                                      </select>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>

                              <Col lg={12}>
                                <div className="mb-3">
                                  <Label
                                    htmlFor="jobDescription"
                                    className="form-label"
                                  >
                                    Job Description
                                  </Label>
                                  {/* <textarea className="form-control" id="jobDescription"
                                                                    defaultValue=""
                                                                        rows="3"
                                                                        placeholder="Enter description">You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. </textarea> */}
                                </div>
                              </Col>

                              <div className="hstack gap-2 justify-content-end">
                                <Link className="btn btn-info" to="#">
                                  Delete
                                </Link>
                              </div>
                            </Row>
                          </div>
                        </div>
                        <div id="newForm" style={{ display: "none" }}></div>

                        <Col lg={12}>
                          <div className="hstack gap-2">
                            <button type="submit" className="btn btn-info">
                              Update
                            </button>
                            <Link to="#" className="btn btn-primary">
                              Add New
                            </Link>
                          </div>
                        </Col>
                      </form>
                    </TabPane>

                    <TabPane tabId="4">
                      <div className="mb-4 pb-2">
                        <h5 className="card-title text-decoration-underline mb-3">
                          Security:
                        </h5>
                        <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
                          <div className="flex-grow-1">
                            <h6 className="fs-14 mb-1">
                              Two-factor Authentication
                            </h6>
                            <p className="text-muted">
                              Two-factor authentication is an enhanced security
                              meansur. Once enabled, you'll be required to give
                              two types of identification when you log into
                              Google Authentication and SMS are Supported.
                            </p>
                          </div>
                          <div className="flex-shrink-0 ms-sm-3">
                            <Link to="#" className="btn btn-sm btn-primary">
                              Enable Two-facor Authentication
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                          <div className="flex-grow-1">
                            <h6 className="fs-14 mb-1">
                              Secondary Verification
                            </h6>
                            <p className="text-muted">
                              The first factor is a password and the second
                              commonly includes a text with a code sent to your
                              smartphone, or biometrics using your fingerprint,
                              face, or retina.
                            </p>
                          </div>
                          <div className="flex-shrink-0 ms-sm-3">
                            <Link to="#" className="btn btn-sm btn-primary">
                              Set up secondary method
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                          <div className="flex-grow-1">
                            <h6 className="fs-14 mb-1">Backup Codes</h6>
                            <p className="text-muted mb-sm-0">
                              A backup code is automatically generated for you
                              when you turn on two-factor authentication through
                              your iOS or Android Twitter app. You can also
                              generate a backup code on twitter.com.
                            </p>
                          </div>
                          <div className="flex-shrink-0 ms-sm-3">
                            <Link to="#" className="btn btn-sm btn-primary">
                              Generate backup codes
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <h5 className="card-title text-decoration-underline mb-3">
                          Application Notifications:
                        </h5>
                        <ul className="list-unstyled mb-0">
                          <li className="d-flex">
                            <div className="flex-grow-1">
                              <label
                                htmlFor="directMessage"
                                className="form-check-label fs-14"
                              >
                                Direct messages
                              </label>
                              <p className="text-muted">
                                Messages from people you follow
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="form-check form-switch">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="directMessage"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mt-2">
                            <div className="flex-grow-1">
                              <Label
                                className="form-check-label fs-14"
                                htmlFor="desktopNotification"
                              >
                                Show desktop notifications
                              </Label>
                              <p className="text-muted">
                                Choose the option you want as your default
                                setting. Block a site: Next to "Not allowed to
                                send notifications," click Add.
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="form-check form-switch">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="desktopNotification"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mt-2">
                            <div className="flex-grow-1">
                              <Label
                                className="form-check-label fs-14"
                                htmlFor="emailNotification"
                              >
                                Show email notifications
                              </Label>
                              <p className="text-muted">
                                {" "}
                                Under Settings, choose Notifications. Under
                                Select an account, choose the account to enable
                                notifications for.{" "}
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="form-check form-switch">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="emailNotification"
                                />
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mt-2">
                            <div className="flex-grow-1">
                              <Label
                                className="form-check-label fs-14"
                                htmlFor="chatNotification"
                              >
                                Show chat notifications
                              </Label>
                              <p className="text-muted">
                                To prevent duplicate mobile notifications from
                                the Gmail and Chat apps, in settings, turn off
                                Chat notifications.
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="form-check form-switch">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="chatNotification"
                                />
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mt-2">
                            <div className="flex-grow-1">
                              <Label
                                className="form-check-label fs-14"
                                htmlFor="purchaesNotification"
                              >
                                Show purchase notifications
                              </Label>
                              <p className="text-muted">
                                Get real-time purchase alerts to protect
                                yourself from fraudulent charges.
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="form-check form-switch">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="purchaesNotification"
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="card-title text-decoration-underline mb-3">
                          Delete This Account:
                        </h5>
                        <p className="text-muted">
                          Go to the Data & Privacy section of your profile
                          Account. Scroll to "Your data & privacy options."
                          Delete your Profile Account. Follow the instructions
                          to delete your account :
                        </p>
                        <div>
                          <Input
                            type="password"
                            className="form-control"
                            id="passwordInput"
                            placeholder="Enter your password"
                            defaultValue="make@321654987"
                            style={{ maxWidth: "265px" }}
                          />
                        </div>
                        <div className="hstack gap-2 mt-3">
                          <Link to="#" className="btn btn-soft-info">
                            Close & Delete This Account
                          </Link>
                          <Link to="#" className="btn btn-light">
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Profile;

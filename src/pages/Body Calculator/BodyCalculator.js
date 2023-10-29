
import React, { useState } from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link } from 'react-router-dom';
const BodyCalculator = () => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalTitle, setModalTitle] = useState("");

    //BMI
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [BMI, setBMI] = useState("");
    const [BMR, setBMR] = useState("");
    const [Calorie, setCalorie] = useState("");

    const [current, setCurrent] = useState("")

    const toggle = (current, title, content) => {
        setCurrent(current);
        setModalTitle(title);
        setModalContent(content);
        setModal(!modal);
    }
    const modalClose = () => {
        setHeight("");
        setWeight("");
        setAge("");
        setBMI("");
        setBMR("");
        setCalorie("");
    }
    return (
        <div className="page-content">
            <div className="BreadCrumb mt-3">
                <BreadCrumb style={{ width: "98%", marginLeft: "12px" }} />
            </div>
            <div className="row mt-3">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div style={{ height: "15rem" }} className="card">
                        <div className="card-body">
                            <h5 className="card-title">BMI Calculator</h5>
                            <p className="card-text">Calculate your Body Mass Index (BMI)</p>
                            <p className="card-text text-muted">
                                Assess your Body Mass Index (BMI) for a quick overview of your body weight relative to your height. BMI is a simple yet useful measurement that helps you understand if your weight falls within a healthy range for your height. It is a valuable tool for assessing your overall health and making informed decisions about your fitness and well-being.
                            </p>
                            <button onClick={() => toggle("bmi", "BMI Calculator", " Please Enter Your Detail   for BMI Calculation")} className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Calculate</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div style={{ height: "15rem" }} className="card">
                        <div className="card-body">
                            <h5 className="card-title">BMR Calculator</h5>
                            <p className="card-text">Calculate your Basal Metabolic Rate (BMR)</p>
                            <p className="card-text text-muted">
                                Discover your Basal Metabolic Rate (BMR) to understand the number of calories your body needs to maintain basic bodily functions at rest. BMR estimation is essential for planning your calorie intake and achieving your health and fitness goals effectively.
                            </p>
                            <button onClick={() => toggle("bmr", "BMR Calculator", "Please Enter Your Detail for BMR Calculation")} className="btn btn-dark">Calculate</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mt-3">
                    <div style={{ height: "15rem" }} className="card">
                        <div className="card-body">
                            <h5 className="card-title">Calorie Calculator</h5>
                            <p className="card-text">Calculate your Total Daily Energy Expenditure (TDEE)</p>
                            <p className="card-text text-muted">
                                Discover your Total Daily Energy Expenditure (TDEE) to understand the number of calories your body needs to maintain its current weight. TDEE estimation is essential for planning your calorie intake and achieving your health and fitness goals effectively.
                            </p>
                            <button onClick={() => toggle("calorie", "Calorie Calculator", " Please Enter Your Detail for Calorie Calculation")} className="btn btn-dark">Calculate</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal backdrop="static" isOpen={modal} onClosed={(modalClose)} toggle={() => toggle(modalTitle, modalContent)} >
                <ModalHeader toggle={() => toggle(modalTitle, modalContent)}>{modalTitle}</ModalHeader>
                <ModalBody>
                    {modalContent}
                    <Row className='mt-3'>
                        {current === "bmi" ? (
                            <>
                                <Col lg={6}>
                                    <Label htmlFor="height" className="form-label">
                                        Height (in meters)
                                    </Label>
                                    <Input
                                        name="height"
                                        id="height"
                                        className="form-control"
                                        placeholder="Enter Height"
                                        value={height}
                                        type="number"
                                        onChange={(e) => setHeight(e.target.value)}
                                    />
                                </Col>
                                <Col lg={6}>
                                    <Label htmlFor="weight" className="form-label">
                                        Weight (in kgs)
                                    </Label>
                                    <Input
                                        name="weight"
                                        id="weight"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter Weight"
                                        type="number"
                                    />
                                </Col>
                                <Col className='mt-2' lg={6}>
                                    <Label htmlFor="bmi" className="form-label">
                                        BMI
                                    </Label>
                                    <Input
                                        name="bmi"
                                        id="bmi"
                                        disabled
                                        className="form-control"
                                        placeholder="Your BMI"
                                        type="number"
                                        value={BMI}
                                    />
                                </Col>
                                {BMI && (
                                    <>
                                        <p className='mt-2'>The Calculated BMI is: <strong>{BMI}</strong></p>
                                        <p className='mt-2'>You Are Currently: {BMI < 18.5 ? "Underweight" : BMI >= 18.5 && BMI < 25 ? "Normal weight" : BMI >= 25 && BMI < 30 ? "Overweight" : "Obesity"}</p>
                                    </>
                                )}
                            </>
                        ) : current === "bmr" ? (
                            <>
                                <Col lg={6}>
                                    <Label htmlFor="height" className="form-label">
                                        Height (in meters)
                                    </Label>
                                    <Input
                                        name="height"
                                        id="height"
                                        className="form-control"
                                        placeholder="Enter Height"
                                        value={height}
                                        type="number"
                                        onChange={(e) => setHeight(e.target.value)}
                                    />
                                </Col>
                                <Col lg={6}>
                                    <Label htmlFor="weight" className="form-label">
                                        Weight (in kgs)
                                    </Label>
                                    <Input
                                        name="weight"
                                        id="weight"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter Weight"
                                        type="number"
                                    />
                                </Col>
                                <Col lg={12}>
                                    <Label htmlFor="age" className="form-label">
                                        Age
                                    </Label>
                                    <Input
                                        name="age"
                                        id="age"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter Age"
                                        type="number"
                                    />
                                </Col>
                                <Col className='mt-2' lg={6}>
                                    <Label htmlFor="bmi" className="form-label">
                                        BMR
                                    </Label>
                                    <Input
                                        name="bmr"
                                        id="bmr"
                                        disabled
                                        className="form-control"
                                        placeholder="Your BMR"
                                        type="number"
                                        value={BMR}
                                    />
                                </Col>
                                {BMR && (
                                    <>
                                        <p className='mt-2'>The Calculated BMR is: <strong>{BMR}</strong></p>
                                        <p className='mt-2'>Your BMR is: &nbsp;
                                            {BMR < 1500 ? "Very Low" : BMR >= 1500 && BMR < 1800 ? "Low" : BMR >= 1800 && BMR < 2000 ? "Moderate" : BMR >= 2000 && BMR < 2300 ? "High" : "Very High"}
                                        </p>
                                    </>
                                )}


                            </>
                        ) : (
                            <>
                                <Col lg={6}>
                                    <Label htmlFor="height" className="form-label">
                                        Height (in meters)
                                    </Label>
                                    <Input
                                        name="height"
                                        id="height"
                                        className="form-control"
                                        placeholder="Enter Height"
                                        value={height}
                                        type="number"
                                        onChange={(e) => setHeight(e.target.value)}
                                    />
                                </Col>
                                <Col lg={6}>
                                    <Label htmlFor="weight" className="form-label">
                                        Weight (in kgs)
                                    </Label>
                                    <Input
                                        name="weight"
                                        id="weight"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter Weight"
                                        type="number"
                                    />
                                </Col>
                                <Col lg={12}>
                                    <Label htmlFor="age" className="form-label">
                                        Age
                                    </Label>
                                    <Input
                                        name="age"
                                        id="age"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter Age"
                                        type="number"
                                    />
                                </Col>
                                <Col className='mt-2' lg={7}>
                                    <Label htmlFor="calorie" className="form-label">
                                        Total Daily Expenditure (TDEE)
                                    </Label>
                                    <Input
                                        name="calorie"
                                        id="calorie"
                                        disabled
                                        className="form-control"
                                        placeholder="Your Total Daily Expenditure (TDEE)"
                                        type="number"
                                        value={Calorie}
                                    />
                                </Col>
                                {Calorie && (
                                    <>
                                        <p className='mt-2'>The Calculated Total Daily Expenditure (TDEE) is: <strong>{Calorie}</strong></p>
                                        <p className='mt-2'>Your TDEE is: &nbsp;
                                            {Calorie < 1500 ? "Very Low" : Calorie >= 1500 && Calorie < 1800 ? "Low" : Calorie >= 1800 && Calorie < 2000 ? "Moderate" : Calorie >= 2000 && Calorie < 2300 ? "High" : "Very High"}
                                        </p>
                                    </>
                                )}

                            </>
                        )}



                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => {
                            if (current === "bmi") {
                                const bmi = weight / Math.pow(height, 2);
                                sessionStorage.setItem("bmi",Math.floor(bmi));
                                setBMI(Math.floor(bmi));
                            } else if (current === "bmr") {
                                const bmr = 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age);
                                sessionStorage.setItem("bmr",Math.floor(bmr));
                                setBMR(Math.floor(bmr))
                            } else {
                                const calorie = (10 * weight) + (6.25 * height * 100) - (5 * age) + 5;
                                sessionStorage.setItem("calorie",calorie);
                                setCalorie(calorie)
                            }
                        }}
                    >
                        Calculate
                    </Button>
                    <Button color="secondary" onClick={() => toggle(modalTitle, modalContent)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div >
    )
}

export default BodyCalculator
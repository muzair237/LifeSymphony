import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Row } from "reactstrap";

const BreadCrumb = ({ style }) => {
  const location = useLocation();
  const currentMenuItem = localStorage.getItem("iscurrentState");

  const getPageTitleFromLocation = (pathname) => {
    const formattedTitle = pathname
      .replace(/^\//, "") // Remove leading slash if present
      .replace(/-/g, " ") // Replace dashes with spaces globally
      .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase()); // Capitalize first letters of words

    return formattedTitle;
  };

  return (
    <React.Fragment>
      <Row style={style}>
        <Col xs={12}>
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">
              {getPageTitleFromLocation(location.pathname)}
            </h4>

            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link to="#">{currentMenuItem}</Link>
                </li>
                <li className="breadcrumb-item active">
                  {" "}
                  {getPageTitleFromLocation(location.pathname)}
                </li>
              </ol>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BreadCrumb;
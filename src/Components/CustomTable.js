import React, { useCallback, useMemo, useState } from "react";
import { Card, Table, CardBody, Button } from "reactstrap";
import Loader from "./Common/Loader";
import { ToastContainer, toast } from "react-toastify";
import TableContainer from "./Common/TableContainer";
import { Link } from "react-router-dom";

function CustomTable({
  employees,
  setEmployee,
  setEmployees,
  setEmployeeModal,
  toBeDeleted,
  setToBeDeleted,
}) {
  const [allChecked, setAllChecked] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      //   setContact(null);
    } else {
      //   setModal(true);
      // setTag([]);
    }
  }, [modal]);

  const deleteCheckbox = (id) => {
    const ele = document.querySelectorAll(".contactCheckBox:checked");
    console.log("id", id);
    ele.length > 0
      ? setIsMultiDeleteButton(true)
      : setIsMultiDeleteButton(false);
    setSelectedCheckBoxDelete(ele);
  };
  const handleContactClick = useCallback(
    (arg) => {
      const contact = arg;
    },
    [toggle]
  );

  const checkedAll = useCallback(() => {
    const checkall = document.getElementById("checkBoxAll");
    const ele = document.querySelectorAll(".contactCheckBox");

    if (checkall.checked) {
      ele.forEach((ele) => {
        ele.checked = true;
        setAllChecked(true);
      });
      const arr = [];
      employees.forEach((value) => {
        arr.push(value._id);
      });
      setToBeDeleted(arr);
    } else {
      ele.forEach((ele) => {
        ele.checked = false;
        setAllChecked(false);
      });
      setToBeDeleted([]);
    }

    // deleteCheckbox();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: (
          <input
            type="checkbox"
            id="checkBoxAll"
            className="form-check-input"
            onClick={() => checkedAll()}
          />
        ),

        Cell: (cellProps) => {
          const handleCheckboxChange = () => {
            const isChecked = toBeDeleted.includes(cellProps.row.original._id);
            if (isChecked) {
              setToBeDeleted((prevToBeDeleted) =>
                prevToBeDeleted.filter(
                  (id) => id !== cellProps.row.original._id
                )
              );
            } else {
              setToBeDeleted((prevToBeDeleted) => [
                ...prevToBeDeleted,
                cellProps.row.original._id,
              ]);
            }
            // deleteCheckbox();
          };

          return (
            <input
              type="checkbox"
              className="contactCheckBox form-check-input"
              value={cellProps.row.original}
              onBlur={() => {
                setToBeDeleted((prevToBeDeleted) => [
                  ...prevToBeDeleted,
                  cellProps.row.original._id,
                ]);
              }}
              onChange={handleCheckboxChange}
            />
          );
        },
        id: "#",
      },
      {
        Header: "Employee",
        accessor: "firstName",
        filterable: false,
        Cell: (cellProps) => {
          return (
            <React.Fragment>
              <div className="d-flex ">
                <div className="flex-shrink-0">
                  {
                    cellProps.row.original.photo ? (
                      <img
                        src={cellProps.row.original.photo}
                        alt=""
                        className="avatar-xxs rounded-circle"
                      />
                    ) : (
                      <div className="flex-shrink-0 avatar-xs me-2">
                        <div className="avatar-title bg-soft-success text-success rounded-circle fs-13">
                          {cellProps.row.original.firstName.charAt(0)}
                        </div>
                      </div>
                    )
                    // <img src={dummyImg} alt="" className="avatar-xxs rounded-circle" />
                  }
                </div>
                <div className="flex-grow-1 ms-2 name">
                  <p style={{ color: "blue" }}>
                    username : {cellProps.row.original?.firstName}{" "}
                    {cellProps.row.original?.lastName}
                  </p>
                  <p>Email : {cellProps.row.original?.email}</p>
                  <p>Gender : {cellProps.row.original?.gender}</p>
                  <p>Date of Birth : {cellProps.row.original?.DOB}</p>
                  <p>Shift : {cellProps.row.original?.time_slot?.slot_Name}</p>
                </div>
              </div>
            </React.Fragment>
          );
        },
      },
      {
        Header: "Company",
        accessor: "company",
        filterable: false,
        Cell: (cellProps) => {
          return (
            <React.Fragment>
              <div className="d-flex ">
                <div className="flex-grow-1 ms-2 name">
                  <p style={{ fontStyle: "bold" }}>
                    Company : {cellProps.row.original?.company}
                  </p>
                  <p>Branch : {cellProps.row.original?.branch}</p>
                  <p>Designation : {cellProps.row.original?.designation}</p>
                </div>
              </div>
            </React.Fragment>
          );
        },
      },
      {
        Header: "Contact",
        accessor: "email",
        filterable: false,
        Cell: (cellProps) => {
          return (
            <React.Fragment>
              <div className="d-flex ">
                <div className="flex-grow-1 ms-2 name">
                  <p>
                    <i class="ri-mail-line"></i> :{" "}
                    {cellProps.row.original?.email}
                  </p>
                  <p>
                    <i class="ri-phone-line"></i> :{" "}
                    {cellProps.row.original?.mobile}
                  </p>
                  <p>
                    <i class="ri-map-pin-line"></i> :{" "}
                    {cellProps.row.original?.current_address}
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
        },
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <ul className="list-inline hstack gap-2 mb-0">
              <li className="list-inline-item" title="View">
                <Link
                  to="#"
                  onClick={() => {
                    const holidayData = cellProps.row.original;
                    setInfo(holidayData);
                  }}
                >
                  <i className="ri-eye-fill align-bottom text-muted"></i>
                </Link>
              </li>
              <li className="list-inline-item" title="Edit">
                <Link
                  className="edit-item-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    const value = cellProps.row.original;
                    const data = {
                      ...value,
                      designation: {
                        label: value.designation,
                        value: value.designation,
                      },
                      branch: {
                        label: value.branch,
                        value: value.branch,
                      },
                    };

                    setEmployee(data);
                    setEmployeeModal(true);
                  }}
                >
                  <i className="ri-pencil-fill align-bottom text-muted"></i>
                </Link>
              </li>
              <li className="list-inline-item" title="Delete">
                <Link
                  className="remove-item-btn"
                  onClick={() => {
                    const { _id } = cellProps.row.original;
                    setEmployees((value) =>
                      value.filter((data) => data._id !== _id)
                    );
                  }}
                  to="#"
                >
                  <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                </Link>
              </li>
            </ul>
          );
        },
      },
    ],
    [handleContactClick, checkedAll]
  );
  return (
    <React.Fragment>
      <div>
        <Card id="contactList" style={{ width: "98%" }}>
          <CardBody className="pt-0">
            <div>
              {employees?.length >= 0 ? (
                <TableContainer
                  columns={columns}
                  data={employees || []}
                  setInfo={() => {}}
                  isGlobalFilter={true}
                  isContactsPageFilter={true}
                  isFooter={true}
                  customPageSize={8}
                  className="custom-header-css"
                  divClass="table-responsive table-card mb-0"
                  tableClass="align-middle table-nowrap"
                  theadClass="table-light"
                  handleContactClick={handleContactClick}
                  isContactsFilter={false}
                  isSearchInput={true}
                  SearchPlaceholder="Search for name"
                />
              ) : (
                <Loader />
              )}
            </div>
            {/* <ToastContainer closeButton={false} limit={1} /> */}
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default CustomTable;

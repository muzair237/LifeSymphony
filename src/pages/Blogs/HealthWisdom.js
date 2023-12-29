import React, { useState, useEffect } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../slices/blogs/thunk";

const Blogs = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const blogs = useSelector((state) => state?.Blogs?.blogs);

  const divStyle = {
    opacity: isLoaded ? 1 : 0, // Apply opacity based on the loaded state
    transform: `translateY(${isLoaded ? 0 : 20}px)`, // Apply translateY based on the loaded state
    transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out", // Add transitions for opacity and transform
  };

  function formatCreatedAt(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString)
    );
  }

  useEffect(() => {
    dispatch(getBlogs());

    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  document.title = "LifeSymphony | Health Wisdom";

  return (
    <div className="page-content">
      <div className="BreadCrumb mt-3">
        <BreadCrumb style={{ width: "98%", marginLeft: "12px" }} />
      </div>
      <header style={divStyle} className="py-0 bg-light border-bottom mb-4">
        <div className="container">
          <div className="text-center my-5 pt-3">
            <h1 className="fw-bolder">Welcome to Health Wisdom Section!</h1>
            <p className="lead mb-0">
              Embark on a journey of daily inspiration for a healthier you! Our{" "}
              <strong>Health Wisdom</strong> is your go-to destination for
              curated articles, insightful tips, and motivational stories
              focused on enhancing your well-being. Dive into a wealth of
              information that resonates with your quest for a healthier
              lifestyle. Let these blogs be your guide, providing reminders to
              prioritize self-care, embrace positivity, and make choices that
              contribute to your overall well-being. Explore a wealth of wisdom
              and knowledge to inspire positive change in your life.
            </p>
            <hr />
          </div>
        </div>
      </header>
      <div style={divStyle} className="row">
        {blogs &&
          blogs?.length > 0 &&
          blogs?.map((item, index) => {
            return (
              <div key={index} className="col-lg-6">
                <div
                  style={{ border: "1px solid red" }}
                  className="card mb-4 my-2"
                >
                  <div className="card-body">
                    <div className="small text-muted">
                      {formatCreatedAt(item?.createdAt)}
                    </div>
                    <h2 className="card-title h3">{item?.title}</h2>
                    <p className="card-text">{item?.description}</p>
                    <div className="small text-muted">{item?.author}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <h2 className="card-title text-center h3">Yay! you have seen it all!</h2>
    </div>
  );
};

export default Blogs;

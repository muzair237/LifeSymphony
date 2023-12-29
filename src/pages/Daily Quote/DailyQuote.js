import React, { useState, useEffect } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "../../slices/quotes/thunk";

const DailyQuote = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const quote = useSelector((state) => state.Quote.quote);

  const cardStyle = {
    width: "25rem",
    border: "1px solid red",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    opacity: isLoaded ? 1 : 0, // Apply opacity based on the loaded state
    transform: `translateY(${isLoaded ? 0 : 20}px)`, // Apply translateY based on the loaded state
    transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out", // Add transitions for opacity and transform
  };
  const divStyle = {
    opacity: isLoaded ? 1 : 0, // Apply opacity based on the loaded state
    transform: `translateY(${isLoaded ? 0 : 20}px)`, // Apply translateY based on the loaded state
    transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out", // Add transitions for opacity and transform
  };

  useEffect(() => {
    dispatch(getQuote());

    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="page-content">
      <div className="BreadCrumb mt-3">
        <BreadCrumb style={{ width: "98%", marginLeft: "12px" }} />
      </div>
      <div style={divStyle} className="row mt-3">
        <div className="welcomeText text-center">
          <h4>Welcome to Daily Quote Section!</h4>
          <p className="fs-5">
            Explore a daily dose of inspiration for your well-being! Our Daily
            Quote Section brings you a curated collection of insightful and
            motivational health quotes. Discover words that resonate with your
            journey to a healthier lifestyle. Let these quotes serve as
            reminders to prioritize self-care, embrace positivity, and make
            choices that contribute to your overall well-being.{" "}
          </p>
        </div>
      </div>
      <hr />
      <div className="row" style={{ margin: "50px 0 0 420px" }}>
        <div className="card" style={cardStyle}>
          <i className="bx bxs-quote-alt-left mt-1 fs-5" />
          <p className="text-center fs-5 fw-semibold mt-2">{quote?.quote}</p>
          <p className="text-center">—{quote?.author}</p>
          <i className="bx bxs-quote-alt-right fs-5 mb-1 text-end" />
        </div>
      </div>
    </div>
  );
};

export default DailyQuote;

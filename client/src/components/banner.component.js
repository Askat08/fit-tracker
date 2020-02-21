import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
// import { Carousel } from "react-bootstrap";
import banner1 from "../img/banner1.jpg";
import banner2 from "../img/banner2.jpg";
import banner3 from "../img/banner3.jpg";

const Banner = props => {
  return (
    <div className="container-expand-md mt-5">
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={banner1}
              className="d-block w-100"
              alt="banner1"
              style={{ objectFit: "cover", height: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={banner2}
              className="d-block w-100"
              alt="banner2"
              style={{ objectFit: "cover", height: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={banner3}
              className="d-block w-100"
              alt="banner3"
              style={{ objectFit: "cover", height: "500px" }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container bd-highlight mt-5 mb-5">
        <div className="row mt-5">
          <div className="col-12 col-md-6  mt-5 mb-5">
            <div className="mb-5">
              <FontAwesomeIcon icon={faInfoCircle} size="2x" />
              <h3 className="d-inline ml-3">What is FitTrack App?</h3>
            </div>
            <p className="lead">
              FitTrack App is designed to replace your paper workout journal. It
              combines the best features found in other apps with a minimalistic
              approach and a clean, easy-to-use interface. Give it a try. We
              know you'll love it!
            </p>
          </div>

          <div className="col-12 col-md-6 mt-5">
            <div className="mb-5">
              <FontAwesomeIcon icon={faHeart} size="2x" />
              <h3 className="d-inline ml-3">Why people love it</h3>
            </div>
            <p className="lead">
              We've been able to put together a great combination of simplicity,
              usability, and features. Because of this, FitTrack has become one
              of the most popular workout tracking apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Link } from "react-router-dom";
export default function BreadCrumb(props) {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb breadcrumb2">
          <li className="breadcrumb-item">
            <Link to="/home">
              <i className="fa fa-home" aria-hidden="true" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">{props.page}</li>
        </ol>
      </nav>
    </>
  );
}

import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = ({ title, amount, description, onClick }) => {
    return (
        <div className="card text-center box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{title}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">
                    ${amount} <small className="text-muted">/ mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <p>{description}</p>
                </ul>
                <button
                    type="button"
                    className="btn btn-lg btn-block btn-outline-primary"
                    onClick={onClick}
                >
                    Buy
                </button>
            </div>
        </div>
    );
};

// Card.propTypes = {
//     src: PropTypes.string,
//     alt: PropTypes.string,
//     title: PropTypes.string,
//     date: PropTypes.string,
// };

export default Card;

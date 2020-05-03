import React, { Component } from "react";
import Card from "../components/Card/Card";
import Plan from "../data/plans";
import Modal from '../components/Modal/Modal'

export class PricingPlan extends Component {
    state = {
        isModalshown: true,
        isToggled: false,
    };

    buyPlanHandler = (title) => {
        let modal = <Modal modal={true} planTitle={title} />
        return modal
    }
    render() {
        const card = Plan.map((data) => (
            <div className="col-4" key={data.id}>
                <Card
                    title={data.title}
                    amount={data.amount}
                    description={data.description}
                    onClick={() => this.buyPlanHandler(data.title)}
                />
            </div>
        ));


        return (
            <div className="container">
                <div className="row">
                    {card}
                </div>
            </div>
        );
    }
}

export default PricingPlan;

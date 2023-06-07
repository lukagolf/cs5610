import React from "react";

const TuitSummaryItem = (
    { tuit }
) => {
    return (
        <li className="list-group-item">
            {/* <pre>{JSON.stringify(tuit, null, 2)}</pre> */}
            <div className="row">
                <div className="col-10">
                    <div>{tuit.username} . {tuit.time}</div>
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`} />
                </div>
            </div>
        </li>
    );
};
export default TuitSummaryItem;
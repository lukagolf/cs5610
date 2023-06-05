import React from "react";
import TuitStats from "./tuit-stats";
import "./index.css"
import "../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";

const TuitItem = (
    { tuit }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="mb-3">
                <img src={`/images/${tuit.image}`} alt={tuit.userName} className="wd-circular-icon" />
                <i className="bi bi-x-lg float-end"
                    onClick={() => deleteTuitHandler(tuit._id)}></i>
                <div className="fw-bold">{tuit.userName} <FontAwesomeIcon icon={faCircleCheck} />&nbsp;&nbsp;
                    <span className="fw-normal wd-indent-text">{tuit.handle} &#183; {tuit.time}</span>
                </div>
                <div className="wd-tuit-textbox">
                    {tuit.tuit}
                </div>
            </div>
            <div className="wd-tuit-textbox">
                <TuitStats key={tuit._id}
                    tuit={tuit} />
            </div>
        </li>
    );
};
export default TuitItem;
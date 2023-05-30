import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faArrowsRotate, faShare, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { likeTuit } from "../reducers/tuits-reducer";

const TuitStats = (
    { tuit }
) => {
    const dispatch = useDispatch();
    var likeTuiterHandler = (id) => {
        dispatch(likeTuit(id));
    }

    return (
        <div className="row">
            <div className="col">
                <FontAwesomeIcon icon={faComment} />
                &nbsp;&nbsp;{tuit.replies}
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faArrowsRotate} />
                &nbsp;&nbsp;{tuit.retuits}
            </div>
            <div className="col">
                <FontAwesomeIcon
                    className="wd-heart-icon" icon={faHeart} color={tuit.liked ? "red" : "lightgray"}
                    onClick={() => likeTuiterHandler(tuit._id)}
                />
                &nbsp;{tuit.likes}
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faShare} />
            </div>
        </div>
    );
};
export default TuitStats;
import React from "react";
import TuitSummaryItem from "./tuit-summary-item";
import { useSelector } from "react-redux";

const TuitSummaryList = () => {
  const { tuits } = useSelector(state => state.tuits)
  return (
    <div>
    <ul className="list-group">
      {
        tuits.map(tuit =>
          <TuitSummaryItem
            key={tuit._id} tuit={tuit} />)
      }
    </ul>
    </div>
  );
};
export default TuitSummaryList;
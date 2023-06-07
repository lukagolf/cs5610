import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
  const { tuits, loading } = useSelector(state => state.tuits)

  return (
    <ul className="list-group">
      {loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }

      {
        tuits.map(tuit =>
          <TuitItem
            key={tuit._id} tuit={tuit} />)
      }
    </ul>
  );
};
export default TuitsList;
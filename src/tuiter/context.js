import React, {useEffect} from "react";
import { findTuitsThunk } from "./services/tuits-thunks";
import { useDispatch } from "react-redux";

function TuiterContext({children}) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(findTuitsThunk())
    }, []);
  return(children)
}

export default TuiterContext;
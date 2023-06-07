import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import TuitsList from "../tuits/tuits-list";
import { findTuitsThunk } from "../services/tuits-thunks";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(findTuitsThunk())
  // }, []);
 return(
   <>
     <h4>Home</h4>
     <WhatsHappening/>
     <TuitsList/>
   </>
 );
};
export default HomeScreen;
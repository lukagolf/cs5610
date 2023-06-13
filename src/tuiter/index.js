import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen/index";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import WhoToFollowList from "./who-to-follow-list/index";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import TuiterContext from "./context";
import ProtectedRoute from "./services/protected-route";
const store = configureStore({
    reducer: {
        who: whoReducer, tuits: tuitsReducer,
        user: authReducer
    },
});


function Tuiter() {
    return (
        <Provider store={store}>
            <TuiterContext>
                <div>
                    <Nav />
                    <div className="row mt-2">
                        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                            <NavigationSidebar active="home" />
                        </div>
                        <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                            <Routes>
                                <Route path="/" element={<HomeScreen />} />
                                <Route path="/home" element={<HomeScreen />} />
                                <Route path="/explore" element={<ExploreScreen />} />
                                <Route path="/bookmarks" element={<BookmarksScreen />} />
                                <Route path="/login" element={<LoginScreen />} />
                                <Route path="/register" element={<RegisterScreen />} />
                                <Route path="/profile" element={
                                    <ProtectedRoute>
                                        <ProfileScreen />
                                    </ProtectedRoute>} />
                            </Routes>
                        </div>
                        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                            <WhoToFollowList />
                        </div>
                    </div>
                </div>
            </TuiterContext>
        </Provider>
    );
}
export default Tuiter;
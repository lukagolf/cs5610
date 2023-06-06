import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faMinusCircle }
    from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
    const icons = [faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faMinusCircle];

    return (
        <div className="list-group">
            <Link className={`list-group-item text-capitalize ${active === "home" ? "active" : ""}`} to={"/tuiter/home"}>
                <FontAwesomeIcon className="pe-2" icon={faHome} />
                <span className="d-none d-xl-inline">{"home"}</span>
            </Link>
            <Link className={`list-group-item text-capitalize ${active === "explore" ? "active" : ""}`} to={"/tuiter/explore"}>
                <FontAwesomeIcon className="pe-2" icon={faHashtag} />
                <span className="d-none d-xl-inline">{"explore"}</span>
            </Link>
            <Link className={`list-group-item text-capitalize ${active === "notifications" ? "active" : ""}`} to={"/tuiter/notifications"}>
                <FontAwesomeIcon className="pe-2" icon={faBell} />
                <span className="d-none d-xl-inline">{"notifications"}</span>
            </Link>
            <Link className={`list-group-item text-capitalize ${active === "messages" ? "active" : ""}`} to={"/tuiter/messages"}>
                <FontAwesomeIcon className="pe-2" icon={faEnvelope} />
                <span className="d-none d-xl-inline">{"messages"}</span>
            </Link>
            <Link className={`list-group-item text-capitalize ${active === "bookmarks" ? "active" : ""}`} to={"/tuiter/bookmarks"}>
                <FontAwesomeIcon className="pe-2" icon={faBookmark} />
                <span className="d-none d-xl-inline">{"bookmarks"}</span>
            </Link>
            <Link className={`list-group-item text-capitalize ${active === "lists" ? "active" : ""}`} to={"/tuiter/lists"}>
                <FontAwesomeIcon className="pe-2" icon={faList} />
                <span className="d-none d-xl-inline">{"lists"}</span>
            </Link>
            {!currentUser && <Link className={`list-group-item text-capitalize ${active === "login" ? "active" : ""}`} to="/tuiter/login">
                <FontAwesomeIcon className="pe-2" icon={faList} />
                <span className="d-none d-xl-inline">{"login"}</span>
            </Link>
            }
            {!currentUser && <Link className={`list-group-item text-capitalize ${active === "register" ? "active" : ""}`} to="/tuiter/register">
                <FontAwesomeIcon className="pe-2" icon={faList} />
                <span className="d-none d-xl-inline">{"register"}</span>
            </Link>
            }
            {currentUser && <Link className={`list-group-item text-capitalize ${active === "profile" ? "active" : ""}`} to="/tuiter/profile">
                <FontAwesomeIcon className="pe-2" icon={faUser} />
                <span className="d-none d-xl-inline">{"profile"}</span>
            </Link>
            }
            <Link className={`list-group-item text-capitalize ${active === "more" ? "active" : ""}`} to={"/tuiter/more"}>
                <FontAwesomeIcon className="pe-2" icon={faMinusCircle} />
                <span className="d-none d-xl-inline">{"more"}</span>
            </Link>
            {/* {links.map((link, index) =>
                <Link key={index} to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                    <FontAwesomeIcon className="pe-2" icon={icons[index]} />
                    <span className="d-none d-xl-inline">{link}</span>
                </Link>
            )} */}
        </div>
    );
};

export default NavigationSidebar;

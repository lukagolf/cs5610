import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faMinusCircle }
    from '@fortawesome/free-solid-svg-icons';

import { Link, useLocation } from "react-router-dom";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
    const icons = [faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faMinusCircle];

    return (
        <div className="list-group">
            {links.map((link, index) =>
                <Link key={index} to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                    <FontAwesomeIcon className="pe-2" icon={icons[index]} />
                    <span className="d-none d-xl-inline">{link}</span>
                </Link>
            )}
        </div>
    );
};

export default NavigationSidebar;

import {Link, useLocation} from 'react-router';
import logo from '/harverestChonkyWeb.svg'

interface HeaderItem {
    faIcon: string,
    path: string,
}

export const ROUTE_HOME = "/";
export const ROUTE_WORK = "/work";
export const ROUTE_PROJECT = "/projects";
export const ROUTE_ABOUT = "/whodis";

const headerItems: HeaderItem[] = [
    { faIcon: "fa fa-briefcase", path: ROUTE_WORK},
    { faIcon: "fa fa-house-laptop", path: ROUTE_PROJECT},
    { faIcon: "fa fa-person-circle-question", path: ROUTE_ABOUT},
]

export default function Header() {
    const location = useLocation();

    const renderHeaderItem = (headerItem: HeaderItem) => {
        return <Link
            key={headerItem.path}
            className={"headerItem tinyBacklit" + 
                (location.pathname === headerItem.path ? " headerItemActive" : "")}
            to={headerItem.path}
        >
            <i className={headerItem.faIcon}/>
        </Link>;
    }
    return <>
        <div className="header">
            <span>
                <Link to={ROUTE_HOME} className='homeButton tinyBacklit'>
                    <img className="headerLogo" src={logo}/>
                </Link>
            </span>
            <span className="headerButtonContainer">
                {headerItems.map(item => renderHeaderItem(item))}
            </span>
        </div>
        <div className="headerSpacer"/>
    </>;
}
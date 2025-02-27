import {Link, useLocation} from 'react-router';
import logo from '/harverestChonkyWeb.svg'

interface HeaderItem {
    faIcon: string,
    path: string,
}

const headerItems: HeaderItem[] = [
    { faIcon: "fa fa-briefcase", path: "/work"},
    { faIcon: "fa fa-house-laptop", path: "/projects"},
    { faIcon: "fa fa-person-circle-question", path: "/whodis"},
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
                <Link to="/" className='homeButton tinyBacklit'>
                    <img className="headerLogo" src={logo}/>
                </Link>
            </span>
            <span className="floatRight">
                {headerItems.map(item => renderHeaderItem(item))}
            </span>
        </div>
        <div className="headerSpacer"/>
    </>;
}
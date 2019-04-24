import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { navs } from '../ReusableComponents/NavLinks';
import './navmenu.scss';
export interface INavMenuProps extends RouteComponentProps {
    closeMenu: () => void;
}

export const NavMenuImpl = (props: INavMenuProps) => {

    const handleNavClick = (link: string) => {
        const { history: { push }, closeMenu } = props;
        push(`/${link}`);
    };

    const renderNav = (link: string, navNumber: number) =>
        <div className={`nav-link ${link}-nav-link`} onClick={() => handleNavClick(link)}>
            <div className="nav-num-container">0{navNumber}</div>
            <div className="nav-label-container">{link.toUpperCase()}</div>
        </div>;

    return <div className="nav-menu-container">
        <div className="nav-links-container">
            {navs.map((navLink, index) => renderNav(navLink, (index + 1)))}
        </div>
    </div>;
};

export const NavMenu = withRouter(NavMenuImpl);

import * as React from 'react';
import './navlinks.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { setFirstLetterCapital } from '../../utilities/generalUtils';

export interface INavLinksProps extends RouteComponentProps {
    style?: React.CSSProperties;
    className?: string;
}

export const navs = ['work', 'about', 'contact'];

export const NavLinksImpl = (props: INavLinksProps) => {

    const { location, style, className } = props;

    const renderNavLinks = () => navs.map(nav => <Link
        className={`${nav}-nav nav-link`}
        to={`/${nav}`}
        style={{ opacity: location.pathname.includes(nav) ? 1 : 0.2 }}
    >
        {nav.toUpperCase()}
    </Link>);

    return <nav className={`nav-links-container ${className}`} {...{ style }}>
        {renderNavLinks()}
    </nav>;
};

export const NavLinks = withRouter(NavLinksImpl);

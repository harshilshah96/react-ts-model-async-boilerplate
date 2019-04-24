import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../ReusableComponents/Logo';
import { HamMenu } from '../ReusableComponents/HamMenu';
import { NavLinks } from '../ReusableComponents/NavLinks';
import { BackButton } from '../ReusableComponents/BackButton';
import './nav.scss';
import { CloseButton } from '../ReusableComponents/CloseButton';

export interface INavBarProps {
    hasMenu: boolean;
    openMenu?: () => void;
    closeMenu?: () => void;
    isMenuOpen?: boolean;
}

export function NavBar(props: INavBarProps) {

    const { hasMenu, openMenu, closeMenu, isMenuOpen } = props;
    return <div className="nav-container">
        <div className="nav-content">
            <Logo style={{ flex: 1 }} />
            {hasMenu ?
                <React.Fragment>
                    {
                        isMenuOpen ?
                            <CloseButton className="nav-close" onClick={closeMenu} /> :
                            <HamMenu className="nav-ham" onClick={openMenu} />
                    }
                    <NavLinks className="nav-links" />
                </React.Fragment> : <BackButton />}
        </div>
    </div>;
};

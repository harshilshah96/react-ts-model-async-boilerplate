import * as React from 'react';
import { NavBar } from '../Nav';
import './basepage.scss';
import { NavMenu } from '../Nav/NavMenu';
export interface IBasePageProps {
    hasMenu?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export interface IHomeState {
    isMenuOpen: boolean;
}

export class BasePage extends React.Component<IBasePageProps, IHomeState> {

    state = {
        isMenuOpen: false,
    };

    openMenu = () => this.setState({ isMenuOpen: true });
    closeMenu = () => this.setState({ isMenuOpen: false });

    render() {
        const { props: { className, children, style, hasMenu },
            state: { isMenuOpen },
            openMenu, closeMenu
        } = this;
        return (<div
            className={`page ${className || ``}`}
            style={{
                ...styles.basePage,
                ...style,
            }}
        >
            <NavBar hasMenu={hasMenu} {...{ openMenu, closeMenu, isMenuOpen }} />
            <div className="layout-children">
                {!isMenuOpen ? children : <NavMenu {...{ closeMenu }} />}
            </div>
        </div>);
    }
}

const styles = {
    basePage: {
        display: 'flex',
        flexDirection: 'column' as any,
    }
};

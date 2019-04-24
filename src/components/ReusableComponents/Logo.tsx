import * as React from 'react';
import './logo.scss';
export interface ILogoProps {
    style?: React.CSSProperties;
}

export const Logo = (props: ILogoProps) => {
    const { style } = props;
    return <div className="logo-container" {...{ style }}>
        <div className="sulu-container">Sulu</div>
        <div className="creations-container">CREATIONS</div>
    </div>;
};

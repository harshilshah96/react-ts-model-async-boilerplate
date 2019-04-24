import * as React from 'react';
import './hammenu.scss';
export interface IHamMenuProps {
    onClick: () => void;
    className?: string;
}

export const HamMenu = (props: IHamMenuProps) => <div
    onClick={props.onClick}
    className={`ham-menu-container ${props.className}`}
>
    <img src={require('../../assets/Hamburg.png')} className="ham-menu-img" />
</div>;

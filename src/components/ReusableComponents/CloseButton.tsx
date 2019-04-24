import * as React from 'react';

export interface ICloseButtonProps {
    onClick: () => void;
    className?: string;
}

export const CloseButton = (props: ICloseButtonProps) => {
    const { onClick, className } = props;
    return <div
    className={`close-button-container ${className}`}
        onClick={onClick}
    >
        <img
            className="close-button-img"
            src={require('../../assets/CloseButton.png')}
        />
    </div>;
};

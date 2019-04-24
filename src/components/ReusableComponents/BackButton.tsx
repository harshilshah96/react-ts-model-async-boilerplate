import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import './backbutton.scss';
export interface IBackButtonProps extends RouteComponentProps {
    style?: React.CSSProperties;
    className?: string;
}

export const BackButtonImpl = (props: IBackButtonProps) => <div
    className={`back-button-container ${props.className}`}
    style={props.style}
>
    BACK
</div>;

export const BackButton = withRouter(BackButtonImpl);

import * as React from 'react';
import { BasePage } from '../ReusableComponents/BasePage';
import './home.scss';

export class Home extends React.PureComponent {

    renderType = (src: string, width?: number) => <div
        style={width ? { width: '15%' } : {}}
        className={`type-img-container ${src}-container`}
    >
        <img src={require(`../../assets/${src}.png`)} className="type-img" />
    </div>

    renderSeparator = () => <div className="separator-container">
        <img src={require('../../assets/Separator.png')} className="separator-img" />
    </div>

    render() {
        return (
            <BasePage className="home-page" hasMenu>
                <div className="select-category-title">SELECT A CATEGORY</div>
                <div className="wateroilcharcoal-title">WATER/OIL/CHARCOAL</div>
                <div className="types-container">
                    {this.renderType('waterLogo')}
                    {this.renderSeparator()}
                    {this.renderType('oilLogo', 1)}
                    {this.renderSeparator()}
                    {this.renderType('charcoalLogo')}
                </div>
            </BasePage>);
    }
}

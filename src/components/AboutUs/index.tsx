import * as React from 'react';
import { BasePage } from '../ReusableComponents/BasePage';
import './about.scss';
export class AboutUs extends React.PureComponent {
    render() {
        return (
            <BasePage className="about-us-page" hasMenu>
                <div className="left-side">
                    <div className="about-header left-header">
                        AN ADEPT ARTIST EXPERIENCED AT USING MEDIA RANGING FROM OIL TO CHARCOAL
                    </div>
                    <div className="about-content left-content">
                        {'dr. sulochana gawde has been a part of many art exhibitions and\
                     won a number of awards, with a proclivity towards themes surrounding indian culture and pathos.'.
                            toUpperCase()}
                    </div>
                    <div className="about-content left-content">
                        {'she also has... (content for teaching experience)'.
                            toUpperCase()}
                    </div>
                </div>
                <div className="right-side">
                    Right side content
                </div>
            </BasePage>);
    }
}

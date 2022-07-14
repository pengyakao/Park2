import React, { Component } from 'react';
import '../activities_components.css';
// import '../activities_layout_w992_infopage';
import Title from '../../../commons/title/Title';

class ActInfoForthHidden extends Component {
    state = {}
    render() {
        return (
            <div id="activeForthInfo" className="pcHidden">
                <div>
                    <div className="titleSW">活動嘉賓</div>
                    <p>
                        <span>
                            ...
                        </span>
                    </p>
                </div>
                <div>
                    <div className="titleSW">主辦單位</div>
                    <p>PARK2 草悟廣場</p>
                </div>
            </div>
        );
    }
}

export default ActInfoForthHidden;
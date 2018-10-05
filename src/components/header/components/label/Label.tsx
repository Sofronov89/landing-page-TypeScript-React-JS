import * as React from "react";

import logo_omega from "./logo_omega.jpg";

export class Label extends React.Component {
    public render() {
        return (
            <div>
                <img src={logo_omega} className="App-logo" alt="logo"/>
                <p className="omega-name">OMEGA-R</p>
            </div>
        );
    }
}

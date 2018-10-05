import * as React from "react";
import "./Clients.css";

export class Clients extends React.Component {
    public render() {
        return (
            <div className="clients">
                <div className="text-area">
                    <h1 className="header-clients-first">OUR CLIENTS</h1>
                    <h1 className="header-clients-twice">OUR CLIENTS</h1>
                    <h1 className="header-clients-third">OUR CLIENTS</h1>
                    <p className="text-clients">We love our clients</p>
                    <p className="text-clients gold">and the feeling is mutual.</p>
                </div>
                <div className="clients-list">
                    <div className="clients-icon spar"/>
                    <div className="clients-icon wgym"/>
                    <div className="clients-icon mattel"/>
                    <div className="clients-icon hasbro"/>
                    <div className="clients-icon clinique"/>
                    <div className="clients-icon skip"/>
                    <div className="clients-icon tv3"/>
                    <div className="clients-icon phase"/>
                    <div className="clients-icon gogol"/>
                    <div className="clients-icon sber"/>
                    <div className="clients-icon cska"/>
                    <div className="clients-icon abbyy"/>
                </div>
            </div>
        );
    }
}

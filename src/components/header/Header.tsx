import * as React from "react";
import "./Header.css";

import {Button} from "../button/Button";
import {Label} from "./components/label/Label";

export class Header extends React.Component {
    public render() {
        return (
            <div className="header-menu">
                <div className="header-left">
                    <Label/>
                    <Button
                        className={"header-div-button header-button"}
                        value={"WORK"}
                        href={"#"}
                    />
                    <Button
                        className={"header-div-button header-button"}
                        value={"ABOUT"}
                        href={"#"}
                    />
                    <Button
                        className={"header-div-button header-button"}
                        value={"CONTACT"}
                        href={"#"}
                    />
                    <Button
                        className={"header-div-button header-button"}
                        value={"CAREERS"}
                        href={"#"}
                    />
                    <Button
                        className={"header-div-button header-button"}
                        value={"TEAM"}
                        href={"#"}
                    />
                    <Button
                        className={"header-div-button header-button"}
                        value={"BLOG"}
                        href={"#"}
                    />
                </div>
                <div className="header-right">
                    <Button
                        className={"call-phone"}
                        value={"+1(646)-586-2025"}
                        href={"#"}
                    />
                </div>
                <Button
                    className={"box header-language"}
                    value={"eng"}
                    href={"#"}
                />
                <div className="eng-back"/>
            </div>
        );
    }
}

import * as React from "react";
import {IButtonProps} from "./IButtonProps";

export class Button extends React.Component<IButtonProps> {
    public render() {
        const { className, href, value, onClick } = this.props;
        return (
            <a className={className} href={href} onClick={onClick}>{value}</a>
        );
    }
}

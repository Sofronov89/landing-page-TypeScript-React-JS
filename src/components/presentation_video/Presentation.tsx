import * as React from "react";
import "./Presentation.css";
import {Button} from "../button/Button";

// tslint:disable
const video = require("./video/Royksopp - Here She Comes Again.mp4");

export class PresentationVideo extends React.Component<{}, {isVideo: boolean}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isVideo: false,
        };
    }

    public render() {
        // tslint:disable:jsx-no-lambda
        const isVideo = this.state.isVideo;
        if (isVideo) {
            return (
                <video src={video} controls={true} className="presentation"/>
            );
        }

        return (
            <div className="presentation">
                <div className="text-area-video">
                    <h1 className="header-pres-first">BUILDING APPS WITH PLEASURE</h1>
                    <h1 className="header-pres-twice">BUILDING APPS WITH PLEASURE</h1>
                    <h1 className="header-pres-third">BUILDING APPS WITH PLEASURE</h1>
                    <p className="text-video">
                        We do Mobile Development. Creative Design.
                        Analytical Research. Web Products. Games. VR & AR
                        Cases. High QA testing. Brand Strategy and more
                    </p>
                </div>
                <Button
                    className={"btn-video watch"}
                    value={"WATCH VIDEO"}
                    href={"#"}
                    onClick={this.showVideo.bind(this, true)}
                />
                <Button
                    className={"btn-video-close"}
                    value={""}
                    href={"#"}
                    onClick={this.showVideo.bind(this, true)}
                />
            </div>
        );
    }

    private showVideo(value: boolean = false) {
        this.setState({
            isVideo: value,
        });
    }
}

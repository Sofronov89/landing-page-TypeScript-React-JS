import * as React from "react";
import "./App.css";

import {Header} from "./components/header";
import {PresentationVideo} from "./components/presentation_video";
import {Clients} from "./components/clients";

export class App extends React.Component {
    public render() {
        return (
            <div>
                <Header/>
                <PresentationVideo/>
                <Clients/>
            </div>
        );
    }
}

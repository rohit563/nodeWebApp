'use strict';
const React = require('react');
const injectTapEventPlugin = require("react-tap-event-plugin");


class Html extends React.Component {
    render () {

        return (
            <html>
                <head>
                    <title>Remount Example</title>
                </head>
                <body>
                    <div id="app-mount"
                        dangerouslySetInnerHTML={{ __html: this.props.children }}
                    />
                    <script id="app-state"
                        dangerouslySetInnerHTML={{ __html: this.props.state }}
                    />
                    <script src="/assets/client.js" />
                </body>
            </html>
        );
    }
}


module.exports = Html;

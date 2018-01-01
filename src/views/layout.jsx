'use strict';
const React = require('react');


class LayoutView extends React.Component {
    render () {

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    }
}


module.exports = LayoutView;

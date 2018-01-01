'use strict';
const React = require('react');
const Layout = require('./layout');


class HomeView extends React.Component {
    render () {

        return (
            <Layout title="Home Page">
                <h1>Hello World!</h1>
            </Layout>
        );
    }
}


module.exports = HomeView;

import React, { Component } from 'react';

import FoldView from 'react-native-foldview';

const Frontface = (props) => <View> <Text> {"Front"} </Text></View>;
const Backface = (props) => <View> <Text> {"Back"} </Text></View>;
const Base = (props) => <View> <Text> {"Base"} </Text></View>;

export default class Row extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        };
    }

    componentWillMount() {
        this.flip = this.flip.bind(this);
    }

    flip() {
        this.setState({
            expanded: !this.state.expanded,
        });
    }

    renderFrontface() {
        return (
            <Frontface />
        );
    }

    renderBackface() {
        /**
         * You can nest <FoldView>s here to achieve the folding effect shown in the GIF above.
         * A reference implementation can be found in examples/Simple.
         */
        return (
            <Backface />
        );
    }

    render() {
        return (
            <FoldView
                expanded={this.state.expanded}
                renderBackface={this.renderBackface}
                renderFrontface={this.renderFrontface}
            >
                <Base />
            </FoldView>
        );
    }
}
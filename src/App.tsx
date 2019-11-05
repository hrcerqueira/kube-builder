import { Box, Grommet, ResponsiveContext, } from 'grommet';
import React, { Component } from 'react';
import './App.css';
import { AppBar } from './base/AppBar';
import { AppSidebar } from './base/AppSidebar';
import { DescriptorEditor } from './editor/DescriptorEditor';
import { theme } from './theme';

type AppState = {
    showSidebar: boolean
}

export default class App extends Component<{}, AppState> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = { showSidebar: false };
    }

    toggleSidebar = () => {
        const {showSidebar} = this.state;
        this.setState({
            showSidebar: !showSidebar
        });
    };

    render() {
        const {showSidebar} = this.state;

        return (
            <Grommet theme={theme}>
                <ResponsiveContext.Consumer>
                    {size => (<Box fill>
                        <AppBar toggleSidebar={this.toggleSidebar} />
                        <Box direction='row' flex overflow={{horizontal: 'hidden'}}>
                            <Box flex>
                                <DescriptorEditor />
                            </Box>
                            <AppSidebar
                                show={showSidebar}
                                size={size}
                                toggle={this.toggleSidebar}
                            />
                        </Box>
                    </Box>)}
                </ResponsiveContext.Consumer>
            </Grommet>
        );
    }
}


import { Box, Grommet, ResponsiveContext, } from 'grommet';
import React, { useState } from 'react';
import './App.css';
import { AppBar } from './components/AppBar';
import { AppSidebar } from './components/AppSidebar';
import { DescriptorEditor } from './editor/DescriptorEditor';
import { theme } from './theme';

const App = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <Grommet theme={theme}>
            <ResponsiveContext.Consumer>
                {size => (<Box fill>
                    <AppBar toggleSidebar={toggleSidebar} />
                    <Box direction='row' flex overflow={{horizontal: 'hidden'}}>
                        <Box flex>
                            <DescriptorEditor />
                        </Box>
                        <AppSidebar
                            show={showSidebar}
                            size={size}
                            toggle={toggleSidebar}
                        />
                    </Box>
                </Box>)}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
};

export default App;

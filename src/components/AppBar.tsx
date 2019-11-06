import { Add } from 'grommet-icons';
import React from 'react';
import { Box, Button, Heading } from 'grommet';
import logo from '../logo.svg';

type AppBarProps = {
    toggleSidebar: () => void
}

export const AppBar = ({toggleSidebar}: AppBarProps) => <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{left: 'medium', right: 'small', vertical: 'small'}}
    elevation='medium'>
    <Heading level='3' margin='none'>
        <Box direction={"row"} align={"center"} justify={"start"}>
            <Box>
                <img src={logo} className="App-logo" alt="logo"/>
            </Box>
            <Box>K8S Builder</Box>
        </Box>
    </Heading>
    <Button
        icon={<Add/>}
        onClick={toggleSidebar}
    />
</Box>

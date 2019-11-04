import { Box, Button, Collapsible, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';
import React from 'react';

type SidebarProps = {
    show: boolean,
    size: string,
    toggle: () => void
}

export const AppSidebar = ({show, size, toggle}: SidebarProps) => (!show || size !== 'small') ?
    <Collapsible direction="horizontal" open={show}>
        <Box
            flex
            width='medium'
            background='light-2'
            elevation='small'
            align='center'
            justify='center'
        >
            sidebar
        </Box>
    </Collapsible> :
    <Layer>
        <Box
            background='light-2'
            tag='header'
            justify='end'
            align='center'
            direction='row'
        >
            <Button
                icon={<FormClose/>}
                onClick={toggle}
            />
        </Box>
        <Box
            fill
            background='light-2'
            align='center'
            justify='center'
        >
            sidebar
        </Box>
    </Layer>

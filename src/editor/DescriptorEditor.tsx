import { Accordion, AccordionPanel, Box, Text } from 'grommet';
import { Down, Up } from 'grommet-icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../store/root';
import { ObjectPane } from './panes/ObjectPane';

const renderPanelHeader = (title: string, kind: string, active: boolean) => (
    <Box direction="row" align="center" pad="medium" gap="small" fill="horizontal" background="light-2">
        <Box flex="grow">
            <strong>
                <Text>{title}</Text>
            </strong>
        </Box>
        <Box round="small" background="accent-1" pad="xsmall">
            <Text size="small">{kind}</Text>
        </Box>
        <Box>
            <Text color="brand">{active ? <Up /> : <Down />}</Text>
        </Box>
    </Box>
);

export const DescriptorEditor = () => {
    const descriptor = useSelector((state: RootState) => state.descriptor);
    const [active, setActive] = useState([] as number[]);

    return (
        <Accordion multiple={true} onActive={setActive}>
            { descriptor.objects.map((object, index) =>
                <AccordionPanel key={index} header={renderPanelHeader(object.metadata.name, object.kind, active.includes(index))}>
                    <ObjectPane object={object} index={index} />
                </AccordionPanel>)
            }
        </Accordion>
    );
}

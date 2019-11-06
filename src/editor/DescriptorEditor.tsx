import { Accordion, AccordionPanel, Box, Text } from 'grommet';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../store/root';
import { ObjectPane } from './panes/ObjectPane';

const renderPanelHeader = (title: string, active: boolean) => (
    <Box direction="row" align="center" pad="medium" gap="small">
        <strong>
            <Text>{title}</Text>
        </strong>
        <Text color="brand">{active ? "-" : "+"}</Text>
    </Box>
);

export const DescriptorEditor = () => {
    const descriptor = useSelector((state: RootState) => state.descriptor);
    const [active, setActive] = useState([] as number[]);

    return (
        <Accordion multiple={true} onActive={setActive}>
            { descriptor.objects.map((object, index) =>
                <AccordionPanel key={index} header={renderPanelHeader(object.name, active.includes(index))}>
                    <ObjectPane object={object} index={index} />
                </AccordionPanel>)
            }
        </Accordion>
    );
}

import { Accordion, AccordionPanel } from 'grommet';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { DescriptorDocument } from '../store/descriptor';
import { RootState } from '../store/root';
import { PaneFactory } from './panes/PaneFactory';

type FormEditorProps = {
    descriptor: DescriptorDocument
}

class DescriptorEditorBase extends Component<FormEditorProps, {}> {

    render() {
        const { descriptor } = this.props;

        return (
            <Accordion>
                { descriptor.objects.map((object, index) => <AccordionPanel label={object.name} key={index}>
                    <PaneFactory object={object} index={index} />
                </AccordionPanel>) }
            </Accordion>
        )
    }
}

export const DescriptorEditor = connect(
    ({ descriptor }: RootState) => ({ descriptor })
)(DescriptorEditorBase);

import { FormField } from 'grommet';
import React, { useState } from 'react';

type Props = {
    name: string,
    label: string,
    value: any,
    validate?: (value: any) => boolean,
    onValidValue: (any: string) => void,
    buildField: (value: any, onFieldChange: (value: any) => void) => any
}

export const FormFieldHelper = ({name, label, value, validate, onValidValue, buildField}: Props) => {

    const [copy, setCopy] = useState(value);

    const onChange = (value: string) => {
        setCopy(value);

        if (!validate || validate(value)) {
            onValidValue(value);
        }
    };

    return <FormField {...{name, label}}>
        {buildField(copy, onChange)}
    </FormField>;
};

import { FormField } from 'grommet';
import React, { useState } from 'react';

type Props = {
    name: string,
    label: string,
    value: any,
    validate?: (value: any) => string | undefined,
    onValidValue: (any: string) => void,
    buildField: (value: any, onFieldChange: (value: any) => void) => any
}

const formFieldValidate = (validate?: (value: any) => string | undefined) => (value: any) => {
    if (!validate) {
        return;
    }

    const message = validate(value);

    if (!message) {
        return;
    }

    return {message};
}

export const FormFieldHelper = ({name, label, value, validate, onValidValue, buildField}: Props) => {

    const [copy, setCopy] = useState(value);
    const [error, setError] = useState();

    const onChange = (value: string) => {
        setCopy(value);

        if (validate) {
            const error = validate(value);
            setError(error);

            if (error) {
                return;
            }
        }

        onValidValue(value);
    };

    return <FormField {...{name, label}} validate={formFieldValidate(validate)} error={error}>
        {buildField(copy, onChange)}
    </FormField>;
};

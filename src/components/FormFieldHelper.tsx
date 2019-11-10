import { FormField, Select, TextInput } from 'grommet';
import React, { useState } from 'react';

type FieldBuilder = (value: any, onFieldChange: (value: any) => void, fieldOptions?: any) => any;

type Props = {
    name: string,
    label: string,
    value: any,
    validate?: (value: any) => string | undefined,
    onValidValue: (any: string) => void,
    fieldType?: 'text' | 'select',
    fieldOptions?: any,
    buildField?: FieldBuilder
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

const defaultFieldTypes: {[key: string]: FieldBuilder} = {
    text: (value, onFieldChange) => <TextInput
        value={value}
        onChange={({target: { value }}: any) => onFieldChange(value)}
    />,
    select: (value, onFieldChange, fieldOptions) => <Select
        options={(fieldOptions || {}).options}
        value={value}
        onChange={({ option }: any) => onFieldChange(option)}
    />
};

export const FormFieldHelper = ({name, label, value, validate, onValidValue, fieldType, fieldOptions, buildField}: Props) => {

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

    const builder = buildField || defaultFieldTypes[fieldType || 'text'];

    return <FormField {...{name, label}} validate={formFieldValidate(validate)} error={error}>
        {builder(copy, onChange, fieldOptions)}
    </FormField>;
};

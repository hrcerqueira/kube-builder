export const createRegexValidator = (regexp: RegExp, message: string) =>
    (value: string) => regexp.test(value) ? undefined : message;

export const createKubeLabelValidator = (length: number, message: string) =>
    createRegexValidator(new RegExp(`^[a-z0-9]([.\\-a-z0-9]{0,${length - 2}}[a-z0-9])?$`), message);

export const validateAnnotationKey = (key: string) =>
    /^([a-z0-9\-]{1,63}(\.[a-z0-9\-]{1,63})*\/)?[a-z0-9]([.\-_a-z0-9]{0,61}[a-z0-9])?$/.test(key)
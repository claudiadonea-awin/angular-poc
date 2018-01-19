export class InputGroup {
    label: string;
    value: string | number;
    placeholder: string;
    errorMessage?: string;
    errorMessages?: string[];

    constructor(
        label: string,
        value: string | number,
        placeholder: string,
        errorMessage?: string,
        errorMessages?: string[],
    ) {
        this.label = label;
        this.value = value;
        this.placeholder = placeholder;
        this.errorMessage = errorMessage || null;
        this.errorMessages = errorMessages || null;
    }
}

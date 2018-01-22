export class InputGroup {
  constructor(
    public label: string,
    public value: string | number,
    public placeholder: string,
    public errorMessage?: string,
    public errorMessages?: string[]
  ) {}
}

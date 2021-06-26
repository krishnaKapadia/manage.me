/** @format */
import React from "react";
import CreatableSelect from "react-select/creatable";

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

const defaultOptions = [
  createOption("One"),
  createOption("Two"),
  createOption("Three"),
];

type Option = {
  label: string;
  value: string;
};

type Props = {
  defaultOptions: Option[];
  onChange: (e: Option[]) => void;
  placeholder?: string;

  multiSelect?: boolean;
};

export default class CreatableAdvanced extends React.Component<Props> {
  state = {
    inputValue: "",
    options: this.props.defaultOptions || defaultOptions,
    value: [],
    isLoading: false,
  };

  handleChange = (value: any) => {
    this.props.onChange(value);
    this.setState({ value });
  };

  handleCreate = (inputValue: any) => {
    const { value } = this.state;
    const newOption = createOption(inputValue);
    const updatedValues = [...value, newOption];

    this.setState({
      inputValue: "",
      options: updatedValues,
      value: updatedValues,
    });
  };

  render() {
    const { options } = this.state;

    return (
      <CreatableSelect
        placeholder={this.props.placeholder}
        isMulti={this.props.multiSelect || false}
        onChange={this.handleChange}
        options={options}
        {...(this.props.placeholder ? {} : { defaultValue: options[0] })}
      />
    );
  }
}

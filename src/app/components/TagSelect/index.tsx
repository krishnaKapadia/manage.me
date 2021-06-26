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
};

export default class CreatableAdvanced extends React.Component<Props> {
  state = {
    inputValue: "",
    options: this.props.defaultOptions || defaultOptions,
    value: [],
    isLoading: false,
  };

  handleChange = (value: any) => {
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
        placeholder="Search tags"
        isMulti
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

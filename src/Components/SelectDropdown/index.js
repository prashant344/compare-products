import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import './index.css';

class SimpleSelect extends React.PureComponent {
  state = {
    selected: null,
  };

  handleChange(event) {
    this.setState({ selected: event.target.value });
    this.props.handleChange(event, this.props.selectionId);
  }

  render() {
    const { selected } = this.state;
    const { optionList, products } = this.props;
    return (
      <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="name">Product</InputLabel>
          <Select
            name="name"
            value={selected}
            onChange={(event) => this.handleChange(event)}
            placeholder={"Select a product"}
            input={<Input id="name" />}
          >
            {products.map((product) => (
              <MenuItem value={product}>{optionList[product].title}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  }
}

export default SimpleSelect;

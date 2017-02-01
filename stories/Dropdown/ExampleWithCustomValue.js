import React from 'react';
import Dropdown from 'wix-style-react/Dropdown';
import Checkbox from 'wix-style-react/Checkbox';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px',
  marginBottom: '350px'
};

const customValue = (
  <div>
    <span>Custom Value</span>
    <span style={{marginLeft: '5px'}} onClick={e => e.stopPropagation()}>
      <Checkbox onChange={() => console.log(`can't check`)}/>
    </span>
  </div>
);

const options = [
  {id: 1, value: 'Option 1'},
  {id: 2, value: 'Option 2'},
  {id: 3, value: 'Option 3'},
  {id: 4, value: 'Option 4', disabled: true},
  {id: 5, value: 'Option 5'},
  {id: 6, value: customValue}
];

class CustomValuesInDropdown extends React.Component {
  onSelect(value) {
    console.log(`Selected ${value}`);
  }

  valueParser(option) {
    return (typeof option.value === 'string') ?
      option.value :
      option.value.props.children[0].props.children;
  }

  render() {
    return (
      <Dropdown
        options={options}
        placeholder={'Choose an option'}
        valueParser={this.valueParser}
        onSelect={this.onSelect}
        />
    );
  }
}

export default () =>
  <div className="ltr" style={style}>
    <CustomValuesInDropdown/>
  </div>;

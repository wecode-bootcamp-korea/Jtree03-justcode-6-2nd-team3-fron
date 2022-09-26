import axios from 'axios';
import { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

function SelectTag(props) {
  // const { placeholder, getSelectValue } = props;
  const [tagValue, setTag] = useState([]);
  const [inputValue, setInput] = useState('');
  const [options, setOptions] = useState([]);
  // const options = [
  //   { id: 1, value: '1', label: '1' },
  //   { id: 2, value: '2', label: '2' },
  //   { id: 3, value: '3', label: '3' },
  // ];
  useEffect(() => {
    axios.get(`http://localhost:9000/tags?keyword=${inputValue}`).then(res => {
      setOptions(res);
    });
  }, [inputValue]);

  const handleChange = value => {
    setTag(value);
    const newVal = tagValue.map(data => {
      return { tag_id: data.id, tab_name: data.value };
    });
    newVal.forEach(item => {
      if (item.id === undefined) {
        delete item.tag_id;
      }
    });
    props.getSelectValue(newVal);
  };
  const onInputChange = value => {
    setInput(value);
  };

  console.log('인풋값', inputValue);
  // useEffect(() => {

  //   console.log('value', newVal);
  // }, [tagValue]);

  //  const handleCreate = () => {
  //     this.setState({ isLoading: true });
  //     console.group('Option created');
  //     console.log('Wait a moment...');
  //     setTimeout(() => {
  //       const { options } = this.state;
  //       const newOption = createOption(inputValue);
  //       console.log(newOption);
  //       console.groupEnd();
  //       this.setState({
  //         isLoading: false,
  //         options: [...options, newOption],
  //         value: newOption,
  //       });
  //     }, 1000);
  //   };
  // console.log('value실시간',value);
  return (
    <>
      <CreatableSelect
        isMulti
        onChange={handleChange}
        valueKey="value"
        options={options}
        placeholder={props.placeholder}
        onInputChange={onInputChange}
        // onCreateOption={handleCreate}
      />
    </>
  );
}

export default SelectTag;

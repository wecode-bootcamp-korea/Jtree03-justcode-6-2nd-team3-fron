import axios from 'axios';
import { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

function EditSelectTag(props) {
  const { placeholder, getSelectValue } = props;
  const [tagValue, setTag] = useState([]);
  const [inputValue, setInput] = useState('');
  const [options, setOptions] = useState([]);

  // const options = [
  //   { id: 1, value: '1', label: '1' },
  //   { id: 2, value: '2', label: '2' },
  //   { id: 3, value: '3', label: '3' },
  // ];

  // isLoading: false,
  // options: defaultOptions,
  // value: undefined,

  useEffect(() => {
    axios.get(`http://localhost:8000/tags?keyword=${inputValue}`).then(res => {
      const newOption = res.data.tagList;

      setOptions(
        newOption.map(data => {
          return {
            id: data.tag_id,
            value: data.tag_name,
            label: data.tag_name,
          };
        })
      );
    });
  }, [inputValue]);

  const handleChange = value => {
    setTag(
      value.map(data => {
        if (data.id === undefined) {
          return { tag_name: data.value };
        } else {
          return { tag_id: data.id, tag_name: data.value };
        }
      })
    );
  };

  useEffect(() => {
    getSelectValue(tagValue);
  }, [tagValue]);

  const onInputChange = value => {
    setInput(value);
  };

  return (
    <>
      <CreatableSelect
        isMulti
        onChange={handleChange}
        valueKey="value"
        options={options}
        placeholder={placeholder}
        onInputChange={onInputChange}
      />
    </>
  );
}

export default EditSelectTag;

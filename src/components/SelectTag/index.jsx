import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';
function SelectTag({ placeholder }) {
  const [tagValue, setTag] = useState([]);

  const options = [
    { id: 1, value: '1', label: '1' },
    { id: 2, value: '2', label: '2' },
    { id: 3, value: '3', label: '3' },
  ];
  const tagVal = tagValue.map(data => {
    return { id: data.id, value: data.value };
  });
  tagVal.forEach(item => {
    if (item.id === undefined) {
      delete item.id;
    }
  });

  console.log('tagVal', tagVal);

  const handleChange = value => {
    console.log(value);
    setTag(value);
  };
  return (
    <>
      <CreatableSelect
        isMulti
        onChange={handleChange}
        valueKey="value"
        options={options}
        placeholder={placeholder}
      />
    </>
  );
}

export default SelectTag;

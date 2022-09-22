import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';
function SelectTag({ placeholder, options }) {
  const [tagValue, setTag] = useState([]);

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

import CreatableSelect from 'react-select/creatable';
// import { useState } from 'react';
function SelectTag(props) {
  // const { placeholder, getSelectValue } = props;
  // const [tagValue, setTag] = useState([]);

  const options = [
    { id: 1, value: '1', label: '1' },
    { id: 2, value: '2', label: '2' },
    { id: 3, value: '3', label: '3' },
  ];
  // useEffect(() => {}, [tagValue]);

  const handleChange = value => {
    const newVal = value.map(data => {
      return { id: data.id, value: data.value };
    });
    newVal.forEach(item => {
      if (item.id === undefined) {
        delete item.id;
      }
    });
    props.getSelectValue(newVal);
  };

  return (
    <>
      <CreatableSelect
        isMulti
        onChange={handleChange}
        valueKey="value"
        options={options}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default SelectTag;

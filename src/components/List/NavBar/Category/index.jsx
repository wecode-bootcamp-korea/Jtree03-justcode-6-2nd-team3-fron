import styled from "styled-components";

function Category(props) {
  const {categoryValue, category, setCategory} = props;

  const onClick = () => {
    for (let i in category) {
      let arr = [...category];
      arr[i].view = false;
      setCategory(arr);
    }
    categoryValue.view = true;
  }
  
  return (
    <Button
      onClick={onClick}
      style={{
        background: categoryValue.view && '#F3F4F6',
        color: categoryValue.view && '#000000'
      }}
    >
      {categoryValue.name}
    </Button>
  );
};

const Button = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 32px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #838383;
  background: none;
  cursor: pointer;

    &:nth-child(1) {
      margin: 0;
    }
`

export default Category;
import styled from "styled-components";

function Pagination(props) {

  const { listlength, limit, page, setPage } = props;

  const numPages = Math.ceil(listlength / limit);
  const pageLength = 
    Array(numPages)
    .fill()
    .map((_, i) => {
      return i;
    });

  return (
    <Nav className="pagination">
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </Button>
      <div>
      {pageLength.map((_, i) => (
        <InnerButton
          key={i}
          onClick={() => setPage(i + 1)}
          aria-current={page === i + 1 ? "page" : null}
        >
          {i + 1}
        </InnerButton>
      ))}
      </div>
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        Next
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  padding: 16px 16px;
  color: #999;
  font-size: 14px;
  font-weight: 100;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    cursor: revert;
    color: #D1D5DB;
  }

  &[aria-current] {
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

const InnerButton = styled.button`
  border: none;
  padding: 16px 16px;
  color: #999;
  font-size: 14px;
  font-weight: 100;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    cursor: revert;
  }
  
  &[aria-current] {
    color: #0090F9;
    cursor: revert;
  }
`;

export default Pagination;

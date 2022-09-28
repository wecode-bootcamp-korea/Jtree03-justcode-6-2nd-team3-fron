import List from "../../../components/List";

export default function NOTICE() {
  const pageInfo = {
    name: 'NOTICE',
    path: 'notice',
    id: 4
  }
  return (
    <List pageInfo={pageInfo} />
  )
}
import List from "../../../components/List";

export default function EVENTS() {
  const pageInfo = {
    name: 'EVENTS',
    path: 'events',
    id: 3
  }
  return (
    <List pageInfo={pageInfo} />
  )
}
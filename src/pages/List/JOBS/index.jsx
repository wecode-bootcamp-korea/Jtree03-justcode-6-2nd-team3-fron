import List from "../../../components/List"

export default function JOBS() {
  const pageInfo = {
    name: 'JOBS',
    path: 'jobs',
    id: 5
  }
  return (
    <List pageInfo={pageInfo} />
  )
}
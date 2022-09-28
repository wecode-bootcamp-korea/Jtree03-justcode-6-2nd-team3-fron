import List from "../../../components/List";

export default function Daily() {
  const pageInfo = {
    name: 'QnA',
    path: 'questions',
    categoryPath: 'tech',
    id: 1
  }
  return (
    <List pageInfo={pageInfo} />
  )
}
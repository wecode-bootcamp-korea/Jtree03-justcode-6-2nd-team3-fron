import NewPostLayout from '../../../components/NewPost/NewPostLayout';

function QuestionsNew() {
  const topicOptions = [
    { sub_category_id: 1, name: '질문' },
    { sub_category_id: 2, name: '회사' },
    { sub_category_id: 3, name: '어쩌고' },
  ];
  const main_category_id = 1;
  const title = '기술 궁금증 해결하기';
  const subTitle =
    '님 지식공유 플랫폼 OKKY에서 최고의 개발자들과 함께 궁금증을 해결하세요.';
  return (
    <div>
      <NewPostLayout
        topicOptions={topicOptions}
        title={title}
        subTitle={subTitle}
        mainId={main_category_id}
      />
    </div>
  );
}
export default QuestionsNew;

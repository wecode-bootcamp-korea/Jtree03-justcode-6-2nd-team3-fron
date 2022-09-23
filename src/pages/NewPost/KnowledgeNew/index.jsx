import NewPostLayout from '../../../components/NewPost/NewPostLayout';

function KnowledgeNew() {
  const topicOptions = [
    { sub_category_id: 1, name: '테크뉴스' },
    { sub_category_id: 2, name: '컬럼' },
    { sub_category_id: 3, name: '리뷰' },
  ];
  const main_category_id = 2;
  const title = '정보는 나눌 수록 늘어나는 것';
  const subTitle =
    '님 지식공유 플랫폼 OKKY의 개발자들과 함께 나누고 싶은 IT 뉴스, 정보가 있다면 공유해주세요.';
  return (
    <div>
      {' '}
      <NewPostLayout
        topicOptions={topicOptions}
        title={title}
        subTitle={subTitle}
        mainId={main_category_id}
      />
    </div>
  );
}
export default KnowledgeNew;

import NewPostLayout from '../../../components/NewPost/NewPostLayout';

function KnowledgeNew() {
  const main_category_id = 2;
  const title = '정보는 나눌 수록 늘어나는 것';
  const subTitle =
    '님 지식공유 플랫폼 OKKY의 개발자들과 함께 나누고 싶은 IT 뉴스, 정보가 있다면 공유해주세요.';
  return (
    <div>
      {' '}
      <NewPostLayout
        title={title}
        subTitle={subTitle}
        mainId={main_category_id}
      />
    </div>
  );
}
export default KnowledgeNew;

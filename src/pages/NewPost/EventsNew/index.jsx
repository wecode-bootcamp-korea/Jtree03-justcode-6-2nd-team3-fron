import NewPostLayout from '../../../components/NewPost/NewPostLayout';

function EventsNew() {
  const topicOptions = [
    { sub_category_id: 1, name: '기술' },
    { sub_category_id: 2, name: '커리어' },
    { sub_category_id: 3, name: '일상' },
  ];
  const main_category_id = 3;
  const title = '함께 할 때 더 즐거운 순간';
  const subTitle =
    '님 지식공유 플랫폼 OKKY를 통해 다양한 IT 행사와 이벤트에 참가하세요.';
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
export default EventsNew;

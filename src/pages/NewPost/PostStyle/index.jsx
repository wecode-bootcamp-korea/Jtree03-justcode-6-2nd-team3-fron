import { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quillCustom.css';

function PostStyle() {
  const [content, setContent] = useState();
  const getContent = value => {
    console.log(value);
    setContent(value);
  };
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'align',
    'color',
    'background',
    'image',
  ];
  const modules = useMemo(
    () => ({
      toolbar: {
        // 툴바에 넣을 기능들을 순서대로 나열하면 된다.
        container: [
          [{ header: 1 }, { header: 2 }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'link', 'code-block', 'image', 'video'],
        ],
        // handlers: { // 위에서 만든 이미지 핸들러 사용하도록 설정
        //     image: imageHandler,
        // },
      },
    }),
    []
  );

  return (
    <div>
      <ReactQuill
        formats={formats}
        value={content}
        onChange={getContent}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력하세요."
      />
    </div>
  );
}

export default PostStyle;

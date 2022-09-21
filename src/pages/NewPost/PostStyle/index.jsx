import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quillCustom.css';

function PostStyle() {
  // const CustomToolbar = () => (
  //   <div id="toolbar">
  //     <span class="ql-formats">
  //     <button value='1' className="ql-header"></button>
  //       <button value='2'></button>
  //       <button value='3'></button>
  //     </span>

  //     </div>)
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
        // ref={quillRef}
        // value={htmlContent}
        // onChange={setHtmlContent}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력하세요."
        // className={styles.quillEditor}
      />
    </div>
  );
}

export default PostStyle;

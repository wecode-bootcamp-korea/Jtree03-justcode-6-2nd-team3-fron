import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function PostStyle() {
  const modules = useMemo(
    () => ({
      toolbar: {
        // 툴바에 넣을 기능들을 순서대로 나열하면 된다.
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
            { align: [] },
          ],
          ['image', 'video'],
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
        // className={styles.quillEditor}
      />
    </div>
  );
}

export default PostStyle;

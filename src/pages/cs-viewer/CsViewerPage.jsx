import React, { useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Layout from '../../components/layout/Layout';
import styles from './CsViewerPage.module.css';

const CsViewerPage = ({ db }) => {
  const [contents, setContents] = useState('');
  const inputTitle = useRef();
  const inputAuthor = useRef();
  const inputPassword = useRef();

  const onClickSubmit = () => {
    const createdAt = new Date().getTime();
    const post = {
      id: createdAt,
      title: inputTitle.current.value || '',
      author: inputAuthor.current.value || '',
      contents,
      password: inputPassword.current.value || '',
      createdAt,
    };
    console.log(post);
    db.addCsPost(post);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>문의 내용</h1>
        <div className={styles.inputContainer}>
          제목
          <input ref={inputTitle} className={styles.inputTitle} type='text' />
          글쓴이
          <input ref={inputAuthor} className={styles.inputAuthor} type='text' />
          <button
            type='submit'
            className={styles.btnSubmit}
            onClick={onClickSubmit}
          >
            수정
          </button>
        </div>
        <CKEditor
          editor={ClassicEditor}
          config={{
            // 여기에 config 입력
            toolbar: ['heading', '|', 'bold', 'italic', 'undo', 'redo'],
            hight: '1200px',
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setContents(data);
          }}
        />
      </div>
    </Layout>
  );
};

export default CsViewerPage;

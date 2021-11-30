import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Layout from '../../components/layout/Layout';
import styles from './CsWritePage.module.css';
import './ckEditor.css';

const CsWritePage = (props) => (
  <Layout>
    <div className={styles.container}>
      <h1>문의 하기</h1>
      <div className={styles.inputContainer}>
        제목
        <input className={styles.inputTitle} type='text' />
        글쓴이
        <input className={styles.inputAuthor} type='text' />
        비밀번호
        <input className={styles.inputPassword} type='password' />
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
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      <button type='submit' className={styles.btnSubmit}>
        문의 등록하기
      </button>
    </div>
  </Layout>
);

export default CsWritePage;

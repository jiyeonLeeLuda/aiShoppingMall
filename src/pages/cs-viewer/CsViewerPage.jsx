import React, { useRef, useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory, useParams } from 'react-router';
import Layout from '../../components/layout/Layout';
import styles from './CsViewerPage.module.css';

const CsViewerPage = ({ db }) => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const inputTitle = useRef();
  const inputAuthor = useRef();

  useEffect(() => {
    console.log(db.readCsPost(id, setPost));
  }, []);
  return (
    <Layout>
      <div className={styles.container}>
        <h1>문의 내용</h1>
        <div className={styles.inputContainer}>
          <h3 className={styles.inputTitle}>제목 : {post.title}</h3>

          <h4 className={styles.inputAuthor}>글쓴이 : {post.author}</h4>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data={post.contents}
          disabled
          config={{
            // 여기에 config 입력
            toolbar: ['heading', '|', 'bold', 'italic', 'undo', 'redo'],
          }}
        />
        <button type='submit' className={styles.btnSubmit}>
          수정 / 삭제
        </button>
      </div>
    </Layout>
  );
};

export default CsViewerPage;

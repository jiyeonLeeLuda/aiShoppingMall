import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory, useParams } from 'react-router';
import styles from './CsViewerPage.module.css';

const CsViewerPage = ({ db, authService }) => {
  const { id } = useParams();
  const history = useHistory();
  const [post, setPost] = useState({});

  const onClickToEdit = () => {
    history.push(`/board/edit/${id}`);
  };

  useEffect(() => {
    const unsubscribe = authService.onAuthChange((user) => {
      if (!user) {
        history.push('/login');
        alert('로그인이 필요합니다.');
      } else {
        // setLoginUser({ id: user.uid, nickName: user.displayName });
        db.readCsPost(id, setPost, user.uid);
      }

      return unsubscribe();
    });
  }, []);
  return (
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
      <button
        type='submit'
        className={styles.btnSubmit}
        onClick={onClickToEdit}
      >
        수정 / 삭제
      </button>
    </div>
  );
};

export default CsViewerPage;

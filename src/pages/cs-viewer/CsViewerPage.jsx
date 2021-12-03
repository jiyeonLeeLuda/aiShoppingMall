import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory, useParams } from 'react-router';
import styles from './CsViewerPage.module.css';
import ImgViewer from '../../components/imgUploader/ImgViewer';

const CsViewerPage = ({ db, authService }) => {
  const { id } = useParams();
  const history = useHistory();
  const [post, setPost] = useState({});
  const [loginUser, setLoginUser] = useState({
    id: null,
    nickName: null,
  });
  const onClickToEdit = () => {
    history.push(`/board/edit/${id}`);
  };
  const onClickDelete = () => {
    db.deletePost(
      {
        id,
        uid: loginUser.id,
      },
      () => {
        history.push('/board');
      }
    );
  };

  useEffect(() => {
    const unsubscribe = authService.onAuthChange((user) => {
      if (!user) {
        history.push('/login');
        alert('로그인이 필요합니다.');
      } else {
        setLoginUser({ id: user.uid, nickName: user.displayName });
        db.readCsPost(id, setPost, user.uid);
      }

      return unsubscribe();
    });
  }, []);
  return (
    <div className={styles.container}>
      <h1>문의 내용</h1>
      <section className={styles.flexContainer}>
        <div className={styles.inputContainer}>
          <h3 className={styles.inputTitle}>제목 : {post.title}</h3>
          <CKEditor
            editor={ClassicEditor}
            data={post.contents}
            disabled
            config={{
              // 여기에 config 입력
              toolbar: [],
            }}
          />
        </div>
        <div className={styles.imgContainer}>
          <ImgViewer imgUrl={post.fileURL} />
        </div>
      </section>
      <div className={styles.btnContainer}>
        <button
          type='button'
          className={`${styles.btnSubmit} ${styles.btnDelete}`}
          onClick={onClickDelete}
        >
          삭제
        </button>
        <button
          type='button'
          className={styles.btnSubmit}
          onClick={onClickToEdit}
        >
          수정
        </button>
      </div>
    </div>
  );
};

export default CsViewerPage;

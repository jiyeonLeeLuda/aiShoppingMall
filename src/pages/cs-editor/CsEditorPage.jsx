import React, { useRef, useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory, useParams } from 'react-router';
import styles from './CsEditorPage.module.css';

const CsEditorPage = ({ db, authService }) => {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [contents, setContents] = useState('');
  const [loginUser, setLoginUser] = useState({
    id: null,
    nickName: null,
  });
  const inputTitle = useRef();

  const onClickEdit = () => {
    const updatedPost = {
      uid: loginUser.id,
      id,
      title: inputTitle.current.value || '',
      author: loginUser.nickName,
      contents,
      createdAt: Number(id),
    };
    db.editPost(updatedPost, () => {
      history.push(`/board/${id}`);
    });
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
      <div className={styles.inputContainer}>
        제목
        <input
          ref={inputTitle}
          className={styles.inputTitle}
          type='text'
          defaultValue={post.title}
        />
        글쓴이
        <input
          disabled
          className={styles.inputAuthor}
          type='text'
          defaultValue={post.author}
        />
      </div>
      <CKEditor
        editor={ClassicEditor}
        data={post.contents}
        config={{
          // 여기에 config 입력
          toolbar: ['heading', '|', 'bold', 'italic', 'undo', 'redo'],
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setContents(data);
        }}
      />
      <button type='submit' className={styles.btnSubmit} onClick={onClickEdit}>
        수정
      </button>
      <button
        type='submit'
        className={styles.btnSubmit}
        onClick={onClickDelete}
      >
        삭제
      </button>
    </div>
  );
};

export default CsEditorPage;

import React, { useEffect, useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import styles from './CsWritePage.module.css';
import './ckEditor.css';
import { useHistory } from 'react-router';

const CsWritePage = ({ db, authService }) => {
  const [contents, setContents] = useState('');
  const [loginUser, setLoginUser] = useState({
    id: null,
    nickName: null,
  });
  const inputTitle = useRef();
  const history = useHistory();

  const moveToBoard = () => {
    history.push('/board');
  };
  const onClickSubmit = () => {
    const createdAt = new Date().getTime();
    const post = {
      uid: loginUser.id,
      id: createdAt,
      title: inputTitle.current.value || '',
      author: loginUser.nickName,
      contents,
      createdAt,
    };
    db.addCsPost(post, moveToBoard);
  };

  useEffect(() => {
    // get data

    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/login');
      } else {
        setLoginUser({ id: user.uid, nickName: user.displayName });
      }
    });
  }, [authService]);
  return (
    <div className={styles.container}>
      <h1>문의 하기</h1>
      <div className={styles.inputContainer}>
        제목
        <input ref={inputTitle} className={styles.inputTitle} type='text' />
        글쓴이
        <input
          className={styles.inputAuthor}
          type='text'
          defaultValue={loginUser.nickName}
          disabled
        />
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
      <button
        type='submit'
        className={styles.btnSubmit}
        onClick={onClickSubmit}
      >
        문의 등록하기
      </button>
    </div>
  );
};

export default CsWritePage;

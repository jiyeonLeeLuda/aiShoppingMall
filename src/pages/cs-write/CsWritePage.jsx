import React, { useEffect, useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import styles from './CsWritePage.module.css';
import './ckEditor.css';
import { useHistory } from 'react-router';
import ImgViewer from '../../components/imgUploader/ImgViewer';

const CsWritePage = ({ db, authService, FileInput }) => {
  const [contents, setContents] = useState('');
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const [loginUser, setLoginUser] = useState({
    id: null,
    nickName: null,
  });
  const inputTitle = useRef();
  const history = useHistory();

  const moveToBoard = () => {
    history.push('/board');
  };
  const onChangeFile = (mFile) => {
    setFile({
      fileName: mFile.name,
      fileURL: mFile.url,
    });
  };
  const onClickSubmit = () => {
    const createdAt = new Date().getTime();
    const post = {
      uid: loginUser.id,
      id: createdAt,
      title: inputTitle.current.value || '',
      author: loginUser.nickName,
      contents,
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
      createdAt,
    };
    if (!post.title || !post.contents) {
      alert('제목과 내용을 입력해주세요');
    } else {
      db.addCsPost(post, moveToBoard);
    }
  };

  useEffect(() => {
    // get data

    const unsubscribe = authService.onAuthChange((user) => {
      if (!user) {
        history.push('/login');
        alert('로그인이 필요합니다.');
      } else {
        setLoginUser({ id: user.uid, nickName: user.displayName });
      }

      return unsubscribe();
    });
  }, []);
  return (
    <div className={styles.container}>
      <h1>문의 하기</h1>
      <div className={styles.flexContainer}>
        <section className={styles.inputContainer}>
          <div className={styles.titleContainer}>
            <h4>제목</h4>
            <input ref={inputTitle} className={styles.inputTitle} type='text' />
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
        </section>
        <section className={styles.imgContainer}>
          <ImgViewer imgUrl={file.fileURL} />
          <FileInput fileName={file.fileName} onChangeFile={onChangeFile} />
        </section>
      </div>
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

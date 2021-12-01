import React, { useRef, useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory, useParams } from 'react-router';
import styles from './CsEditorPage.module.css';

const CsEditorPage = ({ db }) => {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [contents, setContents] = useState('');
  const inputTitle = useRef();
  const inputAuthor = useRef();
  const inputPassword = useRef();
  const onClickEdit = () => {
    const updatedPost = {
      id,
      title: inputTitle.current.value || '',
      author: inputAuthor.current.value || '',
      contents,
      password: inputPassword.current.value || '',
    };
    db.editPost(updatedPost, () => {
      history.push(`/board/${id}`);
    });
  };
  const onClickDelete = () => {
    db.deletePost(
      {
        id,
        password: inputPassword.current.value,
      },
      () => {
        history.push('/board');
      }
    );
  };
  useEffect(() => {
    console.log(db.readCsPost(id, setPost));
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
          ref={inputAuthor}
          className={styles.inputAuthor}
          type='text'
          defaultValue={post.author}
        />
        비밀번호
        <input
          ref={inputPassword}
          className={styles.inputPassword}
          type='password'
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

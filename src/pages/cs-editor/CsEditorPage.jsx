import React, { useRef, useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory, useParams } from 'react-router';
import { file } from '@babel/types';
import styles from './CsEditorPage.module.css';
import ImgViewer from '../../components/imgUploader/ImgViewer';

const CsEditorPage = ({ db, authService, FileInput }) => {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [contents, setContents] = useState('');
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const inputTitle = useRef();

  const onChangeFile = (mFile) => {
    setFile({
      fileName: mFile.name,
      fileURL: mFile.url,
    });
  };
  const onClickEdit = () => {
    const updatedPost = {
      ...post,
      title: inputTitle.current.value || '',
      contents,
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    db.editPost(updatedPost, () => {
      history.push(`/board/${id}`);
    });
  };

  useEffect(() => {
    const unsubscribe = authService.onAuthChange((user) => {
      if (!user) {
        history.push('/login');
      } else {
        db.readCsPost(id, setPost, user.uid);
      }

      return unsubscribe();
    });
  }, []);
  return (
    <div className={styles.container}>
      <h1>문의 내용</h1>
      <div className={styles.flexContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.titleContainer}>
            <h4>제목</h4>
            <input
              ref={inputTitle}
              className={styles.inputTitle}
              defaultValue={post.title}
              type='text'
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
        </div>
        <section className={styles.imgContainer}>
          <ImgViewer imgUrl={file.fileURL} />
          <FileInput fileName={file.fileName} onChangeFile={onChangeFile} />
        </section>
      </div>
      <button type='submit' className={styles.btnSubmit} onClick={onClickEdit}>
        저장하기
      </button>
    </div>
  );
};

export default CsEditorPage;

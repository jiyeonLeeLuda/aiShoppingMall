import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
} from 'firebase/firestore';

class Repository {
  constructor() {
    this.db = getFirestore();
  }

  async addCsPost(post, moveTo) {
    try {
      const csRef = collection(this.db, 'cs-posts');
      await setDoc(doc(csRef, `${post.id}`), post);
      moveTo();
      alert('반영되었습니다');
    } catch (e) {
      console.error('Error adding document: ', e);
      alert(`오류 : ${e}`);
    }
  }

  async readCsPosts(setRows) {
    const querySnapshot = await getDocs(collection(this.db, 'cs-posts'));
    const datas = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      datas.push(data);
    });

    datas.sort((a, b) => b.id - a.id); // 최신글 먼저
    setRows(datas);
  }

  async readCsPost(id, setData) {
    const docRef = doc(this.db, 'cs-posts', `${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      // 예외처리 추가하기 . 존재하지 않는 게시글 입니다. 안내
      console.log('No such document!');
    }
  }

  async editPost(post, moveTo) {
    // 비밀번호 검사 추가 필요 , OR oauth 로그인 처리  추가하기.
    this.addCsPost(post, moveTo);
  }

  async deletePost(post, moveTo) {
    // 비밀번호 검사 추가 필요 OR oauth 로그인 처리  추가하기.
    const csRef = collection(this.db, 'cs-posts');
    await deleteDoc(doc(csRef, `${post.id}`));
    moveTo();
    alert('삭제되었습니다.');
  }
}

export default Repository;

import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from 'firebase/firestore';

class Repository {
  constructor() {
    this.db = getFirestore();
  }

  async addCsPost(post, moveToBoard) {
    try {
      const csRef = collection(this.db, 'cs-posts');
      await setDoc(doc(csRef, `${post.id}`), post);
      moveToBoard();
      alert('등록되었습니다');
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
    // console.log(id);
    const docRef = doc(this.db, 'cs-posts', `${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log('Document data:', docSnap.data());
      setData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }
}

export default Repository;

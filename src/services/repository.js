import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  doc,
  setDoc,
} from 'firebase/firestore';

class Repository {
  constructor() {
    this.db = getFirestore();
  }

  async addCsPost(post) {
    try {
      const csRef = collection(this.db, 'cs-posts');
      const res = await setDoc(doc(csRef, `${post.id}`), post);
      console.log('Document written with ID: ', res.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async readCsPosts(setRows) {
    const querySnapshot = await getDocs(collection(this.db, 'cs-posts'));
    const datas = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      datas.push(data);
    });

    setRows(datas);
  }

  async readCsPost(id, setData) {}
}

export default Repository;

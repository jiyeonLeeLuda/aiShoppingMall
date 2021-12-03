import axios from 'axios';

class Cloudnary {
  constructor(cloudName, uploadPreset) {
    this.cloudnaryClient = axios.create({
      baseURL: `https://api.cloudinary.com/v1_1/${cloudName}`,
    });
    this.uploadPreset = uploadPreset;
  }

  async uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.uploadPreset);

    const res = await this.cloudnaryClient.post('image/upload', formData);
    if (res.status === 200) {
      // console.log(res);
      return res.data.url;
    }
    console.log('error', res);
  }
}

export default Cloudnary;

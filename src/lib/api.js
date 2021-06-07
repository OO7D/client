import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const getUserData = async () => {
  try {
    const data = await client.get('');
    return data;
  } catch (e) {
    console.log(e);
  }
};

// api 작성 공간

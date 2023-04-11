

const SERVER_API_URL = 'http://slimeyslime.net/yugioh';
const DEV_API_URL = 'http://localhost:3000/yugioh';
const API_URL = process.env.NODE_ENV === 'production' ? SERVER_API_URL : DEV_API_URL;

const IMAGE_URL = 'https://jinsu-s3.s3.ap-northeast-2.amazonaws.com/images'

export { API_URL, IMAGE_URL }
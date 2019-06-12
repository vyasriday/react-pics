import axios from 'axios';

// axios custom client
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID aa06454c54958337f477b3b74839f8d06746b6ad8c79ba4eacd6efee4c00fc3d'
  }
});

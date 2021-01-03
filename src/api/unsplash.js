import axios from 'axios';

// creates a customize copy of axios for create
export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID UQ_EwqCZkQp43VBg9ZtmV88FvVXUFTgKDuCX2MM3azE',
	},
});

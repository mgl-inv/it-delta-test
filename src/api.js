import axios from 'axios'

export const getCardsDataAPI = async (setData, setIsLoading) => {
	setIsLoading(true)
	await axios
		.get('https://boiling-refuge-66454.herokuapp.com/images')
		.then((response) => setData(response.data))
		.catch((error) => console.error(error.message))
	setIsLoading(false)
}

export const getOneCardDataAPI = async (setData, setIsLoading, cardId) => {
	setIsLoading(true)
	await axios
		.get(`https://boiling-refuge-66454.herokuapp.com/images/${cardId}`)
		.then((response) => setData(response.data))
		.catch((error) => console.error(error.message))
	setIsLoading(false)
}

export const postCommentsAPI = async (cardId, commentText) => {
	await axios
		.post(
			`https://boiling-refuge-66454.herokuapp.com/images/${cardId}/comments`,
			{
				id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
				text: commentText,
				data: Date.now()
			}
		)
		.then((response) => console.log('saved successfully'))
		.catch((error) => console.log(error))
}

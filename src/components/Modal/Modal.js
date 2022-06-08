import React, { useEffect, useState } from 'react'
import { getOneCardDataAPI, postCommentsAPI } from '../../api'
import './Modal.css'

function Modal({ setIsOpen, cardId }) {
	const [isLoading, setIsLoading] = useState(true)
	const [cardData, setCardData] = useState(null)
	const [commentText, setCommentText] = useState('')

	useEffect(() => {
		getOneCardDataAPI(setCardData, setIsLoading, cardId)
		console.log(cardData, Date.now())
	}, [])

	const handleCommentTextChange = (el) => {
		setCommentText(el.target.value)
		console.log(commentText)
	}

	const handleFormSubmit = async (e) => {
		e.preventDefault()
		postCommentsAPI(cardId, commentText)
	}

	return (
		<>
			{isLoading && <div className='modal-loading'>Loading</div>}
			{!isLoading && (
				<>
					<div
						onClick={() => setIsOpen(false)}
						className='modal__background centered'
					/>
					<div className='centered'>
						<div className='modal'>
							<img
								src={cardData.url}
								alt={cardData.id}
								className='modal__image'
							/>
							<form
								className='form'
								onSubmit={(e) => handleFormSubmit(e)}
							>
								<label
									htmlFor='comment'
									className='form__label'
								>
									Comment
								</label>
								<textarea
									id='comments'
									cols='30'
									rows='10'
									value={commentText}
									className='form__textarea'
									onChange={handleCommentTextChange}
								></textarea>
								<h5 className='form__text'>
									Write a few sentences about the photo.
								</h5>
								{cardData.comments.map((comment) => (
									<div className='comment'>
										<h3 className='comment__author'>
											{comment.id}:
										</h3>
										<h5 className='comment__text'>
											{comment.text}
										</h5>
									</div>
								))}
								<input
									type='submit'
									className='form__input'
									value='Save'
								/>
							</form>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default Modal

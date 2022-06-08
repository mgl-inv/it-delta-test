import React, { useEffect, useState } from 'react'
import './Cards.css'
import Modal from '../Modal/Modal'
import { getCardsDataAPI } from '../../api'

function Cards() {
	const [isLoading, setIsLoading] = useState(true)
	const [isOpen, setIsOpen] = useState(false)
	const [cardsData, setCardsData] = useState([])
	const [cardKey, setCardKey] = useState(0)

	useEffect(() => {
		getCardsDataAPI(setCardsData, setIsLoading)
	}, [])

	const handlerOnCardClick = (card) => {
		setCardKey(card.id)
		setIsOpen(true)
	}

	return (
		<div>
			{isLoading && <div className='cards-loading'>Loading</div>}
			{!isLoading && (
				<div className='cards-wrapper'>
					{cardsData.map((card) => (
						<div
							className='card'
							key={card.id}
							onClick={() => handlerOnCardClick(card)}
						>
							<img
								className='card__image'
								src={`${card.url}`}
								alt={card.id}
							></img>
							<h3 className='card__text'>id: {card.id}</h3>
						</div>
					))}
				</div>
			)}
			{isOpen && <Modal setIsOpen={setIsOpen} cardId={cardKey} />}
		</div>
	)
}

export default Cards

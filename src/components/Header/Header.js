import React from 'react'
import './Header.css'

function Header() {
	return (
		<div className='header-wrapper'>
			<div className='header__banner'></div>
			<div className='header__content'>
				<div className='header__content-userinfo'>
					<div className='userinfo__avatar'></div>
					<div className='userinfo__name'>Ricardo Cooper</div>
				</div>
				<div className='header__content-buttons'>
					<button className='buttons__messagebtn button'>Message</button>
					<button className='buttons__callbtn button'>Call </button>
				</div>
			</div>
		</div>
	)
}

export default Header

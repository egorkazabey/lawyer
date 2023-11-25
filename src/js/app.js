'use strict'

document.querySelector('.burger__menu').addEventListener('click', function() {
	this.classList.toggle('active')
	document.querySelector('.nav__menu').classList.toggle('open')
})
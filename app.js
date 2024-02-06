const toggle = document.querySelector('#theme')
const youTube = document.querySelector('.youtube')
const disc = document.querySelector('.discord')
const grid = document.querySelector('.grid')
const credits = document.querySelector('p')
const all = document.querySelectorAll('button')

const light = 'rgba(255, 255, 255, 0.3)'
const dark = 'rgba(0, 0, 0, 0.4)'
const lightRed = 'rgba(255, 0, 0, 0.3)'
const lightBlue = 'rgba(0, 0, 255, 0.2)'
const darkRed = 'rgba(255, 0, 0, 0.3)'
const darkBlue = 'rgba(0, 140, 255, 0.2)'

for (let i = 0; i < all.length; i++) {
	all[i].addEventListener('mouseup', () => {
		console.log(`button ${i} is pressed`)
		$('tracked').innerHTML = `${i} is pressed.`
	})
}

toggle.addEventListener('input', () => {
	if (document.querySelector('#theme:checked')) {
		console.log('checked')

		document.body.style.backgroundColor = 'rgba(65, 65, 65)'
		grid.style.boxShadow = '10px 10px 25px rgba(40, 40, 40), -10px -10px 25px -1px rgba(80, 80, 80)'
		disc.style.color = light
		youTube.style.color = light
		credits.style.color = light
		$('creation').style.color = 'rgba(255, 255, 255, 0.3)'

		youTube.addEventListener('mouseover', () => {
			youTube.style.color = darkRed
			console.log(darkRed)
		})
		youTube.addEventListener('mouseout', () => {
			youTube.style.color = light
		})

		disc.addEventListener('mouseover', () => {
			disc.style.color = darkBlue
		})
		disc.addEventListener('mouseout', () => {
			disc.style.color = light
		})

		for (let i = 0; i < all.length; i++) {
			all[i].style.color = 'rgba(255, 255, 255, 0.3)'

			all[i].addEventListener('mouseover', () => {
				all[i].style.boxShadow = '5px 5px 15px -1px rgba(40, 40, 40), -5px -5px 15px -1px rgba(80, 80, 80)'
				all[i].style.color = 'rgba(255, 255, 255, 0.6)'
			})

			all[i].addEventListener('mouseout', () => {
				all[i].style.boxShadow = 'none'
				all[i].style.color = 'rgba(255, 255, 255, 0.3)'
			})

			all[i].addEventListener('mousedown', () => {
				all[i].style.transition = '0.09s'
				all[i].style.boxShadow = '5px 5px 15px -1px rgba(40, 40, 40), -5px -5px 15px -1px rgba(80, 80, 80), inset 5px 5px 15px -1px rgba(40, 40, 40), inset -5px -5px 15px -1px rgba(80, 80, 80, 0)'
				all[i].style.color = 'rgba(255, 255, 255, 0.9)'
			})

			all[i].addEventListener('mouseup', () => {
				all[i].style.transition = '0.2s'
				all[i].style.boxShadow = '5px 5px 15px -1px rgba(40, 40, 40), -5px -5px 15px -1px rgba(80, 80, 80)'
				all[i].style.color = 'rgba(255, 255, 255, 0.6)'
			})
		}
	} else {
		console.log('unchecked')

		document.body.style.backgroundColor = 'rgba(220, 220, 220)'
		grid.style.boxShadow = '10px 10px 25px rgba(180,180, 180), -10px -10px 25px -1px rgba(255, 255, 255)'
		disc.style.color = 'rgba(0, 0, 0, 0.3)'

		disc.style.color = dark
		youTube.style.color = dark
		credits.style.color = dark
		$('creation').style.color = 'rgba(0, 0, 0, 0.4)'

		youTube.addEventListener('mouseover', () => {
			youTube.style.color = lightRed
		})
		youTube.addEventListener('mouseout', () => {
			youTube.style.color = dark
		})

		disc.addEventListener('mouseover', () => {
			disc.style.color = lightBlue
		})
		disc.addEventListener('mouseout', () => {
			disc.style.color = dark
		})

		for (let i = 0; i < all.length; i++) {
			all[i].style.color = 'rgba(0, 0, 0, 0.5)'

			// document.querySelector(`.button${i}`).style.color = 'rgba(0, 0, 0, 0.5)'
			all[i].style.boxShadow = 'none'

			all[i].style.color = 'rgba(0, 0, 0, 0.3)'

			all[i].addEventListener('mouseover', () => {
				all[i].style.boxShadow = '5px 5px 15px -1px rgba(180, 180, 180), -5px -5px 15px -1px rgba(255, 255, 255)'
				all[i].style.color = 'rgba(0, 0, 0, 0.6)'
			})

			all[i].addEventListener('mouseout', () => {
				all[i].style.boxShadow = 'none'
				all[i].style.color = 'rgba(0, 0, 0, 0.3)'
			})

			all[i].addEventListener('mousedown', () => {
				all[i].style.boxShadow = '5px 5px 15px -1px rgba(180, 180, 180), -5px -5px 15px -1px rgba(255, 255, 255), inset 5px 5px 15px -1px rgba(180, 180, 180), inset -5px -5px 15px -1px rgba(255, 255, 255, 0)'
				all[i].style.color = 'rgba(0, 0, 0, 0.9)'
			})

			all[i].addEventListener('mouseup', () => {
				all[i].style.boxShadow = '5px 5px 15px -1px rgba(180, 180, 180), -5px -5px 15px -1px rgba(255, 255, 255)'
				all[i].style.color = 'rgba(0, 0, 0, 0.6)'
			})
		}
	}
})

function UncheckAll() {
	const check = document.getElementsByTagName('input')
	for (let i = 0; i < check.length; i++) {
		if (check[i].type == 'checkbox') {
			check[i].checked = false
		}
	}
}

function $(x) {
	return document.getElementById(x)
}

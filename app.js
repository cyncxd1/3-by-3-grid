const toggle = document.querySelector('#theme')
const youTube = document.querySelector('.youtube')
const disc = document.querySelector('.discord')
const grid = document.querySelector('.grid')
const credits = document.querySelector('p')

const light = 'rgba(255, 255, 255, 0.3)'
const dark = 'rgba(0, 0, 0, 0.4)'
const lightRed = 'rgba(255, 0, 0, 0.3)'
const lightBlue = 'rgba(0, 0, 255, 0.2)'
const darkRed = 'rgba(255, 0, 0, 0.3)'
const darkBlue = 'rgba(0, 140, 255, 0.2)'

for (let i = 1; i <= 9; i++) {
	document.getElementById('button' + i).addEventListener('mouseup', function () {
		console.log('button ' + i + ' is pressed')
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

		youTube.addEventListener('mouseover', function () {
			youTube.style.color = darkRed
			console.log(darkRed)
		})
		youTube.addEventListener('mouseout', function () {
			youTube.style.color = light
		})

		disc.addEventListener('mouseover', function () {
			disc.style.color = darkBlue
		})
		disc.addEventListener('mouseout', function () {
			disc.style.color = light
		})

		for (let i = 1; i <= 9; i++) {
			document.querySelector('.button' + i).style.color = 'rgba(255, 255, 255, 0.7)'

			document.getElementById('button' + i).addEventListener('mouseover', function () {
				document.getElementById('button' + i).style.boxShadow = '5px 5px 15px -1px rgba(40, 40, 40), -5px -5px 15px -1px rgba(80, 80, 80)'
			})

			document.getElementById('button' + i).addEventListener('mouseout', function () {
				document.getElementById('button' + i).style.boxShadow = 'none'
			})

			document.getElementById('button' + i).addEventListener('mousedown', function () {
				document.getElementById('button' + i).style.transition = '0.09s'
				document.getElementById('button' + i).style.boxShadow = '5px 5px 15px -1px rgba(40, 40, 40), -5px -5px 15px -1px rgba(80, 80, 80), inset 5px 5px 15px -1px rgba(40, 40, 40), inset -5px -5px 15px -1px rgba(80, 80, 80, 0)'
			})

			document.getElementById('button' + i).addEventListener('mouseup', function () {
				document.getElementById('button' + i).style.transition = '0.2s'
				document.getElementById('button' + i).style.boxShadow = '5px 5px 15px -1px rgba(40, 40, 40), -5px -5px 15px -1px rgba(80, 80, 80)'
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

		youTube.addEventListener('mouseover', function () {
			youTube.style.color = lightRed
		})
		youTube.addEventListener('mouseout', function () {
			youTube.style.color = dark
		})

		disc.addEventListener('mouseover', function () {
			disc.style.color = lightBlue
		})
		disc.addEventListener('mouseout', function () {
			disc.style.color = dark
		})

		for (let i = 1; i <= 9; i++) {
			document.querySelector('.button' + i).style.color = 'rgba(0, 0, 0, 0.5)'
			document.getElementById('button' + i).style.boxShadow = 'none'

			document.getElementById('button' + i).addEventListener('mouseover', function () {
				document.getElementById('button' + i).style.boxShadow = '5px 5px 15px -1px rgba(180, 180, 180), -5px -5px 15px -1px rgba(255, 255, 255)'
			})

			document.getElementById('button' + i).addEventListener('mouseout', function () {
				document.getElementById('button' + i).style.boxShadow = 'none'
			})

			document.getElementById('button' + i).addEventListener('mousedown', function () {
				document.getElementById('button' + i).style.boxShadow = '5px 5px 15px -1px rgba(180, 180, 180), -5px -5px 15px -1px rgba(255, 255, 255), inset 5px 5px 15px -1px rgba(180, 180, 180), inset -5px -5px 15px -1px rgba(255, 255, 255, 0)'
			})

			document.getElementById('button' + i).addEventListener('mouseup', function () {
				document.getElementById('button' + i).style.boxShadow = '5px 5px 15px -1px rgba(180, 180, 180), -5px -5px 15px -1px rgba(255, 255, 255)'
			})
		}
	}
})

function UncheckAll() {
	var w = document.getElementsByTagName('input')
	for (var i = 0; i < w.length; i++) {
		if (w[i].type == 'checkbox') {
			w[i].checked = false
		}
	}
}

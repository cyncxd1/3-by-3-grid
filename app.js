const lightTheme = {
	bodyBgColor: 'rgba(220, 220, 220)',
	gridBoxShadow: '10px 10px 25px rgba(180, 180, 180), -10px -10px 25px -1px rgba(255, 255, 255)',
	buttonColor: 'rgba(0, 0, 0, 0.3)',
	buttonShadow: '5px 5px 15px -1px rgba(180, 180, 180), -5px -5px 15px -1px rgba(255, 255, 255)',
	buttonBoxShadow: 'none',
	buttonHoverColor: 'rgba(0, 0, 0, 0.6)',
	buttonHoverShadow: '5px 5px 15px -1px rgba(180, 180, 180), -5px -5px 15px -1px rgba(255, 255, 255)',
	buttonActiveColor: 'rgba(0, 0, 0, 0.9)',
	buttonActiveShadow: '5px 5px 15px -1px rgba(180, 180, 180), -5px -5px 15px -1px rgba(255, 255, 255), inset 5px 5px 15px -1px rgba(180, 180, 180), inset -5px -5px 15px -1px rgba(255, 255, 255, 0)',
	textColor: 'rgba(0, 0, 0, 0.3)', // Add text color for light theme
	ytHovCol: 'rgba(255, 0, 0, 0.3)',
	dcHovCol: 'rgba(100, 130, 255, 0.3)',
}

const darkTheme = {
	bodyBgColor: 'rgba(65, 65, 65)',
	gridBoxShadow: '10px 10px 25px rgba(40, 40, 40), -10px -10px 25px -1px rgba(80, 80, 80)',
	buttonColor: 'rgba(255, 255, 255, 0.3)',
	buttonShadow: '5px 5px 15px -1px rgba(40, 40, 40), -5px -5px 15px -1px rgba(80, 80, 80)',
	buttonBoxShadow: 'none',
	buttonHoverColor: 'rgba(255, 255, 255, 0.6)',
	buttonHoverShadow: '5px 5px 15px -1px rgba(40, 40, 40), -5px -5px 15px -1px rgba(80, 80, 80)',
	buttonActiveColor: 'rgba(255, 255, 255, 0.9)',
	buttonActiveShadow: '5px 5px 15px -1px rgba(40, 40, 40), -5px -5px 15px -1px rgba(80, 80, 80), inset 5px 5px 15px -1px rgba(40, 40, 40), inset -5px -5px 15px -1px rgba(80, 80, 80, 0)',
	textColor: 'rgba(255, 255, 255, 0.3)', // Add text color for dark theme
	ytHovCol: 'rgba(255, 0, 0, 0.5)',
	dcHovCol: 'rgba(100, 130, 255, 0.5)',
}

function applyTheme(theme) {
	document.body.style.backgroundColor = theme.bodyBgColor
	document.querySelector('.grid').style.boxShadow = theme.gridBoxShadow
	const buttons = document.querySelectorAll('button')
	buttons.forEach((button) => {
		button.style.color = theme.buttonColor
		button.style.boxShadow = theme.buttonBoxShadow
		button.addEventListener('mouseover', () => {
			button.style.boxShadow = theme.buttonShadow
			button.style.color = theme.buttonHoverColor
		})
		button.addEventListener('mouseout', () => {
			button.style.boxShadow = theme.buttonBoxShadow
			button.style.color = theme.buttonColor
		})
		button.addEventListener('mousedown', () => {
			button.style.boxShadow = theme.buttonActiveShadow
			button.style.color = theme.buttonActiveColor
		})
		button.addEventListener('mouseup', () => {
			button.style.boxShadow = theme.buttonShadow
			button.style.color = theme.buttonHoverColor
		})
	})

	// Update text color based on the theme
	const textElements = document.querySelectorAll('.discord, .youtube, p')
	textElements.forEach((element) => {
		element.style.color = theme.textColor
		element.addEventListener('mouseout', () => {
			textElements.forEach((element) => {
				element.style.color = theme.textColor
			})
		})
	})

	// change col on hover
	const yt = document.querySelector('.youtube')
	const dc = document.querySelector('.discord')

	yt.addEventListener('mouseover', () => {
		yt.style.color = theme.ytHovCol
	})
	dc.addEventListener('mouseover', () => {
		dc.style.color = theme.dcHovCol
	})
}

// Initial setup
applyTheme(lightTheme) // Default to light theme
document.getElementById('theme').addEventListener('change', function () {
	this.checked ? applyTheme(darkTheme) : applyTheme(lightTheme)
})

// Function to uncheck all checkboxes
function uncheckAllCheckboxes() {
	document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
		checkbox.checked = false
	})
}

// Utility function to select elements by ID
function $(id) {
	return document.getElementById(id)
}

// Event listeners
document.querySelectorAll('button').forEach((button, index) => {
	button.addEventListener('mouseup', () => ($('tracked').textContent = `${index + 1} is clicked`))
})

document.querySelector('#theme').addEventListener('input', handleCheckboxChange)

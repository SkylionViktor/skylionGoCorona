const burger = document.querySelector('.header_burger')
const brgMenu = document.querySelector('.header_item')

burger.addEventListener('click', function () {
	burger.classList.toggle('_active');
	brgMenu.classList.toggle('_visible')

})
if(burger.classList.contain('_active')){
	document.body.style.overflov = 'hiden'
} else { document.body.style.overflov = ''};

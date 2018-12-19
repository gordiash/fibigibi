element = document.getElementById("animate");
social = document.getElementById('social');

window.addEventListener('load', e => {
	e.preventDefault();
	social.classList.add('social_show');
});


if (element) {
	// reset the transition by...
	element.addEventListener("click", function(e) {
		e.preventDefault;

		console.log('element', element.classList);

		// removing the class
		element.classList.remove("run-animation");
		social.classList.remove('social_show');
		
		// triggering reflow
		void element.offsetWidth;

		// and re-adding the class
		element.classList.add("run-animation");
		social.classList.add('social_show');

	}, false);
}

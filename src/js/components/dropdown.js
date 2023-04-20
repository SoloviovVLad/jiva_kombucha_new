const dropdown = () => {
	const selectors = {
		trigger: '.js-dropdown',
		text: '.js-dropdown-text',
		openMod: 'dropdown--open_state',
	};

	const dropdowns = document.querySelectorAll(selectors.trigger);

	if (dropdowns) {
		dropdowns.forEach((item) => {
			item.addEventListener('click', () => {
				const currentText = item.querySelector(selectors.text);
				const currentHeight = currentText.scrollHeight;
				if (!item.classList.contains(selectors.openMod)) {
					closeDropdowns();
					item.classList.add(selectors.openMod);
					currentText.style.height = `${currentHeight}px`;
				} else {
					closeDropdowns();
				}
			});
		});
	}

	function closeDropdowns() {
		const dropdownOpens = document.querySelectorAll('.dropdown.dropdown--open_state');
		dropdownOpens.forEach((dropdownItem) => {
			dropdownItem.classList.remove('dropdown--open_state');
			const currentText = dropdownItem.querySelector(selectors.text);
			currentText.style.height = 0;
		});
	}
};

export default dropdown;

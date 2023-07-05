// Get all the card elements
const cards = document.querySelectorAll('.card');

// Add event listeners to each card
cards.forEach(card => {
  const table = card.querySelector('table');
  const generalDescription = card.querySelector('.general-description');
  const petName = card.querySelector('h3');
  let isHovered = false;  

  // Hide the table and show the general description on hover
  card.addEventListener('mouseover', () => {
    if (!isHovered) {
      table.style.display = 'none';
      generalDescription.style.display = 'block';
      petName.textContent = `Meet, ${petName.textContent}`;
      isHovered = true;
    }
  });

  // Show the table and hide the general description when not hovering
  card.addEventListener('mouseout', () => {
    table.style.display = 'table';
    generalDescription.style.display = 'none';
    petName.textContent = petName.textContent.replace('Meet, ', '');
    isHovered = false;
  });
});

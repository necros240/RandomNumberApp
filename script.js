document.getElementById('generate-btn').addEventListener('click', () => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output
  
    // Step 1: Generate 17 random numbers (1, 2, or 3)
    const numbers = [];
    for (let i = 0; i < 17; i++) {
      const randomNum = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
      numbers.push(randomNum);
    }
  
    // Step 2: Display numbers in the output div
    numbers.forEach((num, index) => {
      const numDiv = document.createElement('div');
      numDiv.className = 'number';
      numDiv.textContent = num;
      outputDiv.appendChild(numDiv);
    });
  
    // Step 3: Highlight 14 random numbers
    const randomIndexes = new Set();
    while (randomIndexes.size < 14) {
      randomIndexes.add(Math.floor(Math.random() * numbers.length));
    }
  
    Array.from(outputDiv.children).forEach((child, index) => {
      if (randomIndexes.has(index)) {
        child.classList.add('highlight');
      }
    });
  });
  
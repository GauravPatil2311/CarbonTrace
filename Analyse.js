function calculateAnalysisValue(numbers) {
    // Your logic to calculate analysis value based on numbers
    // For example, sum of all numbers
    return numbers.reduce((sum, num) => sum + num, 0);
}

document.getElementById('analyzeBtn').addEventListener('click', function () {
    var filePath = "test.txt"; // Provide the correct file path here

    fetch(filePath)
        .then(response => response.text())
        .then(numbersInput => {
            var numbers = numbersInput.split(/\s+/).map(num => parseInt(num, 10));

            var result = "Results: ";
            for (var i = 0; i < numbers.length; i++) {
                result += numbers[i] + " is " + (numbers[i] >= 10 ? "above" : "below") + " the threshold. ";
            }

            alert(result);

            // Trigger Optimize Now button based on the analysis
            var analysisValue = calculateAnalysisValue(numbers);
            var thresholdValue = 10;

            if (analysisValue > thresholdValue) {
                document.getElementById('optimizeBtn').classList.remove('hidden');
                alert("Your carbon footprint is above the threshold. Consider optimizing!");
            } else {
                alert("Your carbon footprint is below the threshold. You are safe!");
            }
        })
        .catch(error => console.error('Error reading the file:', error));

         // Get the button element
    const optimizeBtn = document.getElementById('optimizeBtn');

    // Add a click event listener to the button
    optimizeBtn.addEventListener('click', function() {
      // Redirect the user to Optimize.html
      window.location.href = 'Optimize.html';
    });
});

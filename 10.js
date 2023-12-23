
function evaluateScores() {
    const grades = [85, 70, 90];
    const percentiles = [90, 60, 95,70];

    for (let i = 0; i < grades.length; i++) {
        const gradeElement = document.getElementById(`grade${i + 1}`);
        const percentileElement = document.getElementById(`percentile${i + 1}`);
        const grade = grades[i];
        const percentile = percentiles[i];

        gradeElement.textContent = `Grade: ${grade}%`;
        percentileElement.textContent = `Percentile Score: ${percentile}`;
    }
}
evaluateScores();

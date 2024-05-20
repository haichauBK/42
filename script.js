document.addEventListener('DOMContentLoaded', function() {
    const startMonth = new Date(2022, 10); // November 2022 (Month is 0-indexed)
    const endMonth = new Date(2025, 10); // November 2025
    const totalMonths = (endMonth.getFullYear() - startMonth.getFullYear()) * 12 + (endMonth.getMonth() - startMonth.getMonth()) + 1;
    
    const currentDate = new Date();
    const passedMonths = (currentDate.getFullYear() - startMonth.getFullYear()) * 12 + (currentDate.getMonth() - startMonth.getMonth());

    let progress = Math.round((passedMonths / totalMonths) * 100);
    if (progress > 100) progress = 100;

    document.getElementById('progress-number').innerText = `${progress}%`;
    document.getElementById('progress-text').innerText = `${passedMonths} month${passedMonths !== 1 ? 's' : ''} / ${totalMonths} month${totalMonths !== 1 ? 's' : ''} gone`;

    if (passedMonths >= totalMonths) {
        document.getElementById('hexagon').style.display = 'block';
    }
});

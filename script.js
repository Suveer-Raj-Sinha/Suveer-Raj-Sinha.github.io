const expBtn = document.getElementById('expBtn');
const eduBtn = document.getElementById('eduBtn');
const expTimeline = document.getElementById('experienceTimeline');
const eduTimeline = document.getElementById('educationTimeline');

expBtn.addEventListener('click', () => {
    expBtn.classList.add('active');
    eduBtn.classList.remove('active');
    expTimeline.classList.remove('hidden');
    eduTimeline.classList.add('hidden');
});

eduBtn.addEventListener('click', () => {
    eduBtn.classList.add('active');
    expBtn.classList.remove('active');
    eduTimeline.classList.remove('hidden');
    expTimeline.classList.add('hidden');
});

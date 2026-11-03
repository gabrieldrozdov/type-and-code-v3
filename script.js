const projectNav = document.querySelectorAll('.project-nav a');
const projects = Array.from(document.querySelectorAll('.projects iframe'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        let index = projects.indexOf(entry.target);
        
        if (index !== -1) {
            if (entry.isIntersecting) {
                projectNav[index].dataset.active = 1;
            } else {
                projectNav[index].dataset.active = 0;
            }
        }
    });
}, {
    threshold: 0.5
});

for (let project of projects) {
    observer.observe(project);
}

function changeColors() {
	const body = document.querySelector('body');
	body.style.setProperty('--primary', `oklch(50% 0.25 ${Math.random()*360})`);
	body.style.setProperty('--secondary', `oklch(100% 0.25 ${Math.random()*360})`);
}
changeColors();
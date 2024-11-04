// Animation au survol des liens du menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => link.style.color = "#09f");
    link.addEventListener('mouseout', () => link.style.color = "#bbb");
});

// Animation sur les compétences
document.querySelectorAll('#competences ul li a').forEach(skill => {
    skill.addEventListener('mouseover', () => skill.style.transform = "scale(1.05)");
    skill.addEventListener('mouseout', () => skill.style.transform = "scale(1)");
});

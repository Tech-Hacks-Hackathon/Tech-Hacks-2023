function showSection(sectionId) {
    const sections = document.getElementsByTagName('section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.elements['email'].value;
    const password = this.elements['password'].value;
    console.log('Login - Email:', email, 'Password:', password);
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.elements['email'].value;
    const password = this.elements['password'].value;
    console.log('Signup - Email:', email, 'Password:', password);
});
showSection('home');

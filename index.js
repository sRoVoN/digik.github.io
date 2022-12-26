const root = document.documentElement;
const eye = document.getElementById('eyeball');
const beam = document.getElementById('beam');
const passwoedInput = document.getElementById('password');

root.addEventListener('mousemove', (e) => {
    let rect = beam.getBoundingClientRect();
    let mouseX = rect.right + (rect.width / 2);
    let mouseY = rect.top + (rect.height /2);
    let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
    let degrees = (red * (20 / Math.PI)* -1) -350;

    root.style.setProperty('--beamDegrees', '${degree}deg');

});
eye.addEventListener('click', e =>{
    e.preventDefault();
    document.body.classList.toggle('show-password');
    passwoedInput.type = passwoedInput.type === 'password' ? 'text' : 'password'
    passwoedInput.focus();
});
Array.from(document.querySelectorAll('nav a')).forEach((element) => {
  element.addEventListener('click', () => {
    if (element.classList.contains('nav-active')) {
      return;
    }

    document.querySelector('.nav-active').classList.remove('nav-active');
    element.classList.add('nav-active');

    document.querySelector('.page-content').classList.remove('page-content');
    document.getElementById(element.dataset.for).classList.add('page-content');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    const current = new Date();
    document.getElementById('date-time').innerText = current.toLocaleString();
  }, 1000);
});
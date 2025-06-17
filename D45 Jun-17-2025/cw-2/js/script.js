const title = document.querySelectorAll('.title');
const details = document.querySelectorAll('.details');

title.forEach((item, index) => {
    item.addEventListener('click', () => {
        title.forEach((it, ind) => {
            if(index === ind) {
                it.classList.toggle('active');
                if(details[ind].style.display === 'block') {
                    details[ind].style.display = 'none';
                } else {
                    details[ind].style.display = 'block';
                }
            } else {
                it.classList.remove('active');
                details[ind].style.display = 'none';
            }
        })
    })
})
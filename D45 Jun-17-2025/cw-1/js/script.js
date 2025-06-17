const dhaka = document.getElementById('dhaka');
const rajshahi = document.getElementById('rajshahi');
const khulna = document.getElementById('khulna');
const rangpur = document.getElementById('rangpur');
const dhakaContent = document.getElementById('dhakaContent');
const rajshahiContent = document.getElementById('rajshahiContent');
const khulnaContent = document.getElementById('khulnaContent');
const rangpurContent = document.getElementById('rangpurContent');

dhaka.addEventListener('click', () => {
    dhaka.classList.add('active');
    rajshahi.classList.remove('active');
    khulna.classList.remove('active');
    rangpur.classList.remove('active');
    dhakaContent.classList.add('active');
    rajshahiContent.classList.remove('active');
    khulnaContent.classList.remove('active');
    rangpurContent.classList.remove('active');
})

rajshahi.addEventListener('click', () => {
    dhaka.classList.remove('active');
    rajshahi.classList.add('active');
    khulna.classList.remove('active');
    rangpur.classList.remove('active');
    dhakaContent.classList.remove('active');
    rajshahiContent.classList.add('active');
    khulnaContent.classList.remove('active');
    rangpurContent.classList.remove('active');
})

khulna.addEventListener('click', () => {
    dhaka.classList.remove('active');
    rajshahi.classList.remove('active');
    khulna.classList.add('active');
    rangpur.classList.remove('active');
    dhakaContent.classList.remove('active');
    rajshahiContent.classList.remove('active');
    khulnaContent.classList.add('active');
    rangpurContent.classList.remove('active');
})

rangpur.addEventListener('click', () => {
    dhaka.classList.remove('active');
    rajshahi.classList.remove('active');
    khulna.classList.remove('active');
    rangpur.classList.add('active');
    dhakaContent.classList.remove('active');
    rajshahiContent.classList.remove('active');
    khulnaContent.classList.remove('active');
    rangpurContent.classList.add('active');
})
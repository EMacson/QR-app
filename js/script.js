const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if(url === '') {
        alert('Please enter a URL');
    } else {
        console.log('generate qr');
        generateQRCode(url, size);
    }
};

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    });
};

form.addEventListener('submit', onGenerateSubmit);
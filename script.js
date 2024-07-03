document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('button');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.textContent;
            
            if (keyValue === '=') {
                try {
                    display.value = eval(display.value);
                } catch(error) {
                    display.value = 'Error';
                }
            } else if (keyValue === 'C') {
                display.value = '';
            } else {
                display.value += keyValue;
            }
        });
    });
});

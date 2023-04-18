const openPopUp = document.querySelector('.open_pop_up');
const closePopUp = document.querySelector('.pop_up_close');
const popUp = document.querySelector('.pop_up');

openPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', (e) => {
    popUp.classList.remove('active');
})


// -------------------------------------------------------

const form = document.getElementById('form');
console.log(form);
form.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();
    let formData = new FormData(form);
    console.log('formData', formData);

    let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
    });
    if(response.ok){
        let result = await response.json();
        console.log(result.message);
        formPreview.innerHTML = "";
        form.reset();
    } else {
        alert('Error');
    }
} 

// -------------------------------------------------------------


[].forEach.call( document.querySelectorAll('.tel'), function(input) {
var keyCode;
function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    var pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function(a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
    i = new_value.indexOf("_");
    if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
    }
    var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function(a) {
            return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
    if (event.type == "blur" && this.value.length < 5)  this.value = ""
}

input.addEventListener("input", mask, false);
input.addEventListener("focus", mask, false);
input.addEventListener("blur", mask, false);
input.addEventListener("keydown", mask, false)

});


// --------------------



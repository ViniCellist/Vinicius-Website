const mode = document.querySelector(".theme");
const lang = document.querySelector(".lang");
const root = document.querySelector(".view");

mode.addEventListener('click', () => {
   const isTrue = mode.classList.contains('moon');
   const rootMode = root.classList.contains('light-mode');

   if (isTrue && rootMode) {
    mode.classList.remove('moon');
    mode.classList.add('sun');
    root.classList.remove('light-mode');
    root.classList.add('dark-mode');

   } else {
    mode.classList.remove('sun');
    mode.classList.add('moon');
    root.classList.remove('dark-mode');
    root.classList.add('light-mode');
    
   };
});

lang.addEventListener('click', () => {
    const isTrue = lang.classList.contains('pt');

    if (isTrue) {
        lang.classList.remove('pt');
        lang.classList.add('eng');
    } else {
        lang.classList.remove('eng');
        lang.classList.add('pt');
    };
    changeLang();
    
});

function changeLang() {
    const portuguese = document.querySelectorAll(".portuguese");
    const english = document.querySelectorAll(".english");

    portuguese.forEach(function(portText) {
        if (!portText.classList.contains('hidden')) {
            portText.classList.add('hidden');
        } else {
            portText.classList.remove('hidden');
        }
    });

    english.forEach(function(engText){
        if (!engText.classList.contains('hidden')) {
            engText.classList.add('hidden');
        } else {
            engText.classList.remove('hidden');
        }
    });
};
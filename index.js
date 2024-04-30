const quoteP = document.getElementById("quote");

const quotes = [
    "achchhā hai dil ke saath rahe pāsbān-e-aql   ----    lekin kabhī kabhī ise tanhā bhī chhoḌ de ",
    "dil se jo baat nikaltī hai asar rakhtī hai   ----    par nahīñ tāqat-e-parvāz magar rakhtī hai " ,
    "ilm meñ bhī surūr hai lekin   ----    ye vo jannat hai jis meñ huur nahīñ " ,
    "apne man meñ Duub kar pā jā surāġh-e-zindagī   ----    tū agar merā nahīñ bantā na ban apnā to ban ",
    "hazāroñ saal nargis apnī be-nūrī pe rotī hai   ----    baḌī mushkil se hotā hai chaman meñ dīda-var paidā ",
    "duniyā kī mahfiloñ se uktā gayā huuñ yā rab   ----    kyā lutf anjuman kā jab dil hī bujh gayā ho ",
    "faqat nigāh se hotā hai faisla dil kā   ----    na ho nigāh meñ shoḳhī to dilbarī kyā hai ",
    "nasha pilā ke girānā to sab ko aatā hai   ----    mazā to tab hai ki girtoñ ko thaam le saaqī ",
    "sitāroñ se aage jahāñ aur bhī haiñ   ----    abhī ishq ke imtihāñ aur bhī haiñ ",
    "maanā ki terī diid ke qābil nahīñ huuñ maiñ   ----    tū merā shauq dekh mirā intizār dekh " ,
    "ḳhudī ko kar buland itnā ki har taqdīr se pahle   ----    ḳhudā bande se ḳhud pūchhe batā terī razā kyā hai "
];

function poetryGenerator(){
    const index = Math.floor(Math.random() * quotes.length);
    const quote = quotes[index];
    quoteP.innerHTML = quote;
    
    quoteP.classList.remove("fadeIn");

    void quoteP.offsetWidth;

    quoteP.classList.add("fadeIn");
}

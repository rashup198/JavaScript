const question=[
    
    {
        'que': "Where is taj mahal located?",
        'option1': "Agra",
        'option2': "Delhi",
        'option3': "Mumbai",
        'option4': "Kolkata",
        'ans': "Agra"
    },
    {
        'que': "Where is red fort located?",
        'option1': "Agra",
        'option2': "Delhi",
        'option3': "Mumbai",
        'option4': "Kolkata",
        'ans': "Delhi"
    },
    {
        'que': "Where is Gateway of India located?",
        'option1': "Agra",
        'option2': "Delhi",
        'option3': "Mumbai",
        'option4': "Kolkata",
        'ans': "Mumbai"
    },
    {
        'que': "Where is Victoria Memorial located?",
        'option1': "Agra",
        'option2': "Delhi",
        'option3': "Mumbai",
        'option4': "Kolkata",
        'ans': "Kolkata"
    },
    {
        'que': "Where is India Gate located?",
        'option1': "Agra",
        'option2': "Delhi",
        'option3': "Mumbai",
        'option4': "Kolkata",
        'ans': "Delhi"
    },
    {
        'que': "Where is Qutub Minar located?",
        'option1': "Agra",
        'option2': "Delhi",
        'option3': "Mumbai",
        'option4': "Kolkata",
        'ans': "Delhi"
    },
    {
        'que': "Where is Charminar located?",
        'option1': "Agra",
        'option2': "Delhi",
        'option3': "Mumbai",
        'option4': "Hyderabad",
        'ans': "Hyderabad"
    }

]

let index=0;
const questiondata=document.querySelector('#question');
const optionss=document.querySelectorAll('.options');

const loadquestion=()=>{
    defaultset()
    const data= question[index];
    console.log(data);
    questiondata.innerHTML=`${index+1}. ${data.que}`;
    optionss[0].nextElementSibling.innerHTML=data.option1;
    optionss[1].nextElementSibling.innerHTML=data.option2;
    optionss[2].nextElementSibling.innerHTML=data.option3;
    optionss[3].nextElementSibling.innerHTML=data.option4;
    
    
}

let score =0;
let total = question.length;


document.querySelector("#next").addEventListener(
    "click",
    function(){
        const data = question[index]
        let anss= next();
        if(anss===data.ans){
            score++
        }
        index++

        if(index<total){
            loadquestion()
        }
        else{
            alert(`your score is ${score}`)
        }
        
    }
)
const next = () => {
    for (const option of optionss) {
        if (option.checked) {
        return option.nextElementSibling.innerHTML;
        }
    }
}
 
const defaultset=()=>{
    optionss.forEach((input)=>{
        input.checked=false
    })
}

loadquestion();
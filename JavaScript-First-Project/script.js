

const checkboxList = document.querySelectorAll('.custom-checkbox')
const allInputFillds = document.querySelectorAll('.goal-input')
const ErrorLable = document.querySelector('.error-lable')
const progressbar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')

checkboxList.forEach((checkbox)=>{
    checkbox.addEventListener('click', (e)=>{
        const allgoalsadded = [...allInputFillds].every(function(input){
            return input.value
        })

        if(allgoalsadded){
        checkbox.parentElement.classList.toggle('completed')
        }else{
            progressbar.classList.add('show-error')
            progressValue.computedStyleMap.width = "33.33%"
        }
    })
})

allInputFillds.forEach((input)=>{
    input.addEventListener('focus', ()=>{
        progressbar.classList.remove('show-error')
    })
})
// const h1 = document.querySelector("h1");
// const container = document.querySelector(".container");
// const firstImage = document.querySelector("img");

// for (let i = 2; i <= 100; i++) {
//     const nemImg = firstImage.cloneNode()
//     nemImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.appendChild(nemImg)
// }


/* JAB IMAGE DI HUE NA HO TAB ES TRAH SE CODE KARKE ELEMENT KO CREAT KARTE HE*/

// const container = document.querySelector('.container');

// for(let i = 1; i <= 100; i++){

//     const newImg2 = document.createElement('img');
//     newImg2.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.appendChild(newImg2)
    
// }


/* IMG KO NUMBRING KE SATH PAGE PAR SHOW KARNA HO TAB */

// const container = document.querySelector('.container');

// for(let i = 1; i <= 100; i++){
//     const imgContainer = document.createElement('div');
//     imgContainer.classList.add('img-container');

//     const newImg = document.createElement('img')
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//     const paragraph = document.createElement('p')
//     paragraph.innerText = i;

//     imgContainer.append(newImg,paragraph);
//     container.prepend(imgContainer)
// }


/*CODE KA SORT  TREEKA*/

const container = document.querySelector('.container');

let myHTML = ``;

for(let i = 1; i <= 100; i++){

    myHTML += `
    <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
    <p>${i}</p>
    </div>
    `
}

container.innerHTML = myHTML;


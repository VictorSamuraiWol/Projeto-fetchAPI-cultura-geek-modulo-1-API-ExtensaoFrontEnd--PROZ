let containerProduct = document.getElementById('container-product');
let form = document.getElementById('form');
let nameText = document.getElementById('name-text');
let priceText = document.getElementById('price-text');
let descriptionText = document.getElementById('description-text');
const btnSubmit = document.getElementById('btn-submit');
const helperText = document.getElementById('helper-text')
let sectionPost = document.getElementById('section-post');


console.log(containerProduct, form, nameText, priceText, descriptionText, btnSubmit, helperText, sectionPost)

function postProduct () {
    let jsonProduct = JSON.stringify({
        name: nameText.value,
        price: priceText.value,
        description: descriptionText.value
    });
    fetch('https://httpbin.org/post', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            jsonProduct            
        }
    })
    .then((res => res.json()))
    .then((data) => {
        console.log(data)
        console.log(jsonProduct)
        const post = document.createElement('div');
        post.classList.add('stylePostsComments')
        post.innerHTML = `
        <img id='imgPost' src='https://httpbin.org/image' alt='imagem da postagem'/>
        <span class='stylePost' id='namePost'><strong>Nome:</strong> ${nameText.value}</span>
        <span class='stylePost' id='pricePost'><strong>Preço:</strong> ${priceText.value}</span>
        <span class='stylePost' id='descriptionPost'><strong>Descrição:</strong> ${descriptionText.value}</span>

        `
        sectionPost.prepend(post);

        nameText.value = '';
        priceText.value = '';
        descriptionText.value = '';
        alert('Seu produto foi armazenado com sucesso!') 
    })
    .catch(error => {
        console.log(error)
        alert('Não foi possível armazenar o produto, por favor, tente novamente!');
        helperText.classList.add('styleHelper');
        helperText.innerText = 'Não foi possível armazenar o produto, por favor, tente novamente!'
    })

}









btnSubmit.addEventListener('click', postProduct)


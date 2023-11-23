import { catalogo } from "./utilidades.js";
import { adicionarAoCarrinho } from "./menuCarrinho.js";



export function renderizarCatalogo()  {
for (const produtoCatalogo of catalogo) {
   const cartaoProduto = `<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between group shadow-xl shadow-slate-400 rounded-lg ${produtoCatalogo.feminino ? "feminino" : "masculino"}' id="card-produto-${produtoCatalogo.id}">
<img
   src="./assets/img/${produtoCatalogo.imagem}"
   alt="Produto 1 Magazine Hastag."
   class='hover:scale-110'
/>

<p class='text-sm'>${produtoCatalogo.marca}</p>
<p class='text-sm'>${produtoCatalogo.nome}</p>
<p class='text-sm'>$${produtoCatalogo.preco}</p>
<button id='adicionar-${produtoCatalogo.id}' class='bg-slate-200 hover:bg-slate-700 text-slate-900'>
<i class="fa-solid fa-cart-plus"></i></button>
</div>`;  
    
   document.getElementById("container-produto").innerHTML += cartaoProduto;
   document.getElementById(`adicionar-${produtoCatalogo.id}`);
 } 

 for (const produtoCatologo of catalogo) {
    document.getElementById(`adicionar-${produtoCatologo.id}`)
    .addEventListener("click",() => adicionarAoCarrinho(produtoCatologo.id));
 }
}


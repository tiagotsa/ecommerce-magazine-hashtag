(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const d=[{id:"1",marca:"Zara",nome:"Camisa Larga com Bolsos",preco:70,imagem:"product-1.jpg",feminino:!1},{id:"2",marca:"Zara",nome:"Casaco Reto com Lã",preco:85,imagem:"product-2.jpg",feminino:!0},{id:"3",marca:"Zara",nome:"Jaqueta com Efeito Camurça",preco:60,imagem:"product-3.jpg",feminino:!1},{id:"4",marca:"Zara",nome:"Sobretudo em Mescla de Lã",preco:160,imagem:"product-4.jpg",feminino:!1},{id:"5",marca:"Zara",nome:"Camisa Larga Acolchoada de Veludo Cotelê",preco:110,imagem:"product-5.jpg",feminino:!1},{id:"6",marca:"Zara",nome:"Casaco de Lã com Botões",preco:170,imagem:"product-6.jpg",feminino:!0},{id:"7",marca:"Zara",nome:"Casaco com Botões",preco:75,imagem:"product-7.jpg",feminino:!0},{id:"8",marca:"Zara",nome:"Colete Comprido com Cinto",preco:88,imagem:"product-8.jpg",feminino:!0}];function l(e,t){localStorage.setItem(e,JSON.stringify(t))}function C(e){return JSON.parse(localStorage.getItem(e))}const r=C("carrinho")??{};function E(){document.getElementById("carrinho").classList.add("right-[0px]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function x(){document.getElementById("carrinho").classList.remove("right-[0px]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function L(){Object.keys(r).length!==0&&(window.location.href=window.location.origin+"/checkout.html")}function b(){const e=document.getElementById("fechar-carrinho"),t=document.getElementById("abrir-carrinho"),a=document.getElementById("finalizar-compra");e.addEventListener("click",x),t.addEventListener("click",E),a.addEventListener("click",L)}function f(e){const t=d.find(c=>c.id===e),a=document.getElementById("produto-carrinho"),i=document.createElement("article"),o=["flex","bg-slate-100","rounded-lg","p-1","relative"];for(const c of o)i.classList.add(c);const n=`<button id="remove-item-${t.id}" class="absolute top-0 right-2">
        <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
        </button>
        <img src="./assets/img/${t.imagem}" 
        alt="Carrinho: ${t.nome}" 
        class="h-24 rounded-lg"
        />
        <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">
          ${t.nome}
        </p>
        <p class="text-slate-900 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${t.preco}</p>
      </div>
    <div class='flex text-slate-900 items-end absolute bottom-0 right-2 text-lg'>
        <button class='ml-2' id='decrementar-produto-${t.id}'>-</button>
        <p class='ml-2' id='quantidade-${t.id}'>${r[t.id]}</p>
        <button class='ml-2' id='incrementar-produto-${t.id}'>+</button>
    </div>`;i.innerHTML=n,a.appendChild(i),document.getElementById(`decrementar-produto-${t.id}`).addEventListener("click",()=>v(t.id)),document.getElementById(`incrementar-produto-${t.id}`).addEventListener("click",()=>g(t.id)),document.getElementById(`remove-item-${t.id}`).addEventListener("click",()=>p(t.id))}function p(e){delete r[e],l("carrinho",r),s(),y()}function g(e){r[e]++,l("carrinho",r),s(),h(e)}function v(e){if(r[e]===1){p(e);return}r[e]--,l("carrinho",r),h(e),s()}function h(e){document.getElementById(`quantidade-${e}`).innerText=r[e]}function y(){const e=document.getElementById("produto-carrinho");e.innerHTML="";for(const t in r)f(t)}function B(e){if(e in r){g(e);return}r[e]=1,l("carrinho",r),f(e),s()}function s(){const e=document.getElementById("preco-total");let t=0;for(const a in r)t+=d.find(i=>i.id===a).preco*r[a];e.innerText=`Total: $${t}`}function I(){for(const e of d){const t=`<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between group shadow-xl shadow-slate-400 rounded-lg ${e.feminino?"feminino":"masculino"}' id="card-produto-${e.id}">
<img
   src="./assets/img/${e.imagem}"
   alt="Produto 1 Magazine Hastag."
   class='hover:scale-110'
/>

<p class='text-sm'>${e.marca}</p>
<p class='text-sm'>${e.nome}</p>
<p class='text-sm'>$${e.preco}</p>
<button id='adicionar-${e.id}' class='bg-slate-200 hover:bg-slate-700 text-slate-900'>
<i class="fa-solid fa-cart-plus"></i></button>
</div>`;document.getElementById("container-produto").innerHTML+=t,document.getElementById(`adicionar-${e.id}`)}for(const e of d)document.getElementById(`adicionar-${e.id}`).addEventListener("click",()=>B(e.id))}const m=document.getElementById("container-produto");function u(){const e=Array.from(m.getElementsByClassName("hidden"));for(const t of e)t.classList.remove("hidden")}function $(){u();const e=Array.from(m.getElementsByClassName("masculino"));for(const t of e)t.classList.add("hidden")}function P(){u();const e=Array.from(m.getElementsByClassName("feminino"));for(const t of e)t.classList.add("hidden")}function j(){document.getElementById("exibir-todos").addEventListener("click",u),document.getElementById("exibir-masculinos").addEventListener("click",P),document.getElementById("exibir-femininos").addEventListener("click",$)}I();b();s();y();j();

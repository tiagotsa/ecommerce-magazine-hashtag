import { catalogo, lerLocalStorage, salvarLocalStorage } from "./utilidades.js";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

function irParaCheckout() {
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }
    window.location.href = window.location.origin + "/checkout.html";

}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
    const botaoIrParaCheckout = document.getElementById("finalizar-compra");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    botaoIrParaCheckout.addEventListener("click", irParaCheckout);

}

function desenharProdutoNoCarrinho(idProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutoCarrinho =
        document.getElementById("produto-carrinho");

    const elementoArticle = document.createElement("article");
    const articleClasses = [
        "flex",
        "bg-slate-100",
        "rounded-lg",
        "p-1",
        "relative",
    ];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
    }

    const cartaoProdutoCarrinho = `<button id="remove-item-${produto.id
        }" class="absolute top-0 right-2">
        <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
        </button>
        <img src="./assets/img/${produto.imagem}" 
        alt="Carrinho: ${produto.nome}" 
        class="h-24 rounded-lg"
        />
        <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">
          ${produto.nome}
        </p>
        <p class="text-slate-900 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
    <div class='flex text-slate-900 items-end absolute bottom-0 right-2 text-lg'>
        <button class='ml-2' id='decrementar-produto-${produto.id}'>-</button>
        <p class='ml-2' id='quantidade-${produto.id}'>${idsProdutoCarrinhoComQuantidade[produto.id]
        }</p>
        <button class='ml-2' id='incrementar-produto-${produto.id}'>+</button>
    </div>`;

    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutoCarrinho.appendChild(elementoArticle);

    document
        .getElementById(`decrementar-produto-${produto.id}`)
        .addEventListener("click", () => decrementarQuantidadeProduto(produto.id));

    document
        .getElementById(`incrementar-produto-${produto.id}`)
        .addEventListener("click", () => incrementarQuantidadedeProduto(produto.id));

    document
        .getElementById(`remove-item-${produto.id}`)
        .addEventListener("click", () => removeDoCarrinho(produto.id));

}

function removeDoCarrinho(idProduto) {
    delete idsProdutoCarrinhoComQuantidade[idProduto];
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    renderizarProdutoCarrinho();

}

function incrementarQuantidadedeProduto(idProduto) {
    idsProdutoCarrinhoComQuantidade[idProduto]++;
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
    if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
        removeDoCarrinho(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto]--;
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    atualizarInformacaoQuantidade(idProduto);
    atualizarPrecoCarrinho();

}

function atualizarInformacaoQuantidade(idProduto) {
    document.getElementById(`quantidade-${idProduto}`).innerText =
        idsProdutoCarrinhoComQuantidade[idProduto];

}

export function renderizarProdutoCarrinho() {
    const containerProdutoCarrinho =
        document.getElementById("produto-carrinho");
    containerProdutoCarrinho.innerHTML = "";

    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinho(idProduto);

    }

}

export function adicionarAoCarrinho(idProduto) {
    if (idProduto in idsProdutoCarrinhoComQuantidade) {
        incrementarQuantidadedeProduto(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    desenharProdutoNoCarrinho(idProduto);
    atualizarPrecoCarrinho();
}

export function atualizarPrecoCarrinho() {
    const precoCarrinho = document.getElementById("preco-total");
    let precoTotalCarrinho = 0;
    for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
        precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
    }

    precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;
}

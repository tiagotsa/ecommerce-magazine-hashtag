import { renderizarCatalogo } from "./src/cartaoProduto.js";
import { inicializarFiltros } from "./src/filtrosCatalogo.js";
import {
    atualizarPrecoCarrinho,
    inicializarCarrinho,
    renderizarProdutoCarrinho,
} from "./src/menuCarrinho.js";

renderizarCatalogo();
inicializarCarrinho();
atualizarPrecoCarrinho();
renderizarProdutoCarrinho();
inicializarFiltros();
inicializarFiltros
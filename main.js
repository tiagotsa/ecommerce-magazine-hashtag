import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import {
    atualizarPrecoCarrinho,
    inicializarCarrinho,
    renderizarProdutoCarrinho,
} from "./src/menuCarrinho";

renderizarCatalogo();
inicializarCarrinho();
atualizarPrecoCarrinho();
renderizarProdutoCarrinho();
inicializarFiltros();
inicializarFiltros
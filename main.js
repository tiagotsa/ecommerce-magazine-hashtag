import { renderizarCatalogo } from "./src/cartaoProduto";
import {
    atualizarPrecoCarrinho,
    inicializarCarrinho,
    renderizarProdutoCarrinho,
} from "./src/menuCarrinho";

renderizarCatalogo();
inicializarCarrinho();
atualizarPrecoCarrinho();
renderizarProdutoCarrinho();
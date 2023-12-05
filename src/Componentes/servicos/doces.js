import axios from "axios";


const doceAPI = axios.create({ baseURL: "http://localhost:8000/vagas/" });

async function getDoces(){
    try {
        const response = await doceAPI.get('/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar pedido na API ", error);
    }
}

async function encomendarDoces(doce) {
    try {							   		 
    const response = await doceAPI.get('/', doce)
	        return response.data;
    } catch (error) {
        console.error("Erro ao cadastrar doces na API ", error);
    }
} 

async function atualizarPedido(id, doces) {
    try {
        const response = await doceAPI.put(`/${id}`, doces);														   
    return response.data;
	} catch (error) {
        console.error(`Erro ao atualizar pedido com o ID ${id} na API `, error);
    }
}

async function excluirPedido(id) {
    try {
        const response = await doceAPI.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao excluir pedido com o ID ${id} na API `, error);
    }	 
}

export{
    getDoces,
	encomendarDoces,
	atualizarPedido,
	excluirPedido
};
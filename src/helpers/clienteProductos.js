import axios from "axios";

const crear = async (body) => {
    const data = axios.post("http://localhost:8080/API/v1.0/Inventario/productos", body).then(r => r.data);
}

export const crearfachada = async (body) => {
    await crear(body);
}

const consultartodos = async () => {
    const data = axios.get("http://localhost:8080/API/v1.0/Inventario/productos").then(r => r.data);
    return data;
}

export const consultartodosfachada = async () => {
    return await consultartodos();
}

const consultar = async (link) => {
    const data = axios.get(link).then(r => r.data);
    return data;
}
export const consultarfachada = async (link) => {
    return await consultar(link);
}

const eliminar = async (id) => {
    const data = axios.delete(`http://localhost:8080/API/v1.0/Inventario/productos/${id}`).then(r => r.data);
}

export const eliminarfachada = async (id) => {
    await eliminar(id);
}

const actualizar = async (body,id) => {
    const data = axios.put(`http://localhost:8080/API/v1.0/Inventario/productos/${id}`,body).then(r => r.data);
}

export const actualizarfachada = async (body,id) => {
    await actualizar(body,id);
}
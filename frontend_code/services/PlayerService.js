import axios from "axios";

const BASE_URL = "http://localhost:8080/api/players";

class PlayerService {

    addPlayer(player) {
        return axios.post(`${BASE_URL}/add`, player);
    }

    getAllPlayers() {
        return axios.get(`${BASE_URL}/getall`);
    }

    getPlayerById(id) {
        return axios.get(`${BASE_URL}/get/${id}`);
    }

    updatePlayer(id, player) {
        return axios.put(`${BASE_URL}/update/${id}`, player);
    }

    deletePlayer(id) {
        return axios.delete(`${BASE_URL}/delete/${id}`);
    }

    getAllBatsman() {
        return axios.get(`${BASE_URL}/batsman`);
    }
}

export default new PlayerService();
import { useState } from "react";
import PlayerService from "../services/PlayerService";

function UpdatePlayer() {

    const [player, setPlayer] = useState({

        playerId: "",
        playerName: "",
        jerseyNum: "",
        role: "",
        totalMatches: "",
        teamName: "",
        country: "",
        description: ""

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setPlayer({
            ...player,
            [name]: value
        });

    };

    const updatePlayer = () => {

        PlayerService.updatePlayer(player.playerId, player)

            .then((response) => {

                alert("Player Updated Successfully");

                console.log(response.data);

            })

            .catch((error) => {

                console.log(error);

            });

    };

    return (

        <div className="container mt-5">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    Update Player
                </h2>

                <div className="mb-3">

                    <label>Player ID</label>

                    <input
                        type="number"
                        className="form-control"
                        name="playerId"
                        value={player.playerId}
                        onChange={handleChange}
                    />

                </div>

                <div className="mb-3">

                    <label>Player Name</label>

                    <input
                        type="text"
                        className="form-control"
                        name="playerName"
                        value={player.playerName}
                        onChange={handleChange}
                    />

                </div>

                <div className="mb-3">

                    <label>Jersey Number</label>

                    <input
                        type="number"
                        className="form-control"
                        name="jerseyNum"
                        value={player.jerseyNum}
                        onChange={handleChange}
                    />

                </div>

                <div className="mb-3">

                    <label>Role</label>

                    <select
                        className="form-select"
                        name="role"
                        value={player.role}
                        onChange={handleChange}
                    >

                        <option value="">Select Role</option>
                        <option>Batsman</option>
                        <option>Bowler</option>
                        <option>Keeper</option>
                        <option>All Rounder</option>

                    </select>

                </div>

                <div className="mb-3">

                    <label>Total Matches</label>

                    <input
                        type="number"
                        className="form-control"
                        name="totalMatches"
                        value={player.totalMatches}
                        onChange={handleChange}
                    />

                </div>

                <div className="mb-3">

                    <label>Team Name</label>

                    <input
                        type="text"
                        className="form-control"
                        name="teamName"
                        value={player.teamName}
                        onChange={handleChange}
                    />

                </div>

                <div className="mb-3">

                    <label>Country</label>

                    <input
                        type="text"
                        className="form-control"
                        name="country"
                        value={player.country}
                        onChange={handleChange}
                    />

                </div>

                <div className="mb-3">

                    <label>Description</label>

                    <textarea
                        className="form-control"
                        rows="3"
                        name="description"
                        value={player.description}
                        onChange={handleChange}
                    />

                </div>

                <button
                    className="btn btn-warning"
                    onClick={updatePlayer}
                >

                    Update Player

                </button>

            </div>

        </div>

    );

}

export default UpdatePlayer;
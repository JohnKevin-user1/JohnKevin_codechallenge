import { useState } from "react";
import PlayerService from "../services/PlayerService";

function AddPlayer() {

    const initialPlayerState = {

        playerName: "",
        jerseyNum: "",
        role: "",
        totalMatches: "",
        teamName: "",
        country: "",
        description: ""

    };

    const [player, setPlayer] = useState(initialPlayerState);

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setPlayer({

            ...player,
            [name]: value

        });

    };

    const savePlayer = () => {

        const data = {

            playerName: player.playerName,
            jerseyNum: player.jerseyNum,
            role: player.role,
            totalMatches: player.totalMatches,
            teamName: player.teamName,
            country: player.country,
            description: player.description

        };

        PlayerService.addPlayer(data)

            .then((response) => {

                console.log(response.data);

                setSubmitted(true);

            })

            .catch((e) => {

                console.log(e);

            });

    };

    const newPlayer = () => {

        setPlayer(initialPlayerState);

        setSubmitted(false);

    };

    return (

        <div className="container mt-5">

            {

                submitted ?

                    (

                        <div className="text-center">

                            <h3 className="text-success">
                                Player Added Successfully!
                            </h3>

                            <button
                                className="btn btn-primary mt-3"
                                onClick={newPlayer}
                            >
                                Add Another Player
                            </button>

                        </div>

                    )

                    :

                    (

                        <div className="card shadow p-4">

                            <h2 className="text-center mb-4">
                                Add Player
                            </h2>

                            <div className="mb-3">

                                <label className="form-label">
                                    Player Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="playerName"
                                    value={player.playerName}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Jersey Number
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="jerseyNum"
                                    value={player.jerseyNum}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Role
                                </label>

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

                                <label className="form-label">
                                    Total Matches
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="totalMatches"
                                    value={player.totalMatches}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Team Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="teamName"
                                    value={player.teamName}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Country
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="country"
                                    value={player.country}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Description
                                </label>

                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name="description"
                                    value={player.description}
                                    onChange={handleChange}
                                ></textarea>

                            </div>

                            <button
                                className="btn btn-success"
                                onClick={savePlayer}
                            >
                                Submit
                            </button>

                        </div>

                    )

            }

        </div>

    );

}

export default AddPlayer;
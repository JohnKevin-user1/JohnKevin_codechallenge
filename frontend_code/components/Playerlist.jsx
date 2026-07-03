import { useEffect, useState } from "react";
import PlayerService from "../services/PlayerService";

function PlayerList() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        retrievePlayers();
    }, []);

    const retrievePlayers = () => {

        PlayerService.getAllPlayers()
            .then((response) => {

                setPlayers(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    };

    const deletePlayer = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this player?"
        );

        if (confirmDelete) {

            PlayerService.deletePlayer(id)
                .then(() => {

                    alert("Player Deleted Successfully");

                    retrievePlayers();

                })
                .catch((error) => {

                    console.log(error);

                });

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-4">
                Player List
            </h2>

            <table className="table table-bordered table-striped table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Team</th>
                        <th>Country</th>
                        <th>Matches</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        players.map((player) => (

                            <tr key={player.playerId}>

                                <td>{player.playerId}</td>

                                <td>{player.playerName}</td>

                                <td>{player.role}</td>

                                <td>{player.teamName}</td>

                                <td>{player.country}</td>

                                <td>{player.totalMatches}</td>

                                <td>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deletePlayer(player.playerId)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default PlayerList;
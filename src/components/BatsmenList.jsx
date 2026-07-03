import { useEffect, useState } from "react";
import PlayerService from "../services/PlayerService";

function BatsmenList() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {

        PlayerService.getAllBatsman()

            .then((response) => {

                setPlayers(response.data);

            })

            .catch((error) => {

                console.log(error);

            });

    }, []);

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-4">

                All Batsmen

            </h2>

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Country</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        players.map((player) => (

                            <tr key={player.playerId}>

                                <td>{player.playerId}</td>

                                <td>{player.playerName}</td>

                                <td>{player.teamName}</td>

                                <td>{player.country}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default BatsmenList;
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import PlayerList from "./components/PlayerList";
import AddPlayer from "./components/AddPlayer";
import BatsmenList from "./components/BatsmenList";
import UpdatePlayer from "./components/UpdatePlayer";

function App() {

    return (

        <BrowserRouter>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container">

                    <Link className="navbar-brand" to="/">
                        Cricket Team
                    </Link>

                    <div className="navbar-nav">

                        <Link className="nav-link" to="/">
                            Players
                        </Link>

                        <Link className="nav-link" to="/add">
                            Add Player
                        </Link>

                        <Link className="nav-link" to="/update">
                            Update Player
                        </Link>

                        <Link className="nav-link" to="/batsmen">
                            Batsmen
                        </Link>

                    </div>

                </div>

            </nav>

            <Routes>

                <Route
                    path="/"
                    element={<PlayerList />}
                />

                <Route
                    path="/add"
                    element={<AddPlayer />}
                />

                <Route
                    path="/update"
                    element={<UpdatePlayer />}
                />

                <Route
                    path="/batsmen"
                    element={<BatsmenList />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;
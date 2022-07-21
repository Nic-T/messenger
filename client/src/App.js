import { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
    }
  };

  return (
    <div>
      <h3>Join Chat</h3>
      <input
        type="text"
        placehloder="Name"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="text"
        placehloder="Room name"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button>Join a Room</button>
    </div>
  );
}

export default App;

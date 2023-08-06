import { IHTTPConnection } from "@meshtastic/meshtasticjs";

export const Connection = () => {
  const connection = new IHTTPConnection();

  const connect = () => {
    void connection.connect({
      address: "10.0.0.10",
      fetchInterval: 3000,
    });
  };

  return <button onClick={connect}>Connect Bluetooth</button>;
};

import { IHTTPConnection } from "@meshtastic/meshtasticjs";

export const Connection = () => {
  const connection = new IHTTPConnection();

  const connect = () => {
    void connection.connect({
      address: "meshtastic.local",
      fetchInterval: 3000,
    });
  };

  return <button onClick={connect}>Connect TCP</button>;
};

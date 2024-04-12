import React, { useContext } from "react";
import { ContextApp } from "../../App";

function Hijo1() {
  const [data, setData] = useContext(ContextApp);

  return (
    <div>
      <h3>Componente Hijo 1</h3>

      {data.map((u) => {
        return (
          <div id="card" key={u.id}>
            <div
              style={{
                backgroundColor: "grey",
                color: "black",
                fontWeight: "bold",
                width: "8rem",
                borderRadius: "10px",

                display: "flex",
                justifyContent: "center",
                margin: "4px",
                padding: "1px",
                border: "2px solid green",
              }}
            >
              <p>{u.fullName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Hijo1;

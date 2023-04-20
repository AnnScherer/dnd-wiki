import React, { useState } from "react";
import werkzeuge from "../werkzeuge.json";

export default function Werkzeuge() {
  const [filterWerkzeuge, setFilterWerkzeuge] = useState([]);

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const klasseWerkzeuge = werkzeuge.filter((info) => {
      return info.name === value;
    });
    setFilterWerkzeuge(klasseWerkzeuge);
  };
  console.log(filterWerkzeuge);

  return (
    <div className="container">
      <div className="völker">
        <div className="select">
          <div className="select-volk">
            <label>Werkzeug auswählen:</label>
            <select onChange={onChangeKlasse}>
              <option>Werkzeug auswählen</option>
              {werkzeuge.map((werkzeug, i) => {
                return <option key={i}>{werkzeug.name}</option>;
              })}
            </select>
          </div>
        </div>
        {filterWerkzeuge.length > 0 && (
          <div className="volk klein">
            <h3>{filterWerkzeuge[0].name}</h3>
            <p>{filterWerkzeuge[0].beschreibung}</p>

            {filterWerkzeuge[0].array.map((werkzeug, i) => {
              return (
                <div key={i}>
                  <h3>{werkzeug.name}</h3>

                  <p>
                    Kosten: {werkzeug.kosten} Kupfer
                    <br />
                    Gewicht: {werkzeug.gewicht} Pfund
                  </p>

                  {werkzeug.hasOwnProperty("beschreibung") && (
                    <p>{werkzeug.beschreibung}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

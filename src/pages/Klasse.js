import klassen from "../klassen.json";
import React, { useState } from "react";

export default function Klasse() {
  const [filterKlasse, setFilterKlasse] = useState([]);

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const klasseFilter = klassen.filter((info) => {
      return info.name === value;
    });
    setFilterKlasse(klasseFilter);
  };
  console.log(klassen);

  return (
    <div className="container">
      <div className="völker">
        <div className="select">
          <div className="select-volk">
            <label>Klasse auswählen:</label>
            <select onChange={onChangeKlasse}>
              <option>Klasse auswählen</option>
              <option>BARBAR</option>
              <option>BARDE</option>
              <option>DRUIDE</option>
              <option>HEXENMEISTER</option>
              <option>KÄMPFER</option>
              <option>KLERIKER</option>
              <option>MAGIER</option>
              <option>MÖNCH</option>
              <option>PALADIN</option>
              <option>SCHURKE</option>
              <option>WALDLÄUFER</option>
              <option>ZAUBERER</option>
            </select>
          </div>
        </div>
        {filterKlasse.length > 0 && (
          <>
            {filterKlasse.map((klasse, i) => {
              return (
                <div className="volk" key={i}>
                  <h3 key={i}>{klasse.name}</h3>
                  {klasse.text.map((info, i) => {
                    return (
                      <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

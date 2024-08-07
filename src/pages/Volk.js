import rassen from "../rassen.json";
import React, { useState } from "react";

export default function Volk() {
  const [filterVolk, setFilterVolk] = useState([]);

  const onChangeVolk = (event) => {
    const value = event.target.value;
    const volkFilter = rassen.filter((info) => {
      return info.name === value;
    });
    setFilterVolk(volkFilter);
  };
  console.log(filterVolk);

  return (
    <div className="container">
      <div className="völker">
        <div className="select">
          <div className="select-volk">
            <label>Volk auswählen:</label>
            <select onChange={onChangeVolk}>
              <option>Volk auswählen</option>
              <option>ELFEN</option>
              <option>DRACHENBLÜTIGE</option>
              <option>GNOME</option>
              <option>HALBELFEN</option>
              <option>HALBLINGE</option>
              <option>HALBORKS</option>
              <option>MENSCHEN</option>
              <option>TIEFLINGE</option>
              <option>ZWERGE</option>
            </select>
          </div>
        </div>
        {filterVolk.length > 0 && (
          <>
            {filterVolk.map((volk, i) => {
              return (
                <div className="volk" key={i}>
                  <h3 key={i}>{volk.name}</h3>
                  {volk.text.map((info, i) => {
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

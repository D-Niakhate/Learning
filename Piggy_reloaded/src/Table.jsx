import React from "react";
//import "../public/Table.css";

function Table(props) {
  /* Insert your code here */
  //on récupère le tableau
  const leTabObject = props.entries;
  //le 1er objet
  const leFirstObject = props.entries[0];
  //on récupère les clefs
  const lesKeys = Object.keys(leFirstObject);
  //affichage entete tebleau
  const enTeteTab = [];
  lesKeys.forEach((chaqueKeys) => {
    if (chaqueKeys !== "id")
      enTeteTab.push(<th key={chaqueKeys}>{chaqueKeys}</th>);
  });
  // // le body du tableau
  const leBodyTab = leTabObject.map((chaqueObjet, index) => (
    <tr key={index}>
      {/* <td>{chaqueObjet["id"]}</td> */}
      <td>{chaqueObjet["name"]}</td>
      <td>{chaqueObjet["desc"]}</td>
      <td>{chaqueObjet["price"]}</td>
      <td onClick={() => props.handleDelete(chaqueObjet)}>
        {chaqueObjet[" "]}
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{enTeteTab}</tr>
      </thead>
      <tbody>{leBodyTab}</tbody>
    </table>
  );
}

export default Table;

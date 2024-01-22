import React from 'react';

const Table: React.FC = () => {

  // Sample data for the table
  const tableData = [
    { pos: 1, team: 'Raynes Park United Churches FC', P: 9, W: 7, D: 2, L: 0, GD: 18, PTS: 23 },
    { pos: 2, team: 'Wimbledon Sporting Club Adult', P: 10, W: 6, D: 3, L: 1, GD: 15, PTS: 21 },
    { pos: 3, team: 'London Falcons FC Saturday Team', P: 10, W: 5, D: 0, L: 5, GD: 6, PTS: 15 },
    { pos: 4, team: 'CP Dons F.C', P: 8, W: 3, D: 1, L: 4, GD: -2, PTS: 10 },
    { pos: 5, team: 'Goldfingers Seconds', P: 8, W: 3, D: 1, L: 4, GD: -3, PTS: 10 },
    { pos: 6, team: 'Sporting London FC Saturday', P: 9, W: 2, D: 2, L: 5, GD: -14, PTS: 8 }
    ,{ pos: 7, team: 'Embankment FC', P: 10, W: 2, D: 1, L: 7, GD: -14, PTS: 7 },
    { pos: 8, team: 'Ocean Rangers First', P: 6, W: 2, D: 0, L: 4, GD: -7, PTS: 6 },
   ,
    
    
  ];

  return (
    <div className='table-container'>
      <h3>Mickey Warren League Two - Wimbledon & District Football League</h3>
    <table>
      <thead>
        <tr>
          <th>POS</th>
          <th>Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.pos}>
            <td>{row.pos}</td>
            <td>{row.team}</td>
            <td>{row.P}</td>
            <td>{row.W}</td>
            <td>{row.D}</td>
            <td>{row.L}</td>
            <td>{row.GD}</td>
            <td>{row.PTS}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};


  

export default Table;

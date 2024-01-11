import React from 'react';

const Table: React.FC = () => {

  // Sample data for the table
  const tableData = [
    { pos: 1, team: 'Raynes Park United Churches FC', P: 7, W: 6, D: 1, L: 0, GD: 13, PTS: 19 },
    { pos: 2, team: 'Wimbledon Sporting Club Adult', P: 8, W: 5, D: 2, L: 1, GD: 14, PTS: 17 },
    { pos: 3, team: 'CP Dons F.C', P: 6, W: 3, D: 1, L: 2, GD: 1, PTS: 10 },

    { pos: 4, team: 'London Falcons FC Saturday Team', P: 8, W: 3, D: 0, L: 5, GD: 2, PTS: 9 },
    { pos: 5, team: 'Goldfingers Seconds', P: 6, W: 2, D: 1, L: 3, GD: -4, PTS: 7 }
    ,{ pos: 6, team: 'Embankment FC', P: 9, W: 2, D: 1, L: 6, GD: -13, PTS: 7 },
    { pos: 7, team: 'Ocean Rangers First', P: 5, W: 2, D: 0, L: 3, GD: -2, PTS: 6 },
    { pos: 8, team: 'Sporting London FC Saturday', P: 7, W: 1, D: 2, L: 4, GD: -13, PTS: 5 },
    
    
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

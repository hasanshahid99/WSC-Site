import React from 'react';

const Table: React.FC = () => {

  // Sample data for the table
  const tableData = [
    { pos: 1, team: 'Raynes Park United Churches FC', P: 6, W: 5, D: 1, L: 0, GD: 11, PTS: 16 },
    { pos: 2, team: 'Wimbledon Sporting Club Adult', P: 7, W: 4, D: 2, L: 1, GD: 11, PTS: 14 },
    { pos: 3, team: 'London Falcons FC Saturday Team', P: 6, W: 3, D: 0, L: 3, GD: 6, PTS: 9 },
    { pos: 4, team: 'CP Dons F.C', P: 5, W: 2, D: 1, L: 2, GD: 1, PTS: 7 },
    { pos: 5, team: 'Embankment FC', P: 7, W: 2, D: 1, L: 4, GD: -9, PTS: 7 },
    { pos: 6, team: 'Sporting London FC Saturday', P: 6, W: 1, D: 2, L: 3, GD: -6, PTS: 5 },
    { pos: 7, team: 'Goldfingers Seconds', P: 5, W: 1, D: 1, L: 3, GD: -5, PTS: 4 },
    { pos: 8, team: 'Ocean Rangers First', P: 4, W: 1, D: 0, L: 3, GD: -9, PTS: 3 },
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

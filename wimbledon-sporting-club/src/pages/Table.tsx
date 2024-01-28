import React from 'react';

const Table: React.FC = () => {

  // Sample data for the table
  const tableData = [
    { pos: 1, team: 'Wimbledon Sporting Club Adult', P: 11, W: 7, D: 3, L: 1, GD: 24, PTS: 24 },
    { pos: 2, team: 'Raynes Park United Churches FC', P: 10, W: 7, D: 2, L: 0, GD: 18, PTS: 24 },
    { pos: 3, team: 'London Falcons FC Saturday Team', P: 11, W: 5, D: 1, L: 5, GD: 6, PTS: 16 },
    { pos: 4, team: 'Goldfingers Seconds', P: 9, W: 3, D: 2, L: 4, GD: -3, PTS: 11 },
    { pos: 5, team: 'CP Dons F.C', P: 9, W: 3, D: 1, L: 5, GD: -2, PTS: 10 },
    { pos: 6, team: 'Embankment FC', P: 11, W: 3, D: 1, L: 7, GD: -12, PTS: 10 },
    { pos: 7, team: 'Sporting London FC Saturday', P: 10, W: 2, D: 2, L: 6, GD: -23, PTS: 8 },
    { pos: 8, team: 'Ocean Rangers First', P: 7, W: 2, D: 1, L: 4, GD: -7, PTS: 7 },
   
    
    
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

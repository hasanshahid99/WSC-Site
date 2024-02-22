import React from 'react';

const Table: React.FC = () => {

  // Sample data for the table
  const tableData = [
    { pos: 1, team: 'Raynes Park United Churches FC', P: 11, W: 8, D: 3, L: 0, GD: 25, PTS: 27 },
    { pos: 2, team: 'Wimbledon Sporting Club Adult', P: 11, W: 7, D: 4, L: 2, GD: 23, PTS: 25 },
    
    { pos: 3, team: 'London Falcons FC Saturday Team', P: 12, W: 6, D: 1, L: 5, GD: 6, PTS: 19 },
    { pos: 4, team: 'Goldfingers Seconds', P: 11, W: 4, D: 2, L: 5, GD: -4, PTS: 14 },
    { pos: 5, team: 'Ocean Rangers First', P: 9, W: 4, D: 1, L: 4, GD: -5, PTS: 13 },
    { pos: 6, team: 'CP Dons F.C', P: 10, W: 3, D: 2, L: 5, GD: -3, PTS: 11 },
    { pos: 6, team: 'Embankment FC', P: 13, W: 3, D: 1, L: 9, GD: -19, PTS: 10 },
    { pos: 7, team: 'Sporting London FC Saturday', P: 11, W: 2, D: 2, L: 7, GD: -28, PTS: 8 },
   
   
    
    
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

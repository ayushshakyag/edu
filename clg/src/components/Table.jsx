import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// Dummy JSON data
const rows = [
  { id: 1, cdRank: 1, college: 'College A', courseFees: 10000, placement: '80%', userReviews: 4.5, ranking: 10 },
  { id: 2, cdRank: 2, college: 'College B', courseFees: 12000, placement: '75%', userReviews: 4.2, ranking: 12 },
  { id: 3, cdRank: 3, college: 'College C', courseFees: 11000, placement: '85%', userReviews: 4.8, ranking: 8 },
  // Add more dummy data as needed
];

const columns = [
  { field: 'cdRank', headerName: 'CD Rank', width: 120 },
  { field: 'college', headerName: 'College', width: 200 },
  { field: 'courseFees', headerName: 'Course Fees', width: 150 },
  { field: 'placement', headerName: 'Placement', width: 150 },
  { field: 'userReviews', headerName: 'User Reviews', width: 150 },
  { field: 'ranking', headerName: 'Ranking', width: 150 },
];

const Table = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5} // Number of rows per page
        pagination={true} // Enable pagination
        autoHeight={true} // Adjusts height automatically based on content
      />
    </div>
  );
};

export default Table;

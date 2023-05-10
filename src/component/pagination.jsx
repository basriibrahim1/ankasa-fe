import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationComponent = (props) => {
    const {items, page, handlePageChange} = props
  return (
    <Stack spacing={2}>   
      <Pagination count={items} page={page} onChange={handlePageChange} size='large' />
    </Stack>
  );
}


export default PaginationComponent
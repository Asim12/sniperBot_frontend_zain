import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { formatDistanceToNow } from 'date-fns';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function OrdersTableRow({
  
  selected,
  
  buyPrice,
  symbol,
  logo,
  buyTransactionHash,
  status,
  _id,
  contractAddress,
  pairAddress,
  userId,
  amount,
  // chainId,
  profitPercentage,
  updatedAt,
  createdAt,
  type,
  currentStatus,
  currentPrice,
  sellPercentage,
  action,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

    console.log('current pirice is ',currentPrice)
  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>
        <TableCell align="center">{_id}</TableCell>
        <TableCell>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</TableCell>
        <TableCell align="center">{symbol}</TableCell>
        <TableCell>{buyPrice}</TableCell>
        <TableCell align="center">{currentPrice}</TableCell>
        <TableCell align="center">{profitPercentage+"%"}</TableCell>
        <TableCell  style={{color:currentStatus>0?"green":'red'}} align="center">{currentStatus+"%"}</TableCell>
        <TableCell align="center">{status}</TableCell>
        <TableCell align="center">{type}</TableCell>
        <TableCell align="center">{formatDistanceToNow(new Date(updatedAt), { addSuffix: true })}</TableCell>
        <TableCell align="center">{action}</TableCell>

        {/* <TableCell align="center">{logo}</TableCell> */}

        {/* <TableCell align="center">{amount}</TableCell> */}

        {/* <TableCell align="center">{chainId}</TableCell> */}
        {/* <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell> */}
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

OrdersTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};

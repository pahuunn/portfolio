import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ProfileTable = (props) => {
    return (
        <TableContainer component={Paper} sx={{maxWidth: 700 }} className="Profile">
                <Table sx={{maxWidth: 700 }} aria-label="simple table">
                <TableBody>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="left">吉田　宏明</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="right">Speciality</TableCell>
                      <TableCell align="left">WEBサービス,フロントエンド,サーバサイド</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
        </TableContainer>
    );   
}
export default ProfileTable;
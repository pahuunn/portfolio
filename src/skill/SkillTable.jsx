import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const SkillTable = (props) => {
    /*
        skillRows = [{
            name : スキル名称,
            years : 年数
        }];
    */
    const skillRows = props.skillRows;
    
    return (
        <TableContainer component={Paper}  className="Profile">
            <Table  aria-label="simple table">
                <TableBody>
                    {skillRows.map((skill) => (
                        <TableRow
                            key={skill.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center">{skill.name}</TableCell>
                            <TableCell align="left">{skill.years}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default SkillTable;


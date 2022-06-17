import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ProfileHistory = (props) => {
    return (
        <TableContainer component={Paper} sx={{maxWidth: 900 }} className="Profile">
                <Table sx={{maxWidth: 900 }} aria-label="simple table">
                <TableBody>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="right">2014/3</TableCell>
                      <TableCell align="left">千葉工業大学大学院　未来ロボティクス専攻　修了</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="right">2014/4</TableCell>
                      <TableCell align="left">株式会社Newデイシス　入社。<br />WEB系のシステムエンジニアとして、主に幼稚園/保育園業界向けWEBサービスの開発に従事し、設計から開発、テスト、保守運用に至るまで一貫して担当。<br />その他、車メーカーのテストコースの運用監視システムの開発に従事。主に外部機器の制御/通信のプログラムの開発を担当する。</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="right">2022/3</TableCell>
                      <TableCell align="left">株式会社Newデイシス　退職</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="right">2022/5</TableCell>
                      <TableCell align="left">フリーランスのITエンジニアとして活動開始</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
    );   
}
export default ProfileHistory;
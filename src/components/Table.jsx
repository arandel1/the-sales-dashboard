import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useState } from 'react';

import { mockTransactions } from '../components/mockData.js'
// import './App.css'
export default function DenseTable() {

  return (
    <>
      <h2> Transactions </h2>
      <h3> Transactions from Mock Data</h3>
      <div className='table'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Tax ID</TableCell>
                <TableCell align="left">User</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockTransactions.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{row.txId}</TableCell>
                  <TableCell align="left">{row.user}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.cost}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>  
    </>
  );
}


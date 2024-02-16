import React from 'react'

const DoctorTable = ({data, loading}) => {
  return (
    <div>
    <TableContainer className='container'>
    <Table sx={{ minWidth: 450 }} aria-label="simple table">
      <TableHead >
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Patient Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>DOB</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      {loading ? "Loading...":
      <TableBody>
        {data.map((x) => (
          <TableRow key={x._id} >
            <TableCell component="th" scope="row">
             {x.createdAt.slice(0,10)} //new Date(x.createdAt).toLocaleDateString()
            </TableCell>
             <TableCell>{x.fullname}</TableCell>
            <TableCell>{x.email}</TableCell>
            <TableCell>{x.gender}</TableCell>
            <TableCell>{x.DOB}</TableCell>
            <TableCell>{x.phone}</TableCell>
            <TableCell>icon</TableCell>
          </TableRow>
        ))}
      </TableBody>}
    </Table>
  </TableContainer>
    </div>
  )
}

export default DoctorTable

import react from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const PresencePage = () => {

  const arr = [
    { name: "h", presence: true, permition: false },
    { name: "i", presence: false, permition: true },
    { name: "g", presence: true, permition: true },
  ];

  const arrMap = arr.map(item =>
  (<TableRow>
    <TableCell scope="row">{item.name}</TableCell>
    <TableCell>
      <FormControlLabel control={<Checkbox defaultChecked />} />
    </TableCell>
    <TableCell component="th" scope="row">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
        <InputLabel id="demo-simple-select-standard-label">סיבה</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard">
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>מאושר</MenuItem>
          <MenuItem value={15}>לא מאושר</MenuItem>
        </Select>
      </FormControl>
    </TableCell>
  </TableRow >));

  return (
    <TableContainer table sx={{ direction: "rtl" }}>
      <Table sx={{ minWidth: 50 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>שם התלמיד</TableCell>
            <TableCell padding="checkbox" align="right">נוכחות</TableCell>
            <TableCell align="right">סיבה</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{arrMap}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default PresencePage;
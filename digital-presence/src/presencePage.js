import react from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const PresencePage = () => {
  return (
    <TableContainer sx={{ direction: "rtl" }}>
      <Table sx={{ minWidth: 50 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>שם התלמיד</TableCell>
            <TableCell padding="checkbox" align="right">נוכחות</TableCell>
            <TableCell align="right">סיבה</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {() => (
            <TableRow>
              <TableCell scope="row">יצחק</TableCell>
              <TableCell>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
              </TableCell>
              <TableCell component="th" scope="row">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
                  <InputLabel id="demo-simple-select-standard-label">סיבה</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>מאושר</MenuItem>
                    <MenuItem value={20}>לא מאושר</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PresencePage;
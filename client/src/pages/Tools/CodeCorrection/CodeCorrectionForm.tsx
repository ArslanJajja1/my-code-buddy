import {Stack,Box,Typography,TextField,MenuItem} from '@mui/material'


const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "PHP",
    "TypeScript",
    "Swift",
    "Kotlin",
    "Go",
    "Ruby",
    "C++",
    "R",
    "Objective-C",
    "Scala",
    "Perl",
    "Lua",
    "Haskell",
    "Shell",
    "SQL",
    "Visual Basic",
    "Assembly",
    "MATLAB",
    "Dart",
    "Groovy",
    "Julia",
    "F#",
    "Erlang",
    "Clojure",
    "Rust",
    "PowerShell"
  ];
  
const CodeCorrectionForm = () => {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
     <TextField
          id="outlined-select-currency"
          select
          label="Coding language"
          defaultValue="JavaScript"
          helperText="Please select language"
        >
          {languages.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
  </Box>
  )
}

export default CodeCorrectionForm
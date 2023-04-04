import {Button,Box,Typography,TextField,MenuItem} from '@mui/material'


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
        backgroundColor:"white",
        padding:5,
        my:5,
        width:"50%",
        mx:"auto"
    }}
  >
     <TextField
        //   id="outlined-select-currency"
          select
          label="Coding language"
          defaultValue="JavaScript"
          helperText="Please select language"
          sx={{
            width:"100%"
          }}
        >
          {languages.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        //   id="outlined-multiline-static"
          label="What correction ? "
          placeholder='What correction you want in your code ? Explain in detail in this box to get the best results .'
          multiline
          rows={4}
          defaultValue="" 
          sx={{
            width:"100%",
            mt:5
          }}
          />
           <TextField
          label="Paste Code "
          placeholder='Paste the code here that you want to be corrected !'
          multiline
          rows={4}
          defaultValue="" 
          sx={{
            width:"100%",
            my:5
          }}
          />
        <Button color='primary' sx={{ fontSize: { xs: "0.6rem", sm: "1rem",width:"100%"} }} variant="contained">Correct this code</Button>

  </Box>
  )
}

export default CodeCorrectionForm
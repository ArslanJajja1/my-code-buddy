import React, { useState } from "react";
import { Button, Box, Typography, TextField, MenuItem } from "@mui/material";
import axios from "axios";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/python/python";
  
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
  "PowerShell",
];

const CodeCorrectionForm = () => {
  const [input, setInput] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [hasCode, setHasCode] = useState<boolean | null>(null);
  const [explanation, setExplanation] = useState<string>("");
  const [codeBox, setCodeBox] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiKey = "YOUR_API_KEY";
    const prompt = input;
    const engine = "davinci-codex";
    const url = `https://api.openai.com/v1/engines/${engine}/completions`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    const data = {
      prompt: prompt,
      max_tokens: 1024,
      n: 1,
      stop: "\n",
    };

    try {
      const response = await axios.post(url, data, { headers });
      const codeText = getCodeText(response.data.choices[0].text);
      setResponse(codeText.text);
      setHasCode(codeText.code);
    } catch (error) {
      console.error(error);
    }
  };
  const getCodeText = (text: string): { code: boolean; text: string } => {
    const codeRegex =
      /(^|\n)[ \t]*([a-zA-Z][\w]*)*[ \t]*\([\w\s,]*\)[ \t]*[:\n]/g;
    const matches = text.matchAll(codeRegex);
    let lastIndex = 0;
    let codeText = "";
    let hasCode = false;
    for (const match of matches) {
      if (match.index !== undefined) {
        codeText += text.slice(lastIndex, match.index);
        codeText += match[0];
        lastIndex = match.index + match[0].length;
        hasCode = true;
      }
    }
    codeText += text.slice(lastIndex);
    return { code: hasCode, text: codeText };
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: "white",
          padding: 5,
          my: 5,
          width: "50%",
          mx: "auto",
        }}
      >
        <TextField
          //   id="outlined-select-currency"
          select
          label="Coding language"
          defaultValue="JavaScript"
          helperText="Please select language"
          sx={{
            width: "100%",
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
          placeholder="What correction you want in your code ? Explain in detail in this box to get the best results ."
          multiline
          rows={4}
          defaultValue=""
          sx={{
            width: "100%",
            mt: 5,
          }}
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
        />
        <TextField
          label="Paste Code "
          placeholder="Paste the code here that you want to be corrected !"
          multiline
          rows={4}
          defaultValue=""
          sx={{
            width: "100%",
            my: 5,
          }}
          value={codeBox}
          onChange={(e) => setCodeBox(e.target.value)}
        />
        <Button
          color="primary"
          sx={{ fontSize: { xs: "0.6rem", sm: "1rem", width: "100%" } }}
          variant="contained"
          type="submit"
        >
          Correct this code
        </Button>
      </Box>
      <Box>
        {hasCode ? (
          <>
         <CodeMirror
            value={response}
            options={{
              mode: "python",
              theme: "material",
              lineNumbers: true,
              readOnly: true,
            }}
            onBeforeChange={() => {}}
            onChange={() => {}}
          />

            <p>{hasCode.toString()}</p>
          </>
        ) : (
          <p>{response}</p>
        )}
      </Box>
    </>
  );
};

export default CodeCorrectionForm;

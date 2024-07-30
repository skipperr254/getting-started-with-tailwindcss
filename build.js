const { exec, spawn } = require('child_process');

const args = process.argv.slice(2);
let outputFolder = args[0] || null;

if (outputFolder) {
    outputFolder = `${outputFolder}/dist`;
} else {
    outputFolder = "./dist";
}

const command = `npx tailwindcss -i ./styles.css -o ${outputFolder}/output.css --watch`;

// const arguments = [`-o ${outputFolder}/output.css`];

// const tailWindProcess = spawn(command);

// tailWindProcess.on('data', (data) => {
//     console.log(data);
// });

// tailWindProcess.stderr.on('data', (data) => {
//     console.error(`Stderr: ${data}`);
// });

// tailWindProcess.on('close', (code) => {
//     console.log(`Process exited with code ${code}`);
// });


exec(command, (error, stdout, stderror) => {
    if (error) {
        console.log(error);
        return;
    }
    if (stderror) {
        console.log(stderror);
        return;
    }
    console.log(stdout);
})

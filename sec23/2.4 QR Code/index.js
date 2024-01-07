/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const question = [
    {
        type: 'input',
        name: 'url',
        message: 'Enter the url to be converted to QR code: '
    },
];

inquirer.prompt(question).then((answer) => {
    var qr_img= qr.image(answer.url, { type: 'png' });
    qr_img.pipe(fs.createWriteStream('qr.png'));
    console.log('QR code generated!');
    fs.writeFile('input.txt',`url: ${answer.url}. QR Image saved in ./qr.png`,(err)=>console.log(err==null?'':'Error in writing to file'));
});

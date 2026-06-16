import chalk from 'chalk';
 
export function colorfull(message){
    console.log(chalk.green.bold.underline(message))
}
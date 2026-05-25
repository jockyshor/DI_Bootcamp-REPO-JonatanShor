

/*Description
Create a function called validateUnionType that accepts a value and an array of allowed types (as strings). The function should check if the value is of one of the allowed types and return true if it is; otherwise, it should return false. Use this function to validate the type of variables in a program.



Exercise
Create a function called validateUnionType(value: any, allowedTypes: string[]): boolean that takes a value and an array of allowed types (as strings). The function should return true if the value is one of the allowed types; otherwise, it should return false. Demonstrate its usage by validating variables with different types.*/

function validateUnionType(value: any, allowedTypes: string[]): boolean{
    if ( allowedTypes.includes(typeof value)){
        return true
    }
    else{
        return false
    }
}


// Demonstrate its usage by validating variables with different types.

let alphanumeric: string[] = ["string", "number"];

const id: string | number = 212622343;

console.log(id, alphanumeric) // should console log "true



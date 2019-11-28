export const required = value=>{
    if(value) return undefined;
    return "The field cannot be empty";
}
export const minLength = (length)=>(value)=>{
    if(value.length>=length) return undefined;
    return `The field must be at least ${length} characters`
}

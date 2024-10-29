import { forwardRef } from 'react';
const Input =  forwardRef(function Input({isTextArea, label, ...props}, localRef){
    const classes = "w-full p-1 bg-stone-300 border-stone-400 border-b-2 text-stone-600 rounded-sm focus:bg-stone-100 focus:outline-none";
    return<p className="flex flex-col my-4">
    <label className="font-bold uppercase text-stone-800">{label}</label> 
    {isTextArea ? <textarea ref={localRef} {...props} className={classes}/> : <input ref={localRef} className={classes} {...props}/>}
    </p>
});
export default Input;
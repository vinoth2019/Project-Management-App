import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
export default function NewProject({AddProject, onCancel}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef()

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescrption = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescrption.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();            
            return;
        }

        AddProject({
            title: enteredTitle,
            description: enteredDescrption,
            dueDate: enteredDueDate
        })
    }

    return<>
        <Modal modalButton ='Okay' ref={modal}>
                <h2 className='text-xl font-bold text-slate-900 my-4'>Please Enter Some data</h2>
                <p className='text-stone-700 mb-4'>Oops... you have not entered any value here.</p>
                <p className='text-stone-700 mb-4'>Please check the input</p>
        </Modal>
            <div className="w-[35rem] mt-16">
    <menu className="flex gap-4 items-center justify-end my-4">
        <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
        <li><button 
        onClick={handleSave}
        className="py-2 px-6 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md">Save</button></li>   
    </menu> 
    <div>
        <Input type='text' ref={title} label='Title' />
        <Input ref={description} label='Description' isTextArea={true}/>
        <Input type='date' ref={dueDate} label='Due Date' />
    </div>   
    </div>
    </> 
}
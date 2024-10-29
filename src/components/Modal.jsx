import { forwardRef, useImperativeHandle, useRef } from 'react'; 
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(function Modal({children, modalButton}, ref){
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(<dialog className='backdrop:bg-stone-700/90 p-8 rounded-md shadow-md' ref={dialog}>
            {children}
        <form className='text-right'>
            <Button>{modalButton}</Button>
        </form>
        </dialog>, document.getElementById('modal-root'))
});

export default Modal;
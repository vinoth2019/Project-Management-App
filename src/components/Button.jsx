export default function Button({children, ...props}){
    return <button {...props} className="bg-stone-700 text-stone-400 text-xs md:text-base rounded-md py-4 px-6
    hover:bg-stone-600 hover:text-stone-100">
        {children}
    </button>
}
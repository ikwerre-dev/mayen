interface ButtonProps {
    variant: 'primary' | 'outline' | 'whiteoutline';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function Button({ variant, children, onClick, className = '' }: ButtonProps) {
    const baseStyles = "px-7 py-2 rounded-full font-semibold transition-all duration-300 text-xs";

    const variants = {
        primary: "border-2 border-[#FFAD00]  bg-[#FFAD00] text-white hover:bg-[#FF8C00] flex items-center gap-2",
        outline: "border-2 border-black hover:bg-gray-100 text-black",
        whiteoutline: "border-2 border-white hover:bg-gray-100 text-white"

    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
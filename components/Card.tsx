
type cardprops = {
    onClick?: React.MouseEventHandler<HTMLDivElement>,
    children: React.ReactNode
}

const Card: React.FC<cardprops> = ({ onClick, children }) => {
    return (
        <div className='cursor-pointer m-4 p-6 text-left text-inherit border-[1px] border-[#eaeaea] rounded-xl max-w-[300px] transition-colors ease-in-out delay-150 hover:text-[#0070f3] hover:border-[#0070f3]' onClick={onClick}>
            {children}
        </div>
    );
}

export default Card;

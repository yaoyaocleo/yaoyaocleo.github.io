
type cardprops = {
    h2tag: string,
    ptag: string,
    // onClick?: () => void,
    onClick?: React.MouseEventHandler<HTMLDivElement>,
}

const Card: React.FC<cardprops> = ({ h2tag, ptag, onClick }) => {
    return (
        <div className='cursor-pointer m-4 p-6 text-left text-inherit border-[1px] border-[#eaeaea] rounded-xl max-w-[300px] transition-colors ease-in-out delay-150 hover:text-[#0070f3] hover:border-[#0070f3]' onClick={onClick}>
            <h2 className='text-2xl mb-4'>{h2tag}</h2>
            <p className='m-0 text-xl'>{ptag}</p>
        </div>
    );
}

export default Card;

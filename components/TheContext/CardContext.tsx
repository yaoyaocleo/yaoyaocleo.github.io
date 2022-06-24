import { TheContext } from "./context";

const CardContext: React.FC = () => {
    const getContext = () => {
        console.log('getContext');
    }

    return (
        <TheContext.Provider value={{user: null}}>
            <div className='m-4 p-6 text-left text-inherit border-[1px] border-[#eaeaea] rounded-xl max-w-[300px] transition-colors ease-in-out delay-150 hover:text-[#0070f3] hover:border-[#0070f3]'>
                <h1 className='text-2xl mb-4'>Context &rarr;</h1>
                <button onClick={getContext} className='py-2 px-4 bg-yellow-300 rounded-md'>Get context</button>
            </div>
        </TheContext.Provider>
    );
}

export default CardContext;

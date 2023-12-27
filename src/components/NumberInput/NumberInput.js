"use client"
const NumberInput = ({ value, setValue }) => {
    const increment = () => {
        setValue(value + 1);
    };

    const decrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    return (
        <div className='w-3/5 md:w-1/2 bg-gray-300 rounded-md flex flex-row justify-between items-center'>
            <button className='bg-white px-3 text-xl text-gray-700 font-bold rounded-l-md' onClick={decrement}>-</button>
            <input className='w-2/5 py-0.5 bg-gray-200 text-center text-gray-700' type="text" value={value} readOnly />
            <button className='bg-white px-3 text-xl text-gray-700 font-bold rounded-r-md' onClick={increment}>+</button>
        </div>
    );
};

export default NumberInput;
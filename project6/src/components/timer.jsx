import { useEffect, useRef, useState } from "react";

export const Timer = ({ id ,onDelete,timeEnd}) => {
    const date = useRef(new Date());
    const [minute, setMinute] = useState(timeEnd ? timeEnd.split(':')[0] : new Date().getMinutes());
    const [second,setSeconds] = useState(timeEnd ? timeEnd.split(':')[1] : new Date().getSeconds());
    const [isAlive,setIsAlive] = useState(true)
    let interval = useRef(null);
    
    function getDurationInMinutes(timestamp){
      const now = Date.now(); 
      const difference = now - timestamp; 
      const minutes = Math.floor(difference / (1000 * 60)); 
      return minutes;
    };

    function getStartingDate(date) {
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
  
      return  `${month}.${day}.${year}`;
    }


    useEffect(() => {
        if(isAlive) {
       interval.current =  setInterval(() => {
            setSeconds(second => second  == 0 ? 59: second - 1)
        },1000)
        }else {
            clearInterval(interval.current)
        }

        return () => clearInterval(interval.current);
    },[isAlive])

    useEffect(() => {
        if(second == 0) {
          if(minute <= 0) {
            clearInterval(interval.current);
            onDelete(id,(minute+':'+ second),getStartingDate(date.current),getDurationInMinutes(date.current.getTime()));
          }else {
            setMinute(minute => minute - 1)
          }
        }
    },[second])


    return (
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 flex flex-col items-center space-y-4 w-64">
        <p className="text-lg font-bold">Timer #{id}</p>
        <h2 className="text-2xl font-mono">{minute}:{second}</h2>
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded disabled:opacity-40 disabled:cursor-not-allowed" 
          disabled={!isAlive}
          onClick={() => setIsAlive(false)}
          >
            Pause
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded disabled:opacity-40 disabled:cursor-not-allowed" 
          disabled={isAlive}
          onClick={() => setIsAlive(true)}
          >
            Continue
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
           onClick={() => onDelete(id,(minute+':'+second),getStartingDate(date.current),getDurationInMinutes(date.current.getTime()),)}>
            Delete
          </button>
        </div>
      </div>
    );
  };
  
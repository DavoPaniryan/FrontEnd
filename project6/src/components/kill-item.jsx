export const KillItem = ({ id, timeEnd,startingDate,duration,onSetTimers ,onSetKilled}) => {

  function handleRemove(id) {
    onSetKilled(prev => {
      return prev.filter(item => item.id !== id)
    })
    onSetTimers(prev => {
      return [...prev,{id,timeEnd}]
    })
  }
  
    return (
      <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700 transition-colors">
        <td className="px-4 py-2 text-center">{id}</td>
        <td className="px-4 py-2 text-center">{startingDate}</td>
        <td className="px-4 py-2 text-center">{timeEnd}</td>
        <td className="px-4 py-2 text-center">{duration}: minutes</td> 
        <td className="px-4 py-2 text-center">
          <button className="bg-purple-400 hover:bg-pink-500 text-white font-semibold px-3 py-1 rounded shadow" onClick={() => handleRemove(id)}>
            Restore
          </button>
        </td>
      </tr>
    );
  };
  
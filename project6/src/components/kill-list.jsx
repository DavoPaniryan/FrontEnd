import { KillItem } from "./kill-item";

export const KillList = ({killed,onSetTimers,onSetKilled}) => {
    return (
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-700 text-white">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-2 border border-gray-700">ID</th>
              <th className="px-4 py-2 border border-gray-700">Time Start</th>
              <th className="px-4 py-2 border border-gray-700">Time End</th>
              <th className="px-4 py-2 border border-gray-700">Overall Duration</th>
              <th className="px-4 py-2 border border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {
             killed.map(item => 
                  <KillItem 
                    key={item.id}
                    {...item}
                    onSetTimers={onSetTimers}
                    onSetKilled={onSetKilled}
             />)
            }
          </tbody>
        </table>
      </div>
    );
  };
  
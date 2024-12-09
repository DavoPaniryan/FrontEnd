import { Timer } from "./timer";

export const TimerList = ({ timers ,onDelete}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {timers.map((timer) => (
        <Timer key={timer.id} id={timer.id} onDelete={onDelete} timeEnd={timer.timeEnd} />
      ))}
    </div>
  );
};

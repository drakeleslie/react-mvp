import React from "react";

const JournalLog = ({ log }) => {
  return (
    <div className="logBox">
      <div className="logUserName">Username: {log.username}</div>
      <div className="logLiftName">{log.name}</div>
      <div className="logSets">Sets: {log.sets}</div>
      <div className="logReps">Reps: {log.reps}</div>
      <div className="logInfo">Comments: {log.info}</div>
    </div>
  );
};

export default JournalLog;

import React from "react";

const JournalLog = ({ log, currentUser }) => {
  console.log(currentUser);
  if (!currentUser) {
    return (
      <div className="logBox">
        <div className="logUserName">Username: {log.username}</div>
        <div className="logLiftName">{log.name}</div>
        <div className="logSets">Sets: {log.sets}</div>
        <div className="logReps">Reps: {log.reps}</div>
        <div className="logInfo">Comments: {log.info}</div>
      </div>
    );
  } else if (currentUser.name === log.username) {
    return (
      <div className="logBox">
        <div className="logUserName">Username: {log.username}</div>
        <div className="logLiftName">{log.name}</div>
        <div className="logSets">Sets: {log.sets}</div>
        <div className="logReps">Reps: {log.reps}</div>
        <div className="logInfo">Comments: {log.info}</div>
      </div>
    );
  }
};

export default JournalLog;

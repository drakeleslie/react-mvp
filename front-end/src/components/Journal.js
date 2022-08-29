import React, { useState } from "react";
import JournalLog from "./JournalLog";

const Journal = ({ journal, currentUser }) => {
  console.log(journal);
  console.log(currentUser);
  if (!currentUser) {
    return (
      <>
        <div className="journal">
          {journal.map((log) => (
            <JournalLog key={log.id} log={log} />
          ))}
        </div>
      </>
    );
  } else if (currentUser) {
    return (
      <>
        <div className="journal">
          {journal.map((log) => (
            <JournalLog key={log.id} log={log} currentUser={currentUser} />
          ))}
        </div>
      </>
    );
  }
};

export default Journal;

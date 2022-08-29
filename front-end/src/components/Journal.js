import React, { useState } from "react";
import JournalLog from "./JournalLog";

const Journal = ({ journal }) => {
  console.log(journal);
  return (
    <>
      <div className="journal">
        {journal.map((log) => (
          <JournalLog key={log.id} log={log} />
        ))}
      </div>
    </>
  );
};

export default Journal;

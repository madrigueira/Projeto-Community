import React from 'react'
import { useEffect, useState } from "react";

export const LoginPage = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/record/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
    }
    getRecords();
    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5050/record/${id}`, {
      method: "DELETE",
    });
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <h2 key={record._id}>{record.name}</h2>
      );
    });
  }



  return (
    <div className='LoginPage'>
      <h1>LoginPage</h1>
      {recordList()}
    </div>
  )
}

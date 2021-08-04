import React from 'react';
interface New {
   message?: string
}
export default function ErrorMessage: React.FC<New> = ({ message }) => {
  return (
    <>
      <div className="message">{message || 'Unknown error'}</div>
      <style jsx>{`
        .message {
          color: #650303;
          background-color: #ffb2b2;
          padding: 10px 6px;
          text-align: center;
          border-radius: 4px;
        }
      `}</style>
    </>
  )
}

const BadError = () => {
  return (
    <>
      <h1 className="message">Really bad error</h1>

      <style jsx>{`
        .message {
          background-color: blue;
          padding: 15px;
          color: white;
        }
      `}</style>
    </>
  );
};

export default BadError;
const FetcherButton = (props) => {
  const { func, text } = props;
  return (
    <>
      <button onClick={func}>{text}</button>
    </>
  );
};
export default FetcherButton;

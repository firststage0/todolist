import { fetcher } from "./fetcher";

const fetchButton = (props) => {
  const { func, text } = props;
  return (
    <>
      <button onClick={func}>{text}</button>
    </>
  );
};
export default fetchButton;

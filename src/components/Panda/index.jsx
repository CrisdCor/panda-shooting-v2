import "./styles.css";

export default function Panda() {
  return (
    <div className="panda-container">
      <span className="ears left-ear"></span>
      <span className="ears right-ear"></span>
      <div className="head">
        <span className="eyes eye-left"></span>
        <span className="eyes eye-right"></span>
        <span className="nose"></span>
      </div>
    </div>
  );
}

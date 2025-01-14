export default function Button({ onClick, children, type = null }) {
  return (
    <button onClick={onClick} className={`btn ${type != null ? type : ''}`}>
      <span className='btn-text'>{children}</span>
    </button>
  );
}

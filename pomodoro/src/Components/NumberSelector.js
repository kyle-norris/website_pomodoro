import './NumberSelector.scss';

const NumberSelector = ({ className, refValue }) => {
  return (
    <div className={`number-container ${className}`}>
      <input type="number" placeholder="1" className="number-input" ref={refValue}/>
    </div>
  )
}

export default NumberSelector

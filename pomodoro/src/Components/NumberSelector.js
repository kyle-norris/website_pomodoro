import './NumberSelector.scss';

const NumberSelector = ({ className }) => {
  return (
    <div className={`number-container ${className}`}>
      <input type="number" placeholder="1" className="number-input"/>
    </div>
  )
}

export default NumberSelector

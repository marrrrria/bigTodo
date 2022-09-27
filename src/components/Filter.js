import React from "react";

function Filter({filterAll, filterActive, filterDone}) {

  const [active, setActive] = React.useState('all')

  let colorL = active === 'all' ? 'rgba(141, 217, 236, 0.925)' : 'rgba(199, 242, 253, 0.377)';
  let colorC = active === 'active' ? 'rgba(141, 217, 236, 0.925)' : 'rgba(199, 242, 253, 0.377)';
  let colorR = active === 'done' ? 'rgba(141, 217, 236, 0.925)' : 'rgba(199, 242, 253, 0.377)';

  const styles = {
    buttonLeft: {
      backgroundColor: colorL,
      borderRadius: '10px 0 0 10px', 
      borderWidth: '1px 0 1px 1px',
    },
    buttonCenter: {
      backgroundColor: colorC,
    },
    buttonRight: {
      borderRadius: '0 10px 10px 0', 
      borderWidth: '1px 1px 1px 0',
      backgroundColor: colorR,
    }
  }
  return (
    <div className="filter">
      <button style={styles.buttonLeft} onClick={(e) => {filterAll(e); setActive('all')}}>ALL</button>
      <button style={styles.buttonCenter} onClick={() => {filterActive(); setActive('active')}} >Active</button>
      <button style={styles.buttonRight} onClick={() => {filterDone(); setActive('done')}}>Done</button>
    </div>
  )
}

export default Filter
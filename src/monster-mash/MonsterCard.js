import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  monsterCard: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column', 
    border: '1px solid red'
  }
}

const MonsterCard = ({ monster }) => {
  return (
    <div style={styles.monsterCard}>
      <h1>{ monster.name }</h1>
      {
        monster.diet.map((food) => {
          return <p>{ food }</p>
        })
      }
      <img src={monster.img} />
    </div>
  )
}

MonsterCard.propTypes = {
  monster: PropTypes.object.isRequired
}

export default MonsterCard

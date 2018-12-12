
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// added to force import on styleguide
import "todomvc-app-css/index.css";

/** Simple component for a standard HTML link <a> tag */

const Link = ({ active, children, setFilter }) =>
  (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className={classnames({ selected: active })}
      style={{ cursor: 'pointer' }}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  )


Link.propTypes = {
  /** creates the active state of a link */
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Link

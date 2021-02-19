import PropTypes from 'prop-types'

import React from 'react'

const Navbar = ({title, icon}) => {
    
    return (
        <nav className='navbar bg-primary' >
            <h1>
                <i className={icon} />{title}
            </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title:"Git Finder",
    icon:"fab fa-github"
};

Navbar.propTypes= {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar

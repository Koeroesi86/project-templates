import React from 'react'
import {connect} from 'react-redux'

export function Home() {
    return (
        <div className="Home">
            <h1>Home</h1>
        </div>
    )
}

Home.defaultProps = {};

Home.propTypes = {};

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
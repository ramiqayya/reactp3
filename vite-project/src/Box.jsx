import React from "react"

export default function Box(props) {
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */

    const [mode, setMode] = React.useState(props.on)

    function toggle() {
        console.log(mode)
        setMode((prevMode) => !prevMode);
    }

    const styles = {
        backgroundColor: mode ? "#222222" : "transparent"
    }

    return (
        <div style={styles} className="box" onClick={toggle}></div>
    )
}
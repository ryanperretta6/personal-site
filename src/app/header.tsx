import {subway, lato, latoBold, latoBlack} from '../../styles/fonts/fonts';

export default function Header() {
    return (
        <div className="header">
            <h1 style={subway.style}>Ryan Perretta&apos;s Personal Site</h1>
            <div className="headerButton" style={latoBold.style}>About Me</div>
            <div className="headerButton" style={latoBold.style}>My Jobs</div>
        </div>
    );
}
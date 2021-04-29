import React from 'react';
import { Link } from 'react-router-dom';


function Navbar({ links }) {
    return (
        <header>
            <nav>
                <ul>
                    {
                        links.map(
                            (link, i) => <li key={i}>
                                <Link to={link.href}>{link.label}</Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}

/*

for (let i = 0; i < links.length; i++) {
    let link = links[i];
}

A)
function mapLink(link){
    return (
        <li>{link}</li>
    );
}
props.links.map(mapLink)

B)
props.links.map(function(link){
    return (
        <li>{link}</li>
    );
})

C)
props.links.map((link) => {
    return (
        <li>{link}</li>
    );
})

D)
props.links.map(link => {
    return (
        <li>{link}</li>
    );
})

E)
props.links.map(link => (
        <li>{link}</li>
    )
)

F)
props.links.map(link => <li>{link}</li>)

*/

export default Navbar;

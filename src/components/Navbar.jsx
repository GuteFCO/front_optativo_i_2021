import React from 'react';


function Navbar(props) {
    return (
        <header>
            <nav>
                <ul>
                    {
                        props.links.map(
                            (link, i) => <li key={i}>{link}</li>
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}

/*

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

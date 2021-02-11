import React, { Component } from 'react'

class list extends Component {
    constructor(props) {
        super(props);
        this.systems = ["windows", "mac", "linux", "playstation", "xbox", "nintendo"]
        this.listsystems = this.systems.map((system) => {
            return <li>{system}</li>
        })

        this.object1 = {
            name: "Jeff",
            actualname: "Channing Tatum",
            willtolive: true,
            age: 21
        }

        this.objectiterate = Object.entries(this.object1).map(([key, value], i) => {
            return <p>{value}</p>
        })

    }
            
        
    

    

        
     

    render() {
        return (
            <div>
                {this.listsystems}
                <div>
                {this.objectiterate}
                </div>
            </div>
        )
    }
}

export default list;

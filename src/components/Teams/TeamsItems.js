import React, {Component} from "react";
import {afiliacja, analitycy} from "./icons/icons";


class TeamsItems extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                analitycy,afiliacja]
        }
    }

    // img = this.state.images.map((Image, index) => {
    //     return (
    // });
    //         <Image/>
    //     )

    render(props) {
        const img = this.state.images.map((Image, index) => {
            return (
                <Image key={index}/>
             )
         });

        return (
            <div key={this.props.key}>
                {img}
                <p onClick={()=>this.test(this.props.title)}>{this.props.title}</p>
                <span>{this.props.description}</span>
                <img src={this.props.title} alt=""/>
            </div>
        )
    }
};

export default TeamsItems;
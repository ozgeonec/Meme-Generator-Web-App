import React from "react";

class MemeGenerator extends React.Component{
    constructor() {
        super();

        this.state = {
            topText: "",
            buttomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }
        componentDidMount(){
            fetch("https://api.imgflip.com/get_memes")
                .then(response=>response.json())
                .then(response=>{
                    const {memes}=response.data
                    console.log(memes[0])
                    this.setState({allMemeImgs:memes})
                })
        }

    render(){
        return(
            <div>
                <form className="meme-form">

                    <button>Gen</button>
                </form>

            </div>
        )
    }
}

export default MemeGenerator
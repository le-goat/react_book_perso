import React, {Component} from "react";

export default class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: []
        }
    }



    render() {
        fetch('https://photoslibrary.googleapis.com/v1/mediaItems:search', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.props.accessToken}`
            },
            body: JSON.stringify({
                "pageSize": "100",
                "albumId": this.props.id_album
            })
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                return res;
            })
        console.log(this.props.id_album)
        console.log(this.props.accessToken)

        return(
            <div className="image_album">

            </div>
        )
    }
}
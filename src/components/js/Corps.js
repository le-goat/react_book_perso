import React, {Component} from "react";
import '../css/Corps.css'
import * as url from "url";

const API = "https://photoslibrary.googleapis.com/v1/albums";
//const DEFAULT_QUERY = 'redux';

class GetData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            sharedAlbums: [],
            allAlbums: []
        };
    }

    getElements(id_album) {
        fetch('https://photoslibrary.googleapis.com/v1/mediaItems:search', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.props.accessToken}`
            },
            body: JSON.stringify({
                "pageSize": "100",
                "albumId": id_album
            })
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                return res;
            })
    }

    componentDidMount() {
        fetch(API, {
           headers: {
               "Authorization": `Bearer ${this.props.accessToken}`
           }
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                return res;
            })
            .then(data => this.setState({albums: data.albums}));
        fetch(`https://photoslibrary.googleapis.com/v1/sharedAlbums`, {
            headers: {
                "Authorization": `Bearer ${this.props.accessToken}`
            }
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                return res;
            })
            .then(data => this.setState({sharedAlbums: data.sharedAlbums}));
    }



    render() {
        this.state.allAlbums = [...this.state.albums, ...this.state.sharedAlbums]
        this.state.allAlbums = this.state.allAlbums.filter((item, index) => {return this.state.allAlbums.indexOf(item) === index})
        console.log(this.state.allAlbums)

        return(
            <div className="data">
                    {this.state.allAlbums.map((album) => (
                    <div onClick={this.getElements(album.id)} className="fiche_album" style={{backgroundImage: `url(${album.coverPhotoBaseUrl})`, backgroundPosition: 'center', backgroundSize: 'cover', backdropFilter: 'opacity(30%)'}}>
                        <h6>{album.title}</h6>
                        <h6>{album.mediaItemsCount}</h6>
                    </div>
                    ))}
            </div>
        )
    }
}

export default GetData;
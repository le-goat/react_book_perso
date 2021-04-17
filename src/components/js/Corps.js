import React, {Component} from "react";
import '../css/Corps.css'
// import Images from './Album';
// import {Link} from "react-router-dom";

const API = "https://photoslibrary.googleapis.com/v1/albums";



class GetData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            sharedAlbums: [],
            allAlbums: [],
            albumisLoaded: false,
            album: [],
            shareorPrivate: true,
            text: null
        };
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        if (this.state.shareorPrivate) {
            this.setState({shareorPrivate: false})
        }
        else {
            this.setState({shareorPrivate: true})
        }
    }

    getElements(id_album) {
        fetch('https://photoslibrary.googleapis.com/v1/mediaItems:search', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.props.accessToken}`,
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                "pageSize": "100",
                "albumId": id_album
            })
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                // this.setState({album: res.album})
                return res;
            }).then(data => this.setState({albumisLoaded: true, album: data.album}))


        return (
            <div className="fiche_album">
                {this.state.albumisLoaded && (this.state.album.map((image) => (
                    <div className="photo">
                        <img src={image.coverPhotoBaseUrl} alt={image.filename}/>
                    </div>
                )))}
            </div>
        )
    };

    componentDidMount() {
        fetch(API, {
            headers: {
                "Authorization": `Bearer ${this.props.accessToken}`
            }
        })
            .then(response => response.json())
            .then(res => {
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
                return res;
            })
            .then(data => this.setState({sharedAlbums: data.sharedAlbums}));
    }


    render() {
        if (this.state.shareorPrivate) {
            this.state.allAlbums = this.state.albums
            this.state.text = 'Les albums que vous avez créés'
        }
        else {
            this.state.allAlbums = this.state.sharedAlbums
            this.state.text = 'Les albums que vous avez partagés'
        }


        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.handleClick}>Voir l'autre section</button>

                <div className="data">
                    {this.state.allAlbums.map((album) => (
                        <div onClick={() => this.getElements(album.id)} className="fiche_album">
                            <h2>{album.title}</h2>
                            <h4>{album.mediaItemsCount}</h4>
                            <img className="couverture_album" src={album.coverPhotoBaseUrl} alt={album.title}/>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}

export default GetData;
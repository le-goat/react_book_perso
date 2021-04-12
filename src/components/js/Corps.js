import React, {Component} from "react";

const API = 'https://photoslibrary.googleapis.com/v1/albums';
const DEFAULT_QUERY = 'redux';

class GetData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
        };
    }

    componentDidMount() {
        fetch(API, {
           headers: {
               "Authorization": `Bearer ${this.props.accessToken}`
           }
        })//)
            .then(response => response.json())
            .then(res => {
                console.log(res)
                return res;
            })
            .then(data => this.setState({albums: data.albums}));

    }


    render() {
        return(
            <div className="data">
                <p>
                    {this.state.albums.map((album) => (
                    <div>
                        <h6>{album.title}</h6>
                    </div>
                    ))}
                </p>
            </div>
        )
    }
}

export default GetData;
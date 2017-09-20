import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';


function formUrl(method, api_key, photoset_id, user_id, per_page) {
	return `https://api.flickr.com/services/rest/
	?method=${method}
	&api_key=${api_key}
	&photoset_id=${photoset_id}
	&user_id=${user_id}
	&per_page=${per_page}
	&format=json&nojsoncallback=1`;
}

const url = formUrl('flickr.photosets.getPhotos', 
					'0c3f8d32a28de8434240115b85a28499', 
					'72157688485135075', 
					'8994820%40N07', 
					'300'
					);

export default class Content extends Component {
  constructor() {
      super();
      this.state = {
        photographs: []
      };
    }

    componentDidMount() {
      axios.get(url)
        .then(response => {
          this.setState({
            photographs: response.data.photoset.photo
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
	
    render() {
    let year = new Date().getFullYear();
      return (
        <div>
          <div className="main-content">
            <PhotoList data={this.state.photographs}/>
          </div>
        </div>
      );
    }
}

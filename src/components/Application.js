// Libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Sidebar from './Sidebar';


export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {		
		items: [
				{backgroundImage: 'vegas', title: 'High School Graduation Trip to Las Vegas', color: 'gold', photoset_id: 72157687042225613, per_page: 37},
				{backgroundImage: 'hawaii', title: 'Mahalo Fora Maui', color: 'gold', photoset_id: 72157686468511520, per_page: 76},
				{backgroundImage: 'europe', title: 'My Trip to Europe', color: 'gold', photoset_id: 72157686893038650, per_page: 138}
          ],
		backgroundImage: 'europe',
		photosetId: '72157686893038650',
		perPage: 138,
		title: 'My Trip to Europe',
		color: 'gold',
    };
    this.handleBackgroundImageChange = this.handleBackgroundImageChange.bind(this);
  }
	handleBackgroundImageChange(backgroundImage){
		this.setState({backgroundImage: backgroundImage});
}
  render(){
    return (
      <div className="main-container">
		<div className="header">
			<h1>Adam&apos;s Adventures</h1>
		</div>
		<div className="primary-content">
			<div class="sidebar">
				<Sidebar 
					items={this.state.items}
					onBackgroundImageChange={this.handleBackgroundImageChange}
				/>
			</div>
			<div className="carousel">
				<Content 
					title={this.state.title} 
					id={this.state.photosetId} 
					page={this.state.perPage} 
					background={this.state.backgroundImage}
					color={this.state.color}
				/>
			</div>
		</div>
		<div className="footer">
			<h2>Adam Bodie &copy; 2017</h2>
		</div>
      </div>
    );
  }
}


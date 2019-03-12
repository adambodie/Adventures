import React, { Component } from 'react';
import BannerButtons from './BannerButtons';
import BannerItem from './BannerItem';
import store from '../store';

export default class BannerList extends Component {
	render(){
		const opacStyle = { opacity: 0.1};
		const hiddenStyle = { opacity: 0 };
		const { data } = this.props;
		let counter = store.getState().counter;
		return (
			<React.Fragment>
				<div className="banners">
				{data.map((x, index) => {
					if (index === 0 && index === counter) {
						return (
						<React.Fragment key={index}>
							<BannerItem oStyle={opacStyle} hStyle={hiddenStyle} count={counter} backgroundImage={'portland'} index={index + 68} key={index + 67} />
							<BannerItem count={counter} backgroundImage={x.backgroundImage} index={index + 1} key={index} />
						</React.Fragment>
						)	
					}
					if (index === 67 && index === counter) {
						return (
						<React.Fragment key={index}>
							<BannerItem count={counter} backgroundImage={x.backgroundImage} index={index + 1} key={index} />
							<BannerItem oStyle={opacStyle} hStyle={hiddenStyle} count={counter} backgroundImage={'vegas'} index={index - 66} key={index - 67} />
						</React.Fragment>
						)
					}
					if (index === counter && (index !== 0 || index !== 67)) {
						return <BannerItem count={counter} backgroundImage={x.backgroundImage} index={index + 1} key={index} />
					}
					if (index - 1 === counter || index + 1 === counter) {
						return <BannerItem oStyle={opacStyle} hStyle={hiddenStyle} count={counter} backgroundImage={x.backgroundImage} index={index + 1} key={index} />
						}
					return null;
					}
				)}
			</div>
				<BannerButtons
					count={counter}
					onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
					onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
				/>
			</React.Fragment>
		);
	}
}







import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		console.log(this.imageRef);
		// we see 0 for the 'clientHeight' because it's called too quickly before the image is downloaded.
		console.log(this.imageRef.current.clientHeight);
	}

	render() {
		const { description, urls } = this.props.image;

		return (
			<div>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;

import React, { Component, useRef } from "react";
import { TwitchPlayer } from 'react-twitch-embed'


class TwitchView extends Component {
	constructor(props) {
    super(props);

  }

	render() {
  	return (
				<TwitchPlayer
          channel="petepittawat"
          width="100%"
          height="100%"
					muted={this.props.muted}
          parent={['codesandbox.io', 'localhost']}
        />
  	);
	}
}

export default TwitchView;

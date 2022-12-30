import React, { Component, useRef } from "react";
import { TwitchPlayer } from 'react-twitch-embed'


class TwitchView extends Component {
	constructor(props) {
    super(props);

  }

	render() {
  	return (
				<TwitchPlayer
          channel="ampm_m"
          width="100%"
          height="100%"
					muted={this.props.muted}
          parent={['codesandbox.io', 'localhost']}
        />
  	);
	}
}

export default TwitchView;

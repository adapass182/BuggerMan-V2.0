import React, {PureComponent} from 'react'

export default class Tile extends PureComponent {
  render() {
    if (this.props.content === 'x') {
      return <div className="tile tile-player">{this.props.content}</div>
    } else if (this.props.content === 0) {
      return <div className="tile tile-empty">{this.props.content}</div>
    }
  }
}

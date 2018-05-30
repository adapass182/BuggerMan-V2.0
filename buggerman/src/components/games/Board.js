import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'
import { renderPlayer, move } from '../../actions/player'

class Board extends PureComponent {

  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentWillMount() {
    this.props.renderPlayer()
  }
  componentDidMount(){
    this.nameInput.focus();
    document.addEventListener('keypress', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }
  handleKeyPress(event) {
    this.props.move(event.keyCode);
  }



  render() {
    return (
      <div 
        ref="board" 
        className='board-container' 
        tabIndex="0" 
        ref={(input) => { this.nameInput = input }}
      >
          {
            this.props.board.map(row => (
              row.map((cell, i) => (
                <Tile content={cell} key={i} />
              ))
            ))
          } 
      </div>
    )
  }
}

const mapStateToProps = ({ board }) => {
  return { board }
}
export default connect(mapStateToProps, { renderPlayer, move })( Board )

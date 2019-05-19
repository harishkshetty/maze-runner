import React, { Component } from 'react'
import './maze.css'
export default class maze extends Component {
    state={
        positionX:0,
        positionY:0,
        winner:false,
        show:false,
        stepstaken:0,
        maze:[[0,1,0,0,0,0,0,1,0,1],
        [0,1,1,0,0,1,0,1,0,1],
        [0,1,0,0,1,1,0,1,0,1],
        [0,1,0,1,1,0,0,0,0,1],
        [0,1,0,0,1,0,0,0,0,1],
        [0,0,0,0,0,0,0,1,0,1],
        [0,0,1,1,0,0,0,0,0,1],
        [0,0,1,0,0,1,0,0,0,1],
        [0,0,1,0,0,1,0,0,0,0],
        [0,0,1,0,0,1,0,0,0,1]]
    }
    componentWillMount() {
        document.addEventListener("keydown", this.movePlayer.bind(this));
    }
  
    componentWillUnmount() {
        document.removeEventListener("keydown", this.movePlayer.bind(this));
    }      
  
    checkPosibility = (x,y) => {
        const { maze} = this.state;
        if(maze[x][y] === 1) {
          return false;
        }
        return true;
      }
     
      movePlayer = ({keyCode}) => {
        const { positionX, positionY, maze,stepstaken } = this.state;
        const {modalshow,steps}=this.props;
     
        let newPositionX = positionX;
        let newPositionY = positionY;
     
        if(keyCode === 38) {
          //Up
          // console.log('Up');
          if( positionX > 0 && this.checkPosibility(positionX - 1, positionY)) {
            newPositionX = positionX-1;
          }
     
        } else if(keyCode === 37) {
          //Left
          // console.log('Left');
          if( positionY > 0 && this.checkPosibility(positionX, positionY - 1)) {
            newPositionY = positionY-1;
          }
        } else if(keyCode === 39) {
          //right
          // console.log('Right');
          if( positionY < maze.length-1 && this.checkPosibility(positionX, positionY + 1)) {
            newPositionY = positionY+1;
          }
        } else if(keyCode === 40) {
          //bottom

          if( positionX < maze.length-1 && this.checkPosibility(positionX +1 , positionY)) {
            newPositionX = positionX + 1;
          }
        }
     
        this.setState((prev)=>{
            return {steps:prev.steps+1}
        })
        this.setState({positionX: newPositionX,positionY: newPositionY,stepstaken:stepstaken+1},()=>{
            if(this.state.positionY>=maze.length-1){
                this.setState({winner:true,positionX:0,positionY:0});
                modalshow();
                steps(this.state.stepstaken);
                this.setState({stepstaken:0})
            }
            else{
                this.setState({winner:false})

            }
        })
      
      
     
      }
  render() {
      const {positionX,positionY,maze,winner}=this.state;

    const mazebox=maze.map((mazelist,outerlist)=>{
       return(mazelist.map((box,innerlist)=>{
           
           if(positionX==outerlist&&positionY==innerlist){

               return (
                   <li key='player' className="player"></li>
               )
           }
            return(
                <li key={`${innerlist}box`} className={`${box===0?'unfilled':'filled'}`}></li>
            )
        }))
    })
    return (
      <div className="maze-container">
      <h4>Maze Runner</h4>
{mazebox}
      </div>
    )
  }
}

import React from 'react';

// This component renders a box with a random background color
// It will change the color each x ms that will be passed by prop
// Prop
// colorChangeInterval - number - positive integer for the ms of the interval
// State
// color - string - the css color of the bg (e.g. "#FF0000")
class RandomBoxColor extends React.Component {
    
    constructor(props) {
        super(props);
        this.counter=0;
        this.radious="0";
        this.state = {
            color: this.getRandomColor()
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const newColor = this.getRandomColor();
            console.log("updating new color to: " + newColor);
            this.setState({color: newColor});
        }, this.props.colorChangeInterval);
    }

    componentDidUpdate(prevProps, prevState) {

        ++this.counter;
        console.log (this.counter);
        if (this.counter==5)
        {
            this.radious="50%";
        }
        if (this.counter>=10) 
        {
            console.log ("Yeah");
            clearInterval(this.myInterval);
        }

        // Check that the colorChangeInterval was changed
        if (this.props.colorChangeInterval != prevProps.colorChangeInterval) {
            // 1) Stop the current interval
            clearInterval(this.myInterval);
           
            // 2) create a new interval with the new time
            this.myInterval = setInterval(() => {
                const newColor = this.getRandomColor();
                console.log("updating new color to: " + newColor);
                this.setState({color: newColor});
            }, this.props.colorChangeInterval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = "#";
        for (let i = 0; i < 6; i++) {
            const index = Math.floor(Math.random() * 16);
            color += letters[index];
        }

        return color;
    }

    render() {
        const {color} = this.state;

        // converting data to presentation
        // convert the color state to a style object 
        const myStyle = {backgroundColor: color ,borderRadius:this.radious}
        return (
            <>
                <div style={myStyle} className="box"></div>
            </>
        ) 
    }
}

export default RandomBoxColor;

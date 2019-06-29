import * as React from 'react';

export default class CityMapper extends React.Component {

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://static.citymapper.com/js/embed/widget.js";
        script.setAttribute("data-slug", "idhv3td4ro");
        script.setAttribute("data-width", "450");
        script.async = true;

        document.getElementById("CityMapperPlaceHolder").appendChild(script);
    }

    render() {
        return (
            <div>
                <h2>Contact Details </h2>
                <p>Full address: 52 Chiltern Street, Baker Street, W1U 7QU </p>
                <p>Phone number: 020 7224 7225 </p>

                <br></br>

                <p>It's 10min walk from Baker Street station, directions below </p>
                <div id="CityMapperPlaceHolder"></div>
                
            </div>
        );
    }
}
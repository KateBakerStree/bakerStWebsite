import * as React from 'react';
import p1 from "./p1.jpg"
import p2 from "./p2.jpg"

export default class Counter extends React.Component {

    render() {
        return (
            <div>
                <p>Reflexology, back massage, fullbody relaxing massage in baker street</p>

                <img src={p1}></img>

                <p>
                    Relieve stress, relieve paint, soothe tight muscle, release tension, relax your body and mind.
                Take off the stiff muscle and pain
                 </p>

                <image from={p2}></image>
                <img src={p2}></img>

                <p>
                    Professional and friendly massage therapist rotating each day. Our staff are European girls and Chinese girls.
                </p>
            </div>
        );
    }
}
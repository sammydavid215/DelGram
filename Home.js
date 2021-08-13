import { render } from '@testing-library/react'
import React from 'react'
import './Style.css'
//import image2 from './images';
export default function Home() {
    render();{
    return (
        <div>
            <section>
                <img class="img" src= "./image3.jpeg" alt="img"/><img class="img2"src= "./image5.jpeg" alt="img"/>
            </section>
            <section></section>
            <section></section>
            <div class="login">
            <input class="Uname"placeholder="Phone number, Username, Email"type="text"/><br></br>
            <input class="Pword"placeholder="Password"type="text"/>
            <br></br><button class="bLog">Log In</button>
            </div>
            <div class="or">OR</div>
            <div><br></br><button class="Log">Log In With Facebook</button></div>
            <div>
                <a>Forget Password and User name? Click Here.</a>
            </div>
            <div><a>Don't Have an Account? Create One</a></div>
            <div></div>
        </div>
    )}
}

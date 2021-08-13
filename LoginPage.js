import { render } from '@testing-library/react'
import React from 'react'
import './Style.css'
//import image2 from './images';
export default function LoginPage() {
    render();{
    return (
        <div class="flex_cont">
            <section>
            <img class="img" src= "./image3.jpeg" alt="img"/>
            </section>
            <section></section>
            <section></section>
            <div class="login">
            <input class="Uname"placeholder="Phone number, Username, Email"type="text"/><br></br>
            <input class="Pword"placeholder="Password"type="text"/>
            <br></br><button class="bLog">Log In</button>
            <h1 class="or">OR</h1>
            <br></br><button class="Log">Log In With Facebook</button>
            <br></br><a  class="click">Forget Password and Username? Click Here.</a>
            <br></br><a class="create" href="./Profile.js">Don't Have an Account? Create One</a>
            <br></br><img class= "image2"src="./image2.png" atl=""/><img class="image"src="./image.png" atl=""/>
            
            </div>
            
            <div></div>
            <div>
                
            </div>
            <div></div>
            <div></div>
        </div>
    )}
}

import { render } from '@testing-library/react'
import React from 'react'

import './Style.css'

//import image2 from './images';
export default function LoginPage() {
    render();{
    return (
        <div>
        
        <div class="flex_cont">
            
            <div class="login">
            <section class="clog">
            <img src="Group 20.png" alt="logo"/><br></br>
            <input class="Uname"placeholder="Phone number, Username, Email"type="text"/><br></br>
            <input class="Pword"placeholder="Password"type="text"/>
            <br></br><button class="bLog">Log In</button>
            <br></br><a  class="click">Forget Password and Username?</a>
            </section>
            <section class="don">
            <br></br><button class="dlog">Don't Have an Account? <a class="sin"> Sign Up</a></button> 
            </section>
            <br></br><a>Get The App</a>

            <br></br><img class="image"src="./image.png" atl=""/>
             
            </div>
            <section>
            <img class="" src= "./Double Iphones (3) 1.png"alt="img"/>
            </section>
            <div></div>
            <div>
            
            </div>
            </div>
            <button class="a">About</button><button class="b">Blog</button><button class="j">Job</button><button class="h">Help</button>
            <button class="A">API</button><button class="p">Privacy</button><button class="t">Terms</button><button class="T">Top</button><button class="ac">Account</button><button class="ha">Hashtag</button><button class="l">Location</button>
            <br></br>
            <a> English</a>
        <a> @ 2021 DeltaTechHub</a>
        </div>
       
    )}
}

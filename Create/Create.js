import { render } from '@testing-library/react'
import React from 'react'
import './Style_1.css'
//import image2 from './images';
export default function Create() {
    render();{
    return (
        <div>
        <div class="flex_grid">
            <div class="login">
            <div class="del">
            <img src="Group 20.png"/><br></br>
            <input class="firstname"placeholder="Full Name"type="text"/><br></br>
            <input class="mail"placeholder="E-mail"type="text"/><br></br>
            <input class="Username"placeholder="Username"type="text"/><br></br>
            <div class="flex_again">
            <input class="Pnumber"placeholder="Phone number"type="text"/>
            <select  class="start">
            <option  placeholder="Cartegories" value="Start_Up">Stack.</option>
            <option value="Empowerment." >Empowerment.</option>
            </select>
            </div>
            <input class="Password"placeholder="Password"type="text"/><br></br>
            <br></br><button class="bLog">Create Account</button>
            </div>
            <div class="AB">
            <br></br><button class="Already">Already Have An Account? <a class="lo">login</a></button>
            </div>
            <div>
            <br></br><a>Get The App</a>
            
            
            <br></br><img class="image"src="./image.png" atl=""/>
            </div>
            </div>
            <img src="./Double Iphones (3) 1.png"/>
            
        </div>
        <button class="a">About</button><button class="b">Blog</button><button class="j">Job</button><button class="h">Help</button>
            <button class="A">API</button><button class="p">Privacy</button><button class="t">Terms</button><button class="T">Top</button><button class="ac">Account</button><button class="ha">Hashtag</button><button class="l">Location</button>
            <br></br>
        
        <a>English</a>
        <a> @ 2021 DeltaTechHub</a>
        </div> 
        
    )}
}

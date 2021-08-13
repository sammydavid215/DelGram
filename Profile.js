import React from 'react'
import './Style.css'
export default function Profile() {
    return (
        <div >
            <form class="Pform">
            <input class="Fname" placeholder="Fisrt Name" type="text"/><br></br>
            <input class="Lname" placeholder="Last Name" type="text"/><br></br>
            <input class="Email" placeholder="E-mail" type="text"/><br></br>
            <input class="Phone" placeholder="Phone number" type="text"/><br></br>
            
            <select class="sex" id="sex">
            <option value="Male"selected>Male</option>
            <option value="Female" >Female</option>
            </select><br></br>
            
            
            <select>
            <option value="Marriade" selected>Marriade</option>
            <option value="Single" >single</option>
            </select><br></br>
            
            <select>
            <option value="Start_Up" selected>Start_Up.</option>
            <option value="Empowerment." >Empowerment.</option>
            </select><br></br>
            
            <select>
            <option value="Front End Dev." selected>Front End Dev.</option>
            <option value="Back End Dev." >Back End Dev.</option>
            <option value="UI and UX Design">UI and UX Design</option>
            <option value="Advance_Networking">Advance_Networking</option>
            <option value="Android_Mobile_Dev.">Android_Mobile_Dev</option>   
            </select><br></br>
            <br></br><button class="Pbutton">Sign UP</button>
            </form>
        </div>
    )
}

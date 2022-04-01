import { Typography } from "@material-ui/core";

function Profile() {
  return (
  <Typography>
    <head>
                                <meta charset='utf-8'/>
                                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                                <title>Profile</title>
                                <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css' rel='stylesheet'/>
                                <link href='' rel='stylesheet'/>
                                <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'/>
                                <style>body 
    background: rgb(105, 26, 23);


.form-control:focus 
    box-shadow: none;
    border-color: rgb(105, 26, 23);


.profile-button 
    background:rgb(105, 26, 23);
    box-shadow: none;
    border: none


.profile-button:hover 
    background: rgb(105, 26, 23);


.profile-button:focus 
    background: rgb(105, 26, 23);
    box-shadow: none

.profile-button:active 
    background: rgb(105, 26, 23);
    box-shadow: none


.back:hover 
    color: rgb(105, 26, 23);
    cursor: pointer


.labels 
    font-size: 11px


.add-experience:hover 
    background: rgb(105, 26, 23);
    color: #fff;
    cursor: pointer;
    border: solid 1px rgb(105, 26, 23)

.profile-pic 
	 color: transparent;
	 transition: all 0.3s ease;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 position: relative;
	 transition: all 0.3s ease;

 .profile-pic input 
	 display: none;

 .profile-pic img 
	 position: absolute;
	 object-fit: cover;
	 width: 165px;
	 height: 165px;
	 box-shadow: 0 0 10px 0 rgba(255, 255, 255, .35);
	 border-radius: 100px;
	 z-index: 0;

 .profile-pic .-label 
	 cursor: pointer;
	 height: 165px;
	 width: 165px;

 .profile-pic:hover .-label 
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 background-color: rgba(0, 0, 0, .8);
	 z-index: 10000;
	 color: #fafafa;
	 transition: background-color 0.2s ease-in-out;
	 border-radius: 100px;
	 margin-bottom: 0;

 .profile-pic span 
	 display: inline-flex;
	 padding: 0.2em;
	 height: 2em;

 body-profilepic 
	 height: 100vh;
	 background-color: #191815;
	 display: flex;
	 justify-content: center;
	 align-items: center;

 body-profilepic a:hover 
	 text-decoration: none;
                                
 </style>
                                </head>
                                <body oncontextmenu= 'false' class='snippet-body'/>
                                <div class="container rounded bg-white mt-5 mb-5"/>
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <div class="profile-pic">
                    <label class="-label" for="file">
                      <span class="glyphicon glyphicon-camera"></span>
                      <span>Change Image</span>
                    </label>
                    <input id="file" type="file" onchange="loadFile(event)"/>
                    <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" id="output" width="150" />
                  </div>     
            </div>
            
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="col-md-10 nk-block-des">
                        <h4 class="nk-block-title">Profile Setting</h4>
                        

                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><span class="data-label"/>FirstName<input type="text" class="form-control" placeholder="firstname" value=""/></div>
                    <div class="col-md-6"><span class="data-label"/>Lastname<input type="text" class="form-control" value="" placeholder="lastname"/></div>
                </div>
                
                <div class="row mt-3">
                    <div class="col-md-12"><span class="data-label"/>Employee Number<input type="text" class="form-control" placeholder="Enter Employee Number" value=""/></div>
                    <div class="col-md-12"><span class="data-label">Phone Number</span><input type="tel" class="form-control" placeholder="Enter phone number" value=""/>
                        
                    </div>
                    <div class="col-md-12"><span class="data-label"/>Date of birth<input type="date" class="form-control" placeholder="Enter DOB" value=""/></div>
                    
                    <div class="col-md-12"><span class="data-label"/>Name of Department & School/Research Centre<input type="text" class="form-control" placeholder="" value=""/>
                    <div class="col-md-12"><span class="data-label"></span>Date of Joining<input type="date" class="form-control" placeholder="Enter DOJ" value=""/></div>
                    <div class="col-md-12"><span class="data-label"></span>Whether Awarded PhD<input type="text" class="form-control" placeholder="" value=""/></div>
                    <div class="col-md-12"><span class="data-label"></span>Year Awarded PhD<input type="text" class="form-control" placeholder="" value=""/></div>
                    <div class="col-md-12"><span class="data-label"/>Email ID<input type="email" class="form-control" placeholder="enter email id" value=""/>
                    
                    <div class="col-md-12"><span class="profile-ud-label"/>Current Gross Salary<input type="text" class="form-control" placeholder="" value=""/>
                        
                    
                </div>
                {/* <!--<div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
                </div>--> */}
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        {/* <!--
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span class="data-label">Edit Experience</span></div><br>
                <div class="col-md-12"><span class="data-label">Experience in Designing<input type="text" class="form-control" placeholder="experience" value=""></div> <br>
                <div class="col-md-12"><span class="data-label">Additional Details<input type="text" class="form-control" placeholder="additional details" value=""></div>
            </div>
        </div>--> */}
    </div>
</div>
</div>
</div>
                                <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js'></script>
                                <script type='text/javascript' src=''></script>
                                <script type='text/javascript' src='./js/profile.js'></script>
                                <script type='text/Javascript'></script>
                         
  </Typography>
);
}
export default Profile;

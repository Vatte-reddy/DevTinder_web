#Devtinder

->create first vite+React application

->remove unecessary code and create a program(hello world)
->install tailwind css
->install daisyui
->Add NavBar component to App.jsx
->create NavBar.jsx separate component file
->install react-router-dom
->create BrowserRouter > Routers > Route=/Body >RouteChildren
->create an  Outlet  in your Body Component
->create a footer in body component 
->create login page
->install axios
->install CORS in backend and this middleware to with configration ->origin and credentials
->whenever you making api call so pass axios with{ credentials=true} and origin
->install redux tool kit-https://redux-toolkit.js.org/introduction/getting-started
->install redact-redux+@reduxjs+toolkit=>create store configureStore=>provider=>createSlice and export slice actions or store

->add redux to chrome
->login and see if your is coming properly 
->navbar should update as soon as user logs
->create components folder and rearrange files
->no other routers accesing without login
->if token is not present then redirect to login page
->logout feature
->get feed and add it to store
->build the user card on feed
->Edit profile feature
->show toast and save profile
->new page to see connections
->new page to see connection requests
->feature -Accept or reject connection requests


->remaining features
-send/ignore the user from feed
-signup new User
->E2E testing


Body
  NavBar
  Route=/Feed
  Route=/login=>Login
  Route=/Connection=>Connections
  Router=/profile=>profile 


  Deployment
   signup for AWS cloud
   initate the instance
   change 400 <secret.pem>
   ssh -i "devTinder secreate.pem" ubuntu@ec2-3-26-45-216.ap-southeast-2.compute.amazonaws.com
   intall node version 
   git clone
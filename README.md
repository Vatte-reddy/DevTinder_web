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
   Frontend
   ssh -i "devTinder secreate.pem" ubuntu@ec2-3-26-45-216.ap-southeast-2.compute.amazonaws.com
   intall node version 
   git clone
   install dependices (npm install) and npm run  build
   sudo apt update
   sudo apt install nginx
   sudo systemctl start nginx
    sudo systemctl enable nginx
    sudo scp -r dist/* /var/www/html/
    Enable port :80

    Backend
    ->allowed ec2 instance public ip in mongoo db
    ->installe pm2 by using cmd npm install pm2 -g
    ->pm2 start npm -- start
    ->pm2 logs
    ->pm2 list,pm2 flush <name>,pm2 stop<name> ,pm2 delete <name>



     Frontend = http://3.26.45.216/
    Backend = http://3.26.45.216:1818/

    Domain name = devtinder.com => 43.204.96.49

    Frontend = devtinder.com
    Backend = devtinder.com:1818 => devtinder.com/api

    nginx config : 

    server_name 3.26.45.216;

    location /api/ {
        proxy_pass http://localhost:1818/;  # Pass the request to the Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }





## Installation In Baby Steps:


#### 1) First Download & Install Node js (make sure download lts version)
    https://nodejs.org/en/

#### 2) Check Node and Npm Version
    npm -v
    node -v
    
#### 3a) Install Typescript Globally in window
    npm install -g typescript
    
#### 3b) Install Typescript Globally in Linux/Mac    
    sudo npm install -g typescript
    
#### 4) To verify Installation check typescript version 
    tsc -v
 



## Compiler Configuration In Baby Steps:


#### 1) First initializing Config file by using this  command 
    tsc --init

#### 2) Go to tsconfig.json and Edit this Lines 
    "rootDir": "./src",    
    "outDir": "./dist",  

#### 3) Run Code in Root directory with only tsc command
    H:> tsc 
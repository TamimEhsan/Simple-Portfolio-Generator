## Portfolio Generator
The original UI, CSS and design is done by [Sadee](https://github.com/codewithsadee) and taken from [here](https://github.com/codewithsadee/vcard-personal-portfolio). The template was updated and was given a simpler look suitable for CS graduates by [Apurba Saha](https://github.com/diponsaha007). It was further furnished by myself to add some extra things. My version can be found [here](https://tamimehsan.github.io/)

## Templating
The original project is based on pure html and css. While it is easier to understand but very hard to navigate and update. Thus an [ejs](https://ejs.co/) based templating feature is created by me.

## How to use
At first clone the repository to your local by
```
git clone https://github.com/tamimehsan/portfolio-generator.git
```
Move into the folder and download the ejs dependency
```
cd portfolio-generator
npm install
```
Now before editing anything you at first need to understand the project structure. 
```
portfolio-generator
 |-- assets 
 |   |-- css # edit or create your own css here
 |   |-- images # put your images here
 |   |-- js # the js scripts
 |-- data # your information to be used in site
 |-- templates # the ejs template files
```
If you don't want to change anything you can just navigate to data folder and replace the given information with yours.  
If you want to change the structure of any element or page go to templates and change the required file. The root is in `index.ejs`. Other sections are all referenced from the index file.  
If you want to change any design or style, head over to the `css/style.css` and add any of your own style. 

Finally, to generate the portfolio, simply run
```
node index.js
```
That's it! You can use github pages to deploy the site. Simple as that. 

## Conclusion
If you like the work, please head over to the original creator and editor and show some appreciation by giving a star to them. Thank you. 


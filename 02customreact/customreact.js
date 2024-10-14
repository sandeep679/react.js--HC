function customRender(reactElement,container){
    
    /*
    const domElement =document.createElement(reactElement.type);        //creating own react libarary
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    
container.appendChild(domElement)
*/


const domElement =document.createElement(reactElement.type); 
domElement.innerHTML = reactElement.children;                                         //second approach
for (const prop in reactElement.props) {
   if (prop=='children') continue;
   domElement.setAttribute(prop,reactElement.props[prop])
        
    }

    container.appendChild(domElement)
}







const reactElement ={                            //it show that how react  compile html element and show after complie
    type:'a',
    props:{ 
        href:"https://www.google.com",         //jb element pass karege toh isse element m karyege
        target:'_blank',
    },
    children:"Click me to visit google"
      
}


const mainContainer =document.querySelector('#root');

customRender(reactElement,mainContainer)
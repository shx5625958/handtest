import './index.css'
import choerodon from '../assents/c7n.jpg'
function component(){
    var element = document.createElement('div');
    element.classList.add('image');
    var myImage = new Image;
    myImage.src = choerodon;
    element.appendChild(myImage);
    return element;
}
document.body.appendChild(component());
document.title='test-25756'

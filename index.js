var inputJsonData;
function inputElements(){
  inputJsonData = document.getElementById("inputText").value;
  inputJsonData = JSON.parse(inputJsonData);
  return inputJsonData;
   }
   function generateHtml(){

    let outputText = document.getElementById("outputText");
    outputText.innerHTML = " ";
    var uniqueId = {};

      inputJsonData.forEach((ele)=>{
        if(!uniqueId[ele.id]){ 
          let rootNode = document.createElement('div');
          rootNode.classList = "rootNode";
          rootNode.setAttribute("data-id", ele.id);
          let additional_details = document.createElement('div');
          additional_details.setAttribute('class','additional_details');
            
            const keys = Object.keys(ele);
            for (const key of keys) {
                if(key != 'id' && key == 'username' || key == 'video_name'){
                    let span = document.createElement('span');
                    span.setAttribute('class',key);
                    span.innerText = ele[key];
                    rootNode.appendChild(span);
                } else if(key != 'id') {
                    let span = document.createElement('span');
                    span.setAttribute('class',key);
                    span.innerText = ele[key];
                    additional_details.appendChild(span);
                }
            }
          rootNode.appendChild(additional_details);
          outputText.innerHTML += rootNode.outerHTML;
          uniqueId[ele.id] = true;       
        }
        else{
          alert("Duplicate Id");
          outputText.innerText = " ";
        }
      });
  }  
var inputText;
function inputElements(){
  inputText = document.getElementById("inputText").value;
  inputText = JSON.parse(inputText);
  return inputText
   };
   function generateButton(){

    const outputText = document.getElementById("outputText");
    var uniqueId = {};
       
      inputText.forEach((ele)=>{
       if(uniqueId === "" ){
        alert("plese enter valid input ")
       }
       else if(!uniqueId[ele.id]){ 
        const rootNode = document.createElement('div');
        rootNode.classList = "rootNode";
        rootNode.setAttribute("data-id", ele.id);
        const username = document.createElement('span');
        username.classList = "userName";
        rootNode.appendChild(username);
        const video_name = document.createElement('span');
        video_name.classList = "video_name";
        rootNode.appendChild(video_name);
        const additional_details = document.createElement('span');
        additional_details.classList = "additional_Details";
        const type = document.createElement('span');
        type.classList = "type";
        additional_details.appendChild(type);
        rootNode.appendChild(additional_details);
        outputText.innerHTML += rootNode.outerHTML;
        uniqueId[ele.id] = true;       
      }
       else{
        alert("Duplicate Id");
       }
      })
     
  }  

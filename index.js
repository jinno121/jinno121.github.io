


function onClickButton() {
    const mainElement = document.getElementById("main")

    const nameInputElement = document.getElementById("nameFormControlInput")
    const likeInputElement = document.getElementById("likeFormControlInput")
    const dontlikeInputElement = document.getElementById("dontlikeFormControlInput")
    const hobbyInputElement = document.getElementById("hobbyFormControlInput")
    const tyousyoInputElement = document.getElementById("tyousyoFormControlInput")
    const tansyoInputElement = document.getElementById("tansyoFormControlInput")
    const subjectInputElement = document.getElementById("subjectFormControlInput")
    const wantTryInputElement = document.getElementById("wantTryFormControlInput")
    const hitokotoInputElement = document.getElementById("hitokotoFormControlInput")
    const iconFileInputElement = document.getElementById("iconFileInput")

    const file = iconFileInputElement.files[0];
    console.log(file.name)
    const reader =new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event)=>{
        const base64Text=event.target.result;
        let baseHtml = `
        <div class="A4">
            <div id="nameArea">
              <h1>${nameInputElement.value}</h1>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  <div class="row">
                    <p class="like">好きなこと・得意なこと：${likeInputElement.value}</p>
                    <p class="dislike">苦手なこと・嫌いなこと：${dontlikeInputElement.value}</p>
                    <p class="hobby">趣味：${hobbyInputElement.value}</p>
        
                    <p class="bitenn">長所：${tyousyoInputElement.value}</p>
                    <p class="nanntenn">短所：${tansyoInputElement.value}</p>
                    <p class="hitokoto">${hitokotoInputElement.value}</p>
                  </div>
                  <div class="row">
                  </div>
                </div>
                <div class="col-6 iconimageArea">
                  <img class="iconimage" src="${base64Text}" />
                </div>
              </div>
            </div>
          </div>`
        let tmp = mainElement.innerHTML;
        console.log(baseHtml)
        mainElement.innerHTML = baseHtml;
      setTimeout("window.print();mainElement.innerHTML = tmp", 1000)
        //window.print();
        //mainElement.innerHTML = tmp
    }
    

    


}
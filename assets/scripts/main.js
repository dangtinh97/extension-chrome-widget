document.addEventListener("DOMContentLoaded",function (){
  let dataQuestion = [];
  let positionQ = 0;
  let permissionOnclick = true;
  const setTime = ()=>{
    const showTime = ()=>{
      const now= new Date()
      let hour = now.getHours();
      let minute = now.getMinutes();
      if(now.getHours()<10){
        hour =`0${hour}`
      }
      if(now.getMinutes()<10){
        minute =`0${minute}`
      }

      $('.hour').html(`${hour}:${minute}`)
      let day = now.getDate();
      let month = now.getMonth();
      let year = now.getFullYear();

      $('.date').html(`${day}/${month}/${year}`)
    }
    showTime();
    setInterval(showTime,1000)
  }


  const randomQuestion = ()=>{
    $.ajax({
      url:"assets/60questionfail.json",
      type:"GET",
      dataType:"JSON",
      data:{},
      success:(data)=>{
        dataQuestion = data;
        shuffle(dataQuestion)
        showQuestion(0);
      }
    })
  }

  const showQuestion = (index)=>{
    permissionOnclick = true;
    $('.note').html('')
    positionQ = index;
    const data = dataQuestion[index];

    console.log(data)
    const q = data.question;
    const answers = data.answers;
    $('.answer > ul').html('')
    answers.forEach((value, index)=>{
      $('.answer > ul').append(`<li class="ans pending_choice" data-success="${value.is_true}">${index + 1} - ${value.ans}</li>`)
    })
    $('.question').html(q);

  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const init = ()=>{
    randomQuestion()
    setTime()
  }

  $(this).on('click','.ans',function (){
    if(!permissionOnclick){
      return
    }
    permissionOnclick = false;
    const ans = $('.ans')
    let fail = false;
    if($(this).attr('data-success')!=="true"){
      fail = true
      $(this).css('color','red')
    }
    for(let i=0;i<ans.length;i++){
      if($(ans[i]).attr('data-success')==="true"){
        $(ans[i]).css('background','#a6ffba')
      }
      $(ans[i]).attr('class','').attr('')
    }
    if(fail){
      $('.note').html(dataQuestion[positionQ].note)
    }
    setTimeout(()=>{
      positionQ++;
      showQuestion(positionQ)
    },fail ? 5000 : 3000)
  })
  init()
})

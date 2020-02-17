var doings=document.getElementById('things');
var todos=[];



function add(){
  if(doings.value==""){
    alert("you entered nothing")
  }
  else{
    var list=document.getElementById('listof');
    var text=document.createTextNode(doings.value);
    var li=document.createElement('LI');
    li.appendChild(text);
    list.appendChild(li);
    todos.push(doings.value);
    var string=JSON.stringify(todos);
    localStorage.setItem("thingstodo",string);
    var xmark=document.createTextNode('Delete');
    var btn=document.createElement('button');
    btn.appendChild(xmark);
    li.appendChild(btn);
    btn.style.float='right';
    li.style.listStyle='none';
    btn.addEventListener('click',function remove(){
      var doings=document.getElementById('things');
      var list=document.getElementById('listof');
      var text=document.createTextNode(doings.value);
      list.removeChild(li);

    })


    var comp=document.createTextNode('Done');
    var btncomp=document.createElement('button');
    btncomp.appendChild(comp);
    li.appendChild(btncomp);
    btncomp.style.float="right";
    btncomp.addEventListener('click',function done(){
      var doings=document.getElementById('things');
      var list=document.getElementById('listof');
      var text=document.createTextNode(doings.value);
      li.style.textDecoration='line-through';
    })


  }



};






//after the localStorage

//get the stored informations
function get(){
    var str=localStorage.getItem("thingstodo");
    todos=JSON.parse(str);
    if(!todos){
      todos=[];
    }else{
      for (var i = 0; i < todos.length; i++) {
        var list=document.getElementById('listof');
        var txt=document.createTextNode(todos[i]);
        var unli=document.createElement('LI');
        unli.appendChild(txt);
        list.appendChild(unli);
        unli.className='do';
        var de=document.createTextNode('Delete');
        var bu=document.createElement('button');
        bu.appendChild(de);
        unli.appendChild(bu);
        bu.style.float='right';
        unli.style.listStyle='none';
        var done=document.createTextNode('Done');
        var btn=document.createElement('button');
        btn.appendChild(done);
        unli.appendChild(btn);
        btn.style.float='right';
      }

      


    }

  }

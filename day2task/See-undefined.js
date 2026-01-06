let obj1={
    name:"Swastik",
    show: function(){
        console.log(this.name);
    }
}

let newfun=obj1.show;
newfun.call(obj1);

document.querySelector("body > div > div > button").addEventListener("click",function(){
    var datetime = document.querySelector("body > div > div > form > label > input").value;
    const module = new Date();
    let day = module.getDate();
    let month = module.getMonth() + 1;
    let year = module.getFullYear();
    var dateparts = datetime.split('-');
    const sday = parseInt(dateparts[2]);
    const smonth = parseInt(dateparts[1]);
    const syear = parseInt(dateparts[0]);
    var age = year - syear
    console.log(year,syear)
    if(month >= smonth){
        if(day >=sday){
            var answer = `You Are ${age} Years Old`;
            document.querySelector("body > div > div > h2").innerHTML = answer;
        }
    }else{
        age -=1;
        var answer = `You Are ${age} Years Old`;
        document.querySelector("body > div > div > h2").innerHTML = answer;
    }
})

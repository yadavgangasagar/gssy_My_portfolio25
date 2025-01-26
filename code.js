$(()=>
    {
        let endDate=new Date().getTime() + 1000500000;
        var x=setInterval(()=>
        {
                let now=new Date().getTime();
                let timeRemaining=endDate-now;
                let dayRemaining=Math.floor(timeRemaining / (1000*60*60*24));
                let hourRemaining=Math.floor(timeRemaining % (1000*60*60*24) / (60*60*1000));
                let minuteRemaining=Math.floor(timeRemaining % (1000*60*60) / (60*1000));
                let secondRemaining=Math.floor(timeRemaining % (1000*60) / (1000));

                $("#days").html(dayRemaining);
                $("#hours").html(hourRemaining);
                $("#minutes").html(minuteRemaining);
                $("#seconds").html(secondRemaining);

                if(timeRemaining<0)
                {
                    clearInterval(x);
                    $("#days").html("0");
                    $("#hours").html("0");
                    $("#minutes").html("0");
                    $("#seconds").html("0");
                }
        },1000)
    })
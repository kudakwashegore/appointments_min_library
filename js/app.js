//lets use the min library
$('document').ready(function(){
    //our calendar app
    var myCalendarApp = Calendar();
    
    function fillUiDays(){        
        $('.calendar-dates').empty()
        for(var i = 0; i < myCalendarApp.calendarDays.length; i++){
            var active = myCalendarApp.calendarDays[i].active ? "active" : "";
            var disabled = myCalendarApp.calendarDays[i].day < (new Date()).getDate() ? "disabled" : "";
                        
            var delLink = myCalendarApp.calendarDays[i].active ? "<a class='del' title='Delete appointment'>X</a>" : "";
            var li = "<li class='day " + active + " " +disabled+ "' id=" + i + "><em>" + myCalendarApp.calendarDays[i].day +"</em><span>"+ myCalendarApp.calendarDays[i].description +"</span>"+delLink+"</li>";
            
            $('.calendar-dates')
            .append(li);
        }
        
        //add appointments
        $(".day").not(".disabled").click(function(){
            var _this = $(this);
            var id = _this.attr('id');
            var currentDesc = myCalendarApp.getDateDetails(id).description ? "Edit appointment ("+myCalendarApp.getDateDetails(id).description+") on day " : "Add appointment on day ";    
            
            //we can use prompt for now because of time, given more time, we can use a fancy js lightbox for this
            var desc = prompt(currentDesc + "" + myCalendarApp.getDateDetails(id).day);
            if(desc.trim() !== '' && desc !== null){
               if(myCalendarApp.editAppointment(id, desc)){
                    //redraw UI
                    fillUiDays();
               }
            }
            
        });
        
        //delete appointment
        $(".del").click(function(){
            var _thisLi = $(this).parent();
            var id = _thisLi.attr('id');
            
            if(myCalendarApp.deleteAppointment(id)){
                    fillUiDays();
               }
        });
        
    }
    
    //draw UI
    fillUiDays();
});








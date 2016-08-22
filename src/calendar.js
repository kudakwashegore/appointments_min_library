(function(global){
    "use strict";
    
    //define our calendar min library in IIF to avoid conflicts with any other libraries
    var Calendar = function(){
        //return init function constructor, this takes care of new object creation for us when using our library
        return new Calendar.init();
    }
        
    Calendar.init = function(){
        var today = new Date();
        var numberOfDays =  new Date(today.getYear(), today.getMonth(), 0).getDate();
        var calendarDates = [];
        
        for(var i = 0 + 1; i <= numberOfDays; i++){
            calendarDates.push({day: i, active:false, description: ''});
        }
        
        //load our dates
        this.calendarDays = calendarDates;
    }    
   
    
    Calendar.prototype.getDateDetails = function(id){
        return this.calendarDays[id];
    }
    
    Calendar.prototype.editAppointment = function(id, description){
        if(this.calendarDays[id] === null){
            return false;
        }
        
        this.calendarDays[id].description = description;
        this.calendarDays[id].active = true;
        
        return true;
    }
    
    Calendar.prototype.deleteAppointment = function(id){
        if(this.calendarDays[id] === null){
            return false;
        }
        
        this.calendarDays[id].description = "";
        this.calendarDays[id].active = false;
        
        return true;
    }
    
    //attach our calendar object to global object
    Calendar.init.prototype = Calendar.prototype;
    global.Calendar = Calendar;
})(window)




function application(){
//OBSERVER
function deposit(){
    var capacityMax = 200;
    var currentContent = 100;
    var subscribers = [];
    return{
        getSubscribers: function(){
            return subscribers.slice[0]; //
        },
        addEventListener: function(eventName, handler){
            subscribers.push(handler);
        }, 
        fill: function(liters){
            if(currentContent + liters >= capacityMax){
                // if(typeof(this.onFullDeposit) == 'function'){
                //     this.onFullDeposit(capacityMax);
                // } esto es para ver qué hay que hacer para suscribirse a un evento.
                if (subscribers.length > 0){ //Si hay suscriptores de un evento
                    for(var i = 0; i < subscribers.length; i++){
                        subscribers[i](capacityMax);  
                   } 
                }
            } 
            else {
                currentContent = currentContent + liters;
            }
        }
    }
}
deposit();




};
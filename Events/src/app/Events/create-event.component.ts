import { Component } from "@angular/core";
import { EventService } from './shared/index';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left: 10px}
    .error input {background-color:#E3C3C5}
    .error ::-webkit-input-placeholder { color:#999; }
    .error ::-moz-placeholder { color:#999 }
    .error :-moz-placeholder { color:#999 }
    .error :ms-input-placeholder { color:#999 }
  `]
})

export class CreateEventComponent {
    newEvent: any
    isDearty: boolean = false

    constructor(private eventService:EventService){

    }

    ngOnInit(){
        this.newEvent = {
            name: 'EVENT NAME',
            date: '01/07/2020',
            time: '10am',
            price: 799.99,
            location: {
                address: 'undeva in chisinau',
                city: 'chisinau',
                country: 'undeva in moldova'
            },
            onlineUrl: 'www.nationalgeographic.com',
            imageUrl: 'https://logoeps.com/wp-content/uploads/2011/06/National-Geographic-logo.png'
        }
        
    }
    cancel() {

    }

    saveEvent(formValues){
        console.log(formValues)
        this.eventService.saveEvent(formValues)
        this.isDearty = false
    }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  faq: any = [
    {
      "id": 1,
      "question": "What are the different types of Wraps?",
      "answer": " Full wraps: These wraps can be used to wrap the whole car. Partial wrap: These wraps are similar to full wraps but are used to wrap some parts of the cars such as roof, hood etc. Decals: These wraps are smaller in size and done on specific area such as doors or hood to market something."
    },
    {
      "id": 2,
      "question": "Is it illegal to wrap the car?",
      "answer": "Car wraps are legal, however, different states and municipalities have different laws. Different states can have strict laws as fully car wraps can reflect light in sun which can affect the vision of other drivers on road."
    },
    {
      "id": 3,
      "question": "Can I take off the wrap in future if I want to?",
      "answer": "Yes, we can remove the wrap of the car without any damage to its original paint."
    },
    {
      "id": 4,
      "question": "How long the wrap last for?",
      "answer": " If the car is parked under the shade, the wrap can last upto 4-5 years. whereas, when the car is parked in the sun the wrap can tear and will shorten the life span of the wrap."
    },
    {
      "id": 5,
      "question": "Will I be charged any fee to use the online booking service?",
      "answer": "No, Customers who book an appointment via MC Garage will have to pay no online booking fee."
    },
    {
      "id": 6,
      "question": "What is included in the price of the amount quoted?",
      "answer": "The quoted price includes the cost of the parts and the labour."
    },
    {
      "id": 7,
      "question": "Will the price quoted be the final price I'll pay? What if additional work is required to fix the car?",
      "answer": "The quoted price will be the final price if all the details are correct entered by the customer. If any additional work is required, MC Garage will contact you directly to discuss the additional work which is not included in the initial quote."
    },
    {
      "id": 8,
      "question": "What will happen if I cancel mor do not show up on my booking date?",
      "answer": "You can simply reschedule your booking to a new date and a time. If you need any help you can contact MC Garage"
    },
    {
      "id": 9,
      "question": "How long does it take to repir or service my car?",
      "answer": "It depends on the type of service you have booked for. Usually it take a day to finish the work required. If more time is required the staff will further discuss this with you on the booking date and will give you the estimated time frame."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

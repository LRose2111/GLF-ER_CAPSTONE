import React from 'react';
import { useState } from "react";
import './Calendar.css';
import { Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";

let counter1 = 1;
let counter2 = 1;
let counter3 = 1;
let counter4 = 1;
let counter5 = 1;
let counter6 = 1;
let counter7 = 1;
let newcounter = null;

const initial_events = [
 {
   title: "Teal: Hunting",
   date: new Date("2022-06-20").toISOString().substring(0, 10)
 },

 {
  title: "Deer: Archery",
  date: new Date("2022-06-19").toISOString().substring(0, 10)
} ,

{
  title: "Deer: FireArms",
  date: new Date("2022-06-18").toISOString().substring(0, 10)
} ,

{
    title: "Greater Whie-Frontend Geese: Hunting",
    date: new Date("2022-06-17").toISOString().substring(0, 10)
},
 
{
   title: "Ducks, Coots, Geese: Hunting",
   date: new Date("2022-06-15").toISOString().substring(0, 10)
} ,
 
{
   title: "Turkey: Hunting",
   date: new Date("2022-06-16").toISOString().substring(0, 10)
} 
 
]

class Calendar extends React.Component {



    state = {
      events: [
        { title: "Teal: Hunting", id: "1"},
        { title: "Deer: Archery", id: "2"},
        { title: "Deer: FireArms", id: "3"},
        { title: "Greater Whie-Frontend Geese: Hunting", id: "4"},
        { title: "Ducks, Coots, Geese: Hunting", id: "5"},
        { title: "Turkey: Hunting", id: "6"},
      ]
    };
  

    componentDidMount() {
      let draggableEl = document.getElementById("external-events");
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function(eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          return {
            title: title,
            id: id
          };
        }
      });
    }
  
    /**
     * when we click on event we are displaying event details
     */
    eventClick = eventClick => {
        if (eventClick.event.title == "Teal: Hunting"){
              newcounter = counter1;
     
        }
        else if (eventClick.event.title == "Deer: Archery"){
              newcounter = counter2;
        }
        else if (eventClick.event.title == "Deer: FireArms"){
              newcounter = counter3;
        }
        else if (eventClick.event.title == "Greater Whie-Frontend Geese: Hunting"){
              newcounter = counter4;
        }
        else if (eventClick.event.title == "Ducks, Coots, Geese: Hunting"){
              newcounter = counter5;
        }
        else if (eventClick.event.title == "Turkey: Hunting"){
              newcounter = counter6;
        }
        else if (eventClick.event.title == "Turkey: Hunting"){
              newcounter = counter7;
        }
      Alert.fire({
        title: eventClick.event.title,
        html:
          `<div class="table-responsive">
        <table class="table">
        <tbody>
        <tr >
        <td>Title</td>
        <td><strong>` +
          eventClick.event.title +
          `</strong></td>
        </tr>
        <tr >
        <td>Attendance</td>
        <td><strong> `+ 
        newcounter + `
        </strong></td>
        </tr>
        </tbody>
        </table>
        </div>`,
  
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonColor: "black",
        denyButtonColor: "grey",
        cancelButtonColor: "gold",
        confirmButtonText: "Delete",
        cancelButtonText: "Close",
        denyButtonText: "Attend"
      }).then(result => {
        if (result.isConfirmed) {
          eventClick.event.remove(); // It will remove event from the calendar
          Alert.fire("Deleted", "Scheduled Hunt has been deleted.", "success");
        }
        else if (result.isDenied){
            if (eventClick.event.title == "Teal: Hunting"){
                counter1 += 1;
                Alert.fire("Attendance Recorded", "Lets HNT!", "success");
          }
            else if (eventClick.event.title == "Deer: Archery"){
                counter2 += 1;
                Alert.fire("Attendance Recorded", "Lets HNT!", "success");
          }
            
            else if (eventClick.event.title == "Deer: FireArms"){
                counter3 += 1;
                Alert.fire("Attendance Recorded", "Lets HNT!", "success");
          }
            else if (eventClick.event.title == "Greater Whie-Frontend Geese: Hunting"){
                counter4 += 1;
                Alert.fire("Attendance Recorded", "Lets HNT!", "success");
          }
            
            else if (eventClick.event.title == "Ducks, Coots, Geese: Hunting"){
                counter5 += 1;
                Alert.fire("Attendance Recorded", "Lets HNT!", "success");
          }
            else if (eventClick.event.title == "Turkey: Hunting"){
                counter6 += 1;
                Alert.fire("Attendance Recorded", "Lets HNT!", "success");
          }
            else if (eventClick.event.title == "Turkey: Hunting"){
                counter7 += 1;
                Alert.fire("Attendance Recorded", "Lets HNT!", "success");
          }
            
        }
      });
    };
  
    render() {
      return (
        <div className='entire-contain'>
          <div>
                <h3 className="schedule-title">Your Schedule</h3>
          </div>
          <div className="fullcalen-contain">
            <div className='event-contain' id ="external-events">
            <div className="event-title-bg"><medium className = 'courses-title-event'>Seasons</medium></div>
                  {this.state.events.map(event => (
                    <div
                      className="fc-event event-background"
                      title={event.title}
                      data={event.id}
                      key={event.id}
                    >
                      {event.title}
                    </div>
                  ))}
            </div>
            <div className="calendar-contain" id="mycalendartest">
                <FullCalendar
                  defaultView="dayGridMonth"
                  header={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                  }}
                  rerenderDelay={10}
                  eventDurationEditable={false}
                  editable={true}
                  droppable={true}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  eventColor = 'grey'
                  eventTextColor="black"
                  eventDrop={this.drop}
                  eventReceive={this.eventReceive}
                  eventClick={this.eventClick}
                  initialEvents = {initial_events}
                />
              </div>
          </div>
        </div>
      );
    }
  }

  export default Calendar;
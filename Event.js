class Event {
    constructor(title, date, description) {
      this.title = title;
      this.date = date;
      this.description = description;
    }
    render()
    {
        return "<table><tr><td colspan='2'>"+this.title+"</td></tr>"+
          "<tr><td>Description</td><td>"+this.description+"</td></tr>"+
          "<tr><td>Date</td><td>"+this.date+"</td></tr>";
    }
  }
   
  class Webinar extends Event
  {
        constructor(title, date, description, webinarLink)
        {
            super(title, date, description);
            this.webinarLink = webinarLink;
        }
        render()
        {
            return super.render() + "<tr><td>WebinarLink</td><td><a href="+this.webinarLink+">Click Here</a></td></tr></table>";
        }
  }
   
  class LiveEvent extends Event 
  {
        constructor(title, date, description, venue, address)
        {
            super(title,date,description);
            this.venue = venue;
            this.address = address;
        }

        render()
        {
            return super.render() + "<tr><td>Venue</td><td>"+this.venue+"</td></tr>" + "<tr><td>Address</td><td>"+this.address+"</td></tr></table>"  ;
        }

  }
   
  class Party extends Event
  {
        constructor(title, date, description, theme)
        {
            super(title,date,description);
            this.theme = theme;
        }
        render()
        {
            return super.render() + "<tr><td>Theme</td><td>"+this.theme+"</td></tr></theme>" ;
        }
  }
   
  class EventFactory
  {
      eventFromJSON(evt)
      {
          switch(evt["type"])
          {
              case "Webinar":
          return new Webinar(evt["title"],evt["date"],evt["description"],evt["webinarLink"]);
              case "LiveEvent":
              return new LiveEvent(evt["title"],evt["date"],evt["description"],evt["venue"],evt["address"]);
              case "Party":
              return new Party(evt["title"],evt["date"],evt["description"],evt["theme"]);
          
          }
      }
  }
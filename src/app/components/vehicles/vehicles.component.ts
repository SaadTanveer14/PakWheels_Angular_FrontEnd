import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../vehicle'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})


 
export class VehiclesComponent implements OnInit {

  detailview!:Vehicle;
  vehicles!:Vehicle[];
  filteredVehicles!:Vehicle[];
  viewcheck!:boolean;
  constructor() {
    this.vehicles=[
      {
        image:"../../assets/sonata.jpg",
        title:"Hyundai Sonata",
        location:"Rawalpindi",
        price:6500000,
        dateAdded:"March 16 2022",
        rating:[1,2,3,4,5],
        type:"Car",
        mileage:"1200",
        color:"Black",
        engine:"2500CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Local",
        bodytype:"Sedan",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,100,100,100,100],
        comment:"Best Car Ever"

      },

      {
        image:"../../assets/sorento.jpg",
        title:"Kia Sorento",
        location:"Lahore",
        price:8500000,
        dateAdded:"March 12 2022",
        rating:[1,2,3,4,5],
        type:"Car",
        mileage:"2000",
        color:"Blue",
        engine:"2500CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Imported",
        bodytype:"SUV",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,100,70,100,100],
        comment:"Best Car Ever"


      },

      {
        image:"../../assets/sportage.jpg",
        title:"Kia Sportage",
        location:"Multan",
        price:6000000,
        dateAdded:"March 11 2022",
        rating:[1,2,3,4],
        type:"Car",
        mileage:"10000",
        color:"Red",
        engine:"1800CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2019",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Local",
        bodytype:"Crossvver SUV",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,100,100,80,100],
        comment:"Best Car Ever"

      },

      {
        image:"../../assets/tucson.jpg",
        title:"Hyundia Tucson",
        location:"Karachi",
        price:6000000,
        dateAdded:"April 16 2022",
        rating:[1,2,3,4],
        type:"Car",
        mileage:"20000",
        color:"Black",
        engine:"1800CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2020",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Local",
        bodytype:"Crossover SUV",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,70,100,90,100],
        comment:"Best Car Ever"
      },

      {
        image:"../../assets/elantra.jpg",
        title:"Hyundai Elantra",
        location:"Rawalpindi",
        price:4700000,
        dateAdded:"March 16 2022",
        rating:[1,2,3,4],
        type:"Car",
        mileage:"1000",
        color:"Blue",
        engine:"2000CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Local",
        bodytype:"Sedan",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,100,100,95,80],
        comment:"Best Car Ever"
      },

      {
        image:"../../assets/carnival.jpg",
        title:"Kia Grand Carnival",
        location:"Islamabad",
        price:9000000,
        dateAdded:"March 16 2022",
        rating:[1,2,3,4],
        type:"Car",
        mileage:"5000",
        color:"Silver Blue",
        engine:"3500CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Local",
        bodytype:"MPV",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,100,80,70,100],
        comment:"Best Car Ever"
      },

      {
        image:"../../assets/picanto.jpg",
        title:"Kia Picanto",
        location:"Gujranwala",
        price:2000000,
        dateAdded:"February 16 2022",
        rating:[1,2],
        type:"Car",
        mileage:"4500",
        color:"Red",
        engine:"1000CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2019",
        transmission:"Manual",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Local",
        bodytype:"Hatchback",
        phoneno:"+92xxxxxxxxxx",
        condition:[75,90,100,80,100],
        comment:"Best Car Ever"
      },

      {
        image:"../../assets/alto.webp",
        title:"Suzuki Alto",
        location:"Quetta",
        price:1800000,
        dateAdded:"March 17 2022",
        rating:[1,2,3],
        type:"Car",
        mileage:"9533",
        color:"Silver",
        engine:"660CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2019",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Local",
        bodytype:"Hatchback",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,100,95,100,100],
        comment:"Best Car Ever"

      },

      {
        image:"../../assets/jimny.jpg",
        title:"Suzuki Jimny",
        location:"Hydrabad",
        price:5000000,
        dateAdded:"March 19 2022",
        rating:[1,2,3,4,5],
        type:"Car",
        mileage:"6839",
        color:"Neon Green",
        engine:"1500CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Local",
        bodytype:"mini SUV",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,75,100,80,100],
        comment:"Best Car Ever"
      },

      {
        image:"../../assets/civic.jpg",
        title:"Honda Civic",
        location:"Sialkot",
        price:6500000,
        dateAdded:"March 29 2022",
        rating:[1,2,3,4,5],
        type:"Car",
        mileage:"5347",
        color:"Candy Orange",
        engine:"1800CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2022",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"UnRegistered",
        assembly:"Local",
        bodytype:"Sedan",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,100,80,90,100],
        comment:"Best Car Ever"

      },

      {
        image:"../../assets/mghs.jpg",
        title:"MG HS",
        location:"GujarKhan",
        price:6500000,
        dateAdded:"March 16 2022",
        rating:[1,2,3,4],
        type:"Car",
        mileage:"2409",
        color:"Blue",
        engine:"1800CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Imported",
        bodytype:"SUV",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,60,80,100,100],
        comment:"Best Car Ever"
      },

      {
        image:"../../assets/haval.jpg",
        title:"Haval",
        location:"Islamabad",
        price:7500000,
        dateAdded:"January 16 2022",
        rating:[1,2,3,4,5],
        type:"Car",
        mileage:"5400",
        color:"Matt Green",
        engine:"1800CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Imported",
        bodytype:"SUV",
        phoneno:"+92xxxxxxxxxx",
        condition:[95,100,70,76,100],
        comment:"Best Car Ever"
      },

      {
        image:"../../assets/fortuner.jpeg",
        title:"Toyota Fortuner",
        location:"Faisalabad",
        price:9900000,
        dateAdded:"March 23 2022",
        rating:[1,2,3,4],
        type:"Car",
        mileage:"30000",
        color:"Black",
        engine:"2500CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2018",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Imported",
        bodytype:"SUV",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,100,90,100,70],
        comment:"Best Car Ever"
      },

      {
        image:"../../assets/landcruiser.jpg",
        title:"Toyota Land Cruiser",
        location:"Lahore",
        price:65000000,
        dateAdded:"March 25 2022",
        rating:[1,2,3,4],
        type:"Car",
        mileage:"40934",
        color:"Pearl White",
        engine:"3500CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Imported",
        bodytype:"SUV",
        phoneno:"+92xxxxxxxxxx",
        condition:[90,100,80,70,100],
        comment:"Best Car Ever"
      },

      {
        image:"../../assets/prius.jpg",
        title:"Toyota Prius",
        location:"Rawalpindi",
        price:8500000,
        dateAdded:"March 24 2022",
        rating:[1,2,3,4],
        type:"Car",
        mileage:"59343",
        color:"Blue",
        engine:"1800CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2019",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Local",
        bodytype:"Sedan",
        phoneno:"+92xxxxxxxxxx",
        condition:[97,100,70,80,100],
        comment:"Best Car Ever"

      },

      {
        image:"../../assets/benelli.jpg",
        title:"Benelli 300",
        location:"Gwadar",
        price:1000000,
        dateAdded:"March 16 2022",
        rating:[1,2,3,4],
        type:"Bike",
        mileage:"4000",
        color:"Green",
        engine:"300CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Manual",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Imported",
        bodytype:"",
        phoneno:"+92xxxxxxxxxx",
        condition:[75,100,80,90,100],
        comment:"Best Bike Ever"
      },

      {
        image:"../../assets/goldwing.jpg",
        title:"Honda Gold Wing",
        location:"Bahawalpur",
        price:5000000,
        dateAdded:"March 18 2022",
        rating:[1,2,3,4,5],
        type:"Bike",
        mileage:"3000",
        color:"Silver",
        engine:"1800CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Manual",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Imported",
        bodytype:"",
        phoneno:"+92xxxxxxxxxx",
        condition:[95,80,100,76,100],
        comment:"Best Bike Ever"
      },

      {
        image:"../../assets/hondacb300r.jpg",
        title:"Honda CB300r",
        location:"Lahore",
        price:2500000,
        dateAdded:"March 28 2022",
        rating:[1,2,3],
        type:"Bike",
        mileage:"6000",
        color:"Red",
        engine:"800CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Automatic",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Imported",
        bodytype:"",
        phoneno:"+92xxxxxxxxxx",
        condition:[95,100,70,100,90],
        comment:"Best Bike Ever"
      },

      {
        image:"../../assets/vespa.jpg",
        title:"Piaggio Vespa",
        location:"Rawalpindi",
        price:500000,
        dateAdded:"March 30 2022",
        rating:[1,2,3,4],
        type:"Bike",
        mileage:"200000",
        color:"white",
        engine:"250CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Manual",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Imported",
        bodytype:"",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,90,100,80,100],
        comment:"Best Bike Ever"
      },

      {
        image:"../../assets/yamaha.jpg",
        title:"BMW",
        location:"Peshawar",
        price:5500000,
        dateAdded:"March 16 2022",
        rating:[1,2,3,4],
        type:"Bike",
        mileage:"23423",
        color:"Yellow",
        engine:"1000CC",
        features:["ABS","Power-Steering","Android Auto/Apple Carplay","Airbags","Cruise"],
        model:"2021",
        transmission:"Manual",
        fuel:"Petrol",
        registerstatus:"Registered",
        assembly:"Imported",
        bodytype:"Sedan",
        phoneno:"+92xxxxxxxxxx",
        condition:[85,100,60,80,90],
        comment:"Best Bike Ever"
      },
      
    ]
    for(var i=0;i<this.vehicles.length;i++)
    {
      this.filteredVehicles = this.vehicles.map(a => ({...a}));    
    }
    
   }

  ngOnInit(): void {
  }

  here(data:any)
  {

    this.viewcheck=false;

    for(var i=0;i<this.vehicles.length;i++)
    {
      this.filteredVehicles = this.vehicles.map(a => ({...a}));    
    }

    console.warn(this.vehicles.length);
    console.warn("here");
    console.warn(data);
    if((data['model'] && data['cities'] && data['price'] && data['rating'] && data['mileage'] && data['color'] && data['type'] &&  data['engine'] && data['city']) == 0)
      {
        console.warn("All not matched");
      }

      
        if(data['model']!=null)
        {
          for(var i=this.filteredVehicles.length-1; i>=0;i--)
          {
          var temp=this.filteredVehicles[i].title.toLowerCase();
            
          if(temp.includes(data['model'].toLowerCase())==false)
            {
              this.filteredVehicles.splice(i,1);
            console.warn(i);
            }
          }
        }

        if(data['cities']!=null)
        {
          for(var i=this.filteredVehicles.length-1; i>=0;i--)
          {
          var temp=this.filteredVehicles[i].location.toLowerCase();
            
          if(temp.includes(data['cities'].toLowerCase())==false)
            {
              this.filteredVehicles.splice(i,1);
            console.warn(i);
            }
          }
         }

         if(data['type']!=null)
        {
          for(var i=this.filteredVehicles.length-1; i>=0;i--)
          {
          var temp=this.filteredVehicles[i].type.toLowerCase();
            
          if(temp.includes(data['type'].toLowerCase())==false)
            {
              this.filteredVehicles.splice(i,1);
            console.warn(i);
            }
          }
         }

         if(data['color']!=null)
        {
          for(var i=this.filteredVehicles.length-1; i>=0;i--)
          {
          var temp=this.filteredVehicles[i].color.toLowerCase();
            
          if(temp.includes(data['color'].toLowerCase())==false)
            {
              this.filteredVehicles.splice(i,1);
            console.warn(i);
            }
          }
         }

         if(data['engine']!=null)
         {
           for(var i=this.filteredVehicles.length-1; i>=0;i--)
           {
           var temp=this.filteredVehicles[i].engine.toLowerCase();
             
           if(temp.startsWith(data['engine'].toLowerCase())==false)
             {
               this.filteredVehicles.splice(i,1);
             console.warn(i);
             }
           }
          }

        if(data['rating'].length)
        {
          for(var i=this.filteredVehicles.length-1; i>=0;i--)
          {
            console.warn("ghusu");

            if(this.filteredVehicles[i].rating.length!=Number(data['rating']))
              {
                this.filteredVehicles.splice(i,1);
              }
          }
        }
        

      
        

      // this.filteredVehicles=[];
  }

  goback()
  {
    this.viewcheck=false;

    for(var i=0;i<this.vehicles.length;i++)
    {
      this.filteredVehicles = this.vehicles.map(a => ({...a}));    
    }
  }

  showVehicleDetails(vehicle:Vehicle)
  {
    this.filteredVehicles=[];
    this.viewcheck=true;
    console.warn(vehicle);
    this.detailview=vehicle;
  }




}

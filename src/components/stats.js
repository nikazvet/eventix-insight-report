import 'data-forge';
import { DataFrame } from 'data-forge';
class Stats{
    histogram(data, minAge, maxAge){
        var df = new DataFrame(data)
        .groupBy(row => row["order.metadata.age"])
        .select(group => ({
            Age: group.first()["order.metadata.age"],
            AgeCount: group.deflate(row => row["order.metadata.age"]).count(),
        }))
        .where(row=>(row.Age!=null && row.Age > minAge && row.Age < maxAge))
        .inflate()
        .orderBy(row=> row.Age);
        return df.toArray();
    }

    gender(data){
        //console.log(new DataFrame(data).getColumnNames());
        //console.log(data);
        var df = new DataFrame(data).groupBy(row => row["order.metadata.gender"])
         .select(group => ({
             Gender: group.first()["order.metadata.gender"],
            GenderCount: group.deflate(row => row["order.metadata.gender"]).count(),
        }))
        .where(row => (row.Gender!=null))
        .inflate();;
        //console.log(df);

        return df.toArray();
    }

    coredemograhic(data, minAge, maxAge){
        var df = new DataFrame(this.histogram(data, minAge, maxAge)) 
        var max = df.orderBy(row=> row.AgeCount)
        .tail(1).toArray()[0]
        .AgeCount;
        var significantAges = df.where(row=>(row.AgeCount > (max * 0.75)));
        var core = {max: significantAges.tail(1).toArray()[0].Age, min: significantAges.head(1).toArray()[0].Age, maxNum: max};;
        return core;
    }

    toptickects(data){
        var df = new DataFrame(data).groupBy(row => row.ticket_name)
        .select(group => ({
            Ticket: group.first().ticket_name,
           TicketCount: group.deflate(row => row.ticket_name).count(),
       }))
       .where(row => (row.Ticket!=null))
       .inflate().orderByDescending(row => row.TicketCount).head(10);;

    //    console.log(df)
       return df.toArray();
    }

    salesovertime(data){ //WIP
        var df = new DataFrame(data).groupBy(row => row["created_at"])
        .select(group => ({
            Ticket: group.first()["created_at"],
           TicketCount: group.deflate(row => row["created_at"]).count(),
       }))
       .where(row => (row.Ticket!=null))
       .inflate().orderBy(row => row.Ticket);;

       console.log(df);
       return(df.toArray())
    }

    devices(data){ 
        var df = new DataFrame(data).groupBy(row => row.device)
        .select(group => ({
            Device: group.first().device,
           DeviceCount: group.deflate(row => row.device).count(),
       }))
       .where(row => (row.Device!=null))
       .inflate().orderByDescending(row => row.DeviceCount);;

       console.log(df.toArray());
       return(df.toArray())
    }
}

export default new Stats();
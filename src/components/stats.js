import 'data-forge';
import { DataFrame } from 'data-forge';
class Stats{
    histogram(data, minAge, maxAge){
        var df = new DataFrame(data).groupBy(row => row.order_metadata_age)
        .select(group => ({
            Age: group.first().order_metadata_age,
            AgeCount: group.deflate(row => row.order_metadata_age).count(),
        }))
        .where(row=>(row.Age!=null && row.Age > minAge && row.Age < maxAge))
        .inflate()
        .orderBy(row=> row.Age);;
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
        var core = {max: significantAges.tail(1).toArray()[0].Age, min: significantAges.head(1).toArray()[0].Age, maxNum: max};
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

       console.log(df)
       return df.toArray();
    }

    salesovertime(data){ //WIP
        var df = new DataFrame(data).parseDates("created_at").groupBy(row => row.ticket_name)
        .select(group => ({
            Ticket: group.first().ticket_name,
           TicketCount: group.deflate(row => row.ticket_name).count(),
       }))
       .where(row => (row.Ticket!=null))
       .inflate().orderByDescending(row => row.TicketCount).head(10);;
    }
}

export default new Stats();
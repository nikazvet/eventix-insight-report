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

    coredemograhic(data, minAge, maxAge){
        var df = new DataFrame(this.histogram(data, minAge, maxAge)) 
        var max = df.orderBy(row=> row.AgeCount)
        .tail(1).toArray()[0]
        .AgeCount;
        var significantAges = df.where(row=>(row.AgeCount > (max * 0.75)));
        var core = {max: significantAges.tail(1).toArray()[0].Age, min: significantAges.head(1).toArray()[0].Age};
        return core;
    }
}

export default new Stats();
/**
 * Created by palra on 21/06/15.
 */

Template.portfolio.helpers({
    age: ~~((Date.now() - new Date("1997-08-02")) / (31557600000)),
    experience: ~~((Date.now() - new Date("2008-09-02")) / (31557600000))
});
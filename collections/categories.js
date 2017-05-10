/**
 * Created by sajini on 5/1/17.
 */
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Categories = new Mongo.Collection('categories');

Category = new Mongo.Collection('category');

// Categories.allow({
//     insert(userId, doc) {
//         // The user must be logged in and the document must be owned by the user.
//         // return userId && doc.owner === userId;
//         return userId;
//     },
//     update(userId, doc, fields, modifier) {
//         // Can only change your own documents.
//         return userId;
//     },
//     remove(userId, doc) {
//         // Can only remove your own documents.
//         return userId;
//     }
//     // ,
//     // fetch: ['owner']
// });

CategorySchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    isCustomizable: {
        type: Boolean,
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            return new Date();
        }
    }
});

Categories.attachSchema(CategorySchema);
//1
db.restaurants.find({});

//2
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

//3
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

//4
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 })

//5
db.restaurants.find({}, { borough: "Bronx" })

//6
db.restaurants.find({}, { borough: "Bronx" }).limit(5)

//7
db.restaurants.find({}, { borough: "Bronx" }).skip(5).limit(5)

//8
db.restaurants.find({ "grades.score": { $gt: 90 } })

//9
db.restaurants.find({ "grades.score": { $gt: 80, $lt: 100 } })

//10
db.restaurants.find({ "address.coord.0": { $lt: -95.754168 } })

//11
db.restaurants.find({
  cuisine: { $ne: "American" },
  "grades.score": { $gt: 70 },
  "address.coord.0": { $lt: -65.754168 }
})

//12
db.restaurants.find({
  cuisine: { $ne: "American" },
  "grades.score": { $gt: 70 },
  "address.coord.1": { $lt: -65.754168 }
})

//13
db.restaurants.find({
  cuisine: { $ne: "American" },
  "grades.grade": 'A',
  borough: { $ne: "Brooklyn" }
}).sort({ cuisine: -1 })

db.restaurants.find(
  { name: /^Wil/ },
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
)

//14
db.restaurants.find(
  { name: /ces$/ },
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
)

//15
db.restaurants.find(
  { name: /Reg/ },
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
)

//16
db.restaurants.find({
  borough: "Bronx",
  cuisine: { $in: ["American", "Chinese"] }
})

//17
db.restaurants.find(
  { borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
  { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
)

//26
db.restaurants.find(
  { "grades.score": { $mod: [7, 0] } },
  { _id: 0, restaurant_id: 1, name: 1, grades: 1 }
)
//1
db.restaurants.find({},{name:1,borough:1,_id:0});

//2
db.restaurants.countDocuments({borough: 'Manhattan'})

//3
db.restaurants.aggregate([
  {
    $group: {
      _id: "$borough",
      count: { $sum: 1 }
    }
  }
]);

//4
db.restaurants.aggregate([
  {
    $match: { borough: "Brooklyn" }
  },
  {
    $group: {
      _id: "$cuisine",
      amount: { $sum: 1 }
    }
  },
  {
    $sort: { amount: -1 }
  },
  {
    $limit: 5
  }
])

//5
db.restaurants.aggregate([
  {
    $project: {
      _id: 0,
      borough: 1,
      name: 1,
      averageScore: { $avg: "$grades.score" }
    }
  }
])

//6
db.restaurants.find({
  "grades.grade": "B"
})

//7
db.restaurants.aggregate([
  {
    $project: {
      _id: 0,
      restaurant_id: 1,
      name: 1,
      borough: 1,
      minScore: { $min: "$grades.score" },
      maxScore: { $max: "$grades.score" }
    }
  }
]);
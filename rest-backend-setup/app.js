const express = require('express');
const sequelize = require('./database');
const Labtest = require('./models/labtest');
const { Op } = require('sequelize');
const port = 3001;

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  next();
});

// app.use('/labtests/search',(req, res, next) => {
//   let keyword = req.params.keyword;
//   if(!keyword){
//     keyword = "";
//   }
//   console.log(req.params)
//   Labtest.findAll({
//       attributes : ['rowid','testdata']
//       })
//       .then( data => 
//         {
//           console.log(data)
//           const testsData = data.filter( test => {
//             return test.testData[Keyword].includes(keyword) 
//           })
//           res.status(200).json({
//           tests: testsData,
//           message: 'Tests fetched Successfully'
//         })}
//       )    
//       .catch(err => {
//           console.log(err);
//       })
// })
app.use('/labtests',(req, res, next) => {
  Labtest.findAll({attributes : ['rowid','testdata']})
      .then( data => 
        {
          res.status(200).json({
          tests: data,
          message: 'Tests fetched Successfully'
        })}
      )    
      .catch(err => {
          console.log(err);
      })
})


sequelize
    .sync()
    .then(() => {
      return Labtest.findAll({attributes : ['rowid','testdata']});
    })
    .then(() => {
      app.listen(port);
    })
    .catch(err => {
        console.log(err);
    })

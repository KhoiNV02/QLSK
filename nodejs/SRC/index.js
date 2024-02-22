//đường dẫn vì sử dụng trong folder
const path = require('path');
//gọi thư viện express để dùng các thứ có trong nó
const express = require('express');
// import { engine } from 'express-handlebars';
//morgan được sử dụng để thông báo cho trạng thái của server hiện tại
const morgan = require('morgan');
//handlebars để tải các trang, cấu trúc trang
const { engine } = require('express-handlebars');

// import engine  from 'express-handlebars';
const app = express();

// const handlebars = require('express-handlebars')
const port = 3000;
const methodOverride = require('method-override')
app.use(express.static(path.join(__dirname, 'Resouses/public')));

//gọi ra để sử dụng
app.use(morgan('combined'));
app.use(express.json());
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      json: function (context) {
        return JSON.stringify(context);
      },
      if_eq: function (a, b, opts) {
        return a === b ? opts.fn(this) : opts.inverse(this);
      },
      eq: function (a, b) {
        return a === b;
      },
      formatDate: function (dateString) {
        if (!dateString) {
            return ''; // or any default value if needed
        }
    
        // If dateString is not a string, we accept it as it is
        // if (typeof dateString !== 'string') {
        //     return dateString;
        // }
    
        // Convert the string to a Date object
        const dateObject = new Date(dateString);
    
        // Check if the value after conversion is valid
        if (isNaN(dateObject.getTime())) {
            return ''; // or any default value if needed
        }
    
        // Format the date to 'yyyy-MM-dd'
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    },
    
    
    
    },
  }),
);
app.use(methodOverride('_method'))
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'Resouses','views'));
//sửa link đường dẫn mặc định thành link đường dẫn hợp lệ
//render đến các trang đó thông qua đường dẫn

const route = require('./routes/');

const db=require('./config/db');
db.connect();
app.use(express.urlencoded({
  extended:true
 }));
 app.locals.local = 'https://doan2-ugfh.onrender.com';
 app.locals.oke='20520999';
//  app.use(express.json);
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


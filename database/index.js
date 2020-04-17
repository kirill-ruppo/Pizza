const { connection } = require("../config");
connection.connect(function(err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

class Offer {
  static async add(el) {
    const sql = `INSERT INTO kiril(title, price, image, description) VALUES("${el.title}","${el.price}","${el.image}","${el.description}")`;
    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  static async get(el) {
    const sql = `SELECT * FROM kiril`;
    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  static async getCurrent(id) {
    const sql = `SELECT * FROM kiril WHERE id="${id}"`;
    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  static async update(el) {
    const sql = `UPDATE kirill SET title="${el.title}", price="${el.price}", description="${el.description}" WHERE id="${el.offer_id}"`;

    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
}

module.exports.Offer = Offer;

class user {
  /*
  Setiap variable dalam class harus dimasukkan kedalam constructor.
  */
  var id;
  var username;
  var password;
}

class userservice {
  /*
  Setiap variable dalam class harus dimasukkan kedalam constructor.
  Keyword variable tidak valid. Gunakan var, let, atau const.
  */
  user[] users = [];

  /*
  Untuk membuat method, tidak diperlukan keyword.
  Tulis langsung nama method.
  */
  user[] getallusers() {
    return users;
  }

  /*
  Untuk membuat method, tidak diperlukan keyword.
  Tulis langsung nama method.
  */
  user getuserbyid(userid) {
    return users.filter(userid);
  }
}
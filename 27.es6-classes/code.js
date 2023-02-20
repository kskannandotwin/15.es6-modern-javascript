// ES5

// Superclass
function phone(make, model, warranty, color) {
  this.make = make;
  this.model = model;
  this.warranty = warranty || 24;
  this.color = color || "white";
}

phone.prototype = {
  extendWarranty: function (x) {
    this.warranty += x;
  },
};

// Subclass
function smartPhone(make, model, OS) {
  this.make = make;
  this.model = model;
  this.OS = OS;
//   phone.call(this, make, model)
}
smartPhone.prototype = new phone('Samsung', 'S6');
// smartPhone.prototype = Object.create(phone.prototype);
smartPhone.prototype.constructor = smartPhone;

var mySmartphone = new smartPhone('Apple', 'iphone 7', 'IOS 10');
console.log(mySmartphone);
console.log(mySmartphone.extendWarranty);
mySmartphone.extendWarranty(3);
console.log(mySmartphone);

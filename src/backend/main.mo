import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Principal "mo:core/Principal";

actor {
  type Contact = {
    name : Text;
    phone : Text;
    message : Text;
    timestamp : Nat64;
  };

  module Contact {
    public func compare(contact1 : Contact, contact2 : Contact) : Order.Order {
      Nat64.compare(contact1.timestamp, contact2.timestamp);
    };
  };

  let contacts = Map.empty<Principal, Contact>();

  public shared ({ caller }) func submitContact(name : Text, phone : Text, message : Text, timestamp : Nat64) : async () {
    if (contacts.containsKey(caller)) { Runtime.trap("Message already submitted") };
    let contact : Contact = {
      name;
      phone;
      message;
      timestamp;
    };
    contacts.add(caller, contact);
  };

  public query ({ caller }) func isContacted() : async Bool { contacts.containsKey(caller) };

  public query func getContact(user : Principal) : async Contact {
    switch (contacts.get(user)) {
      case (null) { Runtime.trap("Contact not found") };
      case (?contact) { contact };
    };
  };

  public query func getAllContacts() : async [Contact] {
    contacts.values().toArray().sort();
  };

  public type Location = {
    latitude : Float;
    longitude : Float;
  };

  public query ({ caller }) func getCafeInfo() : async {
    name : Text;
    phone : Text;
    whatsapp : Text;
    location : Location;
  } {
    {
      name = "Nath Cyber Cafe";
      phone = "9435212145 / 9126026463";
      whatsapp = "9435212145";
      location = { latitude = 26.145; longitude = 91.736 };
    };
  };
};

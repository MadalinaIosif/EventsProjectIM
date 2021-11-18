# EventsProjectIM
Pattern Type: Creational Pattern
Method:Factory Method

I choosed this pattern because the Factory Method because is a type of Object Oriented pattern which follows the DRY methodology. This fits my project because we use classes and
inheritence.
I never used it, but, as the name suggests, object instances are created by using a factory to make the required object for us.
So I created a class that acts as an intermediary between the actual factories classes and the user("class EventFactory"). Thus, using the factory pattern gives us certain advantages:

  1)Dynamic object creation: It can be used in cases where the type of the object is decided at runtime.
  2)Abstraction: The user never really has to access the actual object’s constructor.
  3)Reusability/Maintenance: Same factories can be used for similar objects and it allows us to add/remove new object classes easily without changing a lot of code.

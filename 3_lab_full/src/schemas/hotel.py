from models.hotel import Hotel
from extensions import ma, db

class HotelSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Hotel
    
    City_id = ma.auto_field()
    Rating_id = ma.auto_field()
    Country_id = ma.auto_field()
    City = ma.Nested("CitySchema")
    Rating = ma.Nested("RatingSchema")
    Country = ma.Nested("CountrySchema")
    Hotel_room_type = ma.Nested("HotelRoomTypeSchema", many=True)

hotel_schema = HotelSchema()
hotels_schema = HotelSchema(many=True)
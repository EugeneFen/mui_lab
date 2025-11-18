from models.hotel import City
from extensions import ma, db

class CitySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = City

    Country_id = ma.auto_field()
    Country = ma.Nested("CountrySchema")

city_schema = CitySchema()
Cityes_schema = CitySchema (many=True)
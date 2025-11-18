from models.country import Country
from extensions import ma, db

class CountrySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Country

Country_schema = CountrySchema()
Countries_schema = CountrySchema(many=True)
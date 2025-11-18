# from marshmallow import Schema, fields

# class CountrySchema(Schema):
#     id = fields.Int(required=True)
#     name = fields.Str(required=True)

# class CitySchema(Schema):
#     id = fields.Int(required=True)
#     name = fields.Str(required=True)
#     country_id = fields.Int(required=True)

# class HotelSchema(Schema):
#     id = fields.Int(required=True)
#     hotel_name = fields.Str(required=True)
#     score = fields.Float(required=True)
#     city_id = fields.Int(required=True)
#     rating_id = fields.Int(required=True)

# class PriceStatsSchema(Schema):
#     room_type = fields.Str(required=True)
#     max_price = fields.Float(required=True)
#     min_price = fields.Float(required=True)
#     avg_price = fields.Float(required=True)

# # Создание экземпляров схем
# country_schema = CountrySchema(many=True)
# city_schema = CitySchema(many=True)
# hotel_schema = HotelSchema(many=True)
# price_stats_schema = PriceStatsSchema(many=True)
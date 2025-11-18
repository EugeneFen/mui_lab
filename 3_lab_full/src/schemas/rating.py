from models.rating import Rating
from extensions import ma, db

class RatingSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Rating

Rating_schema = RatingSchema()
Ratings_schema = RatingSchema(many=True)
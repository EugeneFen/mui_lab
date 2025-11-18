from models.room_Type import Room_Type
from extensions import ma, db

class Room_TypeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Room_Type

room_Type_schema = Room_TypeSchema()
rooms_Type_schema = Room_TypeSchema(many=True)   
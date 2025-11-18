from models.hotel_Room_Type import Hotel_Room_Type
from extensions import ma

class HotelRoomTypeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Hotel_Room_Type
        include_fk = True  # Включаем foreign keys
        
    # Явно указываем составной первичный ключ и другие поля
    Hotel_id = ma.auto_field()
    Room_type_id = ma.auto_field()
    price = ma.auto_field()
    number_reviews = ma.auto_field()
    
    # Вложенные схемы для отношений
    Hotel = ma.Nested("HotelSchema", exclude=("hotel_room_types",))  # Исключаем обратную ссылку чтобы избежать рекурсии
    Room_type = ma.Nested("Room_TypeSchema")

# Создание экземпляров схем
hotel_room_type_schema = HotelRoomTypeSchema()
hotel_room_types_schema = HotelRoomTypeSchema(many=True)
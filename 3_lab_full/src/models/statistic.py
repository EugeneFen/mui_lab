from models.city import City
from models.country import Country
from models.hotel import Hotel
from models.rating import Rating
from models.room_Type import Room_Type
from models.hotel_Room_Type import Hotel_Room_Type
from sqlalchemy import func, desc
from extensions import db

#все отели
def get_all_hotel():
    query = (
        db.session.query(
            Hotel.hotel_name.label("Название отеля"),
            Rating.value.label("Рейтинг"),
            Hotel.score.label("Оценка"),
            Hotel_Room_Type.number_reviews.label("Количество отзывов"),
            Hotel_Room_Type.price.label("Стоимость"),
            Room_Type.name.label("Тип комнаты"),
            Country.name.label("Страна"),
            City.name.label("Город"),
        )
        .select_from(Hotel)
        .join(Rating, Hotel.rating_id == Rating.id)
        .join(City, Hotel.city_id == City.id)
        .join(Country, City.country_id == Country.id)
        .join(Hotel_Room_Type, Hotel.id == Hotel_Room_Type.hotel_id)
        .join(Room_Type, Hotel_Room_Type.roomtype_id == Room_Type.id)
    )

    result = query.all()
    keys = query.statement.columns.keys()

    formatted_results = [
        {field_name: value for field_name, value in zip(keys, result)}
        for result in result
    ]
    return formatted_results

#статистика по странам (кол-во отелей и стредний рейтинг отелей в стране)
def get_country_statistic():
    query = (
        db.session.query(
            Country.id.label("id"),
            Country.name.label("country_name"),
            func.count(Hotel.id).label("hotel_count"),
            func.avg(Hotel.score).label("avg_score"),
            func.min(Hotel.score).label("min_score"),
            func.max(Hotel.score).label("max_score")
        )
        .join(City, City.country_id == Country.id)
        .join(Hotel, Hotel.city_id == City.id)
        .group_by(Country.id)
        .order_by(func.count(Hotel.id).desc())
    )
    results = query.all()
    keys = query.statement.columns.keys()

    formatted_results = [
        {field_name: value for field_name, value in zip(keys, result)}
        for result in results
    ]

    return formatted_results

#статистика по городам (кол-во отелей, средняя цена за номер и т.д.)
def get_city_statistic():
    query = (
        db.session.query(
            City.id.label("id"),
            City.name.label("city_name"),
            Country.name.label("country_name"),
            func.count(Hotel.id).label("hotel_count"),
            func.avg(Hotel_Room_Type.price).label("avg_price"),
            func.min(Hotel_Room_Type.price).label("min_price"),
            func.max(Hotel_Room_Type.price).label("max_price")
        )
        .join(Country, Country.id == City.country_id)
        .join(Hotel, Hotel.city_id == City.id)
        .join(Hotel_Room_Type, Hotel_Room_Type.hotel_id == Hotel.id)
        .group_by(City.id)
        .order_by(func.count(Hotel.id).desc())
    )
    results = query.all()
    keys = query.statement.columns.keys()

    formatted_results = [
        {field_name: value for field_name, value in zip(keys, result)}
        for result in results
    ]

    return formatted_results

#статистика по рейтингам отелей (кол-во отелей с каждым рейтингом, средний балл)
def get_rating_statistic():
    query = (
        db.session.query(
            Rating.id.label("id"),
            Rating.value.label("rating_value"),
            func.count(Hotel.id).label("hotel_count"),
            func.avg(Hotel.score).label("avg_hotel_score")
        )
        .join(Hotel, Hotel.rating_id == Rating.id)
        .group_by(Rating.id)
        .order_by(func.count(Hotel.id).desc())
    )
    results = query.all()
    keys = query.statement.columns.keys()

    formatted_results = [
        {field_name: value for field_name, value in zip(keys, result)}
        for result in results
    ]

    return formatted_results

#статисктика по типам комнат (средняя цена, кол-во предложений)
def get_room_type_statistic():
    query = (
        db.session.query(
            Room_Type.id.label("id"),
            Room_Type.name.label("room_type_name"),
            func.count(Hotel_Room_Type.id).label("offer_count"),
            func.avg(Hotel_Room_Type.price).label("avg_price"),
            func.min(Hotel_Room_Type.price).label("min_price"),
            func.max(Hotel_Room_Type.price).label("max_price")
        )
        .join(Hotel_Room_Type, Hotel_Room_Type.roomtype_id == Room_Type.id)
        .group_by(Room_Type.id)
        .order_by(func.count(Hotel_Room_Type.id).desc())
    )
    results = query.all()
    keys = query.statement.columns.keys()

    formatted_results = [
        {field_name: value for field_name, value in zip(keys, result)}
        for result in results
    ]

    return formatted_results

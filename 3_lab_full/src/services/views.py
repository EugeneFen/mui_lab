from app import app
from flask import render_template
from services.request import get_all_hotel, get_all_excellent_rated_hotels, get_avg_price_by_country, get_cheapest_excellent_hotel_per_country,get_most_reviewed_cities, get_country_avg_scores, get_hotels_room_types_reviews
from flask import jsonify

@app.route('/')
def index():
    [hotel_head, hotel_body] = get_all_hotel()

    data = []
    for idx, row in enumerate(hotel_body):
        data.append({
            "id": idx,
            "Название отеля": row[0],
            "Рейтинг": row[1],
            "Оценка": row[2],
            "Количество отзывов": row[3],
            "Стоимость": row[4],
            "Тип комнаты": row[5],
            "Страна": row[6],
            "Город": row[7]
        })

    return jsonify(data)

    # html = render_template(
    #     'index.html',
    #     hotel_head=hotel_head,
    #     hotel_body=hotel_body
    # )

    # return html
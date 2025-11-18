from extensions import db

class Hotel(db.Model):
    __tablename__ = 'Hotel'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    hotel_name = db.Column(db.String(255), nullable=False)
    rating_id = db.Column(db.Integer, db.ForeignKey('Rating.id'))  
    score = db.Column(db.Float)
    room_type_id = db.Column(db.Integer, db.ForeignKey('Room_Type.id'))  
    city_id = db.Column(db.Integer, db.ForeignKey('City.id'))
    country_id = db.Column(db.Integer, db.ForeignKey('Country.id'))

    city = db.relationship("City", back_populates="hotels")
    rating = db.relationship("Rating", back_populates="hotels")
    hotel_room_types = db.relationship("Hotel_Room_Type", back_populates="hotel")
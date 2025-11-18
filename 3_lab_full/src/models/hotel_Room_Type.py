from extensions import db

class Hotel_Room_Type(db.Model):
    __tablename__ = 'hotel_room_type'
    hotel_id = db.Column(db.Integer, db.ForeignKey('Hotel.id'), primary_key=True)
    roomtype_id = db.Column(db.Integer, db.ForeignKey('Room_Type.id'), primary_key=True)
    price = db.Column(db.Float)
    number_reviews = db.Column(db.String(50))

    hotel = db.relationship("Hotel", back_populates="hotel_room_types")
    room_type = db.relationship("Room_Type", back_populates="hotel_room_types")
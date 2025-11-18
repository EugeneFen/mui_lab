from extensions import db

class Room_Type(db.Model):
    __tablename__ = 'Room_Type'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)

    hotel_room_types = db.relationship(
        "Hotel_Room_Type",
        back_populates="room_type",
        cascade='all, delete'
    )
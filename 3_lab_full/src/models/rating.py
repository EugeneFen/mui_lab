from extensions import db

class Rating(db.Model):
    __tablename__ = 'Rating'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    value = db.Column('Рейтинг', db.String(50), nullable=False)
    hotels = db.relationship("Hotel", back_populates="rating", cascade='all, delete')

    def __init__(self, value):
        self.value = value
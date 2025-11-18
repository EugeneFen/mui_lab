from extensions import db

class City(db.Model):
    __tablename__ = 'City'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column('Город', db.String(100), nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey('Country.id'))
    country = db.relationship("Country", back_populates="cities")
    hotels = db.relationship("Hotel", back_populates="city", cascade='all, delete')

    def __init__(self, name, country_id):
        self.name = name
        self.country_id = country_id
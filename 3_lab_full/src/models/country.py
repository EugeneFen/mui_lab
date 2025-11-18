from extensions import db

class Country(db.Model):
    __tablename__ = 'Country'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column('Страна', db.String(100), nullable=False)
    cities = db.relationship("City", back_populates="country", cascade='all, delete')

    def __init__(self, name):
        self.name = name
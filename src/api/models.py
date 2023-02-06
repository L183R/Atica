from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Projects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(2048), unique=True, nullable=False)
    dataTime = db.Column(db.Date, unique=False, nullable=False) #consultar formato de la variable
    contact = db.Column(db.String(), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f'<Projects {self.text}>'

    def serialize(self):
        return {
            "id": self.id,
            "text": self.text,
            "dataTime": self.dataTime,
            "contact": self.contact,
        }
class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(), unique=True, nullable=False)
    dataTime = db.Column(db.Date, unique=False, nullable=False) #consultar formato de la variable
    contact = db.Column(db.String(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Projects {self.text}>'

    def serialize(self):
        return {
            "id": self.id,
            "text": self.text,
            "dataTime": self.dataTime,
            "contact": self.contact,
        }       

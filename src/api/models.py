from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, date

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False) 
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    user_projects = db.relationship('Projects', backref='user', lazy=True)
    user_post = db.relationship('Posts', backref='user', lazy=True)


    def __repr__(self):
        return f'<User {self.email}>'


    def serialize(self):
        return {
            "id": self.id,
            # "username": self.username,
            "email": self.email,
            # "password": self.password,
            # do not serialize the password, its a security breach
        }

class Projects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(2048), unique=True, nullable=False)
    dataTime = db.Column(db.Date, default=datetime.now(), nullable=False)
    contact = db.Column(db.String(256), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    project_id = db.relationship('Posts', backref='projects', lazy=True)

    def __repr__(self):
        return f'<Projects {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "text": self.text,
            "dataTime": self.dataTime,
            "contact": self.contact,
            "user_id": self.user_id,
        }
class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(1024), unique=True, nullable=False)
    dataTime = db.Column(db.Date, default=datetime.now(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)

    def __repr__(self):
        return f'<Posts {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "text": self.text,
            "dataTime": self.dataTime,
            "user_id": self.user_id,
            "project_id": self.project_id,
        }       

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
    user_perfil = db.relationship('Perfil', backref='user', lazy=True)
    user_creador = db.relationship('Creador', backref='user', lazy=True)


    def __repr__(self):
        return f'<User {self.email}>'


    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
#______________
class Projects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(64), unique=False, nullable=True)
    image = db.Column(db.String(500), unique=False, nullable=False)
    title = db.Column(db.String(64), unique=False, nullable=False)
    text = db.Column(db.String(2048), unique=False, nullable=False)
    dataTime = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    contact = db.Column(db.String(256), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    project_id = db.relationship('Posts', backref='projects', lazy=True)

    def __repr__(self):
        return f'<Projects {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "category": self.category,
            "image":self.image,
            "title": self.title,
            "text": self.text,
            "dataTime": self.dataTime,
            "contact": self.contact,
            "user_id": self.user_id
        }
#______________
class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # image = db.Column(db.String(1), unique=True, nullable=False)
    text = db.Column(db.String(1024), unique=False, nullable=False)
    dataTime = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)

    def __repr__(self):
        return f'<Posts {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            # "image":self.image,
            "text": self.text,
            "dataTime": self.dataTime,
            "user_id": self.user_id,
            "project_id": self.project_id,
        }
#______________
class Creador(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(500), unique=False, nullable=True)
    cursos = db.Column(db.String(2000), unique=False, nullable=True)
    diplomas= db.Column(db.String(4500), unique=False, nullable=True)
    trabajo = db.Column(db.String(1000), unique=False, nullable=True)
    fechaintrab = db.Column(db.String(1000), unique=False, nullable=True)
    fechafintrab = db.Column(db.String(1000), unique=False, nullable=True)
    descrip = db.Column(db.String(256), unique=False, nullable=True)
    contacto = db.Column(db.String(64), unique=False, nullable=True)
    ubicacionx = db.Column(db.String(16), unique=False, nullable=True)
    ubicaciony = db.Column(db.String(16), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    id_creador = db.relationship('Perfil', backref='creador', lazy=True)

    def __repr__(self):
        return f'<Creador {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "image": self.image,
            "cursos": self.cursos,
            "diplomas":self.diplomas,
            "trabajo": self.trabajo,
            "fechaintrab": self.fechaintrab,
            "fechafintrab": self.fechafintrab,
            "descrip": self.descrip,
            "contacto": self.contacto,
            "ubicacionx": self.ubicacionx,
            "ubicaciony": self.ubicaciony,
            "user_id": self.user_id,
        }

#______________

class Perfil(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comentario = db.Column(db.String(1024), unique=False, nullable=True)
    puntaje = db.Column(db.Integer, nullable=True)
    dataTime = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    creador_id = db.Column(db.Integer, db.ForeignKey('creador.id'), nullable=False)

    def __repr__(self):
        return f'<Perfil {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            # "image":self.image,
            "comentario": self.comentario,
            "puntaje": self.puntaje,
            "dataTime": self.dataTime,
            "user_id": self.user_id,
            "creador_id": self.creador_id,
        }
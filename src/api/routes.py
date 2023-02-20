"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User, Projects, Posts
from api.utils import generate_sitemap, APIException
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime as DateTime

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

# SDK de Mercado Pago
import mercadopago
sdk = mercadopago.SDK("APP_USR-2815099995655791-092911-c238fdac299eadc66456257445c5457d-1160950667")


api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])
def handle_user():
    
    alluser = User.query.all()
    results = list(map(lambda item: item.serialize(),alluser))

    return jsonify(results), 200

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user= User.query.filter_by(email=email).first()
    print(user.serialize())

    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify({"access_token":access_token, "user":user.serialize()})


    #________________________

    # Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/validtoken", methods=["GET"])
@jwt_required()
def valid_token():
# Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    if current_user is None:
        return jsonify({"User not logged in"}), 422
    return jsonify(logged_in_as=current_user), 200


    

@api.route('/signup', methods=['POST'])
def add_new_user():
    request_body = request.json
    print(request_body)
    userquery = User.query.filter_by(email=request_body["email"]).first()
    print(userquery)
    if  userquery is None:
        new_user = User(
        username=request_body["username"], 
        email=request_body["email"],
        password=request_body["password"])
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "El usuario se creó "}),200
    return jsonify({"msg": "El usuario ya existe "}),400

    @api.route("/profile", methods = ["GET"])
    @jwt_required()
    def get_profile(): current_user = get_jwt_identity()
    return jsonify(logged_in_as = current_user),
    200

    if __name__ == "__main__":
        app.run()

#______________________________________

@api.route('/newproject', methods=['POST'])
def add_project():
    category = request.json.get('category')
    image = request.json.get('image')
    title = request.json.get('title')
    text = request.json.get('text')
    contact = request.json.get('contact')
    user_id = request.json.get('user_id')

    new_project = Projects(category=category, image=image, title=title, text=text, contact=contact, user_id=user_id)
    print(new_project)
    try:
        db.session.add(new_project)
        db.session.commit()
        return jsonify(new_project.serialize()), 201
    except Exception as e:
        db.session.rollback()
        return str(e), 500
# ____________________________________
@api.route('/viewproject/<int:id>', methods=['GET'])
def handle_project(id):
    
    el_proyecto = Projects.query.filter_by(id=id).first()

    return jsonify(el_proyecto.serialize()), 200

# ____________________________________
@api.route('/projectlist', methods=['GET'])
def handle_project_list():
    
    project_list = Projects.query.order_by(Projects.dataTime.desc())

    results = list(map(lambda item: item.serialize(),project_list))

    return jsonify(results), 200

# ____________________________________
@api.route('/projectlist1', methods=['GET'])
def handle_project_list1():
    
    project_list = Projects.query.order_by(Projects.dataTime.desc()).filter_by(category= "Con fines de lucro")

    results = list(map(lambda item: item.serialize(),project_list))

    return jsonify(results), 200

# ____________________________________
@api.route('/projectlist2', methods=['GET'])
def handle_project_list2():
    
    project_list = Projects.query.order_by(Projects.dataTime.desc()).filter_by(category= "Sin fines de lucro")

    results = list(map(lambda item: item.serialize(),project_list))

    return jsonify(results), 200

# ____________________________________
@api.route('/newcommentary', methods=['POST'])
def add_commentary():
    text = request.json.get('text')
    user_id = request.json.get('user_id')
    project_id = request.json.get('project_id')

    dataTime = DateTime.now()
    print(dataTime)
    new_commentary = Posts(text=text, dataTime=dataTime, user_id=user_id, project_id=project_id)
    

    try:
        db.session.add(new_commentary)
        db.session.commit()
        return jsonify(new_commentary.serialize()), 201
    except Exception as e:
        db.session.rollback()
        return str(e), 500
# ____________________________________
@api.route('/commentarylist/<int:project_id>', methods=['GET'])
def handle_commentary_list(project_id):
    
    commentaries_list = Posts.query.filter_by(project_id=project_id).order_by(Posts.dataTime.asc())

    results = list(map(lambda item: item.serialize(),commentaries_list))

    return jsonify(results), 200
# ____________________________________
@api.route('/editpost/<int:id>', methods=['PUT'])
def update_post(id):
    post = Posts.query.get(id)
    if not post:
        return jsonify({'msg': 'Post not found'}), 404

    text = request.json.get('text')
    if not text:
        return jsonify({'msg': 'Missing required parameter: text'}), 400

    post.text = text

    try:
        db.session.commit()
        return jsonify(post.serialize()), 200
    except Exception as e:
        db.session.rollback()
        return str(e), 500

# ____________________________________
@api.route('/posts/<int:id>', methods=['DELETE'])
def eliminar_post(id):
    post = Posts.query.filter_by(id=id).first()
    if not post:
        raise APIException('Publicación no encontrada', status_code=404)
    db.session.delete(post)
    db.session.commit()
    return jsonify({'mensaje': 'Publicación eliminada correctamente'})

#___________________________________

@api.route("/preference", methods=["POST"])
def preference():
    body = json.loads(request.data) 
    total = body["total"]
    # Crea un ítem en la preferencia
    preference_data = {
    "items": [
    {
    "title": "ATICA", 
    "quantity": 1,
    "unit_price": total, 
    }
    ],
    "payer":{
    "email":"test_user_17805074@testuser.com" 
    },
    "back_urls": {
    "success": "https://www.youtube.com/watch?v=C8l4vWHgJTw",
    "failure": "https://www.youtube.com/watch?v=C8l4vWHgJTw",
    "pending": "https://www.youtube.com/watch?v=C8l4vWHgJTw" 
    },
    "auto_return": "approved"
    }
    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]
    return preference, 200


if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=PORT, debug=False)

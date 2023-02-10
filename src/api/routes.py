"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User, Projects, Posts
from api.utils import generate_sitemap, APIException
from flask_sqlalchemy import SQLAlchemy

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


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



    @app.route("/logout", methods=["POST"])
    def logout():
        response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


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
    text = request.json.get('text')
    contact = request.json.get('contact')

    new_project = Projects(text=text, contact=contact)

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
@api.route('/newcommentary/<int:user_id>/<int:project_id>', methods=['POST'])
def add_commentary():
    text = request.json.get('text')
    user_id = request.json.get('user_id')
    project_id = request.json.get('project_id')

    new_commentary = Projects(text=text, user_id=user_id, project_id=project_id)

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
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=PORT, debug=False)
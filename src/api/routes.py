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
    title = request.json.get('title')
    text = request.json.get('text')
    contact = request.json.get('contact')
    user_id = request.json.get('user_id')

    new_project = Projects(category=category, title=title, text=text, contact=contact, user_id=user_id)
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


# --------------------------------------------------RECUPERACION DE CONTRASEÑA-------------------------------------------------------

from flask import Flask, request, jsonify, url_for, Blueprint, current_app #importamos current_app
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import jwt_required, create_access_token
from flask_mail import Message #importamos Message() de flask_mail
import random #importamos ramdom y string para generar una clave aleatoria nueva
import string


api = Blueprint('api', __name__)


#RECUPERACION CONTRASEÑA OLVIDADA 
@api.route("/resetPassword", methods=["POST"])
def resetPassword():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8)) 
    #clave aleatoria nueva
    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401
	#   #busco si el correo existe en mi base de datos
    user = User.query.filter_by(email=recover_email).first()
    if not user:
    # recover_email != user.email:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400
    # #si existe guardo la nueva contraseña aleatoria
    user.password = recover_password
    db.session.commit()
    
#luego se la envio al usuario por correo para que pueda ingresar
    
    msg = Message("Hi", recipients=[recover_email])
    msg.recipients=[recover_email]
    msg.html = f"""<h1>Su nueva contraseña es: {recover_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200
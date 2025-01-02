from flask import request, jsonify
from config import app, db
from models import User, LoginRecord

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify({"users": [user.to_json() for user in users]}), 200

@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    if not data:
        return jsonify({"error": "Invalid data"}), 400

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({"error": "All fields are required"}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({"error": "Username already exists"}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already exists"}), 400

    user = User(username=username, email=email, password=password)
    try:
        db.session.add(user)
        db.session.commit()
        return jsonify(user.to_json()), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.to_json())

@app.route('/users/login', methods=['POST'])
def login():
    data = request.json
    if not data:
        return jsonify({"error": "Invalid data"}), 400

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Both email and password are required"}), 400

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"error": "User not found"}), 404

    if user.password != password:
        return jsonify({"error": "Invalid password"}), 400

    login_record = LoginRecord(user_id=user.id)
    db.session.add(login_record)
    db.session.commit()

    return jsonify({"message": "Login successful", "user": user.to_json()}), 200

@app.route('/users/login/records', methods=['GET'])
def get_login_records():
    records = LoginRecord.query.all()
    return jsonify({"login_records": [record.to_json() for record in records]}), 200


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
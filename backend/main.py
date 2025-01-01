from flask import request, jsonify
from config import app, db
from models import User

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    json_list = [user.to_json() for user in users]
    return jsonify({"users": json_list}), 200

@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    if not data:
        return jsonify({"error": "Invalid data"}), 400

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Validate input
    if not username or not email or not password:
        return jsonify({"error": "All fields are required"}), 400

    # Check if the username or email already exists
    if User.query.filter_by(username=username).first():
        return jsonify({"error": "Username already exists"}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already exists"}), 400

    # Create and save the new user
    user = User(username=username, email=email, password=password)
    try:
        db.session.add(user)
        db.session.commit()
        return jsonify(user.to_json()), 201  # Return created user's data
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.to_json())

# get a username for login
@app.route('/users/login', methods=['GET'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    if not user:
        return jsonify({"error": "User not found"}), 404
    if user.password != data['password']:
        return jsonify({"error": "Invalid password"}), 400
    return jsonify(user.to_json()), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
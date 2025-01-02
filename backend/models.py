from config import db
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    def to_json(self):
        return {
            'id': self.id,
            'userName': self.username,
            'email': self.email,
            'password': self.password
        }
        
        
class LoginRecord(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    def to_json(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "timestamp": self.timestamp.isoformat()
        }
        

class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    scope = db.Column(db.String(50), nullable=False)
    height = db.Column(db.Float, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    eating_habit = db.Column(db.String(50), nullable=True)
    target = db.Column(db.String(255), nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "age": self.age,
            "scope": self.scope,
            "height": self.height,
            "weight": self.weight,
            "eatingHabit": self.eating_habit,
            "target": self.target,
        }

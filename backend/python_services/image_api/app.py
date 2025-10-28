from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")
db = client["signs_img"]
collection = db["wiera"]

@app.route("/api/images/<group>", methods=["GET"])
def get_images_by_group(group):
    data = collection.find_one({"group": group}, {"_id": 0})
    if not data:
        return jsonify({"error": "Group not found"}), 404
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=5001)

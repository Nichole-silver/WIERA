from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")
db = client["Wiera"]
collection = db["images"]

@app.route("/api/images/<group>", methods=["GET"])
def get_images_by_group(group):
    doc = collection.find_one({"group": group}, {"_id": 0})
    if not doc:
        return jsonify({"error": "Group not found"}), 404
    
    # Trả riêng phần dữ liệu ảnh (để frontend dễ hiểu)
    return jsonify(doc.get("data", {}))

if __name__ == "__main__":
    app.run(debug=True, port=5001)

print("📡 Kết nối tới MongoDB...")
print("Database hiện tại:", db.name)
print("Các collection:", db.list_collection_names())

import os
import base64
from pymongo import MongoClient

# === MongoDB Connection ===
client = MongoClient("mongodb://localhost:27017/")
db = client["Wiera"]
collection = db["images"]

# === Use current working directory ===
ROOT_DIR = os.getcwd()

# === Allowed group folders ===
ALLOWED_GROUPS = {
    "alphabet", "colours", "feelings", "greeting", 
    "others", "people", "places", "number"
}

def encode_file_to_base64(file_path):
    """Read and encode a file to base64"""
    with open(file_path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")

def insert_grouped_images(root_path):
    # Drop existing data first
    print("🗑️ Dropping existing documents from collection...")
    collection.drop()

    total_groups = 0
    for group_name in os.listdir(root_path):
        group_path = os.path.join(root_path, group_name)
        if not os.path.isdir(group_path):
            continue
        if group_name not in ALLOWED_GROUPS:
            print(f"⏭️ Skipped folder '{group_name}' (not in allowed list)")
            continue

        data_object = {}
        for file_name in os.listdir(group_path):
            file_path = os.path.join(group_path, file_name)
            if not file_name.lower().endswith((".png", ".jpg", ".jpeg", ".gif", ".bmp")):
                continue

            try:
                data_object[file_name] = encode_file_to_base64(file_path)
            except Exception as e:
                print(f"⚠️ Skipped {file_name}: {e}")

        if data_object:
            doc = {
                "group": group_name,
                "data": data_object
            }
            collection.insert_one(doc)
            total_groups += 1
            print(f"✅ Inserted group '{group_name}' with {len(data_object)} images.")

    print(f"\n🎯 Done! Inserted {total_groups} groups into MongoDB.")

if __name__ == "__main__":
    print(f"📂 Using root directory: {ROOT_DIR}")
    insert_grouped_images(ROOT_DIR)

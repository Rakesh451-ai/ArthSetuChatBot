from dotenv import load_dotenv
import os

load_dotenv()
key = os.getenv("GROQ_API_KEY")
print(f"Key: {key}")
print(f"Key length: {len(key) if key else 0}")
print(f"Starts with 'gsk_': {key.startswith('gsk_') if key else False}")
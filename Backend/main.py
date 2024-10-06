from fastapi import FastAPI
from transformers import pipeline
from pydantic import BaseModel


sentiment_analysis = pipeline("sentiment-analysis",model="siebert/sentiment-roberta-large-english")
app = FastAPI()

class TextRequest(BaseModel):
    text: str


@app.get('/')
def root():
    return {"message": "The API is working fine"}


@app.post('/sentiment')
def analysis(request: TextRequest):
    score = sentiment_analysis(request.text)
    return {"message": score}
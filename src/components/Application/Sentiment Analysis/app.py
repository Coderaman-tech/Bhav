from flask import Flask,request,jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from scipy.special import softmax



# load model and tokenizer
roberta = "cardiffnlp/twitter-roberta-base-sentiment"

model = AutoModelForSequenceClassification.from_pretrained(roberta)
tokenizer = AutoTokenizer.from_pretrained(roberta)

labels = ['Negative', 'Neutral', 'Positive']



app=Flask(__name__)

CORS(app)
@app.route('/')

def home():
    return "Hello World"


@app.route('/fetchresult',methods=['GET'])


def predict():
    data={"message":"hi aman"}
    return jsonify(data)
    message=request.form.get('message')
    # return jsonify({'response':message})

    # print(type(message))
    # preprocess message
    message_words = []

    for word in message.split(' '):
        if word.startswith('@') and len(word) > 1:
              word = '@user'
    
        elif word.startswith('http'):
            word = "http"
    message_words.append(word)

    message_proc = " ".join(message_words)
    encoded_message = tokenizer(message_proc, return_tensors='pt')
    output = model(**encoded_message)

    scores = output[0][0].detach().numpy()
    scores = softmax(scores)
    result=[]
    for i in range(len(scores)):  
        l = labels[i]
        s = scores[i]
        result.append(s)
    return jsonify({'response':str(result)})



if __name__=='__main__':
    app.run(debug=True)

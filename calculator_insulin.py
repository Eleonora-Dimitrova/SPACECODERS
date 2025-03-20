from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])


def calculate():
    data = request.get_json()

    carbs = data.get('carbs')
    blood_sugar = data.get('blood_sugar')

    insulin_per_10g_carbs = 1
    
    insulin_carbs = (carbs / 10) * insulin_per_10g_carbs
    
    if blood_sugar > 8:
        insulin_for_sugar = (blood_sugar - 8) * 0.5 
    else:
        insulin_for_sugar = 0
    
    insulin = insulin_carbs + insulin_for_sugar
    
    if insulin < 4:
        return jsonify({"message": "Your insulin level is low. We recommend insulin injection."})
    elif insulin > 8:
        return jsonify({"message": "Your insulin level is high. Take fast-absorbing carbohydrates."})
    else:
        return jsonify({"message": "Your insulin level is optimal."})
    
if __name__ ==  "__main__":
    app.run(debug=True)

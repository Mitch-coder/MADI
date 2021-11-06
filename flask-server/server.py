from flask import Flask,jsonify

app = Flask(__name__)

# La Ruta principal ./
@app.route("/")
def home():
    return jsonify({"success":True,"message":"Madi dice hola"})

# ./documentation
@app.route("/documentation")
def documentation():
    return jsonify({"success":True,"message":"Aqui estaran las lecturas"})

# ./exercises 
@app.route("/exercises")
def exercises():
    return jsonify({"success":True,"message":"Pondras en precticas tus conocimientos"})

# ./desktopGame
@app.route("/desktopGame")
def desktopGame():
    return jsonify({"success":True,"message":"Un juego didactico para ti"})

# ./aboutUs
@app.route("/aboutUs")
def aboutUs():
    return jsonify({"success":True,"message":"Aqui estaran los guapos de mis creadores"})
#Iniciamos el servidor
if __name__=="__main__":
    app.run(debug=True,host='127.0.0.1',port=5000)
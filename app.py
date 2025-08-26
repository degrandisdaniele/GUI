from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/render/<path:filename>')
def render_file(filename):
    return render_template(filename)

if __name__ == '__main__':
    app.run(debug=True)

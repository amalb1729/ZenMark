from flask import Flask, request,redirect,url_for,jsonify
import psycopg2

app = Flask(__name__)

def connect():
    return psycopg2.connect(database="flask_db",
                    user="postgres",
                    password="akhil_postgresql",
                    host="localhost",
                    port="5432")

@app.route('/api/display', methods=['GET'])
def display():
    conn = connect()
    cur = conn.cursor()
    cur.execute('''SELECT * FROM grocery;''')
    data=cur.fetchall()
    cur.close()
    conn.close()
    return data

@app.route('/api/add', methods=['POST'])
def add():
    conn = connect()
    cur = conn.cursor()
    name = request.form['name'] 
    price = request.form['price']
    cur.execute( 
    '''
        CREATE TABLE IF NOT EXISTS grocery (
        id serial,
        name varchar(100),
        price float,
        PRIMARY KEY (id));
    ''') 
    cur.execute('''INSERT INTO grocery(name, price) VALUES (%s, %s);''',(name, price))
    conn.commit()
    cur.close()
    conn.close()

    # return jsonify({"message": "Data received"})
    return redirect('http://localhost:5173/Items')

@app.route('/api/delete', methods=['POST'])
def delete():
    conn = connect()
    cur = conn.cursor()
    id = request.form.get("dropdown")
    if id!="null":
        # id=int(id)
        cur.execute(f'''DELETE FROM grocery WHERE id={id};''')    
    conn.commit()
    cur.close()
    conn.close()

    return redirect('http://localhost:5173/Items')


if __name__ == '__main__':
    app.run(debug=True)
import numpy as np
import matplotlib.pyplot as plt
import json
from flask import Flask, request, jsonify

def estimate_coef(x, y):
    # number of observations/points
    x = np.array(x)
    y = np.array(y)
    n = np.size(x)

    # mean of x and y vector
    m_x = np.mean(x)
    m_y = np.mean(y)
    # calculating cross-deviation and deviation about x
    SS_xy = np.sum(y*x - n*m_y*m_x)
    SS_xx = np.sum(x*x - n*m_x*m_x)

    # calculating regression coefficients
    b_1 = SS_xy / SS_xx
    b_0 = m_y - b_1*m_x

    return(b_0, b_1)

def plot_regression_line(x, y, b):
    # predicted response vector
    x= np.array(x)
    y_pred = b[0] + b[1]*x
    z = np.array(y_pred).tolist()


    #print(y_pred)
    # putting labels
    #print(x)
    return json.dumps(z)

app = Flask(__name__)

@app.route('/', methods = ['POST'])
def main():
    # observations
    value1 = request.json['value1']
    value2 = request.json['value2']
    value3 = request.json['value3']
    value4 = request.json['value4']
    value5= request.json['value5']
    value6= request.json['value6']
    value7= request.json['value7']
    value8= request.json['value8']
    value9= request.json['value9']
    value10= request.json['value10']
    x = [value1, value2, value3, value4, value5, value6, value7, value8, value9,value10]
    y = [1, 3, 2, 5, 7, 8, 8, 9, 10, 12]
    #return "fuck"
    # estimating coefficients
    b = estimate_coef(x, y)
    print("Estimated coefficients:\nb_0 = {}  \
          \nb_1 = {}".format(b[0], b[1]))

    # plotting regression line
    s = plot_regression_line(x, y, b)
    #e = json.dumps(s)

    return jsonify({"answer-y":s,"answer-x":x})


if __name__ == "__main__":
    app.run(debug=True)

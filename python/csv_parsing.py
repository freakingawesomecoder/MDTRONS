import csv
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():

# csv file
    filename = "test_migration.csv"

# initializing the titles(heading) and rows list
    fields = []
    rows = []

# reading the csv file
    with open(filename, 'r') as csvfile:
    # creating a csv reader object
        csvreader = csv.reader(csvfile)

    # extracting field names through first row
        fields = next(csvreader)

    # extracting each data row one by one
        for row in csvreader:
            rows.append(row)

    # get total number of rows
        #print("Total no. of rows: %d"%(csvreader.line_num))

    # printing the field names
        #print('Field names are:' + ', '.join(field for field in fields))

    #  printing all the rows
        #print('\nTotal rows are:\n')

        # initializing the rows for the particular headers
        x = []
        y = []
        z = []
        for row in rows:
    # parsing each column of a row
            #for col in row:
            #print('year',row[0])

            x.append(row[0])
            y.append(row[1])
            z.append(row[2])
            #print('\n')
    return jsonify({'totalpopulation':y[0],'total migrants':z[0],'year':x[0]},
    {'totalpopulation':y[1],'totalmigrants':z[1],'year':x[1]},{'total population':y[2],'total migrants':z[2],'year':x[2]},
    {'totalpopulation':y[3],'totalmigrants':z[3],'year':x[3]},{'total population':y[4],'total migrants':z[4],'year':x[4]},
    {'totalpopulation':y[5],'totalmigrants':z[5],'year':x[5]},{'total population':y[6],'total migrants':z[6],'year':x[6]},
    {'totalpopulation':y[7],'totalmigrants':z[7],'year':x[7]},{'total population':y[8],'total migrants':z[8],'year':x[8]},
    {'totalpopulation':y[9],'totalmigrants':z[9],'year':x[9]})

if __name__ == '__main__':
    app.run(debug=True)

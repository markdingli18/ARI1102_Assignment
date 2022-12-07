from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import json
import sys

app = Flask(__name__)
api = Api(app)
CORS(app)

# Users Endpoint Class


class UserReviews(Resource):

    # Get Endpoint
    def get(self):

        # Opening JSON file
        f = open('user-reviews.json')

        # returns JSON object as
        # a dictionary
        data = json.load(f)

        return data, 200  # return data and 200 OK

    # Post Endpoint
    def post(self):

        try:

            filename = 'user-reviews.json'

            parser = reqparse.RequestParser()  # initialize
            parser.add_argument('name', required=True)  # add args
            parser.add_argument('createdAt', required=True)
            parser.add_argument('message', required=True)
            args = parser.parse_args()  # parse arguments to dictionary

            new_data = {
                'name': args['name'],
                'createdAt': args['createdAt'],
                'message': args['message']
            }

            # 1. Read file contents
            with open(filename, "r") as file:
                data = json.load(file)

            # 2. Update json object
            data['userReviews'].append(new_data)

            # 3. Write json file
            with open(filename, "w") as file:
                json.dump(data, file)

                return {'data': new_data}, 200  # return data with 200 OK

        except:

            return {
                'message': ("Oops!", sys.exc_info()[0], "occurred.")
            }, 500


# Routes - Add endpoints path url
api.add_resource(UserReviews, '/user-reviews')

if __name__ == '__main__':
    app.run("", 3002)  # run our Flask app

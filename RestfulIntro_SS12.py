from flask import Flask,render_template,json
from mongoengine import *
from flask_restful import Resource,Api,reqparse
import json

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('name',type=str, location = "json")
parser.add_argument('desc',type=str, location = 'json')
parser.add_argument('image',type=str,location = 'json')

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/food-json')
def food_json():
    return json.dumps(
        {
        "name": "lolotica",
        "desc": "aaaa",
        "image": "bbbb"
    }
    )


@app.route('/date')
def date():
    return render_template('date.html')
hrc_list =[
    "Nhân mã","Yêu đời, phởn","https://slack-redir.net/link?url=http%3A%2F%2Fimg.v3.news.zdn.vn%2Fw660%2FUploaded%2Fjaroin%2F2015_12_30%2F2_1.jpg"
]

connect(
   'thanhku',
   username = '8f8f8f8',
   password = '123456',
   host = 'ds135798.mlab.com',
   port = 35798
)


class Zodiac(Document):
    name = StringField()
    desc = StringField()
    img = StringField()



class HoroscopeListRes(Resource):
    def get(self): #read
        #return [json.loads(zodiac.to_json()) for zodiac in Zodiac.objects]
        #return [json.loads(zodiac.to_json()) for zodiac in Zodiac.objects]
        return meList2json(Zodiac.objects)
    def post(self): #Create
        args = parser.parse_args()
        name  = args['name']
        desc  = args['desc']
        image = args['image']
        print(name,desc,image)
        return{"Status" : "OK"}
        zodiac = Zodiac(name = name,desc= desc,img=image)
        zodiac.save()


class HrcRes(Resource):
    def get(self,hrc_id):
        return json.loads(Zodiac.objects().with_id(hrc_id).to_json())
    def delete(self,hrc_id):
        all_zodiacs = Zodiac.objects()
        found_zodiac = all_zodiacs.with_id(hrc_id)
        found_zodiac.delete()
        return{"code":"1" , "status": "OK"}
    def put(self,hrc_id):
        all_zodiacs = Zodiac.objects()
        found_zodiac = all_zodiacs.with_id(hrc_id)
        args = parser.parse_args()
        name = args['name']
        desc = args['desc']
        image = args['image']
        found_zodiac.update(set__name=name,set__desc=desc,set__img=image)

        return json.loads(Zodiac.objects().with_id(hrc_id).to_json())
api.add_resource(HoroscopeListRes,"/api/hrc") #Get all, post
api.add_resource(HrcRes,"/api/hrc/<hrc_id>") #Get one, PUT,DELETE
def me2json(item):
    return json.loads(item.to_json()) #NhanMa
def meList2json(list):
    return[me2json(item) for item in list]


@app.after_request
def add_header(response):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=0'
    return response
if __name__ == '__main__':
    app.run()


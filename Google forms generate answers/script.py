import os,sys
import http
import re
import ast
import json
import datetime
import time

formId = "1FAIpQLSfC8GFzuWN-bfyTEredx1DwfSVIrJYwNnHyaB1uPk34NyVwgA";


ids =[]

reqs = []

for i in range(0,10):
    reqs.append(http.HttpRequest())
    page = reqs[i].get('https://docs.google.com/forms/d/e/1FAIpQLSfC8GFzuWN-bfyTEredx1DwfSVIrJYwNnHyaB1uPk34NyVwgA/viewform')
    resid = re.search('name="fbzx" value="(.*)">',page).group(1)
    ids.append(resid)
   


h = datetime.datetime.now().hour
m = datetime.datetime.now().minute
s = datetime.datetime.now().second

while ( not ( h == 23 and m == 59 and s >= 58 )):
    h = datetime.datetime.now().hour
    m = datetime.datetime.now().minute
    s = datetime.datetime.now().second
    time.sleep(0.05)
    os.system('cls' if os.name == 'nt' else 'clear')
 
    
    

for i in range(0,10):
    payload = {
         "entry.592587281": "Jorge+Benjor",
    "entry.179826024": "3",
    "entry.702963771":
      "Trabalho+em+uma+empresa/repartição+com+outras+pessoas+fisicamente",
    "entry.749177177":
      "Não,+falo+com+algumas+pessoas+mas+não+posso+considera-los+amigos",
    "entry.30308885":
      "Não,+fico+praticamente+o+dia+todo+em+casa.+Saio+apenas+para+necessidades.",
    "entry.1259640338": "Solteiro",
    "entry.2127050911": "Me+sinto+mal.+Evito+esses+locais",
    "entry.974272450": "Não,+minha+família+não+me+aceita",
    "entry.896330860": "Apenas+um+ou+outro+me+aprova,+o+resto+não",
    "entry.159669796": "bem+estar+e+sucesso+pesssoal",
    "entry.987096907": "Não+sei+responder",
        'draftResponse':'[,,"'+str(ids[i])+'"]',
        'pageHistory' : '0',
        'fromEmail':'false',
        'fbzx':str(ids[i])
                
    }
    reqs[i].addheader([('referer'\
                ,'https://docs.google.com/forms/d/e/1FAIpQLSfC8GFzuWN-bfyTEredx1DwfSVIrJYwNnHyaB1uPk34NyVwgA/viewform?'+str(ids[i]))])
    page = reqs[i].post('https://docs.google.com/forms/d/e/$'+formId+'/formResponse',payload)
    if( re.search('ss-confirmation',page) != None):
        print ('Success -' + str(ids[i]))
    else:
        print ('Failure -' + str(ids[i]))
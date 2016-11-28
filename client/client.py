import nxppy
import time
import json
from time import gmtime, strftime
from socketIO_client import SocketIO, LoggingNamespace

#Configuration
serverIP = '192.168.1.100'
boothID = '1A'

mifare = nxppy.Mifare()
print("Connecting to "+serverIP+"...")
socketIO = SocketIO(serverIP, 3000, LoggingNamespace)
print("Connected!")

while True:
    try:
        data = {}
        json_data = json.dumps(data)
        uid = mifare.select()
        data['uid'] = str(uid)
        data['booth'] = boothID
        data['time'] =  strftime("%Y-%m-%d %H:%M:%S", gmtime())
        json_data = json.dumps(data)
        socketIO.emit('scan', json_data)
        print("Emitted Scan!")
    except nxppy.SelectError:
        # SelectError is raised if no card is in the field.
        pass

    time.sleep(0.5)

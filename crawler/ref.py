import os
import json

def getVals(data):
	if isinstance(data,(list,)):
		for x in data:
			print(x)
	else:
		print(data)

obj_initial = {}
obj = {}
not_list = ["x.py", "y.py", "op.json", ".DS_Store", "v.xml"]

for filename in os.listdir(os.getcwd()):
	if filename not in not_list:
		print("---------------------",filename)
		with open(filename) as json_data:
		    d = json.load(json_data)
		    obj_initial[filename] = d
		    
		    if "id" in d.keys():
		    	print("id => ", d["id"])

		    if "category" in d.keys():
		    	print("category => ", d["category"])

		    if "summary" in d.keys():
		    	print("summary => ", d["summary"])

		    if "cveid" in d.keys():
		    	print("cveid => ")
		    	getVals(d["cveid"])

		    if "fixes" in d.keys():
		    	fixes = d["fixes"]
		    	for f in fixes:
		    		os = f["os"]
		    		packages = f["packages"]

		    		print("packages => ")
		    		getVals(packages)
		    		print("os => ")
		    		getVals(os)

with open('op.json', 'w') as outfile:  
    json.dump(obj_initial, outfile)
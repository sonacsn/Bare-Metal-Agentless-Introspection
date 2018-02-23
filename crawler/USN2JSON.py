import os
import json

def getVals(data):
	if isinstance(data,(list,)):
		for x in data:
			print(x)
	else:
		print(data)

obj = {}
not_list = ["x.py", "y.py", "op.json", ".DS_Store", "v.xml"]

obj_rhsa = {}
obj_deb = {}
obj_usn = {}

# for filename in os.listdir(os.getcwd()):
# 	if filename not in not_list:
# 		print("---------------------",filename)
# 		with open(filename) as json_data:
# 		    d = json.load(json_data)
# 		    obj_initial[filename] = d
		    
# 		    if "id" in d.keys():
# 		    	print("id => ", d["id"])

# 		    if "category" in d.keys():
# 		    	print("category => ", d["category"])

# 		    if "summary" in d.keys():
# 		    	print("summary => ", d["summary"])

# 		    if "cveid" in d.keys():
# 		    	print("cveid => ")
# 		    	getVals(d["cveid"])

# 		    if "fixes" in d.keys():
# 		    	fixes = d["fixes"]
# 		    	for f in fixes:
# 		    		os = f["os"]
# 		    		packages = f["packages"]

# 		    		print("packages => ")
# 		    		getVals(packages)
# 		    		print("os => ")
# 		    		getVals(os)


for filename in os.listdir(os.getcwd()):
	if filename not in not_list:
		print("---------------------",filename)
		with open(filename) as json_data:
		    d = json.load(json_data)
		    
		    if "usn" in filename:
		    	obj_usn[filename] = d

		    elif "RHSA" in filename:
		    	obj_rhsa[filename] = d

		    else:
		    	obj_deb[filename] = d


obj["RHSA"] = obj_rhsa
obj["deb"] = obj_deb
obj["usn"] = obj_usn		    
		    

with open('op.json', 'w') as outfile:  
    json.dump(obj, outfile)
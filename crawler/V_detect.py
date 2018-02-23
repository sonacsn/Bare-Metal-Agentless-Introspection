import os
import json

def getVals(data):
	if isinstance(data,(list,)):
		for x in data:
			print(x)
	else:
		print(data)


def printData(d):

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

def checkPackage(package,os, pName, pVersion, osName):
	vulnerable = []
	vOS = []
	if isinstance(package,(list,)):
		for p in package:
			if p["release"] in pVersion and p["name"] in pName :
				vulnerable.append(p)
	else:
		if p["release"] in pVersion and p["name"] in pName :
			vulnerable.append(p)

	if len(vulnerable) > 0:
		vOS = os

	return vulnerable, vOS

def checkOS(os_val, osName, osVersion, arch):
	vulnerable = []
	if os_val["name"] == osName:
		vulnerable.append(os_val)
	return vulnerable

def printVulnerablePackages(ps):
	# if len(ps) == 0:
	# 	print("No Vulnerability in Packages")
	for p, i in zip(ps, range(len(ps))):
		print("=> ", i)
		print("Package Name", p["name"])
		print("Package Version", p["version"])
		print("Package release", p["release"])

def printVulnerableOS(o):
	# if len(oss) == 0:
	# 	print("No Vulnerability in OS")
	print("Vulnerable OS => ")
	print("OS Distribution", o["distribution"])
	print("OS Name", o["name"])
	print("OS version", o["version"])
	print("OS architecture", o["architecture"])


def getVulnerability(pName, pVersion, osName, osVersion, arch):
	vulnerableP = 0
	with open("op.json") as json_data:
		usn_json = json.load(json_data)
		# for os_names in usn_json:
		if osName in ["rhel", "centos"]:
			os_names = "RHSA"
		elif osName == "ubuntu":
			os_names = "usn"
		else:
			os_names = "deb"


		dataset = usn_json[os_names]
		for file_name in dataset:
			d = dataset[file_name]

			if "fixes" in d.keys():
				fixes = d["fixes"]
				for f in fixes:
					os = f["os"]
					packages = f["packages"]
					vPackage, vOS = checkPackage(packages,os, pName, pVersion, osName)
					# vOS = checkOS(os, osName, osVersion, arch)
					vulnerableP += len(vPackage)

				if len(vPackage) > 0:
					print("\n----------------------------------------\n")
					print("\nVulnerabilty Found\n")
					if "id" in d.keys():
					    print("id => ", d["id"])
					
					if "category" in d.keys():
						print("category => ", d["category"])

					if "summary" in d.keys():
						print("summary => ", d["summary"])

					if "cveid" in d.keys():
						print("cveid => ")
						getVals(d["cveid"])
					printVulnerablePackages(vPackage)
					# printVulnerableOS(vOS)	
					print("\n")
	return vulnerableP



						


						

def describeUSN():
	with open("op.json") as json_data:
		usn_json = json.load(json_data)
		for os_names in usn_json:
			dataset = usn_json[os_names]
			for file_name in dataset:
				printData(dataset[file_name])

def get_os(f):
	#return os, version
	return f["5"], f["6"]

def get_package(f):
	#return package, version, arch required
	return f["3"],f["5"], f["6"]

def readFrame():
	with open("/Users/sonavarma/Downloads/file.json") as json_data:
		frame = json.load(json_data)
		os_frame = frame[1]

		osName, osVersion = get_os(os_frame)
		c = 0
		for i in range(2, len(frame)):
			package_name, package_version, arch = get_package(frame[i])
			c += getVulnerability(package_name, package_version, osName, osVersion, arch)
		print("vulnerable packages = ", c)
		print("total packages = ", len(frame))

readFrame()


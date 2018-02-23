import csv, json

file  = open("/Users/sonavarma/Downloads/ex.csv", "r")
reader = csv.reader(file, delimiter="\n")
list_d = []
i = 0
counter = 0
for row in reader:
    j = 1
    counter+=1
    dic = {}
    row[i] = row[i].replace('"', '')
    dic[j] = row[i][:row[i].index(":")]
    print(dic[j])
    j += 1
    dic[j] = row[i][row[i].index(":"):row[0].index(",")]
    print(dic[j])
    j += 1
    rowdata = row[i][row[i].index(",")+1:]
    # print(rowdata)
    nreader = rowdata.split(",")
    for r in nreader:
        if ":" in r:
            n = r[r.index(":")+1:]
        else:
            n = None
        print(n)
        dic[j] = n
        j += 1
    list_d.append(dic)
# print("FIFIFFI")
print(list_d)

file_wri = open('/Users/sonavarma/Downloads/file.json', 'w')
f = json.dump(list_d, file_wri)
file_wri.close()

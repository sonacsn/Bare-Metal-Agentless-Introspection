export var disk1 = [
    {
        "pName": "json-c",
        "pVersion": "0.11-4.el7_0",
        "id": "RHSA-2014:0703",
        "osName": "rhel"
    },
    {
        "pName": "kernel",
        "pVersion": "3.10.0-229.el7",
        "id": "RHSA-2015:0290",
        "osName": "rhel"
    },
    {
        "pName": "libuser",
        "pVersion": "0.60-7.el7_1",
        "id": "RHSA-2015:1483",
        "osName": "rhel"
    },
    {
        "pName": "flac-libs",
        "pVersion": "1.3.0-5.el7_1",
        "id": "RHSA-2015:0767",
        "osName": "rhel"
    }
];

var disk2 = {
    vulnerabilities:
        [
            {
                id: 'RHSA-2015:1483',
                category: 'security',
                severity: 'important',
                summary: 'Important: mariadb security update',
                os_name: 'rhel',
                package_name: 'mariadb',
                package_version: '2.el6_0'
            },
            {
                id: 'RHSA-2011:1441',
                category: 'security',
                severity: 'moderate',
                summary: 'Moderate: python 2 deprecated',
                os_name: 'rhel',
                package_name: 'python2',
                package_version: '2.el6_1'
            },
            {
                id: 'RHSA-2011:1441',
                category: 'security',
                severity: 'important',
                summary: 'Moderate: mariadb-debug security update',
                os_name: 'rhel',
                package_name: 'maruadb-debug-info',
                package_version: '1.el6_1'
            }
        ],
    summary:
        {
            total: 18,
            vulnerable: 3,
            os: 'rhel'
        },
    name: 'disk2'
};

var disk3 = {
    vulnerabilities: [],
    summary:
        {
            total: 18,
            vulnerable: 0,
            os: 'rhel'
        },
    name: 'disk3'
};

export const report = [disk1, disk2, disk3];
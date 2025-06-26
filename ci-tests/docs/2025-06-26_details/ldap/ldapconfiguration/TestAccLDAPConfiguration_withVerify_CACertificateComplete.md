# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 18 minutes
```
2025-05-28T00:56:50.5220921Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-05-28T00:56:50.5221532Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1136.76s)
```
#### PASS 15 minutes
```
2025-05-28T08:52:34.8870274Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-05-28T08:52:34.8870883Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (926.01s)
```
### 2025-05-29
#### PASS 16 minutes
```
2025-05-29T00:54:05.4095529Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-05-29T00:54:05.4096132Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (991.41s)
```
### 2025-05-30
#### PASS 14 minutes
```
2025-05-30T00:52:52.8411150Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-05-30T00:52:52.8411798Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (883.43s)
```
### 2025-05-31
#### PASS 15 minutes
```
2025-05-31T00:52:16.8277341Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-05-31T00:52:16.8278078Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (906.87s)
```
### 2025-06-01
#### PASS 14 minutes
```
2025-06-01T00:55:41.6099762Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-01T00:55:41.6100374Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (866.98s)
```
#### PASS 13 minutes
```
2025-06-01T05:03:49.2883876Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-01T05:03:49.2884489Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (831.93s)
```
#### PASS 14 minutes
```
2025-06-01T09:13:20.0366084Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-01T09:13:20.0366917Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (860.31s)
```
#### PASS 16 minutes
```
2025-06-01T13:24:44.6843427Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-01T13:24:44.6844070Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (990.85s)
```
#### PASS 15 minutes
```
2025-06-01T17:32:57.7881755Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-01T17:32:57.7882605Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (921.71s)
```
#### PASS 15 minutes
```
2025-06-01T21:41:30.3483130Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-01T21:41:30.3483772Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (925.96s)
```
### 2025-06-02
#### PASS 16 minutes
```
2025-06-02T00:55:25.0001746Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-02T00:55:25.0002366Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (966.39s)
```
#### PASS 17 minutes
```
2025-06-02T01:52:18.5080534Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-02T01:52:18.5081313Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1031.34s)
```
#### PASS 13 minutes
```
2025-06-02T06:04:06.1474208Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-02T06:04:06.1474804Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (816.06s)
```
### 2025-06-03
#### PASS 14 minutes
```
2025-06-03T00:52:34.4004682Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-03T00:52:34.4005519Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (851.31s)
```
### 2025-06-04
#### PASS 18 minutes
```
2025-06-04T00:47:52.9163347Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-04T00:47:52.9164309Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1122.24s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:32:26.7921912Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-05T00:32:26.7937056Z    test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-05T00:32:26.7937819Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:32:26.7938349Z         
2025-06-05T00:32:26.7940201Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9c939f274132503e6/clusters/test-acc-tf-c-1528657093018867601 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:26.7941488Z         
2025-06-05T00:32:26.7941929Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:32:26.7942982Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:32:26.7943739Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:32:26.7944160Z         
2025-06-05T00:32:26.7944586Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (186.14s)
```
### 2025-06-06
#### PASS 16 minutes
```
2025-06-06T00:46:44.9207895Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-06T00:46:44.9208641Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (992.00s)
```
### 2025-06-07
#### PASS 15 minutes
```
2025-06-07T00:44:16.9709903Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-07T00:44:16.9710657Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (930.71s)
```
### 2025-06-08
#### PASS 16 minutes
```
2025-06-08T00:48:39.5497013Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-08T00:48:39.5497623Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (990.81s)
```
### 2025-06-09
#### PASS 16 minutes
```
2025-06-09T00:47:21.7303314Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-09T00:47:21.7303992Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (967.35s)
```
### 2025-06-10
#### PASS 22 minutes
```
2025-06-10T01:00:34.4560749Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-10T01:00:34.4561482Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1351.22s)
```
### 2025-06-11
#### PASS 16 minutes
```
2025-06-11T00:45:02.3420296Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-11T00:45:02.3421024Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (970.48s)
```
#### PASS 16 minutes
```
2025-06-11T07:53:46.0047467Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-11T07:53:46.0048125Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (990.71s)
```
### 2025-06-12
#### PASS 16 minutes
```
2025-06-12T00:44:48.0188010Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-12T00:44:48.0188586Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (967.45s)
```
### 2025-06-13
#### PASS 17 minutes
```
2025-06-13T00:46:30.5221821Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-13T00:46:30.5222446Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1071.88s)
```
### 2025-06-14
#### PASS 16 minutes
```
2025-06-14T00:44:10.8015292Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-14T00:44:10.8016004Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (961.77s)
```
### 2025-06-15
#### PASS 16 minutes
```
2025-06-15T00:48:46.0777383Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-15T00:48:46.0778000Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (996.44s)
```
### 2025-06-16
#### PASS 15 minutes
```
2025-06-16T00:45:39.4474502Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-16T00:45:39.4475096Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (930.86s)
```
### 2025-06-17
#### PASS 14 minutes
```
2025-06-17T00:44:11.4902164Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-17T00:44:11.4903266Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (897.05s)
```
### 2025-06-18
#### PASS 15 minutes
```
2025-06-18T00:44:46.2927936Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-18T00:44:46.2928781Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (926.87s)
```
### 2025-06-19
#### PASS 16 minutes
```
2025-06-19T00:45:49.9855948Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-19T00:45:49.9856564Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (990.84s)
```
### 2025-06-20
#### PASS 15 minutes
```
2025-06-20T00:44:20.3145017Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-20T00:44:20.3145684Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (926.87s)
```
### 2025-06-21
#### PASS 14 minutes
```
2025-06-21T00:43:08.1620313Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-21T00:43:08.1620908Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (865.80s)
```
### 2025-06-22
#### PASS 16 minutes
```
2025-06-22T00:48:10.6260280Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-22T00:48:10.6260956Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (975.82s)
```
### 2025-06-23
#### PASS 14 minutes
```
2025-06-23T00:45:58.3829676Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-23T00:45:58.3830275Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (886.55s)
```
### 2025-06-24
#### PASS 16 minutes
```
2025-06-24T00:45:40.8016930Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-24T00:45:40.8017662Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (994.32s)
```
### 2025-06-25
#### PASS 14 minutes
```
2025-06-25T00:44:08.7114632Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-25T00:44:08.7115254Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (890.56s)
```
### 2025-06-26
#### PASS 15 minutes
```
2025-06-26T00:44:35.9011040Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-26T00:44:35.9011682Z --- PASS: TestAccLDAPConfiguration_withVerify_CACertificateComplete (921.91s)
```
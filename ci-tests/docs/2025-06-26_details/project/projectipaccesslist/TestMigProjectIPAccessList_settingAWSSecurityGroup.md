# project/projectipaccesslist/TestMigProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 2 minutes
```
2025-05-28T00:47:54.6110954Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-05-28T00:47:54.6111655Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (177.69s)
```
#### PASS 3 minutes
```
2025-05-28T08:45:36.2375494Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-05-28T08:45:36.2376358Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (180.33s)
```
### 2025-05-29
#### PASS 3 minutes
```
2025-05-29T00:46:24.8249814Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-05-29T00:46:24.8250682Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (193.61s)
```
### 2025-05-30
#### PASS 3 minutes
```
2025-05-30T00:46:35.1448765Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-05-30T00:46:35.1449238Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (180.33s)
```
### 2025-05-31
#### PASS 2 minutes
```
2025-05-31T00:47:03.6957297Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-05-31T00:47:03.6957901Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (177.22s)
```
### 2025-06-01
#### PASS 3 minutes
```
2025-06-01T00:51:25.9907707Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-01T00:51:25.9908538Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (181.00s)
```
#### PASS 2 minutes
```
2025-06-01T04:58:08.3647213Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-01T04:58:08.3648015Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (178.62s)
```
#### PASS 2 minutes
```
2025-06-01T09:07:09.0831400Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-01T09:07:09.0831887Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (178.23s)
```
#### PASS 2 minutes
```
2025-06-01T13:18:36.1656250Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-01T13:18:36.1657073Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (178.95s)
```
#### PASS 3 minutes
```
2025-06-01T17:26:36.7487814Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-01T17:26:36.7489951Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (184.68s)
```
#### PASS 2 minutes
```
2025-06-01T21:34:32.9235721Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-01T21:34:32.9236426Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (177.67s)
```
### 2025-06-02
#### PASS 2 minutes
```
2025-06-02T00:49:35.3823363Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-02T00:49:35.3824107Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (177.47s)
```
#### PASS 3 minutes
```
2025-06-02T01:45:51.5108712Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-02T01:45:51.5109239Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (183.46s)
```
#### PASS 3 minutes
```
2025-06-02T05:58:59.3348703Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-02T05:58:59.3349528Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (181.33s)
```
### 2025-06-03
#### PASS 2 minutes
```
2025-06-03T00:48:42.1731683Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-03T00:48:42.1732314Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (178.07s)
```
### 2025-06-04
#### PASS 3 minutes
```
2025-06-04T00:37:53.0143468Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-04T00:37:53.0144324Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (183.04s)
```
### 2025-06-05
#### FAIL 25 minutes
```
2025-06-05T00:59:45.7023827Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-05T00:59:45.7034065Z   
2025-06-05T00:59:45.7034965Z     resource_project_ip_access_list_migration_test.go:71: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:59:45.7035769Z         
2025-06-05T00:59:45.7036652Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-06-05T00:59:45.7037365Z         
2025-06-05T00:59:45.7037930Z           with mongodbatlas_network_peering.test,
2025-06-05T00:59:45.7039071Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_network_peering" "test":
2025-06-05T00:59:45.7040154Z           21: 		resource "mongodbatlas_network_peering" "test" {
2025-06-05T00:59:45.7040717Z         
2025-06-05T00:59:45.7048276Z    test_step_number=1
2025-06-05T00:59:45.7049185Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-05T00:59:45.7050170Z         
2025-06-05T00:59:45.7051591Z         Error: error deleting MongoDB Network Peering Container (6840e4cfc939f274132512b0): couldn't find resource (21 retries)
2025-06-05T00:59:45.7052530Z         
2025-06-05T00:59:45.7053121Z --- FAIL: TestMigProjectIPAccessList_settingAWSSecurityGroup (1528.52s)
```
### 2025-06-06
#### PASS 3 minutes
```
2025-06-06T00:40:37.7960706Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-06T00:40:37.7961529Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (182.86s)
```
### 2025-06-07
#### PASS 2 minutes
```
2025-06-07T00:38:52.9748882Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-07T00:38:52.9749385Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (176.91s)
```
### 2025-06-08
#### PASS 3 minutes
```
2025-06-08T00:40:49.9667041Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-08T00:40:49.9667871Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (182.39s)
```
### 2025-06-09
#### PASS 3 minutes
```
2025-06-09T00:41:43.7636949Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-09T00:41:43.7637691Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (183.31s)
```
### 2025-06-10
#### PASS 3 minutes
```
2025-06-10T00:48:55.3586371Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-10T00:48:55.3587001Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (183.26s)
```
### 2025-06-11
#### PASS 2 minutes
```
2025-06-11T00:37:01.6090545Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-11T00:37:01.6091182Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (177.96s)
```
#### PASS 2 minutes
```
2025-06-11T07:47:35.0395419Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-11T07:47:35.0396208Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (177.34s)
```
### 2025-06-12
#### PASS 3 minutes
```
2025-06-12T00:36:34.7867763Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-12T00:36:34.7868405Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (182.82s)
```
### 2025-06-13
#### PASS 3 minutes
```
2025-06-13T00:35:29.4114294Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-13T00:35:29.4114877Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (194.64s)
```
### 2025-06-14
#### PASS 3 minutes
```
2025-06-14T00:39:27.6386470Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-14T00:39:27.6386997Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (218.38s)
```
### 2025-06-15
#### PASS 3 minutes
```
2025-06-15T00:42:40.4933526Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-15T00:42:40.4934177Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (193.35s)
```
### 2025-06-16
#### PASS 3 minutes
```
2025-06-16T00:40:50.2871995Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-16T00:40:50.2872812Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (188.29s)
```
### 2025-06-17
#### PASS 3 minutes
```
2025-06-17T00:39:30.4168419Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-17T00:39:30.4169232Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (186.60s)
```
### 2025-06-18
#### PASS 3 minutes
```
2025-06-18T00:36:19.2298628Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-18T00:36:19.2299196Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (216.55s)
```
### 2025-06-19
#### PASS 3 minutes
```
2025-06-19T00:38:08.0573052Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-19T00:38:08.0573815Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (216.57s)
```
### 2025-06-20
#### PASS 3 minutes
```
2025-06-20T00:37:15.5646539Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-20T00:37:15.5647146Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (188.35s)
```
### 2025-06-21
#### PASS 3 minutes
```
2025-06-21T00:37:24.0806352Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-21T00:37:24.0807184Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (183.67s)
```
### 2025-06-22
#### PASS 2 minutes
```
2025-06-22T00:42:06.8957905Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-22T00:42:06.8958713Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (177.80s)
```
### 2025-06-23
#### PASS 2 minutes
```
2025-06-23T00:41:10.4823757Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-23T00:41:10.4824349Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (177.53s)
```
### 2025-06-24
#### PASS 3 minutes
```
2025-06-24T00:40:22.4564767Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-24T00:40:22.4565559Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (224.00s)
```
### 2025-06-25
#### PASS 3 minutes
```
2025-06-25T00:40:22.0208187Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-25T00:40:22.0209144Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (213.58s)
```
### 2025-06-26
#### PASS 3 minutes
```
2025-06-26T00:39:37.4223160Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-26T00:39:37.4223645Z --- PASS: TestMigProjectIPAccessList_settingAWSSecurityGroup (182.31s)
```
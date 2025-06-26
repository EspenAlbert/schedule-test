# streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 49 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 33) FAIL(x 16)
Success rate: 67.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 8 minutes
```
2025-05-28T01:07:43.6551897Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-05-28T01:07:43.6552387Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (514.00s)
```
#### PASS 2 minutes
```
2025-05-28T08:53:26.7070146Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-05-28T08:53:26.7070755Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.08s)
```
### 2025-05-29
#### FAIL 2 minutes
```
2025-05-29T01:00:46.6651258Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-05-29T01:00:46.6662387Z   
2025-05-29T01:00:46.6663163Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-29T01:00:46.6663675Z         
2025-05-29T01:00:46.6663973Z         Error: error deleting resource
2025-05-29T01:00:46.6664256Z         
2025-05-29T01:00:46.6665187Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6837ac4e3945df7a919155d0/streams/test-acc-tf-3448665720243598111/connections/test-acc-tf-3448665720243598111
2025-05-29T01:00:46.6666112Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-05-29T01:00:46.6666715Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-05-29T01:00:46.6667144Z         BadRequestDetail: 
2025-05-29T01:00:46.6667522Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.71s)
```
#### FAIL 2 minutes
```
2025-05-29T07:17:39.5294929Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-05-29T07:17:39.5314979Z    test_working_directory=/tmp/plugintest3430501031 test_step_number=3 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/ee17ef91-6556-450b-9817-0e52a46fe2b7/terraform
2025-05-29T07:17:39.5317496Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-29T07:17:39.5318507Z         
2025-05-29T07:17:39.5319243Z         Error: error deleting resource
2025-05-29T07:17:39.5319759Z         
2025-05-29T07:17:39.5321631Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6838069aba50867780ba4b12/streams/test-acc-tf-5939594646366721636/connections/test-acc-tf-5939594646366721636
2025-05-29T07:17:39.5323511Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-05-29T07:17:39.5324305Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-05-29T07:17:39.5324741Z         BadRequestDetail: 
2025-05-29T07:17:39.5325127Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (177.10s)
```
### 2025-05-30
#### FAIL 25 minutes
```
2025-05-30T01:23:57.2899681Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-05-30T01:23:57.2913447Z    test_working_directory=/tmp/plugintest809550660 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/abc4cba2-e3e3-4b7e-89a9-7ad83417adea/terraform test_step_number=1
2025-05-30T01:23:57.2915368Z     resource_stream_connection_test.go:86: Step 1/3 error: Error running apply: exit status 1
2025-05-30T01:23:57.2916035Z         
2025-05-30T01:23:57.2917164Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-05-30T01:23:57.2917872Z         
2025-05-30T01:23:57.2918404Z           with mongodbatlas_network_peering.test,
2025-05-30T01:23:57.2919442Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-05-30T01:23:57.2920398Z           19: 	resource "mongodbatlas_network_peering" "test" {
2025-05-30T01:23:57.2920900Z         
2025-05-30T01:23:57.2933802Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-30T01:23:57.2934510Z         
2025-05-30T01:23:57.2935629Z         Error: error deleting MongoDB Network Peering Container (6838fffa633e350548a5ab7b): couldn't find resource (21 retries)
2025-05-30T01:23:57.2936459Z         
2025-05-30T01:23:57.2936971Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1522.15s)
```
#### FAIL 2 minutes
```
2025-05-30T07:48:04.6926500Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-05-30T07:48:04.6938232Z   
2025-05-30T07:48:04.6938831Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-30T07:48:04.6939351Z         
2025-05-30T07:48:04.6939633Z         Error: error deleting resource
2025-05-30T07:48:04.6939911Z         
2025-05-30T07:48:04.6940854Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68395f4acfa5c112cb965cbb/streams/test-acc-tf-8899864128527238880/connections/test-acc-tf-8899864128527238880
2025-05-30T07:48:04.6941930Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-05-30T07:48:04.6942534Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-05-30T07:48:04.6942949Z         BadRequestDetail: 
2025-05-30T07:48:04.6943339Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (165.68s)
```
### 2025-05-31
#### FAIL 2 minutes
```
2025-05-31T00:52:21.0383545Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-05-31T00:52:21.0395187Z    test_step_number=3 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-05-31T00:52:21.0396411Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-31T00:52:21.0397359Z         
2025-05-31T00:52:21.0397874Z         Error: error deleting resource
2025-05-31T00:52:21.0398375Z         
2025-05-31T00:52:21.0400066Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/683a4f2debf07c11d4e93f9f/streams/test-acc-tf-9105901871939381553/connections/test-acc-tf-9105901871939381553
2025-05-31T00:52:21.0401340Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-05-31T00:52:21.0401969Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-05-31T00:52:21.0402405Z         BadRequestDetail: 
2025-05-31T00:52:21.0402796Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (164.23s)
```
### 2025-06-01
#### FAIL 2 minutes
```
2025-06-01T00:57:09.6197117Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-01T00:57:09.6218665Z    test_step_number=3 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-01T00:57:09.6220373Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-01T00:57:09.6221730Z         
2025-06-01T00:57:09.6222330Z         Error: error deleting resource
2025-06-01T00:57:09.6223090Z         
2025-06-01T00:57:09.6224923Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/683ba1a52ebc1806778a0e36/streams/test-acc-tf-6186160877094243854/connections/test-acc-tf-6186160877094243854
2025-06-01T00:57:09.6226822Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-01T00:57:09.6228313Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-01T00:57:09.6229256Z         BadRequestDetail: 
2025-06-01T00:57:09.6230105Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (177.11s)
```
#### FAIL 2 minutes
```
2025-06-01T05:05:05.5354432Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-01T05:05:05.5366072Z   
2025-06-01T05:05:05.5366682Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-01T05:05:05.5367210Z         
2025-06-01T05:05:05.5367494Z         Error: error deleting resource
2025-06-01T05:05:05.5367779Z         
2025-06-01T05:05:05.5368738Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/683bdbf5cc8f0935c7c192b9/streams/test-acc-tf-3013292033993399525/connections/test-acc-tf-3013292033993399525
2025-06-01T05:05:05.5369833Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-01T05:05:05.5370453Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-01T05:05:05.5370888Z         BadRequestDetail: 
2025-06-01T05:05:05.5371276Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.76s)
```
#### PASS 2 minutes
```
2025-06-01T09:13:36.5621073Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-01T09:13:36.5621552Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.99s)
```
#### PASS 2 minutes
```
2025-06-01T13:23:08.9016219Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-01T13:23:08.9016685Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (164.95s)
```
#### PASS 2 minutes
```
2025-06-01T15:04:33.1080257Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-01T15:04:33.1082020Z     resource_stream_connection_test.go:75: Creating execution project: test-acc-tf-p-3459413379207891447
2025-06-01T15:04:33.1083319Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (169.04s)
```
#### PASS 2 minutes
```
2025-06-01T17:32:31.2650269Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-01T17:32:31.2651110Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (167.84s)
```
#### PASS 2 minutes
```
2025-06-01T21:41:05.5641145Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-01T21:41:05.5641954Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.88s)
```
#### FAIL 2 minutes
```
2025-06-01T21:51:39.1333607Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-01T21:51:39.1344892Z   
2025-06-01T21:51:39.1345494Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-01T21:51:39.1346011Z         
2025-06-01T21:51:39.1346304Z         Error: error deleting resource
2025-06-01T21:51:39.1346578Z         
2025-06-01T21:51:39.1347512Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/683cc7dd7bf9cf70212e1c7b/streams/test-acc-tf-636956015119058455/connections/test-acc-tf-636956015119058455
2025-06-01T21:51:39.1348471Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-01T21:51:39.1349073Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-01T21:51:39.1349620Z         BadRequestDetail: 
2025-06-01T21:51:39.1349998Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.46s)
```
### 2025-06-02
#### FAIL 2 minutes
```
2025-06-02T00:05:18.9840919Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-02T00:05:18.9843016Z     resource_stream_connection_test.go:75: Creating execution project: test-acc-tf-p-7257659613938563678
2025-06-02T00:05:18.9855580Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/68d76771-5c0d-4090-9f83-90cfd28bd8d4/terraform
2025-06-02T00:05:18.9856668Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-02T00:05:18.9857208Z         
2025-06-02T00:05:18.9857508Z         Error: error deleting resource
2025-06-02T00:05:18.9857815Z         
2025-06-02T00:05:18.9858785Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/683cea157bf9cf70212e45d3/streams/test-acc-tf-5621747539124110519/connections/test-acc-tf-5621747539124110519
2025-06-02T00:05:18.9859761Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-02T00:05:18.9860493Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-02T00:05:18.9860918Z         BadRequestDetail: 
2025-06-02T00:05:18.9861306Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (169.42s)
```
#### PASS 2 minutes
```
2025-06-02T00:54:43.9613986Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-02T00:54:43.9614940Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (167.72s)
```
#### FAIL 2 minutes
```
2025-06-02T01:50:38.5533074Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-02T01:50:38.5543881Z    test_step_number=3 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/a5f6ff55-e74c-40be-8352-31009e453765/terraform test_working_directory=/tmp/plugintest1712053517
2025-06-02T01:50:38.5545381Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-02T01:50:38.5545904Z         
2025-06-02T01:50:38.5546336Z         Error: error deleting resource
2025-06-02T01:50:38.5546613Z         
2025-06-02T01:50:38.5547547Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/683cffd6cc8f0935c7c410d8/streams/test-acc-tf-7925161105177635181/connections/test-acc-tf-7925161105177635181
2025-06-02T01:50:38.5548485Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-02T01:50:38.5549089Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-02T01:50:38.5549503Z         BadRequestDetail: 
2025-06-02T01:50:38.5549882Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (167.45s)
```
#### FAIL 2 minutes
```
2025-06-02T06:04:58.7275363Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-02T06:04:58.7286056Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/4e3e15b2-d72f-42dc-bae6-0b2257ac83d3/terraform test_working_directory=/tmp/plugintest1950676056 test_step_number=3
2025-06-02T06:04:58.7287374Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-02T06:04:58.7288094Z         
2025-06-02T06:04:58.7288376Z         Error: error deleting resource
2025-06-02T06:04:58.7288653Z         
2025-06-02T06:04:58.7289590Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/683d3b96cc8f0935c7c48302/streams/test-acc-tf-8047516561262689632/connections/test-acc-tf-8047516561262689632
2025-06-02T06:04:58.7290524Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-02T06:04:58.7291128Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-02T06:04:58.7291710Z         BadRequestDetail: 
2025-06-02T06:04:58.7292085Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.99s)
```
### 2025-06-03
#### FAIL 2 minutes
```
2025-06-03T00:53:56.2378478Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-03T00:53:56.2399725Z   
2025-06-03T00:53:56.2400913Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-03T00:53:56.2401866Z         
2025-06-03T00:53:56.2402370Z         Error: error deleting resource
2025-06-03T00:53:56.2402869Z         
2025-06-03T00:53:56.2404632Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/683e43ff25aee225e55be05e/streams/test-acc-tf-8798305800993969666/connections/test-acc-tf-8798305800993969666
2025-06-03T00:53:56.2406422Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-03T00:53:56.2407746Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-03T00:53:56.2408668Z         BadRequestDetail: 
2025-06-03T00:53:56.2409354Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (175.02s)
```
#### PASS 2 minutes
```
2025-06-03T18:15:23.6533654Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-03T18:15:23.6534161Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (167.44s)
```
#### FAIL 2 minutes
```
2025-06-03T19:21:20.0865726Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-03T19:21:20.0877145Z   
2025-06-03T19:21:20.0877757Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-03T19:21:20.0878286Z         
2025-06-03T19:21:20.0878571Z         Error: error deleting resource
2025-06-03T19:21:20.0878845Z         
2025-06-03T19:21:20.0879793Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/683f4752ccdbee5e1a677040/streams/test-acc-tf-7257710818532762356/connections/test-acc-tf-7257710818532762356
2025-06-03T19:21:20.0880874Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-03T19:21:20.0881495Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-03T19:21:20.0881918Z         BadRequestDetail: 
2025-06-03T19:21:20.0882296Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (173.50s)
```
### 2025-06-04
#### PASS 2 minutes
```
2025-06-04T00:44:38.9449617Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-04T00:44:38.9450092Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (167.79s)
```
### 2025-06-05
#### FAIL 25 minutes
```
2025-06-05T01:03:58.7051989Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-05T01:03:58.7059827Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/cdf15d4c-605e-4ab6-8fa3-f3aec746a085/terraform
2025-06-05T01:03:58.7060756Z     resource_stream_connection_test.go:86: Step 1/3 error: Error running apply: exit status 1
2025-06-05T01:03:58.7061195Z         
2025-06-05T01:03:58.7061718Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-06-05T01:03:58.7062146Z         
2025-06-05T01:03:58.7062485Z           with mongodbatlas_network_peering.test,
2025-06-05T01:03:58.7063143Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-06-05T01:03:58.7063902Z           19: 	resource "mongodbatlas_network_peering" "test" {
2025-06-05T01:03:58.7064237Z         
2025-06-05T01:03:58.7070942Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/cdf15d4c-605e-4ab6-8fa3-f3aec746a085/terraform test_working_directory=/tmp/plugintest1967680490 test_step_number=1
2025-06-05T01:03:58.7072109Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-05T01:03:58.7072685Z         
2025-06-05T01:03:58.7073374Z         Error: error deleting MongoDB Network Peering Container (6840e630161ca93c1f05445c): couldn't find resource (21 retries)
2025-06-05T01:03:58.7074099Z         
2025-06-05T01:03:58.7074452Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1523.34s)
```
### 2025-06-06
#### PASS 2 minutes
```
2025-06-06T00:46:43.0240384Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-06T00:46:43.0241100Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (164.42s)
```
### 2025-06-07
#### PASS 2 minutes
```
2025-06-07T00:46:29.1311142Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-07T00:46:29.1311655Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.56s)
```
### 2025-06-08
#### FAIL 2 minutes
```
2025-06-08T00:48:12.6269600Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-08T00:48:12.6281126Z   
2025-06-08T00:48:12.6281729Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-08T00:48:12.6282273Z         
2025-06-08T00:48:12.6282568Z         Error: error deleting resource
2025-06-08T00:48:12.6282858Z         
2025-06-08T00:48:12.6283801Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6844da0e0b3c4a5b49f6b4ea/streams/test-acc-tf-3612009370847234501/connections/test-acc-tf-3612009370847234501
2025-06-08T00:48:12.6284770Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-08T00:48:12.6285393Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-08T00:48:12.6285822Z         BadRequestDetail: 
2025-06-08T00:48:12.6286211Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.29s)
```
### 2025-06-09
#### PASS 2 minutes
```
2025-06-09T00:46:27.3715813Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-09T00:46:27.3716340Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (164.59s)
```
### 2025-06-10
#### PASS 9 minutes
```
2025-06-10T01:03:02.7169304Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-10T01:03:02.7169766Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (565.95s)
```
### 2025-06-11
#### PASS 2 minutes
```
2025-06-11T00:44:41.0716934Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-11T00:44:41.0717911Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.52s)
```
#### FAIL 2 minutes
```
2025-06-11T07:54:27.5889735Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-11T07:54:27.5909604Z   
2025-06-11T07:54:27.5910628Z     resource_stream_connection_test.go:86: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-11T07:54:27.5911527Z         
2025-06-11T07:54:27.5912003Z         Error: error deleting resource
2025-06-11T07:54:27.5912464Z         
2025-06-11T07:54:27.5914286Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6849323349c05124969e6e2b/streams/test-acc-tf-769204503523087452/connections/test-acc-tf-769204503523087452
2025-06-11T07:54:27.5915960Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-11T07:54:27.5917041Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-11T07:54:27.5917761Z         BadRequestDetail: 
2025-06-11T07:54:27.5918390Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (165.16s)
```
### 2025-06-12
#### PASS 3 minutes
```
2025-06-12T00:44:51.7236492Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-12T00:44:51.7237340Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (215.93s)
```
### 2025-06-13
#### PASS 2 minutes
```
2025-06-13T00:46:48.4010084Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-13T00:46:48.4010964Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (168.36s)
```
### 2025-06-14
#### PASS 3 minutes
```
2025-06-14T00:44:17.0723361Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-14T00:44:17.0724209Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (205.97s)
```
### 2025-06-15
#### PASS 2 minutes
```
2025-06-15T00:48:57.1181485Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-15T00:48:57.1182183Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (177.49s)
```
### 2025-06-16
#### PASS 2 minutes
```
2025-06-16T00:46:42.7734626Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-16T00:46:42.7735179Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (173.81s)
```
### 2025-06-17
#### PASS 3 minutes
```
2025-06-17T00:46:36.0908483Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-17T00:46:36.0909669Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (193.86s)
```
### 2025-06-18
#### PASS 3 minutes
```
2025-06-18T00:46:10.9187336Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-18T00:46:10.9188032Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (188.25s)
```
#### PASS 3 minutes
```
2025-06-18T07:44:25.4731949Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-18T07:44:25.4732853Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (207.47s)
```
### 2025-06-19
#### PASS 2 minutes
```
2025-06-19T00:46:33.0395102Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-19T00:46:33.0395910Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.55s)
```
### 2025-06-20
#### PASS 2 minutes
```
2025-06-20T00:45:53.6815647Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-20T00:45:53.6816466Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (164.57s)
```
### 2025-06-21
#### PASS 2 minutes
```
2025-06-21T00:43:49.5370768Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-21T00:43:49.5371580Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (164.78s)
```
### 2025-06-22
#### PASS 2 minutes
```
2025-06-22T00:49:55.7950259Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-22T00:49:55.7950711Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (166.57s)
```
### 2025-06-23
#### PASS 2 minutes
```
2025-06-23T00:45:53.8798952Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-23T00:45:53.8799730Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (168.12s)
```
### 2025-06-24
#### PASS 2 minutes
```
2025-06-24T00:45:42.3188907Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-24T00:45:42.3189766Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (173.78s)
```
### 2025-06-25
#### PASS 3 minutes
```
2025-06-25T00:45:03.6041386Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-25T00:45:03.6042171Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (194.84s)
```
#### PASS 3 minutes
```
2025-06-25T06:57:33.8264164Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-25T06:57:33.8264658Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (215.01s)
```
### 2025-06-26
#### PASS 2 minutes
```
2025-06-26T00:44:37.3151703Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-26T00:44:37.3152192Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (173.78s)
```
#### PASS 2 minutes
```
2025-06-26T04:28:17.6347514Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-06-26T04:28:17.6348386Z --- PASS: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (164.74s)
```
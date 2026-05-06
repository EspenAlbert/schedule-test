# autogen_slow/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 20) FAIL(x 14)
Success rate: 58.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 03:59](#error-2026-04-07t0359330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-04-09 01:13](#error-2026-04-09t0113060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.06s
[2026-04-11 01:11](#error-2026-04-11t0111110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.09s
[2026-04-14 01:16](#error-2026-04-14t0116350000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-04-16 00:52](#error-2026-04-16t0052020000) |  | dev | flaky_500 | 70.07s
[2026-04-17 01:15](#error-2026-04-17t0115130000) |  | dev | timeout | 1395.05s
[2026-04-18 01:18](#error-2026-04-18t0118320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.05s
[2026-04-20 01:14](#error-2026-04-20t0114180000) |  | dev | timeout | 1404.04s
[2026-04-21 01:22](#error-2026-04-21t0122270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.08s
[2026-04-22 02:34](#error-2026-04-22t0234560000) |  | dev | timeout | 6495.02s
[2026-04-23 01:30](#error-2026-04-23t0130180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.10s
[2026-04-30 01:00](#error-2026-04-30t0100090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.02s
[2026-05-05 01:39](#error-2026-05-05t0139180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.01s
[2026-05-06 02:29](#error-2026-05-06t0229390000) |  | dev | timeout | 5852.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T03:59:33+00:00
```
2026-04-07T03:59:33.9045337Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-07T03:59:33.9045972Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-07T03:59:33.9057035Z   
2026-04-07T03:59:33.9057418Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-07T03:59:33.9057794Z         
2026-04-07T03:59:33.9058204Z         Error: error creating project: test-acc-tf-p-4937843242721692037
2026-04-07T03:59:33.9058558Z         
2026-04-07T03:59:33.9058858Z           with mongodbatlas_project.test,
2026-04-07T03:59:33.9059701Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-07T03:59:33.9060813Z           13: 	resource "mongodbatlas_project" "test" {
2026-04-07T03:59:33.9061613Z         
2026-04-07T03:59:33.9062311Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T03:59:33.9062978Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T03:59:33.9063573Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T03:59:33.9063992Z --- FAIL: TestAccSearchDeploymentAPI_basic (65.28s)
```

- 2026-04-08 PASS 56 minutes
- 2026-04-09

### Error 2026-04-09T01:13:06+00:00
```
2026-04-09T01:13:06.4246940Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-09T01:13:06.4247596Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-09T01:13:06.4258148Z    test_working_directory=/tmp/plugintest3223394341 test_step_number=1 test_terraform_path=/home/runner/work/_temp/4bb03392-47c9-4d15-93a2-1838ce3a98cf/terraform test_name=TestAccSearchDeploymentAPI_basic
2026-04-09T01:13:06.4259174Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-09T01:13:06.4259560Z         
2026-04-09T01:13:06.4259972Z         Error: error creating project: test-acc-tf-p-7526512634224852017
2026-04-09T01:13:06.4260335Z         
2026-04-09T01:13:06.4260630Z           with mongodbatlas_project.test,
2026-04-09T01:13:06.4261237Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-09T01:13:06.4261816Z           13: 	resource "mongodbatlas_project" "test" {
2026-04-09T01:13:06.4262117Z         
2026-04-09T01:13:06.4262585Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T01:13:06.4263235Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T01:13:06.4263822Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:13:06.4264241Z --- FAIL: TestAccSearchDeploymentAPI_basic (82.58s)
```

- 2026-04-10 PASS an hour
- 2026-04-11

### Error 2026-04-11T01:11:11+00:00
```
2026-04-11T01:11:11.8435152Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-11T01:11:11.8435772Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-11T01:11:11.8446137Z   
2026-04-11T01:11:11.8446663Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-11T01:11:11.8447034Z         
2026-04-11T01:11:11.8447437Z         Error: error creating project: test-acc-tf-p-3346841926167702974
2026-04-11T01:11:11.8447791Z         
2026-04-11T01:11:11.8448093Z           with mongodbatlas_project.test,
2026-04-11T01:11:11.8448665Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-11T01:11:11.8449287Z           13: 	resource "mongodbatlas_project" "test" {
2026-04-11T01:11:11.8449581Z         
2026-04-11T01:11:11.8450019Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T01:11:11.8450620Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T01:11:11.8451162Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:11:11.8451575Z --- FAIL: TestAccSearchDeploymentAPI_basic (93.92s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS an hour
- 2026-04-14

### Error 2026-04-14T01:16:35+00:00
```
2026-04-14T01:16:35.4046827Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-14T01:16:35.4047491Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-14T01:16:35.4059474Z   
2026-04-14T01:16:35.4060043Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-14T01:16:35.4105917Z         
2026-04-14T01:16:35.4106450Z         Error: error creating project: test-acc-tf-p-4767596743254483908
2026-04-14T01:16:35.4106853Z         
2026-04-14T01:16:35.4107182Z           with mongodbatlas_project.test,
2026-04-14T01:16:35.4108047Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-14T01:16:35.4108664Z           13: 	resource "mongodbatlas_project" "test" {
2026-04-14T01:16:35.4108983Z         
2026-04-14T01:16:35.4109484Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-14T01:16:35.4110177Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-14T01:16:35.4110789Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T01:16:35.4111227Z --- FAIL: TestAccSearchDeploymentAPI_basic (63.66s)
```

- 2026-04-15 PASS 57 minutes
- 2026-04-16

### Error 2026-04-16T00:52:02+00:00
```
2026-04-16T00:52:02.3925149Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-16T00:52:02.3925788Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-16T00:52:02.3933269Z    test_working_directory=/tmp/plugintest4242309184
2026-04-16T00:52:02.3933713Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:52:02.3934465Z         
2026-04-16T00:52:02.3934816Z         Error: error creating project: test-acc-tf-p-432606973267566046
2026-04-16T00:52:02.3935099Z         
2026-04-16T00:52:02.3935641Z           with mongodbatlas_project.test,
2026-04-16T00:52:02.3936120Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-16T00:52:02.3936554Z           13: 	resource "mongodbatlas_project" "test" {
2026-04-16T00:52:02.3936792Z         
2026-04-16T00:52:02.3937162Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-04-16T00:52:02.3937483Z         type
2026-04-16T00:52:02.3937701Z --- FAIL: TestAccSearchDeploymentAPI_basic (70.74s)
```

- 2026-04-17

### Error 2026-04-17T01:15:13+00:00
```
2026-04-17T01:15:13.2048227Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-17T01:15:13.2048906Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-17T01:15:13.2056907Z   
2026-04-17T01:15:13.2057448Z     resource_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-17T01:15:13.2057943Z         
2026-04-17T01:15:13.2058291Z         Error: Error waiting for changes in Delete
2026-04-17T01:15:13.2058609Z         
2026-04-17T01:15:13.2059076Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-17T01:15:13.2059530Z         timeout: 10m0s)
2026-04-17T01:15:13.2059860Z --- FAIL: TestAccSearchDeploymentAPI_basic (1395.45s)
```

- 2026-04-18

### Error 2026-04-18T01:18:32+00:00
```
2026-04-18T01:18:32.4146382Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-18T01:18:32.4147047Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-18T01:18:32.4158519Z   
2026-04-18T01:18:32.4159061Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-18T01:18:32.4159443Z         
2026-04-18T01:18:32.4159879Z         Error: error creating project: test-acc-tf-p-8514459506021960333
2026-04-18T01:18:32.4160248Z         
2026-04-18T01:18:32.4160578Z           with mongodbatlas_project.test,
2026-04-18T01:18:32.4161209Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-18T01:18:32.4161796Z           13: 	resource "mongodbatlas_project" "test" {
2026-04-18T01:18:32.4162110Z         
2026-04-18T01:18:32.4162890Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T01:18:32.4163578Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T01:18:32.4164190Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:18:32.4164612Z --- FAIL: TestAccSearchDeploymentAPI_basic (66.45s)
```

- 2026-04-19: MISSING
- 2026-04-20

### Error 2026-04-20T01:14:18+00:00
```
2026-04-20T01:14:18.4820661Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-20T01:14:18.4821446Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-20T01:14:18.4829707Z   
2026-04-20T01:14:18.4830269Z     resource_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-20T01:14:18.4830754Z         
2026-04-20T01:14:18.4831076Z         Error: Error waiting for changes in Delete
2026-04-20T01:14:18.4831378Z         
2026-04-20T01:14:18.4831826Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-20T01:14:18.4832493Z         timeout: 10m0s)
2026-04-20T01:14:18.4832802Z --- FAIL: TestAccSearchDeploymentAPI_basic (1404.36s)
```

- 2026-04-21

### Error 2026-04-21T01:22:27+00:00
```
2026-04-21T01:22:27.1691282Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-21T01:22:27.1691940Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-21T01:22:27.1703459Z   
2026-04-21T01:22:27.1703852Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-21T01:22:27.1704237Z         
2026-04-21T01:22:27.1704661Z         Error: error creating project: test-acc-tf-p-766474197903150798
2026-04-21T01:22:27.1705029Z         
2026-04-21T01:22:27.1705340Z           with mongodbatlas_project.test,
2026-04-21T01:22:27.1705967Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-21T01:22:27.1706756Z           13: 	resource "mongodbatlas_project" "test" {
2026-04-21T01:22:27.1707080Z         
2026-04-21T01:22:27.1707556Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-21T01:22:27.1708229Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-21T01:22:27.1708833Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T01:22:27.1709411Z --- FAIL: TestAccSearchDeploymentAPI_basic (63.79s)
```

- 2026-04-22

### Error 2026-04-22T02:34:56+00:00
```
2026-04-22T02:34:56.1381411Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-22T02:34:56.1382893Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-22T02:34:56.1402950Z    test_terraform_path=/home/runner/work/_temp/ffc424f3-069c-4ec3-8f36-d3d82b605fdf/terraform test_step_number=2
2026-04-22T02:34:56.1404309Z     resource_test.go:26: Step 2/3 error: Error running apply: exit status 1
2026-04-22T02:34:56.1404999Z         
2026-04-22T02:34:56.1405585Z         Error: Error waiting for changes in Update
2026-04-22T02:34:56.1406139Z         
2026-04-22T02:34:56.1406822Z           with mongodbatlas_search_deployment_api.test,
2026-04-22T02:34:56.1408199Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-04-22T02:34:56.1409455Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-04-22T02:34:56.1410099Z         
2026-04-22T02:34:56.1411196Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-04-22T02:34:56.1412001Z         timeout: 30m0s)
2026-04-22T02:34:56.1412550Z --- FAIL: TestAccSearchDeploymentAPI_basic (6495.21s)
```

- 2026-04-23

### Error 2026-04-23T01:30:18+00:00
```
2026-04-23T01:30:18.7036654Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-23T01:30:18.7037289Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-23T01:30:18.7047780Z    test_terraform_path=/home/runner/work/_temp/c8353b02-c872-47ff-abb7-f9a023116a12/terraform test_working_directory=/tmp/plugintest1104167686
2026-04-23T01:30:18.7048701Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-23T01:30:18.7049076Z         
2026-04-23T01:30:18.7049500Z         Error: error creating project: test-acc-tf-p-1427770221675534128
2026-04-23T01:30:18.7049856Z         
2026-04-23T01:30:18.7050157Z           with mongodbatlas_project.test,
2026-04-23T01:30:18.7051014Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-23T01:30:18.7051603Z           13: 	resource "mongodbatlas_project" "test" {
2026-04-23T01:30:18.7051919Z         
2026-04-23T01:30:18.7052399Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-23T01:30:18.7053050Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-23T01:30:18.7053654Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T01:30:18.7054072Z --- FAIL: TestAccSearchDeploymentAPI_basic (71.98s)
```

- 2026-04-24 PASS 59 minutes
- 2026-04-25 PASS 49 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 54 minutes
- 2026-04-28 PASS an hour
- 2026-04-29 PASS 57 minutes
- 2026-04-30

### Error 2026-04-30T01:00:09+00:00
```
2026-04-30T01:00:09.4785483Z === RUN   TestAccSearchDeploymentAPI_basic
2026-04-30T01:00:09.4786316Z === CONT  TestAccSearchDeploymentAPI_basic
2026-04-30T01:00:09.4798815Z    test_name=TestAccSearchDeploymentAPI_basic
2026-04-30T01:00:09.4799317Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-30T01:00:09.4799696Z         
2026-04-30T01:00:09.4800122Z         Error: error creating project: test-acc-tf-p-4889528142231355914
2026-04-30T01:00:09.4800494Z         
2026-04-30T01:00:09.4800803Z           with mongodbatlas_project.test,
2026-04-30T01:00:09.4801415Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-04-30T01:00:09.4801985Z           13: 	resource "mongodbatlas_project" "test" {
2026-04-30T01:00:09.4802290Z         
2026-04-30T01:00:09.4802761Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:00:09.4803413Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:00:09.4804001Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:09.4804413Z --- FAIL: TestAccSearchDeploymentAPI_basic (76.15s)
```

- 2026-05-01 PASS an hour
- 2026-05-02 PASS 57 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS an hour
- 2026-05-05

### Error 2026-05-05T01:39:18+00:00
```
2026-05-05T01:39:18.1493108Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-05T01:39:18.1493748Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-05T01:39:18.1505054Z    test_working_directory=/tmp/plugintest2410963855 test_step_number=1
2026-05-05T01:39:18.1505659Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-05T01:39:18.1506043Z         
2026-05-05T01:39:18.1506466Z         Error: error creating project: test-acc-tf-p-1590711695614143174
2026-05-05T01:39:18.1506828Z         
2026-05-05T01:39:18.1507134Z           with mongodbatlas_project.test,
2026-05-05T01:39:18.1507748Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-05T01:39:18.1508327Z           13: 	resource "mongodbatlas_project" "test" {
2026-05-05T01:39:18.1508637Z         
2026-05-05T01:39:18.1509109Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T01:39:18.1509769Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T01:39:18.1510379Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:39:18.1511080Z --- FAIL: TestAccSearchDeploymentAPI_basic (82.12s)
```

- 2026-05-06

### Error 2026-05-06T02:29:39+00:00
```
2026-05-06T02:29:39.7742848Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-06T02:29:39.7744261Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-06T02:29:39.7754427Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/fcf19d3b-7b86-402f-b168-b51e48dfe06a/terraform
2026-05-06T02:29:39.7755203Z     resource_test.go:26: Step 2/3 error: Error running apply: exit status 1
2026-05-06T02:29:39.7755660Z         
2026-05-06T02:29:39.7755968Z         Error: Error waiting for changes in Update
2026-05-06T02:29:39.7756272Z         
2026-05-06T02:29:39.7756627Z           with mongodbatlas_search_deployment_api.test,
2026-05-06T02:29:39.7757286Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-05-06T02:29:39.7757930Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-05-06T02:29:39.7758250Z         
2026-05-06T02:29:39.7758684Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-05-06T02:29:39.7759087Z         timeout: 30m0s)
2026-05-06T02:29:39.7766443Z   
2026-05-06T02:29:39.7766903Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-06T02:29:39.7767321Z         
2026-05-06T02:29:39.7767626Z         Error: Error waiting for changes in Delete
2026-05-06T02:29:39.7768072Z         
2026-05-06T02:29:39.7768510Z         timeout while waiting for state to become 'DELETED' (last state: 'UPDATING',
2026-05-06T02:29:39.7768931Z         timeout: 10m0s)
2026-05-06T02:29:39.7769226Z --- FAIL: TestAccSearchDeploymentAPI_basic (5852.03s)
```


## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 49 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 48 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 48 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 44 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 56 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 52 minutes
- 2026-05-04 PASS 50 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 49 minutes

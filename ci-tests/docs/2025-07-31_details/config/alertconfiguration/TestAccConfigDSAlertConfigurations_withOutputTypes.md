# config/alertconfiguration/TestAccConfigDSAlertConfigurations_withOutputTypes Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 24) FAIL(x 9)
Success rate: 72.73%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-12 00:29](#error-2025-07-12t0029350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6871ac482085fb14b691b0ed/alertConfigs | dev | flaky_500 | 0.03s
[2025-07-14 00:31](#error-2025-07-14t0031460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68744fc852cba864e5f0fe7a/alertConfigs | dev | flaky_500 | 0.07s
[2025-07-15 00:30](#error-2025-07-15t0030370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6875a10611165a1310494c86/alertConfigs | dev | flaky_500 | 0.06s
[2025-07-16 00:30](#error-2025-07-16t0030230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6876f278b02501716206fab2/alertConfigs | dev | flaky_500 | 0.05s
[2025-07-17 00:30](#error-2025-07-17t0030500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687844139c28cd0b976e9c01/alertConfigs | dev | flaky_500 | 0.06s
[2025-07-18 00:30](#error-2025-07-18t0030170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6879957382c54e20d6b118a3/alertConfigs | dev | flaky_500 | 0.07s
[2025-07-19 00:29](#error-2025-07-19t0029280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687ae6c26fa0d92411ad2a5a/alertConfigs | dev | flaky_500 | 0.06s
[2025-07-21 00:33](#error-2025-07-21t0033030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687d8a9699e8c529281c1c28/alertConfigs | dev | flaky_500 | 0.05s
[2025-07-22 07:39](#error-2025-07-22t0739080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687f3ff444f1ab3f84234bdd/alertConfigs | dev | flaky_500 | 0.05s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 4 seconds
- 2025-07-03 PASS 3 seconds
- 2025-07-04 PASS 4 seconds
- 2025-07-05 PASS 3 seconds
- 2025-07-06 PASS 3 seconds
- 2025-07-07 PASS 4 seconds
- 2025-07-08 PASS 3 seconds
- 2025-07-09 PASS 3 seconds
- 2025-07-10
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-07-11 PASS 4 seconds
- 2025-07-12

### Error 2025-07-12T00:29:35+00:00
```
2025-07-12T00:29:35.8106226Z === RUN   TestAccConfigDSAlertConfigurations_withOutputTypes
2025-07-12T00:29:35.8125869Z   
2025-07-12T00:29:35.8126585Z     resource_test.go:1121: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-12T00:29:35.8127215Z         
2025-07-12T00:29:35.8127828Z         Error: error getting Alert Configuration information: %s
2025-07-12T00:29:35.8128355Z         
2025-07-12T00:29:35.8128969Z           with data.mongodbatlas_alert_configurations.test,
2025-07-12T00:29:35.8130089Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-12T00:29:35.8131085Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-12T00:29:35.8131582Z         
2025-07-12T00:29:35.8132467Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6871ac482085fb14b691b0ed/alertConfigs
2025-07-12T00:29:35.8133638Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-12T00:29:35.8134600Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-12T00:29:35.8135241Z         BadRequestDetail: 
2025-07-12T00:29:35.8135983Z --- FAIL: TestAccConfigDSAlertConfigurations_withOutputTypes (0.34s)
```

- 2025-07-13 PASS 3 seconds
- 2025-07-14

### Error 2025-07-14T00:31:46+00:00
```
2025-07-14T00:31:46.4066854Z === RUN   TestAccConfigDSAlertConfigurations_withOutputTypes
2025-07-14T00:31:46.4078204Z    test_working_directory=/tmp/plugintest69878177 test_name=TestAccConfigDSAlertConfigurations_withOutputTypes test_terraform_path=/home/runner/work/_temp/50ab223e-2218-41b6-a8a8-dce6796a3c68/terraform test_step_number=1
2025-07-14T00:31:46.4079642Z     resource_test.go:1121: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-14T00:31:46.4080374Z         
2025-07-14T00:31:46.4081078Z         Error: error getting Alert Configuration information: %s
2025-07-14T00:31:46.4081689Z         
2025-07-14T00:31:46.4082130Z           with data.mongodbatlas_alert_configurations.test,
2025-07-14T00:31:46.4082804Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-14T00:31:46.4083393Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-14T00:31:46.4083703Z         
2025-07-14T00:31:46.4084247Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc852cba864e5f0fe7a/alertConfigs
2025-07-14T00:31:46.4084948Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-14T00:31:46.4085523Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-14T00:31:46.4085917Z         BadRequestDetail: 
2025-07-14T00:31:46.4086288Z --- FAIL: TestAccConfigDSAlertConfigurations_withOutputTypes (0.75s)
```

- 2025-07-15

### Error 2025-07-15T00:30:37+00:00
```
2025-07-15T00:30:37.0799525Z === RUN   TestAccConfigDSAlertConfigurations_withOutputTypes
2025-07-15T00:30:37.0818917Z    test_working_directory=/tmp/plugintest1807243055
2025-07-15T00:30:37.0820097Z     resource_test.go:1121: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-15T00:30:37.0820865Z         
2025-07-15T00:30:37.0821536Z         Error: error getting Alert Configuration information: %s
2025-07-15T00:30:37.0822087Z         
2025-07-15T00:30:37.0822789Z           with data.mongodbatlas_alert_configurations.test,
2025-07-15T00:30:37.0824006Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-15T00:30:37.0825080Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-15T00:30:37.0825624Z         
2025-07-15T00:30:37.0826590Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6875a10611165a1310494c86/alertConfigs
2025-07-15T00:30:37.0827851Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-15T00:30:37.0828888Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-15T00:30:37.0829567Z         BadRequestDetail: 
2025-07-15T00:30:37.0830396Z --- FAIL: TestAccConfigDSAlertConfigurations_withOutputTypes (0.56s)
```

- 2025-07-16

### Error 2025-07-16T00:30:23+00:00
```
2025-07-16T00:30:23.1623205Z === RUN   TestAccConfigDSAlertConfigurations_withOutputTypes
2025-07-16T00:30:23.1634248Z    test_name=TestAccConfigDSAlertConfigurations_withOutputTypes test_step_number=1 test_working_directory=/tmp/plugintest1595877653
2025-07-16T00:30:23.1635126Z     resource_test.go:1121: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-16T00:30:23.1635777Z         
2025-07-16T00:30:23.1636157Z         Error: error getting Alert Configuration information: %s
2025-07-16T00:30:23.1636482Z         
2025-07-16T00:30:23.1636855Z           with data.mongodbatlas_alert_configurations.test,
2025-07-16T00:30:23.1637513Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-16T00:30:23.1638107Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-16T00:30:23.1638415Z         
2025-07-16T00:30:23.1638944Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6876f278b02501716206fab2/alertConfigs
2025-07-16T00:30:23.1639629Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-16T00:30:23.1640198Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-16T00:30:23.1640577Z         BadRequestDetail: 
2025-07-16T00:30:23.1640933Z --- FAIL: TestAccConfigDSAlertConfigurations_withOutputTypes (0.52s)
```

- 2025-07-17

### Error 2025-07-17T00:30:50+00:00
```
2025-07-17T00:30:50.0874454Z === RUN   TestAccConfigDSAlertConfigurations_withOutputTypes
2025-07-17T00:30:50.0895386Z   
2025-07-17T00:30:50.0896239Z     resource_test.go:1121: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-17T00:30:50.0896934Z         
2025-07-17T00:30:50.0897603Z         Error: error getting Alert Configuration information: %s
2025-07-17T00:30:50.0898328Z         
2025-07-17T00:30:50.0898994Z           with data.mongodbatlas_alert_configurations.test,
2025-07-17T00:30:50.0900197Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-17T00:30:50.0901275Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-17T00:30:50.0901815Z         
2025-07-17T00:30:50.0902787Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687844139c28cd0b976e9c01/alertConfigs
2025-07-17T00:30:50.0904040Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-17T00:30:50.0905058Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-17T00:30:50.0905719Z         BadRequestDetail: 
2025-07-17T00:30:50.0906371Z --- FAIL: TestAccConfigDSAlertConfigurations_withOutputTypes (0.59s)
```

- 2025-07-18

### Error 2025-07-18T00:30:17+00:00
```
2025-07-18T00:30:17.1698411Z === RUN   TestAccConfigDSAlertConfigurations_withOutputTypes
2025-07-18T00:30:17.1716314Z    test_name=TestAccConfigDSAlertConfigurations_withOutputTypes test_terraform_path=/home/runner/work/_temp/157fc6d2-1bba-4b60-b3ae-e1b994b580de/terraform test_working_directory=/tmp/plugintest2656976947
2025-07-18T00:30:17.1718328Z     resource_test.go:1121: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-18T00:30:17.1718965Z         
2025-07-18T00:30:17.1719547Z         Error: error getting Alert Configuration information: %s
2025-07-18T00:30:17.1720059Z         
2025-07-18T00:30:17.1720655Z           with data.mongodbatlas_alert_configurations.test,
2025-07-18T00:30:17.1721738Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-18T00:30:17.1722696Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-18T00:30:17.1723181Z         
2025-07-18T00:30:17.1724033Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6879957382c54e20d6b118a3/alertConfigs
2025-07-18T00:30:17.1725158Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-18T00:30:17.1726248Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-18T00:30:17.1726878Z         BadRequestDetail: 
2025-07-18T00:30:17.1727448Z --- FAIL: TestAccConfigDSAlertConfigurations_withOutputTypes (0.65s)
```

- 2025-07-19

### Error 2025-07-19T00:29:28+00:00
```
2025-07-19T00:29:28.1148469Z === RUN   TestAccConfigDSAlertConfigurations_withOutputTypes
2025-07-19T00:29:28.1167082Z    test_terraform_path=/home/runner/work/_temp/1444626f-c9da-4d86-b206-5a682fdf6712/terraform
2025-07-19T00:29:28.1168164Z     resource_test.go:1121: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-19T00:29:28.1168792Z         
2025-07-19T00:29:28.1169358Z         Error: error getting Alert Configuration information: %s
2025-07-19T00:29:28.1169819Z         
2025-07-19T00:29:28.1170374Z           with data.mongodbatlas_alert_configurations.test,
2025-07-19T00:29:28.1171573Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-19T00:29:28.1172447Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-19T00:29:28.1172897Z         
2025-07-19T00:29:28.1173704Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687ae6c26fa0d92411ad2a5a/alertConfigs
2025-07-19T00:29:28.1174734Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-19T00:29:28.1175591Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-19T00:29:28.1176162Z         BadRequestDetail: 
2025-07-19T00:29:28.1176686Z --- FAIL: TestAccConfigDSAlertConfigurations_withOutputTypes (0.61s)
```

- 2025-07-20 PASS 2 seconds
- 2025-07-21

### Error 2025-07-21T00:33:03+00:00
```
2025-07-21T00:33:03.1255803Z === RUN   TestAccConfigDSAlertConfigurations_withOutputTypes
2025-07-21T00:33:03.1275092Z   
2025-07-21T00:33:03.1275962Z     resource_test.go:1121: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-21T00:33:03.1276683Z         
2025-07-21T00:33:03.1277564Z         Error: error getting Alert Configuration information: %s
2025-07-21T00:33:03.1278167Z         
2025-07-21T00:33:03.1278803Z           with data.mongodbatlas_alert_configurations.test,
2025-07-21T00:33:03.1279898Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-21T00:33:03.1280891Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-21T00:33:03.1281379Z         
2025-07-21T00:33:03.1282251Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687d8a9699e8c529281c1c28/alertConfigs
2025-07-21T00:33:03.1283390Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-21T00:33:03.1284325Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-21T00:33:03.1284941Z         BadRequestDetail: 
2025-07-21T00:33:03.1285518Z --- FAIL: TestAccConfigDSAlertConfigurations_withOutputTypes (0.50s)
```

- 2025-07-22

### Error 2025-07-22T07:39:08+00:00
```
2025-07-22T07:39:08.9634578Z === RUN   TestAccConfigDSAlertConfigurations_withOutputTypes
2025-07-22T07:39:08.9647946Z   
2025-07-22T07:39:08.9648559Z     resource_test.go:1121: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-22T07:39:08.9649010Z         
2025-07-22T07:39:08.9649685Z         Error: error getting Alert Configuration information: %s
2025-07-22T07:39:08.9650292Z         
2025-07-22T07:39:08.9651228Z           with data.mongodbatlas_alert_configurations.test,
2025-07-22T07:39:08.9652452Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-22T07:39:08.9653355Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-22T07:39:08.9653820Z         
2025-07-22T07:39:08.9654415Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687f3ff444f1ab3f84234bdd/alertConfigs
2025-07-22T07:39:08.9655244Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-22T07:39:08.9655940Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-22T07:39:08.9656424Z         BadRequestDetail: 
2025-07-22T07:39:08.9656803Z --- FAIL: TestAccConfigDSAlertConfigurations_withOutputTypes (0.51s)
```

- 2025-07-23
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-07-24 PASS 3 seconds
- 2025-07-25 PASS 3 seconds
- 2025-07-26 PASS 5 seconds
- 2025-07-27 PASS 3 seconds
- 2025-07-28 PASS 3 seconds
- 2025-07-29 PASS 3 seconds
- 2025-07-30 PASS 5 seconds
- 2025-07-31 PASS 3 seconds
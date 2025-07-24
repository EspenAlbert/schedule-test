# config/alertconfiguration/TestAccConfigDSAlertConfigurations_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 9)
Success rate: 76.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-12 00:29](#error-2025-07-12t0029350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6871ac482085fb14b691b0ed/alertConfigs | dev | flaky_500 | 0.03s
[2025-07-14 00:31](#error-2025-07-14t0031460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68744fc852cba864e5f0fe7a/alertConfigs | dev | flaky_500 | 0.07s
[2025-07-15 00:30](#error-2025-07-15t0030370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6875a10611165a1310494c86/alertConfigs | dev | flaky_500 | 0.05s
[2025-07-16 00:30](#error-2025-07-16t0030230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6876f278b02501716206fab2/alertConfigs | dev | flaky_500 | 0.07s
[2025-07-17 00:30](#error-2025-07-17t0030500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687844139c28cd0b976e9c01/alertConfigs | dev | flaky_500 | 0.09s
[2025-07-18 00:30](#error-2025-07-18t0030170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6879957382c54e20d6b118a3/alertConfigs | dev | flaky_500 | 0.06s
[2025-07-19 00:29](#error-2025-07-19t0029280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687ae6c26fa0d92411ad2a5a/alertConfigs | dev | flaky_500 | 0.04s
[2025-07-21 00:33](#error-2025-07-21t0033030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687d8a9699e8c529281c1c28/alertConfigs | dev | flaky_500 | 0.07s
[2025-07-22 07:39](#error-2025-07-22t0739080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687f3ff444f1ab3f84234bdd/alertConfigs | dev | flaky_500 | 0.04s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 4 seconds
- 2025-06-26 PASS 5 seconds
- 2025-06-27 PASS 3 seconds
- 2025-06-28 PASS 4 seconds
- 2025-06-29 PASS 4 seconds
- 2025-06-30 PASS 4 seconds
- 2025-07-01
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 3 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 3 seconds
- 2025-07-06 PASS 4 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 3 seconds
- 2025-07-09 PASS 4 seconds
- 2025-07-10
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-07-11 PASS 5 seconds
- 2025-07-12

### Error 2025-07-12T00:29:35+00:00
```
2025-07-12T00:29:35.8074384Z === RUN   TestAccConfigDSAlertConfigurations_basic
2025-07-12T00:29:35.8094641Z   
2025-07-12T00:29:35.8095381Z     resource_test.go:1099: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-12T00:29:35.8096376Z         
2025-07-12T00:29:35.8097037Z         Error: error getting Alert Configuration information: %s
2025-07-12T00:29:35.8097570Z         
2025-07-12T00:29:35.8098183Z           with data.mongodbatlas_alert_configurations.test,
2025-07-12T00:29:35.8099317Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-12T00:29:35.8100482Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-12T00:29:35.8100986Z         
2025-07-12T00:29:35.8101881Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6871ac482085fb14b691b0ed/alertConfigs
2025-07-12T00:29:35.8103053Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-12T00:29:35.8104202Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-12T00:29:35.8104847Z         BadRequestDetail: 
2025-07-12T00:29:35.8105383Z --- FAIL: TestAccConfigDSAlertConfigurations_basic (0.32s)
```

- 2025-07-13 PASS 4 seconds
- 2025-07-14

### Error 2025-07-14T00:31:46+00:00
```
2025-07-14T00:31:46.4035681Z === RUN   TestAccConfigDSAlertConfigurations_basic
2025-07-14T00:31:46.4056875Z   
2025-07-14T00:31:46.4057658Z     resource_test.go:1099: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-14T00:31:46.4058596Z         
2025-07-14T00:31:46.4059318Z         Error: error getting Alert Configuration information: %s
2025-07-14T00:31:46.4059922Z         
2025-07-14T00:31:46.4060624Z           with data.mongodbatlas_alert_configurations.test,
2025-07-14T00:31:46.4061895Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-14T00:31:46.4063284Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-14T00:31:46.4063797Z         
2025-07-14T00:31:46.4064369Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc852cba864e5f0fe7a/alertConfigs
2025-07-14T00:31:46.4065132Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-14T00:31:46.4065713Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-14T00:31:46.4066107Z         BadRequestDetail: 
2025-07-14T00:31:46.4066429Z --- FAIL: TestAccConfigDSAlertConfigurations_basic (0.67s)
```

- 2025-07-15

### Error 2025-07-15T00:30:37+00:00
```
2025-07-15T00:30:37.0767486Z === RUN   TestAccConfigDSAlertConfigurations_basic
2025-07-15T00:30:37.0786740Z    test_name=TestAccConfigDSAlertConfigurations_basic test_terraform_path=/home/runner/work/_temp/2326e330-2a2b-4f0d-ad96-903139bf7445/terraform test_working_directory=/tmp/plugintest146399100 test_step_number=1
2025-07-15T00:30:37.0788744Z     resource_test.go:1099: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-15T00:30:37.0789440Z         
2025-07-15T00:30:37.0790451Z         Error: error getting Alert Configuration information: %s
2025-07-15T00:30:37.0790961Z         
2025-07-15T00:30:37.0791633Z           with data.mongodbatlas_alert_configurations.test,
2025-07-15T00:30:37.0792787Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-15T00:30:37.0794064Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-15T00:30:37.0794606Z         
2025-07-15T00:30:37.0795515Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6875a10611165a1310494c86/alertConfigs
2025-07-15T00:30:37.0796690Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-15T00:30:37.0797664Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-15T00:30:37.0798317Z         BadRequestDetail: 
2025-07-15T00:30:37.0798837Z --- FAIL: TestAccConfigDSAlertConfigurations_basic (0.51s)
```

- 2025-07-16

### Error 2025-07-16T00:30:23+00:00
```
2025-07-16T00:30:23.1602356Z === RUN   TestAccConfigDSAlertConfigurations_basic
2025-07-16T00:30:23.1616030Z    test_name=TestAccConfigDSAlertConfigurations_basic test_terraform_path=/home/runner/work/_temp/fbae0a7c-fba3-4647-98b1-5ef029b8f9b0/terraform test_working_directory=/tmp/plugintest258189484 test_step_number=1
2025-07-16T00:30:23.1617120Z     resource_test.go:1099: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-16T00:30:23.1617514Z         
2025-07-16T00:30:23.1617887Z         Error: error getting Alert Configuration information: %s
2025-07-16T00:30:23.1618202Z         
2025-07-16T00:30:23.1618572Z           with data.mongodbatlas_alert_configurations.test,
2025-07-16T00:30:23.1619234Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-16T00:30:23.1619982Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-16T00:30:23.1620296Z         
2025-07-16T00:30:23.1620826Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6876f278b02501716206fab2/alertConfigs
2025-07-16T00:30:23.1621513Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-16T00:30:23.1622075Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-16T00:30:23.1622461Z         BadRequestDetail: 
2025-07-16T00:30:23.1622786Z --- FAIL: TestAccConfigDSAlertConfigurations_basic (0.69s)
```

- 2025-07-17

### Error 2025-07-17T00:30:50+00:00
```
2025-07-17T00:30:50.0841481Z === RUN   TestAccConfigDSAlertConfigurations_basic
2025-07-17T00:30:50.0862312Z   
2025-07-17T00:30:50.0863195Z     resource_test.go:1099: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-17T00:30:50.0863896Z         
2025-07-17T00:30:50.0864570Z         Error: error getting Alert Configuration information: %s
2025-07-17T00:30:50.0865140Z         
2025-07-17T00:30:50.0865803Z           with data.mongodbatlas_alert_configurations.test,
2025-07-17T00:30:50.0867010Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-17T00:30:50.0868545Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-17T00:30:50.0869128Z         
2025-07-17T00:30:50.0870099Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687844139c28cd0b976e9c01/alertConfigs
2025-07-17T00:30:50.0871358Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-17T00:30:50.0872415Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-17T00:30:50.0873115Z         BadRequestDetail: 
2025-07-17T00:30:50.0873691Z --- FAIL: TestAccConfigDSAlertConfigurations_basic (0.91s)
```

- 2025-07-18

### Error 2025-07-18T00:30:17+00:00
```
2025-07-18T00:30:17.1669076Z === RUN   TestAccConfigDSAlertConfigurations_basic
2025-07-18T00:30:17.1687089Z    test_name=TestAccConfigDSAlertConfigurations_basic test_terraform_path=/home/runner/work/_temp/157fc6d2-1bba-4b60-b3ae-e1b994b580de/terraform
2025-07-18T00:30:17.1688522Z     resource_test.go:1099: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-18T00:30:17.1689146Z         
2025-07-18T00:30:17.1689746Z         Error: error getting Alert Configuration information: %s
2025-07-18T00:30:17.1690260Z         
2025-07-18T00:30:17.1690843Z           with data.mongodbatlas_alert_configurations.test,
2025-07-18T00:30:17.1691923Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-18T00:30:17.1693063Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-18T00:30:17.1693561Z         
2025-07-18T00:30:17.1694408Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6879957382c54e20d6b118a3/alertConfigs
2025-07-18T00:30:17.1695681Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-18T00:30:17.1696621Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-18T00:30:17.1697243Z         BadRequestDetail: 
2025-07-18T00:30:17.1697743Z --- FAIL: TestAccConfigDSAlertConfigurations_basic (0.62s)
```

- 2025-07-19

### Error 2025-07-19T00:29:28+00:00
```
2025-07-19T00:29:28.1119050Z === RUN   TestAccConfigDSAlertConfigurations_basic
2025-07-19T00:29:28.1138553Z   
2025-07-19T00:29:28.1139196Z     resource_test.go:1099: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-19T00:29:28.1139885Z         
2025-07-19T00:29:28.1140434Z         Error: error getting Alert Configuration information: %s
2025-07-19T00:29:28.1140896Z         
2025-07-19T00:29:28.1141663Z           with data.mongodbatlas_alert_configurations.test,
2025-07-19T00:29:28.1142630Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-19T00:29:28.1143827Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-19T00:29:28.1144273Z         
2025-07-19T00:29:28.1145053Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687ae6c26fa0d92411ad2a5a/alertConfigs
2025-07-19T00:29:28.1146051Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-19T00:29:28.1146888Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-19T00:29:28.1147438Z         BadRequestDetail: 
2025-07-19T00:29:28.1147880Z --- FAIL: TestAccConfigDSAlertConfigurations_basic (0.44s)
```

- 2025-07-20 PASS 4 seconds
- 2025-07-21

### Error 2025-07-21T00:33:03+00:00
```
2025-07-21T00:33:03.1224510Z === RUN   TestAccConfigDSAlertConfigurations_basic
2025-07-21T00:33:03.1243923Z    test_name=TestAccConfigDSAlertConfigurations_basic test_terraform_path=/home/runner/work/_temp/d5350fff-5d46-4136-9841-3361bf4b4c4c/terraform
2025-07-21T00:33:03.1245444Z     resource_test.go:1099: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-21T00:33:03.1246089Z         
2025-07-21T00:33:03.1246737Z         Error: error getting Alert Configuration information: %s
2025-07-21T00:33:03.1247418Z         
2025-07-21T00:33:03.1248047Z           with data.mongodbatlas_alert_configurations.test,
2025-07-21T00:33:03.1249157Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-21T00:33:03.1250426Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-21T00:33:03.1250933Z         
2025-07-21T00:33:03.1251826Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687d8a9699e8c529281c1c28/alertConfigs
2025-07-21T00:33:03.1253001Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-21T00:33:03.1253960Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-21T00:33:03.1254608Z         BadRequestDetail: 
2025-07-21T00:33:03.1255123Z --- FAIL: TestAccConfigDSAlertConfigurations_basic (0.69s)
```

- 2025-07-22

### Error 2025-07-22T07:39:08+00:00
```
2025-07-22T07:39:08.9603913Z === RUN   TestAccConfigDSAlertConfigurations_basic
2025-07-22T07:39:08.9624566Z    test_step_number=1 test_name=TestAccConfigDSAlertConfigurations_basic
2025-07-22T07:39:08.9625607Z     resource_test.go:1099: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-22T07:39:08.9626368Z         
2025-07-22T07:39:08.9627081Z         Error: error getting Alert Configuration information: %s
2025-07-22T07:39:08.9627723Z         
2025-07-22T07:39:08.9628179Z           with data.mongodbatlas_alert_configurations.test,
2025-07-22T07:39:08.9629007Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-22T07:39:08.9630052Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-22T07:39:08.9630548Z         
2025-07-22T07:39:08.9631463Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687f3ff444f1ab3f84234bdd/alertConfigs
2025-07-22T07:39:08.9632310Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-22T07:39:08.9633004Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-22T07:39:08.9633433Z         BadRequestDetail: 
2025-07-22T07:39:08.9634038Z --- FAIL: TestAccConfigDSAlertConfigurations_basic (0.37s)
```

- 2025-07-23
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-07-24 PASS 4 seconds
# config/alertconfiguration/TestAccConfigDSAlertConfigurations_totalCount Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 29) FAIL(x 9)
Success rate: 76.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-12 00:29](#error-2025-07-12t0029350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6871ac482085fb14b691b0ed/alertConfigs | dev | flaky_500 | 0.03s
[2025-07-14 00:31](#error-2025-07-14t0031460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68744fc852cba864e5f0fe7a/alertConfigs | dev | flaky_500 | 0.05s
[2025-07-15 00:30](#error-2025-07-15t0030370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6875a10611165a1310494c86/alertConfigs | dev | flaky_500 | 0.04s
[2025-07-16 00:30](#error-2025-07-16t0030230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6876f278b02501716206fab2/alertConfigs | dev | flaky_500 | 0.05s
[2025-07-17 00:30](#error-2025-07-17t0030500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687844139c28cd0b976e9c01/alertConfigs | dev | flaky_500 | 0.05s
[2025-07-18 00:30](#error-2025-07-18t0030170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6879957382c54e20d6b118a3/alertConfigs | dev | flaky_500 | 0.05s
[2025-07-19 00:29](#error-2025-07-19t0029280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687ae6c26fa0d92411ad2a5a/alertConfigs | dev | flaky_500 | 0.04s
[2025-07-21 00:33](#error-2025-07-21t0033030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687d8a9699e8c529281c1c28/alertConfigs | dev | flaky_500 | 0.05s
[2025-07-22 07:39](#error-2025-07-22t0739080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687f3ff444f1ab3f84234bdd/alertConfigs | dev | flaky_500 | 0.04s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-07-02 PASS 2 seconds
- 2025-07-03 PASS 3 seconds
- 2025-07-04 PASS 3 seconds
- 2025-07-05 PASS 3 seconds
- 2025-07-06 PASS 2 seconds
- 2025-07-07 PASS 3 seconds
- 2025-07-08 PASS 3 seconds
- 2025-07-09 PASS 3 seconds
- 2025-07-10
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-07-11 PASS 3 seconds
- 2025-07-12

### Error 2025-07-12T00:29:35+00:00
```
2025-07-12T00:29:35.8144894Z === RUN   TestAccConfigDSAlertConfigurations_totalCount
2025-07-12T00:29:35.8163359Z    test_name=TestAccConfigDSAlertConfigurations_totalCount test_terraform_path=/home/runner/work/_temp/70354926-ba39-4fae-8d56-24c9987d46fd/terraform test_working_directory=/tmp/plugintest640404721 test_step_number=1
2025-07-12T00:29:35.8165195Z     resource_test.go:1159: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-12T00:29:35.8165964Z         
2025-07-12T00:29:35.8166584Z         Error: error getting Alert Configuration information: %s
2025-07-12T00:29:35.8167100Z         
2025-07-12T00:29:35.8167707Z           with data.mongodbatlas_alert_configurations.test,
2025-07-12T00:29:35.8168834Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-12T00:29:35.8169821Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-12T00:29:35.8170310Z         
2025-07-12T00:29:35.8171195Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6871ac482085fb14b691b0ed/alertConfigs
2025-07-12T00:29:35.8172407Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-12T00:29:35.8173389Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-12T00:29:35.8174043Z         BadRequestDetail: 
2025-07-12T00:29:35.8174597Z --- FAIL: TestAccConfigDSAlertConfigurations_totalCount (0.25s)
```

- 2025-07-13 PASS 2 seconds
- 2025-07-14

### Error 2025-07-14T00:31:46+00:00
```
2025-07-14T00:31:46.4091838Z === RUN   TestAccConfigDSAlertConfigurations_totalCount
2025-07-14T00:31:46.4106456Z    test_name=TestAccConfigDSAlertConfigurations_totalCount test_terraform_path=/home/runner/work/_temp/50ab223e-2218-41b6-a8a8-dce6796a3c68/terraform
2025-07-14T00:31:46.4107324Z     resource_test.go:1159: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-14T00:31:46.4107918Z         
2025-07-14T00:31:46.4108310Z         Error: error getting Alert Configuration information: %s
2025-07-14T00:31:46.4108633Z         
2025-07-14T00:31:46.4108997Z           with data.mongodbatlas_alert_configurations.test,
2025-07-14T00:31:46.4109663Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-14T00:31:46.4110255Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-14T00:31:46.4110561Z         
2025-07-14T00:31:46.4111092Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc852cba864e5f0fe7a/alertConfigs
2025-07-14T00:31:46.4112512Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-14T00:31:46.4113503Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-14T00:31:46.4113901Z         BadRequestDetail: 
2025-07-14T00:31:46.4114250Z --- FAIL: TestAccConfigDSAlertConfigurations_totalCount (0.54s)
```

- 2025-07-15

### Error 2025-07-15T00:30:37+00:00
```
2025-07-15T00:30:37.0840129Z === RUN   TestAccConfigDSAlertConfigurations_totalCount
2025-07-15T00:30:37.0861131Z   
2025-07-15T00:30:37.0861894Z     resource_test.go:1159: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-15T00:30:37.0862599Z         
2025-07-15T00:30:37.0863320Z         Error: error getting Alert Configuration information: %s
2025-07-15T00:30:37.0863910Z         
2025-07-15T00:30:37.0864578Z           with data.mongodbatlas_alert_configurations.test,
2025-07-15T00:30:37.0865780Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-15T00:30:37.0866833Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-15T00:30:37.0867371Z         
2025-07-15T00:30:37.0868313Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6875a10611165a1310494c86/alertConfigs
2025-07-15T00:30:37.0869543Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-15T00:30:37.0870755Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-15T00:30:37.0871441Z         BadRequestDetail: 
2025-07-15T00:30:37.0872035Z --- FAIL: TestAccConfigDSAlertConfigurations_totalCount (0.38s)
```

- 2025-07-16

### Error 2025-07-16T00:30:23+00:00
```
2025-07-16T00:30:23.1646199Z === RUN   TestAccConfigDSAlertConfigurations_totalCount
2025-07-16T00:30:23.1657587Z   
2025-07-16T00:30:23.1658003Z     resource_test.go:1159: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-16T00:30:23.1658386Z         
2025-07-16T00:30:23.1658752Z         Error: error getting Alert Configuration information: %s
2025-07-16T00:30:23.1659070Z         
2025-07-16T00:30:23.1659432Z           with data.mongodbatlas_alert_configurations.test,
2025-07-16T00:30:23.1660087Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-16T00:30:23.1660674Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-16T00:30:23.1660979Z         
2025-07-16T00:30:23.1661497Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6876f278b02501716206fab2/alertConfigs
2025-07-16T00:30:23.1662183Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-16T00:30:23.1662741Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-16T00:30:23.1663122Z         BadRequestDetail: 
2025-07-16T00:30:23.1663460Z --- FAIL: TestAccConfigDSAlertConfigurations_totalCount (0.54s)
```

- 2025-07-17

### Error 2025-07-17T00:30:50+00:00
```
2025-07-17T00:30:50.0915346Z === RUN   TestAccConfigDSAlertConfigurations_totalCount
2025-07-17T00:30:50.0930136Z   
2025-07-17T00:30:50.0930571Z     resource_test.go:1159: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-17T00:30:50.0930977Z         
2025-07-17T00:30:50.0931357Z         Error: error getting Alert Configuration information: %s
2025-07-17T00:30:50.0931676Z         
2025-07-17T00:30:50.0932044Z           with data.mongodbatlas_alert_configurations.test,
2025-07-17T00:30:50.0932712Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-17T00:30:50.0933291Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-17T00:30:50.0933595Z         
2025-07-17T00:30:50.0934127Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687844139c28cd0b976e9c01/alertConfigs
2025-07-17T00:30:50.0934812Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-17T00:30:50.0935385Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-17T00:30:50.0935765Z         BadRequestDetail: 
2025-07-17T00:30:50.0936117Z --- FAIL: TestAccConfigDSAlertConfigurations_totalCount (0.46s)
```

- 2025-07-18

### Error 2025-07-18T00:30:17+00:00
```
2025-07-18T00:30:17.1736574Z === RUN   TestAccConfigDSAlertConfigurations_totalCount
2025-07-18T00:30:17.1755760Z   
2025-07-18T00:30:17.1756440Z     resource_test.go:1159: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-18T00:30:17.1757076Z         
2025-07-18T00:30:17.1757678Z         Error: error getting Alert Configuration information: %s
2025-07-18T00:30:17.1758185Z         
2025-07-18T00:30:17.1758766Z           with data.mongodbatlas_alert_configurations.test,
2025-07-18T00:30:17.1759846Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-18T00:30:17.1760826Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-18T00:30:17.1761313Z         
2025-07-18T00:30:17.1762165Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6879957382c54e20d6b118a3/alertConfigs
2025-07-18T00:30:17.1763292Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-18T00:30:17.1764231Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-18T00:30:17.1764848Z         BadRequestDetail: 
2025-07-18T00:30:17.1765512Z --- FAIL: TestAccConfigDSAlertConfigurations_totalCount (0.53s)
```

- 2025-07-19

### Error 2025-07-19T00:29:28+00:00
```
2025-07-19T00:29:28.1184808Z === RUN   TestAccConfigDSAlertConfigurations_totalCount
2025-07-19T00:29:28.1209137Z    test_name=TestAccConfigDSAlertConfigurations_totalCount test_terraform_path=/home/runner/work/_temp/1444626f-c9da-4d86-b206-5a682fdf6712/terraform test_working_directory=/tmp/plugintest2339230907
2025-07-19T00:29:28.1210788Z     resource_test.go:1159: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-19T00:29:28.1211515Z         
2025-07-19T00:29:28.1212115Z         Error: error getting Alert Configuration information: %s
2025-07-19T00:29:28.1212599Z         
2025-07-19T00:29:28.1213191Z           with data.mongodbatlas_alert_configurations.test,
2025-07-19T00:29:28.1214243Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-19T00:29:28.1215186Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-19T00:29:28.1215640Z         
2025-07-19T00:29:28.1216475Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687ae6c26fa0d92411ad2a5a/alertConfigs
2025-07-19T00:29:28.1217587Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-19T00:29:28.1218508Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-19T00:29:28.1219124Z         BadRequestDetail: 
2025-07-19T00:29:28.1219630Z --- FAIL: TestAccConfigDSAlertConfigurations_totalCount (0.44s)
```

- 2025-07-20 PASS 2 seconds
- 2025-07-21

### Error 2025-07-21T00:33:03+00:00
```
2025-07-21T00:33:03.1300535Z === RUN   TestAccConfigDSAlertConfigurations_totalCount
2025-07-21T00:33:03.1315990Z    test_name=TestAccConfigDSAlertConfigurations_totalCount test_terraform_path=/home/runner/work/_temp/d5350fff-5d46-4136-9841-3361bf4b4c4c/terraform test_working_directory=/tmp/plugintest149229923
2025-07-21T00:33:03.1317049Z     resource_test.go:1159: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-21T00:33:03.1317604Z         
2025-07-21T00:33:03.1317981Z         Error: error getting Alert Configuration information: %s
2025-07-21T00:33:03.1318298Z         
2025-07-21T00:33:03.1318678Z           with data.mongodbatlas_alert_configurations.test,
2025-07-21T00:33:03.1319345Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-21T00:33:03.1319945Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-21T00:33:03.1320252Z         
2025-07-21T00:33:03.1320794Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687d8a9699e8c529281c1c28/alertConfigs
2025-07-21T00:33:03.1322267Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-21T00:33:03.1323334Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-21T00:33:03.1323743Z         BadRequestDetail: 
2025-07-21T00:33:03.1324093Z --- FAIL: TestAccConfigDSAlertConfigurations_totalCount (0.48s)
```

- 2025-07-22

### Error 2025-07-22T07:39:08+00:00
```
2025-07-22T07:39:08.9663349Z === RUN   TestAccConfigDSAlertConfigurations_totalCount
2025-07-22T07:39:08.9675845Z   
2025-07-22T07:39:08.9676594Z     resource_test.go:1159: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-22T07:39:08.9677240Z         
2025-07-22T07:39:08.9677914Z         Error: error getting Alert Configuration information: %s
2025-07-22T07:39:08.9678511Z         
2025-07-22T07:39:08.9679188Z           with data.mongodbatlas_alert_configurations.test,
2025-07-22T07:39:08.9680503Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_alert_configurations" "test":
2025-07-22T07:39:08.9681838Z           12: 		data "mongodbatlas_alert_configurations" "test" {
2025-07-22T07:39:08.9682435Z         
2025-07-22T07:39:08.9683419Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/687f3ff444f1ab3f84234bdd/alertConfigs
2025-07-22T07:39:08.9684704Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-22T07:39:08.9685744Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-22T07:39:08.9686474Z         BadRequestDetail: 
2025-07-22T07:39:08.9687138Z --- FAIL: TestAccConfigDSAlertConfigurations_totalCount (0.41s)
```

- 2025-07-23
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-07-24 PASS 3 seconds
- 2025-07-25 PASS 3 seconds
- 2025-07-26 PASS 3 seconds
- 2025-07-27 PASS 3 seconds
- 2025-07-28 PASS 3 seconds
- 2025-07-29 PASS 3 seconds
- 2025-07-30 PASS 3 seconds
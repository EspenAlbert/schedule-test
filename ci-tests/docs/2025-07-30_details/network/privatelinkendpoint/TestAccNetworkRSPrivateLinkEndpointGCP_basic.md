# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointGCP_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 28) FAIL(x 10)
Success rate: 73.68%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-04 01:28](#error-2025-07-04t0128530000) |  | dev | timeout | 3603.05s
[2025-07-05 01:27](#error-2025-07-05t0127570000) |  | dev |  | 3603.05s
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c404690ae45e168bcfd2/limits | qa | flaky_500 | 451.08s
[2025-07-07 01:31](#error-2025-07-07t0131310000) |  | dev |  | 3605.00s
[2025-07-10 13:19](#error-2025-07-10t1319330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafa006d8d55bb9e6072/limits | qa | flaky_500 | 33.09s
[2025-07-11 01:34](#error-2025-07-11t0134050000) |  | dev |  | 3865.05s
[2025-07-13 00:57](#error-2025-07-13t0057570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe8f006d8d55bbaa22d4/limits | qa | flaky_500 | 522.06s
[2025-07-14 01:31](#error-2025-07-14t0131130000) |  | dev |  | 3604.06s
[2025-07-20 01:33](#error-2025-07-20t0133020000) |  | qa |  | 3604.03s
[2025-07-27 00:46](#error-2025-07-27t0046040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573d4ea884d723491dfab/limits | qa | flaky_500 | 33.03s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 9 minutes
  - PASS 9 minutes
  - PASS 9 minutes
  - PASS 10 minutes
  - PASS 9 minutes
  - PASS 9 minutes
- 2025-07-02 PASS 8 minutes
- 2025-07-03 PASS 10 minutes
- 2025-07-04

### Error 2025-07-04T01:28:53+00:00
GoTestErrorClassification(error_class='timeout',author='human',run_id='2025-07-04T01:28:53.168000+00:00-TestAccNetworkRSPrivateLinkEndpointGCP_basic',confidence=1.0,ts_when='26 days ago')

```
2025-07-04T01:28:53.1683953Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-04T01:28:53.1686167Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-04T01:28:53.1697779Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-04T01:28:53.1698424Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-07-04T01:28:53.1698869Z         
2025-07-04T01:28:53.1699403Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-04T01:28:53.1699831Z         
2025-07-04T01:28:53.1700193Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-04T01:28:53.1700900Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-04T01:28:53.1701547Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-04T01:28:53.1701886Z         
2025-07-04T01:28:53.1713401Z    test_terraform_path=/home/runner/work/_temp/d2f2798b-dfe7-4ee3-9a40-f89574c58b9a/terraform test_name=TestAccNetworkRSPrivateLinkEndpointGCP_basic test_working_directory=/tmp/plugintest1852655483 test_step_number=1
2025-07-04T01:28:53.1714552Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T01:28:53.1715136Z         
2025-07-04T01:28:53.1715467Z         Error: error when destroying resource
2025-07-04T01:28:53.1715761Z         
2025-07-04T01:28:53.1716109Z         error deleting project (686720428263f52e03e7660e):
2025-07-04T01:28:53.1716695Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686720428263f52e03e7660e
2025-07-04T01:28:53.1717197Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-04T01:28:53.1717737Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-07-04T01:28:53.1718384Z         close group while it has active private endpoint services; please terminate
2025-07-04T01:28:53.1718969Z         all private endpoint services. Reason: Conflict. Params: [],
2025-07-04T01:28:53.1719374Z         BadRequestDetail: 
2025-07-04T01:28:53.1719737Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3603.45s)
```

- 2025-07-05

### Error 2025-07-05T01:27:57+00:00
```
2025-07-05T01:27:57.7335170Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-05T01:27:57.7336513Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-05T01:27:57.7349071Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-05T01:27:57.7351423Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-07-05T01:27:57.7352129Z         
2025-07-05T01:27:57.7353000Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-05T01:27:57.7353725Z         
2025-07-05T01:27:57.7354589Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-05T01:27:57.7355405Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-05T01:27:57.7356056Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-05T01:27:57.7356402Z         
2025-07-05T01:27:57.7367829Z    test_name=TestAccNetworkRSPrivateLinkEndpointGCP_basic test_terraform_path=/home/runner/work/_temp/3ea4ae6f-4ac5-4615-948f-734567411134/terraform test_working_directory=/tmp/plugintest3941555634
2025-07-05T01:27:57.7369120Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T01:27:57.7369719Z         
2025-07-05T01:27:57.7370034Z         Error: error when destroying resource
2025-07-05T01:27:57.7370328Z         
2025-07-05T01:27:57.7370668Z         error deleting project (6868718a37c6036ffcf4426f):
2025-07-05T01:27:57.7371254Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868718a37c6036ffcf4426f
2025-07-05T01:27:57.7371758Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-05T01:27:57.7372291Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-07-05T01:27:57.7372925Z         close group while it has active private endpoint services; please terminate
2025-07-05T01:27:57.7373503Z         all private endpoint services. Reason: Conflict. Params: [],
2025-07-05T01:27:57.7373905Z         BadRequestDetail: 
2025-07-05T01:27:57.7374270Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3603.51s)
```

- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
```
2025-07-06T00:44:46.6459543Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-06T00:44:46.6461522Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-06T00:44:46.6474899Z   
2025-07-06T00:44:46.6497569Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-06T00:44:46.6498273Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6498780Z         
2025-07-06T00:44:46.6499181Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6499528Z         
2025-07-06T00:44:46.6499843Z           with mongodbatlas_project.test,
2025-07-06T00:44:46.6500460Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:44:46.6501017Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:44:46.6501346Z         
2025-07-06T00:44:46.6501823Z         error getting project (6869c404690ae45e168bcfd2): error getting project's
2025-07-06T00:44:46.6502291Z         limits (6869c404690ae45e168bcfd2):
2025-07-06T00:44:46.6502877Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c404690ae45e168bcfd2/limits
2025-07-06T00:44:46.6503570Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6504317Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6504733Z         BadRequestDetail: 
2025-07-06T00:44:46.6505103Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (451.84s)
```

- 2025-07-07

### Error 2025-07-07T01:31:31+00:00
```
2025-07-07T01:31:31.6590550Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-07T01:31:31.6591852Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-07T01:31:31.6604938Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-07T01:31:31.6605669Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-07-07T01:31:31.6606114Z         
2025-07-07T01:31:31.6606645Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-07T01:31:31.6607075Z         
2025-07-07T01:31:31.6607616Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-07T01:31:31.6608297Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-07T01:31:31.6608937Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-07T01:31:31.6609269Z         
2025-07-07T01:31:31.6620553Z    test_name=TestAccNetworkRSPrivateLinkEndpointGCP_basic test_terraform_path=/home/runner/work/_temp/9b4becdd-dbb0-4240-9c92-21d762c56c01/terraform
2025-07-07T01:31:31.6621477Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T01:31:31.6622026Z         
2025-07-07T01:31:31.6622444Z         Error: error when destroying resource
2025-07-07T01:31:31.6622735Z         
2025-07-07T01:31:31.6623081Z         error deleting project (686b155f0aabd25fc85da5a0):
2025-07-07T01:31:31.6623669Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b155f0aabd25fc85da5a0
2025-07-07T01:31:31.6624173Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-07T01:31:31.6624716Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-07-07T01:31:31.6625374Z         close group while it has active private endpoint services; please terminate
2025-07-07T01:31:31.6625948Z         all private endpoint services. Reason: Conflict. Params: [],
2025-07-07T01:31:31.6626348Z         BadRequestDetail: 
2025-07-07T01:31:31.6626713Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3605.00s)
```

- 2025-07-08 PASS 8 minutes
- 2025-07-09 PASS 8 minutes
- 2025-07-10
  - PASS 11 minutes
  - FAIL 33 seconds

### Error 2025-07-10T13:19:33+00:00
```
2025-07-10T13:19:33.8609763Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-10T13:19:33.8611874Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-10T13:19:33.8624907Z   
2025-07-10T13:19:33.8666848Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-10T13:19:33.8667487Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:19:33.8667928Z         
2025-07-10T13:19:33.8668332Z         Error: error when getting project properties after create
2025-07-10T13:19:33.8668680Z         
2025-07-10T13:19:33.8668993Z           with mongodbatlas_project.test,
2025-07-10T13:19:33.8669596Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:19:33.8670158Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:19:33.8670470Z         
2025-07-10T13:19:33.8671030Z         error getting project (686fbafa006d8d55bb9e6072): error getting project's
2025-07-10T13:19:33.8671528Z         limits (686fbafa006d8d55bb9e6072):
2025-07-10T13:19:33.8672131Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafa006d8d55bb9e6072/limits
2025-07-10T13:19:33.8672820Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:19:33.8673416Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:19:33.8673831Z         BadRequestDetail: 
2025-07-10T13:19:33.8674203Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (33.95s)
```

- 2025-07-11

### Error 2025-07-11T01:34:05+00:00
```
2025-07-11T01:34:05.4005901Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-11T01:34:05.4007464Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-11T01:34:05.4018908Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-11T01:34:05.4021572Z     resource_privatelink_endpoint_test.go:94: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T01:34:05.4022714Z         
2025-07-11T01:34:05.4024007Z         Error: error deleting MongoDB Private Endpoints Connection(68705af74f431f68780bd84f): context deadline exceeded
2025-07-11T01:34:05.4024897Z         
2025-07-11T01:34:05.4025466Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3865.50s)
```

- 2025-07-12 PASS 8 minutes
- 2025-07-13

### Error 2025-07-13T00:57:57+00:00
```
2025-07-13T00:57:57.7993944Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-13T00:57:57.7995679Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-13T00:57:57.8050601Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-13T00:57:57.8051296Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:57:57.8051803Z         
2025-07-13T00:57:57.8052207Z         Error: error when getting project properties after create
2025-07-13T00:57:57.8052558Z         
2025-07-13T00:57:57.8052872Z           with mongodbatlas_project.test,
2025-07-13T00:57:57.8053487Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-13T00:57:57.8054046Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:57:57.8054474Z         
2025-07-13T00:57:57.8054943Z         error getting project (6872fe8f006d8d55bbaa22d4): error getting project's
2025-07-13T00:57:57.8055421Z         limits (6872fe8f006d8d55bbaa22d4):
2025-07-13T00:57:57.8056225Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe8f006d8d55bbaa22d4/limits
2025-07-13T00:57:57.8056915Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:57:57.8057519Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:57:57.8057938Z         BadRequestDetail: 
2025-07-13T00:57:57.8058309Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (522.58s)
```

- 2025-07-14

### Error 2025-07-14T01:31:13+00:00
```
2025-07-14T01:31:13.1091733Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-14T01:31:13.1093641Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-14T01:31:13.1103918Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-14T01:31:13.1104538Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-07-14T01:31:13.1104988Z         
2025-07-14T01:31:13.1105537Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-14T01:31:13.1106147Z         
2025-07-14T01:31:13.1106515Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-14T01:31:13.1107205Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-14T01:31:13.1107858Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-14T01:31:13.1108193Z         
2025-07-14T01:31:13.1116173Z    test_name=TestAccNetworkRSPrivateLinkEndpointAWS_basic test_terraform_path=/home/runner/work/_temp/09a620f3-47b8-4e09-ab1e-137e3244237e/terraform test_working_directory=/tmp/plugintest1784559783
2025-07-14T01:31:13.1134002Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-14T01:31:13.1134627Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T01:31:13.1135077Z         
2025-07-14T01:31:13.1135391Z         Error: error when destroying resource
2025-07-14T01:31:13.1135688Z         
2025-07-14T01:31:13.1136054Z         error deleting project (68744fc952cba864e5f0ff69):
2025-07-14T01:31:13.1136662Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc952cba864e5f0ff69
2025-07-14T01:31:13.1137171Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T01:31:13.1137729Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-07-14T01:31:13.1138375Z         close group while it has active private endpoint services; please terminate
2025-07-14T01:31:13.1138970Z         all private endpoint services. Reason: Conflict. Params: [],
2025-07-14T01:31:13.1139386Z         BadRequestDetail: 
2025-07-14T01:31:13.1139759Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3604.61s)
```

- 2025-07-15 PASS 8 minutes
- 2025-07-16 PASS 9 minutes
- 2025-07-17 PASS 9 minutes
- 2025-07-18 PASS 9 minutes
- 2025-07-19 PASS 9 minutes
- 2025-07-20

### Error 2025-07-20T01:33:02+00:00
```
2025-07-20T01:33:02.8497459Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-20T01:33:02.8499422Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-20T01:33:02.8512763Z    test_terraform_path=/home/runner/work/_temp/c06d8fab-6861-4701-b2f0-a97fec7d03af/terraform test_step_number=1
2025-07-20T01:33:02.8535094Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-20T01:33:02.8536079Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-07-20T01:33:02.8536557Z         
2025-07-20T01:33:02.8537097Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-20T01:33:02.8537538Z         
2025-07-20T01:33:02.8537920Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-20T01:33:02.8538612Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-20T01:33:02.8539260Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-20T01:33:02.8539598Z         
2025-07-20T01:33:02.8551210Z    test_name=TestAccNetworkRSPrivateLinkEndpointGCP_basic test_working_directory=/tmp/plugintest1991024108 test_terraform_path=/home/runner/work/_temp/c06d8fab-6861-4701-b2f0-a97fec7d03af/terraform test_step_number=1
2025-07-20T01:33:02.8552371Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-20T01:33:02.8552814Z         
2025-07-20T01:33:02.8553124Z         Error: error when destroying resource
2025-07-20T01:33:02.8553416Z         
2025-07-20T01:33:02.8553761Z         error deleting project (687c393b823af9166ef91415):
2025-07-20T01:33:02.8554530Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393b823af9166ef91415
2025-07-20T01:33:02.8555040Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-20T01:33:02.8555590Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-07-20T01:33:02.8556229Z         close group while it has active private endpoint services; please terminate
2025-07-20T01:33:02.8556814Z         all private endpoint services. Reason: Conflict. Params: [],
2025-07-20T01:33:02.8557221Z         BadRequestDetail: 
2025-07-20T01:33:02.8557590Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3604.33s)
```

- 2025-07-21 PASS 8 minutes
- 2025-07-22 PASS 9 minutes
- 2025-07-23
  - PASS 10 minutes
  - PASS 8 minutes
  - PASS 8 minutes
- 2025-07-24 PASS 9 minutes
- 2025-07-25 PASS 9 minutes
- 2025-07-26 PASS 8 minutes
- 2025-07-27

### Error 2025-07-27T00:46:04+00:00
```
2025-07-27T00:46:04.5556796Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-27T00:46:04.5558772Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-27T00:46:04.5571548Z    test_working_directory=/tmp/plugintest3891238657
2025-07-27T00:46:04.5592755Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-07-27T00:46:04.5593369Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-07-27T00:46:04.5593808Z         
2025-07-27T00:46:04.5594197Z         Error: error when getting project properties after create
2025-07-27T00:46:04.5594539Z         
2025-07-27T00:46:04.5594854Z           with mongodbatlas_project.test,
2025-07-27T00:46:04.5595451Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-27T00:46:04.5596004Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:46:04.5596447Z         
2025-07-27T00:46:04.5596897Z         error getting project (688573d4ea884d723491dfab): error getting project's
2025-07-27T00:46:04.5597361Z         limits (688573d4ea884d723491dfab):
2025-07-27T00:46:04.5597936Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573d4ea884d723491dfab/limits
2025-07-27T00:46:04.5598605Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:46:04.5599189Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:46:04.5599628Z         BadRequestDetail: 
2025-07-27T00:46:04.5599994Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (33.28s)
```

- 2025-07-28 PASS 8 minutes
- 2025-07-29 PASS 8 minutes
- 2025-07-30 PASS 8 minutes
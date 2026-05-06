# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_gcpPortMappingDisabled Test Details
# Found 37 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, FAIL(x 19) PASS(x 18)
Success rate: 48.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-08 00:55](#error-2026-04-08t0055370000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69d5a50d74e39a664149495f/privateEndpoint/endpointService | dev |  | 1.03s
[2026-04-09 00:44](#error-2026-04-09t0044320000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69d6f4ed9bb208aac605fa32/privateEndpoint/endpointService | dev |  | 1.00s
[2026-04-11 00:49](#error-2026-04-11t0049030000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69d998f992f7ea8dceebf926/privateEndpoint/endpointService | dev |  | 1.01s
[2026-04-13 01:01](#error-2026-04-13t0101250000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69dc3d7335f1f181a4dc8d18/privateEndpoint/endpointService | dev |  | 1.02s
[2026-04-14 00:59](#error-2026-04-14t0059360000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69dd8f59dcb6e3417a34ff9e/privateEndpoint/endpointService | dev | flaky_500 | 1.00s
[2026-04-17 00:59](#error-2026-04-17t0059100000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e1836aabf3dbd56b5c5ff9/privateEndpoint/endpointService | dev |  | 2.05s
[2026-04-18 00:52](#error-2026-04-18t0052320000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e2d3e7eb355eaa1b2ea18e/privateEndpoint/endpointService | dev |  | 2.03s
[2026-04-21 00:59](#error-2026-04-21t0059450000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e6c977aa6b8d91416550ff/privateEndpoint/endpointService | dev |  | 2.03s
[2026-04-22 01:27](#error-2026-04-22t0127070000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e81a44a8d803e1612f154f/privateEndpoint/endpointService | dev |  | 1.10s
[2026-04-25 00:56](#error-2026-04-25t0056230000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69ec0edb1e137e366f0021af/privateEndpoint/endpointService | dev |  | 2.01s
[2026-04-29 01:07](#error-2026-04-29t0107450000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f156f3b52eb69b22d14c03/privateEndpoint/endpointService | dev |  | 2.04s
[2026-05-01 01:10](#error-2026-05-01t0110460000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f3faa56381d809dde99230/privateEndpoint/endpointService | dev |  | 2.01s
[2026-05-04 01:07](#error-2026-05-04t0107240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f7ee5fc8db7e025f52db5a/privateEndpoint/endpointService | dev |  | 2.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 11 minutes
- 2026-04-08

### Error 2026-04-08T00:55:37+00:00
```
2026-04-08T00:55:37.7180204Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-08T00:55:37.7184376Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-08T00:55:37.7207364Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-08T00:55:37.7207948Z     resource_test.go:132: Step 1/2 error: Error running apply: exit status 1
2026-04-08T00:55:37.7208357Z         
2026-04-08T00:55:37.7210183Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a50d74e39a664149495f/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-08T00:55:37.7211469Z         
2026-04-08T00:55:37.7211850Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-08T00:55:37.7212840Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-08T00:55:37.7213548Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-08T00:55:37.7213904Z         
2026-04-08T00:55:37.7253388Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.28s)
```

- 2026-04-09

### Error 2026-04-09T00:44:32+00:00
```
2026-04-09T00:44:32.8935507Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-09T00:44:32.8937239Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-09T00:44:32.8970668Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-09T00:44:32.8971253Z     resource_test.go:132: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:44:32.8971666Z         
2026-04-09T00:44:32.8973454Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f4ed9bb208aac605fa32/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-09T00:44:32.8974893Z         
2026-04-09T00:44:32.8975306Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-09T00:44:32.8976049Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-09T00:44:32.8976748Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-09T00:44:32.8977114Z         
2026-04-09T00:44:32.8988776Z    test_name=TestAccPrivateLinkEndpoint_basicAzure test_terraform_path=/home/runner/work/_temp/aa1ed3fd-0fd8-4e47-bd94-7669829149a4/terraform test_working_directory=/tmp/plugintest1077554461
2026-04-09T00:44:32.8997081Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.04s)
```

- 2026-04-10 PASS 12 minutes
- 2026-04-11

### Error 2026-04-11T00:49:03+00:00
```
2026-04-11T00:49:03.7981671Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-11T00:49:03.7983389Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-11T00:49:03.8015644Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-11T00:49:03.8016220Z     resource_test.go:132: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:49:03.8016632Z         
2026-04-11T00:49:03.8018420Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d998f992f7ea8dceebf926/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-11T00:49:03.8019744Z         
2026-04-11T00:49:03.8020152Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-11T00:49:03.8020901Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-11T00:49:03.8021735Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-11T00:49:03.8022113Z         
2026-04-11T00:49:03.8033884Z    test_name=TestAccPrivateLinkEndpoint_gcpPortMappingEnabled test_terraform_path=/home/runner/work/_temp/35e0278e-6ab2-4ad2-9ae1-26462cebd84a/terraform
2026-04-11T00:49:03.8041499Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.08s)
```

- 2026-04-12: MISSING
- 2026-04-13

### Error 2026-04-13T01:01:25+00:00
```
2026-04-13T01:01:25.0742037Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-13T01:01:25.0744467Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-13T01:01:25.0779033Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-13T01:01:25.0779687Z     resource_test.go:132: Step 1/2 error: Error running apply: exit status 1
2026-04-13T01:01:25.0780099Z         
2026-04-13T01:01:25.0781935Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69dc3d7335f1f181a4dc8d18/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-13T01:01:25.0783244Z         
2026-04-13T01:01:25.0783628Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-13T01:01:25.0784375Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-13T01:01:25.0785084Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-13T01:01:25.0785450Z         
2026-04-13T01:01:25.0786082Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.22s)
```

- 2026-04-14

### Error 2026-04-14T00:59:36+00:00
```
2026-04-14T00:59:36.5927144Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-14T00:59:36.5929629Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-14T00:59:36.5942907Z    test_working_directory=/tmp/plugintest3704931077 test_step_number=1 test_name=TestAccPrivateLinkEndpoint_gcpPortMappingDisabled test_terraform_path=/home/runner/work/_temp/647aad76-3de0-40c9-9c6b-005f4baffd95/terraform
2026-04-14T00:59:36.5944047Z     resource_test.go:132: Step 1/2 error: Error running apply: exit status 1
2026-04-14T00:59:36.5944467Z         
2026-04-14T00:59:36.5946558Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69dd8f59dcb6e3417a34ff9e/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-14T00:59:36.5947884Z         
2026-04-14T00:59:36.5948273Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-14T00:59:36.5949006Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-14T00:59:36.5949701Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-14T00:59:36.5950060Z         
2026-04-14T00:59:36.5950398Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.03s)
```

- 2026-04-15 PASS 8 minutes
- 2026-04-16 PASS 10 minutes
- 2026-04-17

### Error 2026-04-17T00:59:10+00:00
```
2026-04-17T00:59:10.0535546Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-17T00:59:10.0541744Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-17T00:59:10.0559845Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-17T00:59:10.0560439Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-04-17T00:59:10.0560846Z         
2026-04-17T00:59:10.0562874Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e1836aabf3dbd56b5c5ff9/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-17T00:59:10.0564338Z         
2026-04-17T00:59:10.0564733Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-17T00:59:10.0565475Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-17T00:59:10.0566180Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-17T00:59:10.0566549Z         
2026-04-17T00:59:10.0594487Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.53s)
```

- 2026-04-18

### Error 2026-04-18T00:52:32+00:00
```
2026-04-18T00:52:32.4776784Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-18T00:52:32.4787316Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-18T00:52:32.4854806Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-18T00:52:32.4855382Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-04-18T00:52:32.4855791Z         
2026-04-18T00:52:32.4857645Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e2d3e7eb355eaa1b2ea18e/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-18T00:52:32.4858943Z         
2026-04-18T00:52:32.4859336Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-18T00:52:32.4860091Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-18T00:52:32.4860804Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-18T00:52:32.4861165Z         
2026-04-18T00:52:32.4863186Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.33s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 8 minutes
- 2026-04-21

### Error 2026-04-21T00:59:45+00:00
```
2026-04-21T00:59:45.6096157Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-21T00:59:45.6104982Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-21T00:59:45.6164807Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-21T00:59:45.6165722Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-04-21T00:59:45.6166529Z         
2026-04-21T00:59:45.6168538Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e6c977aa6b8d91416550ff/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-21T00:59:45.6169855Z         
2026-04-21T00:59:45.6170255Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-21T00:59:45.6171287Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-21T00:59:45.6172020Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-21T00:59:45.6172398Z         
2026-04-21T00:59:45.6173974Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.26s)
```

- 2026-04-22

### Error 2026-04-22T01:27:07+00:00
```
2026-04-22T01:27:07.0608459Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-22T01:27:07.0615669Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-22T01:27:07.0680047Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-22T01:27:07.0680738Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-04-22T01:27:07.0681208Z         
2026-04-22T01:27:07.0683439Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a44a8d803e1612f154f/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-22T01:27:07.0684981Z         
2026-04-22T01:27:07.0685446Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-22T01:27:07.0686634Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-22T01:27:07.0687498Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-22T01:27:07.0687934Z         
2026-04-22T01:27:07.0688338Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.97s)
```

- 2026-04-23 PASS 10 minutes
- 2026-04-24 PASS 11 minutes
- 2026-04-25

### Error 2026-04-25T00:56:23+00:00
```
2026-04-25T00:56:23.4501336Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-25T00:56:23.4508886Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-25T00:56:23.4563246Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-25T00:56:23.4563846Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-04-25T00:56:23.4564255Z         
2026-04-25T00:56:23.4566278Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69ec0edb1e137e366f0021af/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-25T00:56:23.4567541Z         
2026-04-25T00:56:23.4567947Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-25T00:56:23.4568707Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-25T00:56:23.4569423Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-25T00:56:23.4569783Z         
2026-04-25T00:56:23.4570142Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.09s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 7 minutes
- 2026-04-28 PASS 7 minutes
- 2026-04-29

### Error 2026-04-29T01:07:45+00:00
```
2026-04-29T01:07:45.3922129Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-29T01:07:45.3932970Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-29T01:07:45.4010625Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-29T01:07:45.4011226Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-04-29T01:07:45.4011647Z         
2026-04-29T01:07:45.4013468Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f156f3b52eb69b22d14c03/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-29T01:07:45.4015234Z         
2026-04-29T01:07:45.4015646Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-29T01:07:45.4016399Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-29T01:07:45.4017324Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-29T01:07:45.4017716Z         
2026-04-29T01:07:45.4020743Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.41s)
```

- 2026-04-30 PASS 8 minutes
- 2026-05-01

### Error 2026-05-01T01:10:46+00:00
```
2026-05-01T01:10:46.8211182Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-01T01:10:46.8217701Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-01T01:10:46.8254067Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-01T01:10:46.8254672Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-05-01T01:10:46.8255096Z         
2026-05-01T01:10:46.8256990Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f3faa56381d809dde99230/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-01T01:10:46.8258316Z         
2026-05-01T01:10:46.8258721Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-01T01:10:46.8259492Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-01T01:10:46.8260348Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-01T01:10:46.8260728Z         
2026-05-01T01:10:46.8273146Z    test_name=TestAccPrivateLinkEndpoint_basicGCP test_terraform_path=/home/runner/work/_temp/1651c468-917a-4d5c-a1d8-66688b40f000/terraform test_working_directory=/tmp/plugintest3118603541 test_step_number=1
2026-05-01T01:10:46.8281851Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.10s)
```

- 2026-05-02 PASS 11 minutes
- 2026-05-03: MISSING
- 2026-05-04

### Error 2026-05-04T01:07:24+00:00
```
2026-05-04T01:07:24.4447331Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-04T01:07:24.4453252Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-04T01:07:24.4489632Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-04T01:07:24.4490201Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-05-04T01:07:24.4490606Z         
2026-05-04T01:07:24.4492343Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f7ee5fc8db7e025f52db5a/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-04T01:07:24.4493723Z         
2026-05-04T01:07:24.4494097Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-04T01:07:24.4494822Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-04T01:07:24.4495764Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-04T01:07:24.4496302Z         
2026-05-04T01:07:24.4518623Z    test_working_directory=/tmp/plugintest1814825882 test_name=TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-04T01:07:24.4527591Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.10s)
```

- 2026-05-05 PASS 8 minutes
- 2026-05-06 PASS 13 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-08 06:14](#error-2026-04-08t0614030000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69d5ef3f53a6e805f2294163/privateEndpoint/endpointService | qa |  | 1.02s
[2026-04-19 01:02](#error-2026-04-19t0102120000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e426aaf6a15c960fffefcd/privateEndpoint/endpointService | qa |  | 1.09s
[2026-04-26 01:03](#error-2026-04-26t0103500000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69ed617cad2ee82a983f1375/privateEndpoint/endpointService | qa |  | 2.04s
[2026-05-04 16:49](#error-2026-05-04t1649410000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f8cb344d55307a68445d9e/privateEndpoint/endpointService | qa |  | 2.07s
[2026-05-04 19:08](#error-2026-05-04t1908110000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f8ebaebc658e8fedce58c2/privateEndpoint/endpointService | qa | flaky_500 | 2.05s
[2026-05-06 07:01](#error-2026-05-06t0701570000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69fae47b1954b6a279b88a99/privateEndpoint/endpointService | qa |  | 2.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - FAIL a second

### Error 2026-04-08T06:14:03+00:00
```
2026-04-08T06:14:03.4817629Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-08T06:14:03.4819742Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-08T06:14:03.4834611Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-08T06:14:03.4835209Z     resource_test.go:132: Step 1/2 error: Error running apply: exit status 1
2026-04-08T06:14:03.4835621Z         
2026-04-08T06:14:03.4837494Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69d5ef3f53a6e805f2294163/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-08T06:14:03.4838805Z         
2026-04-08T06:14:03.4839228Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-08T06:14:03.4839986Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-08T06:14:03.4840940Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-08T06:14:03.4841346Z         
2026-04-08T06:14:03.4861797Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.23s)
```

  - PASS 11 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 13 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19

### Error 2026-04-19T01:02:12+00:00
```
2026-04-19T01:02:12.4001073Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-19T01:02:12.4007026Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-19T01:02:12.4041627Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-19T01:02:12.4042204Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-04-19T01:02:12.4042607Z         
2026-04-19T01:02:12.4044441Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69e426aaf6a15c960fffefcd/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-19T01:02:12.4045860Z         
2026-04-19T01:02:12.4046244Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-19T01:02:12.4046992Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-19T01:02:12.4047947Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-19T01:02:12.4048316Z         
2026-04-19T01:02:12.4069030Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.92s)
```

- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 11 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26

### Error 2026-04-26T01:03:50+00:00
```
2026-04-26T01:03:50.9450728Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-26T01:03:50.9455225Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-26T01:03:50.9484685Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-26T01:03:50.9485164Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-04-26T01:03:50.9485549Z         
2026-04-26T01:03:50.9487081Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69ed617cad2ee82a983f1375/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-26T01:03:50.9488055Z         
2026-04-26T01:03:50.9488360Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-26T01:03:50.9489091Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-26T01:03:50.9489642Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-26T01:03:50.9489934Z         
2026-04-26T01:03:50.9501781Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.43s)
```

- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 8 minutes
- 2026-05-04
  - FAIL 2 seconds

### Error 2026-05-04T16:49:41+00:00
```
2026-05-04T16:49:41.3859141Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-04T16:49:41.3865425Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-04T16:49:41.3897598Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-04T16:49:41.3898400Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-05-04T16:49:41.3899008Z         
2026-05-04T16:49:41.3901987Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f8cb344d55307a68445d9e/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-04T16:49:41.3904043Z         
2026-05-04T16:49:41.3904458Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-04T16:49:41.3905197Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-04T16:49:41.3906544Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-04T16:49:41.3907174Z         
2026-05-04T16:49:41.3919337Z    test_step_number=1 test_name=TestAccPrivateLinkEndpoint_basicGCP test_terraform_path=/home/runner/work/_temp/8612a42c-098b-44a4-89e1-d89a5e7ab0ac/terraform test_working_directory=/tmp/plugintest2779820808
2026-05-04T16:49:41.3928439Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.73s)
```

  - FAIL 2 seconds

### Error 2026-05-04T19:08:11+00:00
```
2026-05-04T19:08:11.5697374Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-04T19:08:11.5708500Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-04T19:08:11.5750027Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-04T19:08:11.5751372Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-05-04T19:08:11.5752110Z         
2026-05-04T19:08:11.5755388Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f8ebaebc658e8fedce58c2/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-04T19:08:11.5757637Z         
2026-05-04T19:08:11.5758490Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-04T19:08:11.5759908Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-04T19:08:11.5761641Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-04T19:08:11.5762311Z         
2026-05-04T19:08:11.5783207Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.46s)
```

- 2026-05-05 PASS 5 minutes
- 2026-05-06

### Error 2026-05-06T07:01:57+00:00
```
2026-05-06T07:01:57.3771111Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-06T07:01:57.3777129Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-06T07:01:57.3830345Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-06T07:01:57.3830942Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-05-06T07:01:57.3831356Z         
2026-05-06T07:01:57.3833190Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69fae47b1954b6a279b88a99/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-06T07:01:57.3834611Z         
2026-05-06T07:01:57.3835011Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-06T07:01:57.3835768Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-06T07:01:57.3836482Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-06T07:01:57.3836857Z         
2026-05-06T07:01:57.3839389Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.82s)
```


# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_gcpPortMappingEnabled Test Details
# Found 27 TestRuns in dev, qa from 2026-02-14 to 2026-03-06 from master branch: 1 unique tests, PASS(x 18) FAIL(x 9)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-14 00:46](#error-2026-02-14t0046220000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/698fc3ed6ff4d57b722596a7/privateEndpoint/endpointService | dev | 1.07s
[2026-02-17 14:19](#error-2026-02-17t1419140000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699475b066e203c66ac82026/privateEndpoint/endpointService | dev | 1.04s
[2026-02-20 00:48](#error-2026-02-20t0048130000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6997ac90ee224eb272a58793/privateEndpoint/endpointService | dev | 1.04s
[2026-02-25 00:53](#error-2026-02-25t0053430000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699e45173a01dbbf5541e590/privateEndpoint/endpointService | dev | 1.04s
[2026-02-26 00:46](#error-2026-02-26t0046100000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699f95916ef93d0b6c1873bb/privateEndpoint/endpointService | dev | 1.03s
[2026-02-27 00:52](#error-2026-02-27t0052590000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69a0e7c7bae6e5998b0e7273/privateEndpoint/endpointService | dev | 1.04s
[2026-03-02 00:51](#error-2026-03-02t0051260000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69a4dc0f756ae9983e961fb2/privateEndpoint/endpointService | dev | 1.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14

### Error 2026-02-14T00:46:22+00:00
```
2026-02-14T00:46:22.7130833Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-14T00:46:22.7134427Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-14T00:46:22.7175087Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-14T00:46:22.7175974Z     resource_test.go:125: Step 1/2 error: Error running apply: exit status 1
2026-02-14T00:46:22.7176789Z         
2026-02-14T00:46:22.7178809Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698fc3ed6ff4d57b722596a7/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-14T00:46:22.7180138Z         
2026-02-14T00:46:22.7180542Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-14T00:46:22.7181300Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-14T00:46:22.7182335Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-14T00:46:22.7182728Z         
2026-02-14T00:46:22.7183076Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.69s)
```

- 2026-02-15: MISSING
- 2026-02-16 PASS 6 minutes
- 2026-02-17
  - PASS 5 minutes
  - FAIL a second

### Error 2026-02-17T14:19:14+00:00
```
2026-02-17T14:19:14.4511202Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-17T14:19:14.4515955Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-17T14:19:14.4529119Z   
2026-02-17T14:19:14.4529589Z     resource_test.go:125: Step 1/2 error: Error running apply: exit status 1
2026-02-17T14:19:14.4530038Z         
2026-02-17T14:19:14.4533111Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699475b066e203c66ac82026/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-17T14:19:14.4534498Z         
2026-02-17T14:19:14.4535199Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-17T14:19:14.4536001Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-17T14:19:14.4536937Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-17T14:19:14.4537342Z         
2026-02-17T14:19:14.4558074Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.44s)
```

  - PASS 5 minutes
- 2026-02-18 PASS 7 minutes
- 2026-02-19 PASS 7 minutes
- 2026-02-20

### Error 2026-02-20T00:48:13+00:00
```
2026-02-20T00:48:13.1194074Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-20T00:48:13.1199119Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-20T00:48:13.1212087Z    test_terraform_path=/home/runner/work/_temp/32fd9a85-4a87-4c5d-bc90-164a5b5c742f/terraform
2026-02-20T00:48:13.1213013Z     resource_test.go:125: Step 1/2 error: Error running apply: exit status 1
2026-02-20T00:48:13.1213470Z         
2026-02-20T00:48:13.1215385Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6997ac90ee224eb272a58793/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-20T00:48:13.1216711Z         
2026-02-20T00:48:13.1217153Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-20T00:48:13.1217940Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-20T00:48:13.1218837Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-20T00:48:13.1219322Z         
2026-02-20T00:48:13.1219687Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.36s)
```

- 2026-02-21 PASS 5 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 5 minutes
- 2026-02-24 PASS 7 minutes
- 2026-02-25

### Error 2026-02-25T00:53:43+00:00
```
2026-02-25T00:53:43.0099049Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-25T00:53:43.0101981Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-25T00:53:43.0115349Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-25T00:53:43.0116013Z     resource_test.go:125: Step 1/2 error: Error running apply: exit status 1
2026-02-25T00:53:43.0116435Z         
2026-02-25T00:53:43.0118187Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699e45173a01dbbf5541e590/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-25T00:53:43.0119389Z         
2026-02-25T00:53:43.0119771Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-25T00:53:43.0120454Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-25T00:53:43.0121103Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-25T00:53:43.0121460Z         
2026-02-25T00:53:43.0121793Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.41s)
```

- 2026-02-26

### Error 2026-02-26T00:46:10+00:00
```
2026-02-26T00:46:10.0151354Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-26T00:46:10.0160190Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-26T00:46:10.0183204Z   
2026-02-26T00:46:10.0218313Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-26T00:46:10.0219308Z     resource_test.go:125: Step 1/2 error: Error running apply: exit status 1
2026-02-26T00:46:10.0220020Z         
2026-02-26T00:46:10.0223507Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699f95916ef93d0b6c1873bb/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-26T00:46:10.0225831Z         
2026-02-26T00:46:10.0226514Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-26T00:46:10.0227832Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-26T00:46:10.0229092Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-26T00:46:10.0229718Z         
2026-02-26T00:46:10.0265878Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.32s)
```

- 2026-02-27

### Error 2026-02-27T00:52:59+00:00
```
2026-02-27T00:52:59.4911885Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-27T00:52:59.4916829Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-27T00:52:59.4950809Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-27T00:52:59.4951389Z     resource_test.go:125: Step 1/2 error: Error running apply: exit status 1
2026-02-27T00:52:59.4951936Z         
2026-02-27T00:52:59.4953992Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a0e7c7bae6e5998b0e7273/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-27T00:52:59.4955319Z         
2026-02-27T00:52:59.4955705Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-27T00:52:59.4956456Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-27T00:52:59.4957172Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-27T00:52:59.4957532Z         
2026-02-27T00:52:59.4958297Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.39s)
```

- 2026-02-28 PASS 6 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - FAIL a second

### Error 2026-03-02T00:51:26+00:00
```
2026-03-02T00:51:26.2541626Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-03-02T00:51:26.2548709Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-03-02T00:51:26.2561049Z   
2026-03-02T00:51:26.2579371Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-03-02T00:51:26.2579917Z     resource_test.go:125: Step 1/2 error: Error running apply: exit status 1
2026-03-02T00:51:26.2580314Z         
2026-03-02T00:51:26.2581916Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a4dc0f756ae9983e961fb2/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-03-02T00:51:26.2583073Z         
2026-03-02T00:51:26.2583454Z           with mongodbatlas_privatelink_endpoint.this,
2026-03-02T00:51:26.2584136Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-03-02T00:51:26.2584790Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-03-02T00:51:26.2585144Z         
2026-03-02T00:51:26.2585894Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.36s)
```

  - PASS 5 minutes
- 2026-03-03 PASS 5 minutes
- 2026-03-04 PASS 6 minutes
- 2026-03-05 PASS 7 minutes
- 2026-03-06 PASS 7 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-17 17:57](#error-2026-02-17t1757330000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6994a922b4a0c5c651dd167c/privateEndpoint/endpointService | qa | 1.02s
[2026-03-01 00:57](#error-2026-03-01t0057180000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69a38ba217b2c5dfb1d1229a/privateEndpoint/endpointService | qa | 1.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 5 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 5 minutes
  - FAIL a second

### Error 2026-02-17T17:57:33+00:00
```
2026-02-17T17:57:33.6530123Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-17T17:57:33.6534283Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-02-17T17:57:33.6545626Z    test_terraform_path=/home/runner/work/_temp/31c3da99-3f4d-48c4-b2b5-0747cb2357aa/terraform test_working_directory=/tmp/plugintest4168412775 test_name=TestAccPrivateLinkEndpoint_gcpPortMappingEnabled test_step_number=1
2026-02-17T17:57:33.6547024Z     resource_test.go:125: Step 1/2 error: Error running apply: exit status 1
2026-02-17T17:57:33.6547765Z         
2026-02-17T17:57:33.6550758Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6994a922b4a0c5c651dd167c/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-17T17:57:33.6552304Z         
2026-02-17T17:57:33.6552692Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-17T17:57:33.6553390Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-17T17:57:33.6554046Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-17T17:57:33.6554400Z         
2026-02-17T17:57:33.6565558Z    test_name=TestAccPrivateLinkEndpoint_basicGCP test_terraform_path=/home/runner/work/_temp/31c3da99-3f4d-48c4-b2b5-0747cb2357aa/terraform test_working_directory=/tmp/plugintest3631854521
2026-02-17T17:57:33.6572879Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.17s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 5 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01

### Error 2026-03-01T00:57:18+00:00
```
2026-03-01T00:57:18.2237485Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-03-01T00:57:18.2239680Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-03-01T00:57:18.2255191Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-03-01T00:57:18.2255799Z     resource_test.go:125: Step 1/2 error: Error running apply: exit status 1
2026-03-01T00:57:18.2256197Z         
2026-03-01T00:57:18.2258158Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a38ba217b2c5dfb1d1229a/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-03-01T00:57:18.2259425Z         
2026-03-01T00:57:18.2259805Z           with mongodbatlas_privatelink_endpoint.this,
2026-03-01T00:57:18.2260531Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-03-01T00:57:18.2261214Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-03-01T00:57:18.2261568Z         
2026-03-01T00:57:18.2263814Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.26s)
```

- 2026-03-02: MISSING
- 2026-03-03 PASS 6 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_gcpPortMappingEnabled Test Details
# Found 15 TestRuns in dev, qa from 2026-02-14 to 2026-02-24 from master branch: 1 unique tests, PASS(x 11) FAIL(x 4)
Success rate: 73.33%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-14 00:46](#error-2026-02-14t0046220000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/698fc3ed6ff4d57b722596a7/privateEndpoint/endpointService | dev | 1.07s
[2026-02-17 14:19](#error-2026-02-17t1419140000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699475b066e203c66ac82026/privateEndpoint/endpointService | dev | 1.04s
[2026-02-20 00:48](#error-2026-02-20t0048130000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6997ac90ee224eb272a58793/privateEndpoint/endpointService | dev | 1.04s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03: MISSING
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

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-17 17:57](#error-2026-02-17t1757330000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6994a922b4a0c5c651dd167c/privateEndpoint/endpointService | qa | 1.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03: MISSING
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

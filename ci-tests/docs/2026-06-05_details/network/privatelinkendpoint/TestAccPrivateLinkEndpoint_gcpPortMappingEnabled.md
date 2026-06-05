# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_gcpPortMappingEnabled Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 09:42](#error-2026-05-07t0942040000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69fc5c6d2f0288ef643ef8a6/privateEndpoint/endpointService | dev |  | 1.07s
[2026-05-11 01:10](#error-2026-05-11t0110420000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a01299f9b4177680380f78a/privateEndpoint/endpointService | dev | flaky_500 | 2.03s
[2026-05-12 01:04](#error-2026-05-12t0104480000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a027a3e373288b9dd0f958f/privateEndpoint/endpointService | dev |  | 1.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 6 minutes
  - FAIL a second

### Error 2026-05-07T09:42:04+00:00
```
2026-05-07T09:42:04.1717578Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-07T09:42:04.1728857Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-07T09:42:04.1775598Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-07T09:42:04.1776193Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-05-07T09:42:04.1776777Z         
2026-05-07T09:42:04.1778632Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fc5c6d2f0288ef643ef8a6/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-07T09:42:04.1779958Z         
2026-05-07T09:42:04.1780355Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-07T09:42:04.1781107Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-07T09:42:04.1781822Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-07T09:42:04.1782202Z         
2026-05-07T09:42:04.1808114Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.75s)
```

- 2026-05-08 PASS 5 minutes
- 2026-05-09 PASS 15 minutes
- 2026-05-10: MISSING
- 2026-05-11

### Error 2026-05-11T01:10:42+00:00
```
2026-05-11T01:10:42.6787317Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-11T01:10:42.6794813Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-11T01:10:42.6849616Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-11T01:10:42.6850204Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-05-11T01:10:42.6850621Z         
2026-05-11T01:10:42.6852454Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a01299f9b4177680380f78a/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-11T01:10:42.6853874Z         
2026-05-11T01:10:42.6854267Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-11T01:10:42.6855004Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-11T01:10:42.6855935Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-11T01:10:42.6856310Z         
2026-05-11T01:10:42.6857941Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (2.33s)
```

- 2026-05-12

### Error 2026-05-12T01:04:48+00:00
```
2026-05-12T01:04:48.9139439Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-12T01:04:48.9158639Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-12T01:04:48.9210474Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-12T01:04:48.9211696Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-05-12T01:04:48.9212387Z         
2026-05-12T01:04:48.9215513Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a027a3e373288b9dd0f958f/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-12T01:04:48.9217860Z         
2026-05-12T01:04:48.9218571Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-12T01:04:48.9219919Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-12T01:04:48.9221429Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-12T01:04:48.9222105Z         
2026-05-12T01:04:48.9234030Z    test_terraform_path=/home/runner/work/_temp/8234b53a-d555-4ae4-928e-19ad00a92dc9/terraform test_working_directory=/tmp/plugintest4135714175 test_step_number=1 test_name=TestAccPrivateLinkEndpoint_basicGCP
2026-05-12T01:04:48.9259437Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.73s)
```

- 2026-05-13 PASS 5 minutes
- 2026-05-14 PASS 5 minutes
- 2026-05-15 PASS 5 minutes
- 2026-05-16 PASS 6 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 5 minutes
- 2026-05-19 PASS 4 minutes
- 2026-05-20 PASS 6 minutes
- 2026-05-21 PASS 5 minutes
- 2026-05-22 PASS 5 minutes
- 2026-05-23 PASS 4 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 4 minutes
- 2026-05-26 PASS 5 minutes
- 2026-05-27 PASS 5 minutes
- 2026-05-28 PASS 5 minutes
- 2026-05-29 PASS 5 minutes
- 2026-05-30 PASS 5 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 5 minutes
- 2026-06-02 PASS 5 minutes
- 2026-06-03 PASS 4 minutes
- 2026-06-04 PASS 5 minutes
- 2026-06-05 PASS 5 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 13 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 8 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 7 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

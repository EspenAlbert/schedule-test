# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_gcpPortMappingEnabled Test Details
# Found 37 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 22) FAIL(x 15)
Success rate: 59.46%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-08 00:55](#error-2026-04-08t0055370000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69d5a50d74e39a664149495f/privateEndpoint/endpointService | dev |  | 1.03s
[2026-04-09 00:44](#error-2026-04-09t0044320000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69d6f4ed9bb208aac605fa32/privateEndpoint/endpointService | dev |  | 1.00s
[2026-04-11 00:49](#error-2026-04-11t0049030000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69d998f992f7ea8dceebf926/privateEndpoint/endpointService | dev |  | 1.01s
[2026-04-13 01:01](#error-2026-04-13t0101250000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69dc3d7335f1f181a4dc8d18/privateEndpoint/endpointService | dev |  | 1.02s
[2026-04-15 01:01](#error-2026-04-15t0101340000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69dee082353adec06335dfdf/privateEndpoint/endpointService | dev | flaky_500 | 1.10s
[2026-04-20 01:01](#error-2026-04-20t0101430000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e57807d4c388c612b335aa/privateEndpoint/endpointService | dev |  | 1.06s
[2026-04-21 00:59](#error-2026-04-21t0059450000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e6c977aa6b8d91416550ff/privateEndpoint/endpointService | dev |  | 2.02s
[2026-04-22 01:27](#error-2026-04-22t0127070000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e81a44a8d803e1612f154f/privateEndpoint/endpointService | dev |  | 2.01s
[2026-04-29 01:07](#error-2026-04-29t0107450000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f156f3b52eb69b22d14c03/privateEndpoint/endpointService | dev |  | 2.04s
[2026-05-04 01:07](#error-2026-05-04t0107240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f7ee5fc8db7e025f52db5a/privateEndpoint/endpointService | dev |  | 2.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 8 minutes
- 2026-04-08

### Error 2026-04-08T00:55:37+00:00
```
2026-04-08T00:55:37.7178771Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-08T00:55:37.7190505Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-08T00:55:37.7207063Z   
2026-04-08T00:55:37.7226844Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-08T00:55:37.7227409Z     resource_test.go:128: Step 1/2 error: Error running apply: exit status 1
2026-04-08T00:55:37.7227817Z         
2026-04-08T00:55:37.7229750Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a50d74e39a664149495f/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-08T00:55:37.7231194Z         
2026-04-08T00:55:37.7231583Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-08T00:55:37.7232547Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-08T00:55:37.7233259Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-08T00:55:37.7233633Z         
2026-04-08T00:55:37.7253921Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.29s)
```

- 2026-04-09

### Error 2026-04-09T00:44:32+00:00
```
2026-04-09T00:44:32.8934373Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-09T00:44:32.8938029Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-09T00:44:32.8956325Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-09T00:44:32.8956909Z     resource_test.go:128: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:44:32.8957322Z         
2026-04-09T00:44:32.8959141Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f4ed9bb208aac605fa32/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-09T00:44:32.8960370Z         
2026-04-09T00:44:32.8960767Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-09T00:44:32.8961516Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-09T00:44:32.8962222Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-09T00:44:32.8962589Z         
2026-04-09T00:44:32.8969647Z    test_name=TestAccPrivateLinkEndpoint_gcpPortMappingDisabled test_terraform_path=/home/runner/work/_temp/aa1ed3fd-0fd8-4e47-bd94-7669829149a4/terraform test_working_directory=/tmp/plugintest3690739680 test_step_number=1
2026-04-09T00:44:32.8996561Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.04s)
```

- 2026-04-10 PASS 10 minutes
- 2026-04-11

### Error 2026-04-11T00:49:03+00:00
```
2026-04-11T00:49:03.7980809Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-11T00:49:03.7984173Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-11T00:49:03.8034675Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-11T00:49:03.8035255Z     resource_test.go:128: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:49:03.8035661Z         
2026-04-11T00:49:03.8037472Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d998f992f7ea8dceebf926/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-11T00:49:03.8038927Z         
2026-04-11T00:49:03.8039329Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-11T00:49:03.8040079Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-11T00:49:03.8040783Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-11T00:49:03.8041151Z         
2026-04-11T00:49:03.8042466Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.10s)
```

- 2026-04-12: MISSING
- 2026-04-13

### Error 2026-04-13T01:01:25+00:00
```
2026-04-13T01:01:25.0741162Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-13T01:01:25.0744910Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-13T01:01:25.0759015Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-13T01:01:25.0759691Z     resource_test.go:128: Step 1/2 error: Error running apply: exit status 1
2026-04-13T01:01:25.0760109Z         
2026-04-13T01:01:25.0761948Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69dc3d7335f1f181a4dc8d18/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-13T01:01:25.0763255Z         
2026-04-13T01:01:25.0763636Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-13T01:01:25.0764376Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-13T01:01:25.0765083Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-13T01:01:25.0765443Z         
2026-04-13T01:01:25.0778204Z    test_terraform_path=/home/runner/work/_temp/9d457300-a332-4c9d-8d72-14d488e66e67/terraform test_step_number=1 test_working_directory=/tmp/plugintest652801047
2026-04-13T01:01:25.0786652Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.22s)
```

- 2026-04-14 PASS 8 minutes
- 2026-04-15

### Error 2026-04-15T01:01:34+00:00
```
2026-04-15T01:01:34.6500874Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-15T01:01:34.6505832Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-15T01:01:34.6529181Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-15T01:01:34.6530115Z     resource_test.go:128: Step 1/2 error: Error running apply: exit status 1
2026-04-15T01:01:34.6530749Z         
2026-04-15T01:01:34.6533816Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69dee082353adec06335dfdf/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-15T01:01:34.6536121Z         
2026-04-15T01:01:34.6536883Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-15T01:01:34.6538117Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-15T01:01:34.6539280Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-15T01:01:34.6539856Z         
2026-04-15T01:01:34.6540385Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.97s)
```

- 2026-04-16 PASS 6 minutes
- 2026-04-17 PASS 8 minutes
- 2026-04-18 PASS 8 minutes
- 2026-04-19: MISSING
- 2026-04-20

### Error 2026-04-20T01:01:43+00:00
```
2026-04-20T01:01:43.1661840Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-20T01:01:43.1670810Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-20T01:01:43.1702364Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-20T01:01:43.1702949Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-04-20T01:01:43.1703345Z         
2026-04-20T01:01:43.1705421Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e57807d4c388c612b335aa/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-20T01:01:43.1706857Z         
2026-04-20T01:01:43.1707241Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-20T01:01:43.1707971Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-20T01:01:43.1708668Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-20T01:01:43.1709025Z         
2026-04-20T01:01:43.1711443Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.63s)
```

- 2026-04-21

### Error 2026-04-21T00:59:45+00:00
```
2026-04-21T00:59:45.6095136Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-21T00:59:45.6105435Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-21T00:59:45.6133049Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-21T00:59:45.6135314Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-04-21T00:59:45.6136005Z         
2026-04-21T00:59:45.6139240Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e6c977aa6b8d91416550ff/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-21T00:59:45.6141506Z         
2026-04-21T00:59:45.6141933Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-21T00:59:45.6142709Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-21T00:59:45.6143469Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-21T00:59:45.6143860Z         
2026-04-21T00:59:45.6172742Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (2.21s)
```

- 2026-04-22

### Error 2026-04-22T01:27:07+00:00
```
2026-04-22T01:27:07.0607441Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-22T01:27:07.0617891Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-22T01:27:07.0662470Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-22T01:27:07.0663163Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-04-22T01:27:07.0663638Z         
2026-04-22T01:27:07.0666070Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a44a8d803e1612f154f/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-22T01:27:07.0667664Z         
2026-04-22T01:27:07.0668253Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-22T01:27:07.0669159Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-22T01:27:07.0670015Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-22T01:27:07.0670442Z         
2026-04-22T01:27:07.0691512Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (2.07s)
```

- 2026-04-23 PASS 6 minutes
- 2026-04-24 PASS 6 minutes
- 2026-04-25 PASS 5 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 6 minutes
- 2026-04-28 PASS 6 minutes
- 2026-04-29

### Error 2026-04-29T01:07:45+00:00
```
2026-04-29T01:07:45.3920537Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-29T01:07:45.3936370Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-29T01:07:45.3990503Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-29T01:07:45.3991651Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-04-29T01:07:45.3992557Z         
2026-04-29T01:07:45.3996381Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f156f3b52eb69b22d14c03/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-29T01:07:45.3998250Z         
2026-04-29T01:07:45.3998688Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-29T01:07:45.4000238Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-29T01:07:45.4001302Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-29T01:07:45.4001707Z         
2026-04-29T01:07:45.4019488Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (2.39s)
```

- 2026-04-30 PASS 7 minutes
- 2026-05-01 PASS 6 minutes
- 2026-05-02 PASS 8 minutes
- 2026-05-03: MISSING
- 2026-05-04

### Error 2026-05-04T01:07:24+00:00
```
2026-05-04T01:07:24.4446488Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-04T01:07:24.4455918Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-04T01:07:24.4519291Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-04T01:07:24.4519986Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-05-04T01:07:24.4520432Z         
2026-05-04T01:07:24.4522244Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f7ee5fc8db7e025f52db5a/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-04T01:07:24.4523517Z         
2026-05-04T01:07:24.4523907Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-04T01:07:24.4524647Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-04T01:07:24.4525459Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-04T01:07:24.4525839Z         
2026-05-04T01:07:24.4528767Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (2.11s)
```

- 2026-05-05 PASS 5 minutes
- 2026-05-06 PASS 8 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-08 06:14](#error-2026-04-08t0614030000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69d5ef3f53a6e805f2294163/privateEndpoint/endpointService | qa |  | 1.03s
[2026-04-19 01:02](#error-2026-04-19t0102120000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e426aaf6a15c960fffefcd/privateEndpoint/endpointService | qa |  | 1.10s
[2026-04-26 01:03](#error-2026-04-26t0103500000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69ed617cad2ee82a983f1375/privateEndpoint/endpointService | qa | flaky_500 | 2.04s
[2026-05-05 08:06](#error-2026-05-05t0806240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69f9a213036e3abdaa72a1b1/privateEndpoint/endpointService | qa |  | 2.08s
[2026-05-06 07:01](#error-2026-05-06t0701570000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69fae47b1954b6a279b88a99/privateEndpoint/endpointService | qa |  | 2.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - FAIL a second

### Error 2026-04-08T06:14:03+00:00
```
2026-04-08T06:14:03.4816738Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-08T06:14:03.4821138Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-08T06:14:03.4834302Z   
2026-04-08T06:14:03.4854710Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-08T06:14:03.4855296Z     resource_test.go:128: Step 1/2 error: Error running apply: exit status 1
2026-04-08T06:14:03.4855704Z         
2026-04-08T06:14:03.4857552Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69d5ef3f53a6e805f2294163/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-08T06:14:03.4858856Z         
2026-04-08T06:14:03.4859247Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-08T06:14:03.4859996Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-08T06:14:03.4860931Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-08T06:14:03.4861309Z         
2026-04-08T06:14:03.4862355Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.28s)
```

  - PASS 8 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 9 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19

### Error 2026-04-19T01:02:12+00:00
```
2026-04-19T01:02:12.4000071Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-19T01:02:12.4007731Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-19T01:02:12.4061517Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-19T01:02:12.4062090Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-04-19T01:02:12.4062488Z         
2026-04-19T01:02:12.4064322Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69e426aaf6a15c960fffefcd/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-19T01:02:12.4065610Z         
2026-04-19T01:02:12.4065987Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-19T01:02:12.4066733Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-19T01:02:12.4067568Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-19T01:02:12.4067932Z         
2026-04-19T01:02:12.4070233Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (1.96s)
```

- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 7 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26

### Error 2026-04-26T01:03:50+00:00
```
2026-04-26T01:03:50.9450069Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-26T01:03:50.9456895Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-26T01:03:50.9495980Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-04-26T01:03:50.9496436Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-04-26T01:03:50.9496748Z         
2026-04-26T01:03:50.9498128Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69ed617cad2ee82a983f1375/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-26T01:03:50.9499395Z         
2026-04-26T01:03:50.9499708Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-26T01:03:50.9500287Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-26T01:03:50.9500824Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-26T01:03:50.9501106Z         
2026-04-26T01:03:50.9501375Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (2.38s)
```

- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 7 minutes
- 2026-05-04
  - PASS 6 minutes
  - PASS 7 minutes
- 2026-05-05

### Error 2026-05-05T08:06:24+00:00
```
2026-05-05T08:06:24.3228206Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-05T08:06:24.3236538Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-05T08:06:24.3293558Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-05T08:06:24.3294307Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-05-05T08:06:24.3294728Z         
2026-05-05T08:06:24.3296891Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f9a213036e3abdaa72a1b1/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-05T08:06:24.3298538Z         
2026-05-05T08:06:24.3298946Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-05T08:06:24.3299713Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-05T08:06:24.3300435Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-05T08:06:24.3300815Z         
2026-05-05T08:06:24.3304032Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (2.84s)
```

- 2026-05-06

### Error 2026-05-06T07:01:57+00:00
```
2026-05-06T07:01:57.3770113Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-06T07:01:57.3778141Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-06T07:01:57.3810801Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-05-06T07:01:57.3811431Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-05-06T07:01:57.3811959Z         
2026-05-06T07:01:57.3813823Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69fae47b1954b6a279b88a99/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-06T07:01:57.3815062Z         
2026-05-06T07:01:57.3815469Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-06T07:01:57.3816395Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-06T07:01:57.3817117Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-06T07:01:57.3817718Z         
2026-05-06T07:01:57.3838865Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (2.82s)
```


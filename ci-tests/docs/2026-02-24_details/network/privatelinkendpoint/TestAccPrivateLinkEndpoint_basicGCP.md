# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicGCP Test Details
# Found 15 TestRuns in dev, qa from 2026-02-14 to 2026-02-24 from master branch: 1 unique tests, FAIL(x 8) PASS(x 7)
Success rate: 46.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-14 00:46](#error-2026-02-14t0046220000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/698fc3ed6ff4d57b722596a7/privateEndpoint/endpointService | dev | 1.06s
[2026-02-17 00:44](#error-2026-02-17t0044450000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6993b8803bd1e05530d2cc87/privateEndpoint/endpointService | dev | 1.03s
[2026-02-21 00:44](#error-2026-02-21t0044490000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6998fe1823648dd3abd4bcb2/privateEndpoint/endpointService | dev | 1.00s
[2026-02-23 00:49](#error-2026-02-23t0049340000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699ba1a88decccf9757c6b75/privateEndpoint/endpointService | dev | 1.10s
[2026-02-24 00:44](#error-2026-02-24t0044220000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699cf2a78dfec41eaa84abec/privateEndpoint/endpointService | dev | 1.02s

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
2026-02-14T00:46:22.7129074Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-02-14T00:46:22.7133580Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-02-14T00:46:22.7148542Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-02-14T00:46:22.7149370Z     resource_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-02-14T00:46:22.7150138Z         
2026-02-14T00:46:22.7153524Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698fc3ed6ff4d57b722596a7/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-14T00:46:22.7154914Z         
2026-02-14T00:46:22.7155320Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-14T00:46:22.7156083Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-14T00:46:22.7157031Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-14T00:46:22.7157407Z         
2026-02-14T00:46:22.7157700Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (1.63s)
```

- 2026-02-15: MISSING
- 2026-02-16 PASS 12 minutes
- 2026-02-17
  - FAIL a second

### Error 2026-02-17T00:44:45+00:00
```
2026-02-17T00:44:45.4121928Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-02-17T00:44:45.4126287Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-02-17T00:44:45.4145686Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-02-17T00:44:45.4146245Z     resource_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-02-17T00:44:45.4146664Z         
2026-02-17T00:44:45.4148644Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6993b8803bd1e05530d2cc87/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-17T00:44:45.4150100Z         
2026-02-17T00:44:45.4150486Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-17T00:44:45.4151235Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-17T00:44:45.4151949Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-17T00:44:45.4152316Z         
2026-02-17T00:44:45.4159442Z    test_name=TestAccPrivateLinkEndpoint_gcpPortMappingDisabled test_terraform_path=/home/runner/work/_temp/ea85591b-0674-4eb7-bcef-7ee2fcb46e4d/terraform
2026-02-17T00:44:45.4167464Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (1.33s)
```

  - PASS 8 minutes
  - PASS 8 minutes
- 2026-02-18 PASS 10 minutes
- 2026-02-19 PASS 11 minutes
- 2026-02-20 PASS 11 minutes
- 2026-02-21

### Error 2026-02-21T00:44:49+00:00
```
2026-02-21T00:44:49.1200208Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-02-21T00:44:49.1204569Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-02-21T00:44:49.1239032Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-02-21T00:44:49.1239578Z     resource_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-02-21T00:44:49.1239987Z         
2026-02-21T00:44:49.1241835Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6998fe1823648dd3abd4bcb2/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-21T00:44:49.1243149Z         
2026-02-21T00:44:49.1243534Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-21T00:44:49.1244285Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-21T00:44:49.1244994Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-21T00:44:49.1245534Z         
2026-02-21T00:44:49.1246357Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (1.02s)
```

- 2026-02-22: MISSING
- 2026-02-23

### Error 2026-02-23T00:49:34+00:00
```
2026-02-23T00:49:34.8635734Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-02-23T00:49:34.8640526Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-02-23T00:49:34.8655018Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-02-23T00:49:34.8655580Z     resource_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-02-23T00:49:34.8656005Z         
2026-02-23T00:49:34.8657809Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699ba1a88decccf9757c6b75/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-23T00:49:34.8659243Z         
2026-02-23T00:49:34.8659637Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-23T00:49:34.8660375Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-23T00:49:34.8661075Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-23T00:49:34.8661445Z         
2026-02-23T00:49:34.8661737Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (1.98s)
```

- 2026-02-24

### Error 2026-02-24T00:44:22+00:00
```
2026-02-24T00:44:22.7137889Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-02-24T00:44:22.7144663Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-02-24T00:44:22.7200173Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-02-24T00:44:22.7200730Z     resource_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:44:22.7201123Z         
2026-02-24T00:44:22.7203211Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a78dfec41eaa84abec/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-24T00:44:22.7204509Z         
2026-02-24T00:44:22.7204932Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-24T00:44:22.7205761Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-24T00:44:22.7206523Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-24T00:44:22.7206881Z         
2026-02-24T00:44:22.7208247Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (1.23s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 00:53](#error-2026-02-15t0053390000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6991161dcef188b1a5720703/privateEndpoint/endpointService | qa | 1.03s
[2026-02-17 17:57](#error-2026-02-17t1757330000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6994a922b4a0c5c651dd167c/privateEndpoint/endpointService | qa | 1.02s
[2026-02-22 00:51](#error-2026-02-22t0051240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699a501662519b89146809c8/privateEndpoint/endpointService | qa | 1.03s

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
- 2026-02-15

### Error 2026-02-15T00:53:39+00:00
```
2026-02-15T00:53:39.9467383Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-02-15T00:53:39.9473791Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-02-15T00:53:39.9507211Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-02-15T00:53:39.9507740Z     resource_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-02-15T00:53:39.9508150Z         
2026-02-15T00:53:39.9509992Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6991161dcef188b1a5720703/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-15T00:53:39.9511436Z         
2026-02-15T00:53:39.9511825Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-15T00:53:39.9512680Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-15T00:53:39.9513420Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-15T00:53:39.9513787Z         
2026-02-15T00:53:39.9514726Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (1.30s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - PASS 11 minutes
  - FAIL a second

### Error 2026-02-17T17:57:33+00:00
```
2026-02-17T17:57:33.6528575Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-02-17T17:57:33.6533157Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-02-17T17:57:33.6566381Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-02-17T17:57:33.6566903Z     resource_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-02-17T17:57:33.6567293Z         
2026-02-17T17:57:33.6568988Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6994a922b4a0c5c651dd167c/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-17T17:57:33.6570205Z         
2026-02-17T17:57:33.6570573Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-17T17:57:33.6571372Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-17T17:57:33.6572200Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-17T17:57:33.6572554Z         
2026-02-17T17:57:33.6573319Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (1.19s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T00:51:24+00:00
```
2026-02-22T00:51:24.7929863Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-02-22T00:51:24.7933993Z === CONT  TestAccPrivateLinkEndpoint_basicGCP
2026-02-22T00:51:24.7969972Z === NAME  TestAccPrivateLinkEndpoint_basicGCP
2026-02-22T00:51:24.7970499Z     resource_test.go:85: Step 1/2 error: Error running apply: exit status 1
2026-02-22T00:51:24.7970911Z         
2026-02-22T00:51:24.7972672Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/699a501662519b89146809c8/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-22T00:51:24.7974054Z         
2026-02-22T00:51:24.7974430Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-22T00:51:24.7975156Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-22T00:51:24.7975848Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-22T00:51:24.7976205Z         
2026-02-22T00:51:24.7977251Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (1.30s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
